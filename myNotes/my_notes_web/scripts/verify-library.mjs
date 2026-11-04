import {locales} from '../src/lib/i18n.ts';
import assert from "node:assert/strict";
import katex from "katex";
import { mathOptions } from "../src/lib/math-options.mjs";
import { vectorPresets } from "../src/lib/interactive/vector-scenarios.ts";
import {
  initialLab,
  validateScenario,
  coefficients,
  setContext,
  moveHandle,
  sum,
  equal,
  targetInSpan,
  sceneMarkup,
  equation,
  det,
} from "../src/lib/interactive/vector-model.ts";
import {
  createPlane,
  toScreen,
  fromScreen,
  arrowMarkup,
  lineThroughOrigin,
} from "../src/lib/interactive/plane.ts";
import { matrixCellEquation } from "../src/lib/interactive/matrix.ts";
import { multiply } from "../src/lib/geometry.ts";
import { labCopy } from "../src/lib/interactive/vector-copy.ts";
for (const preset of Object.values(vectorPresets)) {
  validateScenario(preset);
  const state = initialLab(preset),
    second = initialLab(preset);
  state.v[0] = 9;
  assert.notEqual(second.v[0], 9, "Instances must not share state");
  const s = initialLab(preset);
  if (s.kind === "combination") {
    const ab = coefficients(s.u, s.v, preset.target);
    moveHandle(s, "result", preset.target);
    assert.ok(equal(sum(s), preset.target));
    assert.ok(equal([s.a, s.b], ab));
    for (const locale of locales)
      assert.ok(!JSON.stringify(labCopy(locale, s)).match(/\{\w+\}/));
    setContext(s, "dependent");
    assert.ok(!targetInSpan(s));
    moveHandle(s, "result", [5, -5]);
    assert.ok(Math.abs(det(s.u, sum(s))) < 1e-8);
    assert.ok(!sceneMarkup(s).includes("NaN"));
  } else {
    setContext(s, "dependent");
    assert.equal(det(s.u, s.v), 0);
  }
  katex.renderToString(equation(s), mathOptions);
}
const variant = structuredClone(vectorPresets["coordinate-basis"]);
variant.id = "expanded-plane";
variant.extent = 8;
const vp = createPlane(4),
  p = [1, 2];
assert.ok(equal(fromScreen(toScreen(p, vp), vp), p));
validateScenario(variant);
for (const mutation of [
  (s) => {
    s.target = [3, 4];
  },
  (s) => {
    s.initial.u = [0, 0];
  },
  (s) => {
    s.coefficients.step = 0;
  },
  (s) => {
    s.dependent.v = [0, 1];
  },
  (s) => {
    s.column.max = Infinity;
  },
  (s) => {
    s.extent = 1;
  },
  (s) => {
    s.initial.a = 0.123;
  },
]) {
  const bad = structuredClone(variant);
  mutation(bad);
  assert.throws(() => validateScenario(bad));
}
assert.deepEqual(lineThroughOrigin([0, 2]), [
  [0, -6],
  [0, 6],
]);
assert.ok(
  !arrowMarkup([0, 0], [1, 2], "accent", "<script>").includes("<script>"),
);
// A reachable target in the dependent context must not be called impossible.
const reachable = structuredClone(vectorPresets["coordinate-basis"]);
reachable.target = [1, 0];
const dependent = initialLab(reachable);
setContext(dependent, "dependent");
assert.ok(targetInSpan(dependent));
moveHandle(dependent, "result", [1, 0]);
assert.ok(equal(sum(dependent), [1, 0]));
const otherRank = structuredClone(vectorPresets["rank-collapse"]);
otherRank.initial.u = [1, 1];
otherRank.initial.v = [-1, 1];
otherRank.dependent = { u: [1, 1], v: [2, 2] };
const diagonal = initialLab(otherRank);
setContext(diagonal, "dependent");
assert.equal(det(diagonal.u, diagonal.v), 0);
const left = [
    [1, 2, 3],
    [0, -1, 2],
  ],
  right = [
    [1, 0],
    [2, 1],
    [0, 3],
  ];
assert.deepEqual(multiply(left, right), [
  [5, 11],
  [-2, 5],
]);
assert.ok(matrixCellEquation(left, right, 0, 1).includes("\\colResult{11}"));
katex.renderToString(matrixCellEquation(left, right, 0, 1), mathOptions);
for (const bad of [[], [[1], [2, 3]], [[NaN]]])
  assert.throws(() => multiply(bad, [[1]]));
assert.throws(() => matrixCellEquation(left, right, 99, 0));
console.log(
  `Verified ${Object.keys(vectorPresets).length} reusable vector presets, isolation, invalid configurations, SVG primitives, and arbitrary matrix products.`,
);

// Independent rotation outcomes, preserved length, snapping, and the atan2 seam.
const {rotation, snapAngle, draggedAngle, rotationEquation} = await import('../src/lib/interactive/rotation.ts');
for (const [angle,expected] of [[0,[2,1]],[90,[-1,2]],[180,[-2,-1]],[270,[1,-2]],[360,[2,1]]]) {
  assert.deepEqual(rotation(angle).point,expected);
  assert.equal(rotation(angle).power,angle/90);
  katex.renderToString(rotationEquation(angle),mathOptions);
}
for (const angle of [1,37,135,229,359]) {
  const {point,c,s,power}=rotation(angle);
  assert.ok(Math.abs(Math.hypot(...point)-Math.sqrt(5))<1e-10);
  assert.ok(Math.abs(c*c+s*s-1)<1e-10);
  assert.equal(power,null);
  katex.renderToString(rotationEquation(angle),mathOptions);
}
assert.equal(snapAngle(44),0); assert.equal(snapAngle(46),90);
assert.equal(snapAngle(359),360);
assert.equal(draggedAngle(150,179,-179),152);
assert.equal(draggedAngle(150,-179,179),148);
assert.equal(draggedAngle(359,0,10),360);
assert.equal(draggedAngle(1,0,-10),0);
