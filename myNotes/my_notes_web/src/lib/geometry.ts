export type Point = [number, number];
export const combine = (a: number, b: number): Point => [2 * a - b, a + 2 * b];
export const rotate = (n: number, [x, y]: Point = [2, 1]): Point => {
  const k = ((n % 4) + 4) % 4;
  return (
    [
      [x, y],
      [-y, x],
      [-x, -y],
      [y, -x],
    ] as Point[]
  )[k];
};
export const shear = (t: number, [x, y]: Point): Point => [x + t * y, y];
export const multiply = (a: number[][], b: number[][]): number[][] => {
  for (const matrix of [a, b])
    if (
      !Array.isArray(matrix) ||
      !matrix.length ||
      !Array.isArray(matrix[0]) ||
      !matrix[0].length ||
      matrix.some(
        (row) =>
          !Array.isArray(row) ||
          row.length !== matrix[0].length ||
          !row.every(Number.isFinite),
      )
    )
      throw new Error("Expected a nonempty rectangular finite matrix");
  if (a[0].length !== b.length) throw new Error("Incompatible dimensions");
  return a.map((row) =>
    b[0].map((_, j) => row.reduce((sum, x, k) => sum + x * b[k][j], 0)),
  );
};

export function graph(
  kind: string,
  a = 1,
  b = 1,
  description = "Vector diagram",
): string {
  const scale = kind === "rank" ? 8 : 6;
  const unit = 190 / scale;
  const p = ([x, y]: Point) => `${300 + x * unit},${220 - y * unit}`;
  const line = (u: Point, v: Point, color: string, dashed = false) =>
    `<line x1="${300 + u[0] * unit}" y1="${220 - u[1] * unit}" x2="${300 + v[0] * unit}" y2="${220 - v[1] * unit}" stroke="var(--${color})" stroke-width="3" ${dashed ? 'stroke-dasharray="5 5"' : ""}/>`;
  const arrow = (
    v: Point,
    color: string,
    label: string,
    from: Point = [0, 0],
  ) => {
    const dx = v[0] - from[0],
      dy = v[1] - from[1];
    const l = Math.hypot(dx, dy);
    const tip: Point = l ? [v[0] - (dx / l) * 0.24, v[1] - (dy / l) * 0.24] : v;
    const wing1: Point = [
      tip[0] - (dy / (l || 1)) * 0.12,
      tip[1] + (dx / (l || 1)) * 0.12,
    ];
    const wing2: Point = [
      tip[0] + (dy / (l || 1)) * 0.12,
      tip[1] - (dx / (l || 1)) * 0.12,
    ];
    return `${line(from, v, color)}<polygon points="${p(v)} ${p(wing1)} ${p(wing2)}" fill="var(--${color})"/><circle cx="${300 + v[0] * unit}" cy="${220 - v[1] * unit}" r="3" fill="var(--${color})"/><text x="${310 + v[0] * unit}" y="${211 - v[1] * unit}" fill="var(--${color})" font-size="15" font-weight="600">${label}</text>`;
  };
  let grid = "";
  for (let i = -scale; i <= scale; i++) {
    grid += `<line x1="${300 + i * unit}" y1="25" x2="${300 + i * unit}" y2="415" stroke="var(--grid)"/><line x1="70" y1="${220 + i * unit}" x2="530" y2="${220 + i * unit}" stroke="var(--grid)"/>`;
    if (i !== 0 && i % 2 === 0)
      grid += `<text x="${300 + i * unit}" y="239" text-anchor="middle" font-size="11" fill="var(--muted)">${i}</text>`;
  }
  let shapes = "";
  if (kind === "vectors") {
    const v = combine(a, b);
    shapes = `<polygon points="${p([0, 0])} ${p([2 * a, a])} ${p(v)} ${p([-b, 2 * b])}" fill="var(--accent)" opacity=".06"/>`;
    shapes +=
      line([2 * a, a], v, "blue", true) + line([-b, 2 * b], v, "accent", true);
    shapes +=
      arrow([2 * a, a], "accent", "a · a₁") +
      arrow([-b, 2 * b], "blue", "b · a₂") +
      arrow(v, "purple", "Ax");
  } else if (kind === "rank") {
    if (a === 0) shapes += line([-2.5, -7.5], [2.5, 7.5], "purple", true);
    else
      shapes += `<rect x="70" y="25" width="460" height="390" fill="var(--accent)" opacity=".05"/>`;
    shapes +=
      arrow([1, 3], "accent", "a₁") +
      arrow(a === 0 ? [2, 6] : [4, 1], "blue", "a₂");
  } else if (kind === "rotation") {
    const v = rotate(a);
    shapes +=
      arrow([2, 1], "muted", "x") +
      `<circle cx="300" cy="220" r="${Math.sqrt(5) * unit}" fill="none" stroke="var(--grid)" stroke-dasharray="4 6"/>` +
      arrow(v, "accent", `J${["⁰", "¹", "²", "³", "⁴"][a] || ""}x`);
  } else if (kind === "shear") {
    const points: Point[] = [
      [0, 0],
      [2, 0],
      [2, 2],
      [0, 2],
    ];
    shapes += `<polygon points="${points.map(p).join(" ")}" fill="none" stroke="var(--muted)" stroke-dasharray="5 5" stroke-width="2"/>`;
    shapes += `<polygon points="${points.map((v) => p(shear(a, v))).join(" ")}" fill="var(--accent)" fill-opacity=".12" stroke="var(--accent)" stroke-width="2.5"/>`;
    shapes += arrow(shear(a, [0, 2]), "blue", "Aₜ(0, 2)");
  }
  return `<svg viewBox="0 0 600 445" role="img" aria-label="${description}" xmlns="http://www.w3.org/2000/svg">${grid}<line x1="65" y1="220" x2="540" y2="220" stroke="var(--axis)"/><line x1="300" y1="420" x2="300" y2="20" stroke="var(--axis)"/><text x="547" y="225" fill="var(--muted)" font-size="13">x</text><text x="308" y="22" fill="var(--muted)" font-size="13">y</text><text x="286" y="237" fill="var(--muted)" font-size="11">0</text>${shapes}</svg>`;
}
