import {
  createPlane,
  gridMarkup,
  arrowMarkup,
  polygonPoints,
  type Vec2,
  type ColorRole,
} from "./plane.ts";
export type Matrix2 = [Vec2, Vec2];
export const determinant2 = (a: Matrix2) =>
  a[0][0] * a[1][1] - a[0][1] * a[1][0];
export const apply2 = (a: Matrix2, [x, y]: Vec2): Vec2 => [
  a[0][0] * x + a[0][1] * y,
  a[1][0] * x + a[1][1] * y,
];
export function matrixGeometry(a: Matrix2, role: ColorRole = "purple") {
  if (
    a.length !== 2 ||
    a.some((row) => row.length !== 2 || !row.every(Number.isFinite))
  )
    throw new Error("Expected a finite 2 by 2 matrix");
  const plane = createPlane(3),
    square: Vec2[] = [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 1],
    ],
    image = square.map((p) => apply2(a, p));
  if (image.some((p) => p.some((n) => Math.abs(n) > 3)))
    throw new Error("Matrix comparison exceeds its visible plane");
  return (
    gridMarkup(plane) +
    `<polygon points="${polygonPoints(square, plane)}" fill="none" stroke="var(--muted)" stroke-dasharray="4 5"/><polygon points="${polygonPoints(image, plane)}" fill="var(--${role})" fill-opacity=".12" stroke="var(--${role})" stroke-width="2.5"/>` +
    arrowMarkup([0, 0], apply2(a, [1, 0]), "accent", "u", [8, 18], plane) +
    arrowMarkup([0, 0], apply2(a, [0, 1]), "blue", "v", [-20, -12], plane)
  );
}

export const determinantEquation = (a: Matrix2) =>
  String.raw`\det A=\colResult{${determinant2(a)}}`;
