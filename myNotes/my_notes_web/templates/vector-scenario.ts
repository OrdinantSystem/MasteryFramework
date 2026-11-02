/** Copy into src/lib/interactive/vector-scenarios.ts as a named preset. */
import type { VectorScenario } from "../src/lib/interactive/vector-scenarios";
export const scenario = {
  id: "new-vector-example",
  kind: "combination",
  initial: { u: [1, 0], v: [0, 1], a: 1, b: 1 },
  dependent: { u: [1, 0], v: [2, 0] },
  target: [1, 2],
  coefficients: { min: -2, max: 2, step: 0.05 },
  column: { min: -4, max: 4, step: 0.25 },
  extent: 6,
} satisfies VectorScenario;
