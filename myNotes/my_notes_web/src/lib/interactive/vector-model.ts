/** Pure vector activity model. DOM controllers consume this public contract. */
import {
  vectorPresets,
  type VectorScenario,
  type Bounds,
} from "./vector-scenarios.ts";
import {
  createPlane,
  assertPoint,
  arrowMarkup,
  polygonPoints,
  guideMarkup,
  lineThroughOrigin,
  toScreen,
  number,
  type Vec2,
} from "./plane.ts";
export { toScreen, fromScreen, gridMarkup, number } from "./plane.ts";
export type { Vec2 } from "./plane.ts";
export type LabKind = "combination" | "rank";
export interface LabState {
  kind: LabKind;
  scenario: VectorScenario;
  u: Vec2;
  v: Vec2;
  a: number;
  b: number;
  view: "parallelogram" | "chain";
  context: "independent" | "dependent";
}
export const det = (u: Vec2, v: Vec2) => u[0] * v[1] - u[1] * v[0];
export const sum = (s: LabState): Vec2 => [
  s.a * s.u[0] + s.b * s.v[0],
  s.a * s.u[1] + s.b * s.v[1],
];
export function initialLab(input: LabKind | VectorScenario): LabState {
  const scenario = structuredClone(
    typeof input === "string"
      ? vectorPresets[input === "rank" ? "rank-collapse" : "linear-combination"]
      : input,
  );
  validateScenario(scenario);
  return {
    kind: scenario.kind,
    scenario,
    u: [...scenario.initial.u],
    v: [...scenario.initial.v],
    a: scenario.initial.a,
    b: scenario.initial.b,
    view: "parallelogram",
    context: "independent",
  };
}
export const snap = (n: number, min = -2, max = 2, step = 0.05) =>
  Math.min(max, Math.max(min, Math.round(n / step) * step));
export const equal = (u: Vec2, v: Vec2) =>
  Math.hypot(u[0] - v[0], u[1] - v[1]) < 1e-8;
export function coefficients(u: Vec2, v: Vec2, p: Vec2): Vec2 | null {
  const d = det(u, v);
  if (Math.abs(d) < 1e-10) return null;
  return [(p[0] * v[1] - p[1] * v[0]) / d, (u[0] * p[1] - u[1] * p[0]) / d];
}
export function setContext(s: LabState, context: LabState["context"]) {
  const basis =
    context === "independent" ? s.scenario.initial : s.scenario.dependent;
  s.context = context;
  s.u = [...basis.u];
  s.v = [...basis.v];
  s.a = s.scenario.initial.a;
  s.b = s.scenario.initial.b;
}
export const clampCoefficient = (s: LabState, n: number) =>
  snap(
    n,
    s.scenario.coefficients.min,
    s.scenario.coefficients.max,
    s.scenario.coefficients.step,
  );
export const clampColumn = (s: LabState, n: number) =>
  snap(n, s.scenario.column.min, s.scenario.column.max, s.scenario.column.step);
export const labPlane = (s: LabState) => createPlane(s.scenario.extent);
export const targetInSpan = (s: LabState) =>
  Math.abs(det(s.u, s.v)) > 1e-10 ||
  Math.abs(det(s.u, s.scenario.target)) < 1e-10;
export function moveHandle(s: LabState, handle: string, p: Vec2) {
  if (!p.every(Number.isFinite)) return;
  if (handle === "column") {
    s.v = [clampColumn(s, p[0]), clampColumn(s, p[1])];
    return;
  }
  const project = (v: Vec2) =>
    (p[0] * v[0] + p[1] * v[1]) / (v[0] * v[0] + v[1] * v[1]);
  if (handle === "a") s.a = clampCoefficient(s, project(s.u));
  else if (handle === "b") s.b = clampCoefficient(s, project(s.v));
  else {
    const result = coefficients(s.u, s.v, p);
    if (result) {
      s.a = clampCoefficient(s, result[0]);
      s.b = clampCoefficient(s, result[1]);
    } else {
      // In the dependent context the sum stays on the common line.
      const lambda = project(s.u);
      const ratio =
        (s.v[0] * s.u[0] + s.v[1] * s.u[1]) / (s.u[0] ** 2 + s.u[1] ** 2);
      const delta = lambda - s.a - ratio * s.b;
      s.a = clampCoefficient(s, s.a + delta / (1 + ratio ** 2));
      s.b = clampCoefficient(s, s.b + (ratio * delta) / (1 + ratio ** 2));
    }
  }
}
export const points = (s: LabState): Record<string, Vec2> =>
  s.kind === "rank"
    ? { column: s.v }
    : {
        a: [s.a * s.u[0], s.a * s.u[1]],
        b: [s.b * s.v[0], s.b * s.v[1]],
        result: sum(s),
      };
