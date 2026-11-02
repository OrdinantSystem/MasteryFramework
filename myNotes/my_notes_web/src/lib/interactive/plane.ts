/** Reusable, server-safe SVG primitives. Coordinates are mathematical (y up). */
export type Vec2 = [number, number];
export type ColorRole =
  "accent" | "blue" | "purple" | "coral" | "cyan" | "muted";
export interface Plane {
  extent: number;
  unit: number;
}
export const createPlane = (extent = 6): Plane => {
  if (!Number.isInteger(extent) || extent < 2 || extent > 20)
    throw new Error("Plane extent must be an integer from 2 to 20");
  return { extent, unit: 168 / extent };
};
export const DEFAULT_PLANE = createPlane();
export const toScreen = ([x, y]: Vec2, plane = DEFAULT_PLANE): Vec2 => [
  320 + x * plane.unit,
  202 - y * plane.unit,
];
export const fromScreen = ([x, y]: Vec2, plane = DEFAULT_PLANE): Vec2 => [
  (x - 320) / plane.unit,
  (202 - y) / plane.unit,
];
export const number = (x: number) =>
  String(Object.is(x, -0) ? 0 : Number(x.toFixed(6)));
export const escapeSvg = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
      })[c]!,
  );
export function assertPoint(p: Vec2) {
  if (!Array.isArray(p) || p.length !== 2 || !p.every(Number.isFinite))
    throw new Error("Expected two finite coordinates");
}
export function gridMarkup(plane = DEFAULT_PLANE) {
  let grid = "";
  const tick = Math.max(1, Math.ceil(plane.extent / 6));
  for (let i = -plane.extent; i <= plane.extent; i++) {
    const [x, y] = toScreen([i, i], plane);
    grid += `<path d="M${x} 22V382M130 ${y}H510" stroke="var(--grid)" fill="none"/>`;
    if (i && i % (2 * tick) === 0)
      grid += `<text x="${x}" y="221" text-anchor="middle" fill="var(--muted)" font-size="11">${i}</text>`;
  }
  return `${grid}<path d="M124 202H520M320 386V18" stroke="var(--axis)" fill="none"/><g fill="var(--muted)" font-size="12"><text x="527" y="207">x</text><text x="329" y="22">y</text><text x="304" y="220">0</text></g>`;
}
export function arrowMarkup(
  from: Vec2,
  to: Vec2,
  color: ColorRole,
  label: string,
  offset: Vec2 = [10, -10],
  plane = DEFAULT_PLANE,
) {
  assertPoint(from);
  assertPoint(to);
  const a = toScreen(from, plane),
    b = toScreen(to, plane),
    dx = b[0] - a[0],
    dy = b[1] - a[1],
    length = Math.hypot(dx, dy),
    text = escapeSvg(label);
  if (length < 0.01)
    return `<text x="${b[0] + offset[0]}" y="${b[1] + offset[1]}" fill="var(--${color})" font-size="13">${text} = 0</text>`;
  const ux = dx / length,
    uy = dy / length;
  return `<path d="M${a}L${b}" stroke="var(--${color})" stroke-width="2.7" fill="none"/><path d="M${b}L${b[0] - ux * 10 - uy * 4},${b[1] - uy * 10 + ux * 4}L${b[0] - ux * 10 + uy * 4},${b[1] - uy * 10 - ux * 4}Z" fill="var(--${color})"/><text x="${b[0] + offset[0]}" y="${b[1] + offset[1]}" fill="var(--${color})" font-size="14" font-weight="600">${text}</text>`;
}
export const polygonPoints = (ps: Vec2[], plane = DEFAULT_PLANE) =>
  ps.map((p) => toScreen(p, plane).join(",")).join(" ");
export const guideMarkup = (a: Vec2, b: Vec2, plane = DEFAULT_PLANE) =>
  `<path d="M${toScreen(a, plane)}L${toScreen(b, plane)}" stroke="var(--muted)" stroke-dasharray="4 5" fill="none"/>`;
/** Clip a line through a nonzero direction to the square visible domain. */
export function lineThroughOrigin(
  v: Vec2,
  plane = DEFAULT_PLANE,
): [Vec2, Vec2] {
  const m = Math.max(Math.abs(v[0]), Math.abs(v[1]));
  if (!m) throw new Error("A line needs a nonzero direction");
  const end: Vec2 = [(v[0] * plane.extent) / m, (v[1] * plane.extent) / m];
  return [[-end[0] || 0, -end[1] || 0], end];
}
