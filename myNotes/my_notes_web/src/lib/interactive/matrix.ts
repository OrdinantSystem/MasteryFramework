import { multiply } from "../geometry.ts";
export const DEFAULT_LEFT = [
  [3, 2],
  [7, -5],
  [-1, 11],
];
export const DEFAULT_RIGHT = [
  [1, 1, 1],
  [3, -2, 4],
];
export function matrixCellEquation(
  a: number[][],
  b: number[][],
  i: number,
  j: number,
) {
  const c = multiply(a, b),
    n = (x: number) => (x < 0 ? `(${x})` : String(x));
  if (
    !Number.isInteger(i) ||
    !Number.isInteger(j) ||
    !c[i] ||
    j < 0 ||
    j >= c[0].length
  )
    throw new Error("Invalid matrix cell");
  const terms = a[i]
    .map((x, k) => `\\colA{${n(x)}}\\cdot\\colB{${n(b[k][j])}}`)
    .join("+");
  return `\\colResult{(AB)_{${i + 1},${j + 1}}}=${terms}=\\colResult{${c[i][j]}}`;
}