export function sceneMarkup(s: LabState) {
  const plane = labPlane(s);
  const poly = (ps: Vec2[]) => polygonPoints(ps, plane);
  const line = (a: Vec2, b: Vec2) => guideMarkup(a, b, plane);
  const arrow = (
    from: Vec2,
    to: Vec2,
    role: Parameters<typeof arrowMarkup>[2],
    label: string,
    offset: Vec2,
  ) => arrowMarkup(from, to, role, label, offset, plane);
  const screen = (p: Vec2) => toScreen(p, plane);
  const [lineStart, lineEnd] = lineThroughOrigin(s.u, plane);
  if (s.kind === "rank") {
    const d = det(s.u, s.v);
    const region =
      Math.abs(d) < 1e-10
        ? `<path d="M${screen(lineStart)}L${screen(lineEnd)}" stroke="var(--purple)" stroke-width="9" opacity=".12"/>`
        : `<rect x="132" y="22" width="376" height="360" fill="var(--accent)" opacity=".055"/>`;
    return (
      region +
      `<polygon points="${poly([[0, 0], s.u, [s.u[0] + s.v[0], s.u[1] + s.v[1]], s.v])}" fill="var(--purple)" opacity=".09"/>` +
      arrow([0, 0], s.u, "accent", "u", [10, 20]) +
      arrow([0, 0], s.v, "blue", "v", [-22, -12])
    );
  }
  const p = points(s),
    total = p.result;
  const target = screen(s.scenario.target);
  let shapes = `<circle cx="${target[0]}" cy="${target[1]}" r="9" fill="none" stroke="var(--coral)" stroke-dasharray="3 3"/><text x="${target[0] + 14}" y="${target[1] - 6}" fill="var(--coral)" font-size="13">T = (${s.scenario.target.map(number).join(", ")})</text>`;
  if (s.context === "dependent")
    shapes += `<path d="M${screen(lineStart)}L${screen(lineEnd)}" stroke="var(--purple)" stroke-dasharray="4 6" opacity=".5"/>`;
  if (s.view === "parallelogram") {
    shapes +=
      `<polygon points="${poly([[0, 0], p.a, total, p.b])}" fill="var(--accent)" opacity=".055"/>` +
      line(p.a, total) +
      line(p.b, total);
    shapes +=
      arrow([0, 0], p.a, "accent", "a·u", [10, 18]) +
      arrow([0, 0], p.b, "blue", "b·v", [-40, -10]);
  } else
    shapes +=
      arrow([0, 0], p.a, "accent", "a·u", [10, 18]) +
      arrow(p.a, total, "blue", "b·v", [12, 18]) +
      line([0, 0], p.b);
  return shapes + arrow([0, 0], total, "purple", "w", [-20, -28]);
}
export function equation(s: LabState) {
  const vector = (v: Vec2) => `\\binom{${number(v[0])}}{${number(v[1])}}`;
  if (s.kind === "rank")
    return `A=\\begin{pmatrix}\\colA{${number(s.u[0])}}&\\colB{${number(s.v[0])}}\\\\\\colA{${number(s.u[1])}}&\\colB{${number(s.v[1])}}\\end{pmatrix},\\quad\\det A=\\colResult{${number(det(s.u, s.v))}}`;
  return `\\colA{${number(s.a)}${vector(s.u)}}+\\colB{${number(s.b)}${vector(s.v)}}=\\colResult{${vector(sum(s))}}`;
}

/** Reject misleading or unusable presets before they reach a lesson. */
export function validateScenario(s: VectorScenario) {
  if (
    !/^[a-z][a-z0-9-]*$/.test(s.id) ||
    !["combination", "rank"].includes(s.kind)
  )
    throw new Error("Invalid vector scenario identity");
  createPlane(s.extent);
  const aligned = (n: number, b: Bounds) =>
    Math.abs(n / b.step - Math.round(n / b.step)) < 1e-8;
  const within = (n: number, b: Bounds) =>
    Number.isFinite(n) && n >= b.min && n <= b.max && aligned(n, b);
  for (const bounds of [s.coefficients, s.column]) {
    if (
      ![bounds.min, bounds.max, bounds.step].every(Number.isFinite) ||
      bounds.min >= bounds.max ||
      bounds.min > 0 ||
      bounds.max < 0 ||
      bounds.step < 0.01 ||
      !aligned(bounds.min, bounds) ||
      !aligned(bounds.max, bounds) ||
      Math.abs(bounds.step * 100 - Math.round(bounds.step * 100)) > 1e-8
    )
      throw new Error(
        "Invalid bounds or step (use at most two decimal places)",
      );
  }
  for (const basis of [s.initial, s.dependent]) {
    for (const v of [basis.u, basis.v]) {
      assertPoint(v);
      if (equal(v, [0, 0])) throw new Error("Basis directions must be nonzero");
    }
    if (s.kind === "combination") {
      for (const a of [s.coefficients.min, s.coefficients.max])
        for (const b of [s.coefficients.min, s.coefficients.max])
          if (
            [0, 1].some(
              (i) =>
                Math.abs(a * basis.u[i] + b * basis.v[i]) > s.extent + 1e-8,
            )
          )
            throw new Error("Combination bounds exceed the visible plane");
    } else {
      for (const n of basis.v)
        if (!within(n, s.column))
          throw new Error("Column preset is off the permitted grid");
      if (
        basis.u.some(
          (n) =>
            Math.abs(n) +
              Math.max(Math.abs(s.column.min), Math.abs(s.column.max)) >
            s.extent,
        )
      )
        throw new Error("Column bounds exceed the visible plane");
    }
  }
  if (
    Math.abs(det(s.initial.u, s.initial.v)) < 1e-10 ||
    Math.abs(det(s.dependent.u, s.dependent.v)) > 1e-10
  )
    throw new Error(
      "Contexts must start independent and dependent respectively",
    );
  if (s.kind === "rank" && !equal(s.initial.u, s.dependent.u))
    throw new Error("Rank activities keep the first column fixed");
  if (
    !within(s.initial.a, s.coefficients) ||
    !within(s.initial.b, s.coefficients)
  )
    throw new Error("Initial coefficients must match their bounds and step");
  assertPoint(s.target);
  if (s.target.some((n) => Math.abs(n) > s.extent))
    throw new Error("Target exceeds the visible plane");
  if (s.kind === "combination") {
    const solution = coefficients(s.initial.u, s.initial.v, s.target)!;
    if (!solution.every((n) => within(n, s.coefficients)))
      throw new Error(
        "Target must be reachable on the independent coefficient grid",
      );
  }
}
