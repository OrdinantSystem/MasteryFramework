/** Public pure modules. Import Astro views separately to avoid unrelated browser code. */
export * from "./plane.ts";
export * from "./vector-scenarios.ts";
export {
  initialLab,
  validateScenario,
  coefficients,
  det,
  sum,
  points,
  moveHandle,
  setContext,
  targetInSpan,
  equation,
  sceneMarkup,
} from "./vector-model.ts";
export { matrixCellEquation, DEFAULT_LEFT, DEFAULT_RIGHT } from "./matrix.ts";

export {
  matrixGeometry,
  determinant2,
  apply2,
  determinantEquation,
  type Matrix2,
} from "./matrix-geometry.ts";
