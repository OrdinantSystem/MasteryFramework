import katex from "katex";
import { mathOptions } from "../src/lib/math-options.mjs";
import assert from "node:assert/strict";
import { multiply } from "../src/lib/geometry.ts";
import {
  apply2,
  determinant2,
  determinantEquation,
  matrixGeometry,
} from "../src/lib/interactive/matrix-geometry.ts";
const I = [
    [1, 0],
    [0, 1],
  ],
  negative = [
    [-1, 0],
    [0, -1],
  ],
  R = [
    [1, 1],
    [0, 1],
  ],
  L = [
    [1, 0],
    [1, 1],
  ],
  H = [
    [1, -2],
    [0, 1],
  ],
  S = [
    [1, -1],
    [0, 1],
  ];
assert.deepEqual(multiply(R, R), [
  [1, 2],
  [0, 1],
]);
assert.deepEqual(multiply(multiply(multiply(H, L), H), L), negative);
assert.deepEqual(
  multiply(multiply(multiply(multiply(multiply(S, S), L), S), S), L),
  negative,
);
assert.deepEqual(multiply(multiply(S, L), S), [
  [0, -1],
  [1, 0],
]);
const M = L,
  N = H,
  A = [
    [1, 2],
    [-1, -1],
  ];
assert.deepEqual(multiply(multiply(M, A), N), I);
assert.deepEqual(multiply(A, multiply(N, M)), I);
assert.deepEqual(multiply(multiply(N, M), A), I);
assert.notDeepEqual(multiply(N, M), multiply(M, N));
assert.deepEqual(
  multiply(
    [
      [1, 2],
      [0, 1],
    ],
    [
      [1, 0],
      [3, 1],
    ],
  ),
  [
    [7, 2],
    [3, 1],
  ],
);
function operation(a, side, i, j, k) {
  const b = a.map((row) => [...row]);
  if (side === "row") b[i] = b[i].map((x, c) => x + k * a[j][c]);
  else for (let r = 0; r < 2; r++) b[r][i] += k * a[r][j];
  return b;
}
for (const [a, b] of [
  [2, 3],
  [6, 7],
]) {
  let m = [
    [a, 0],
    [0, b],
  ];
  const original = a * b;
  for (const op of [
    ["column", 0, 1, 1],
    ["row", 1, 0, -1],
    ["row", 0, 1, -(a - 1)],
    ["column", 1, 0, (a - 1) * b],
    ["row", 1, 0, -1],
  ]) {
    m = operation(m, ...op);
    assert.equal(determinant2(m), original);
  }
  assert.deepEqual(m, [
    [1, 0],
    [0, original],
  ]);
}
let stage = I;
const expected = [
  L,
  [
    [1, -2],
    [1, -1],
  ],
  [
    [-1, -2],
    [0, -1],
  ],
  negative,
];
[
  ["row", 1, 0, 1],
  ["column", 1, 0, -2],
  ["column", 0, 1, 1],
  ["row", 0, 1, -2],
].forEach((op, i) => {
  stage = operation(stage, ...op);
  assert.deepEqual(stage, expected[i]);
});
const I4=Array.from({length:4},(_,i)=>Array.from({length:4},(_,j)=>Number(i===j)));
const H13=I4.map(row=>[...row]),V31=I4.map(row=>[...row]);H13[0][2]=-1;V31[2][0]=1;
const quarter13=multiply(multiply(H13,V31),H13);
assert.deepEqual(multiply(quarter13,quarter13),[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]]);
assert.deepEqual(multiply([[1,0,0],[0,1,-3],[0,0,1]],[[1,0,0],[0,1,3],[0,0,1]]),[[1,0,0],[0,1,0],[0,0,1]]);
// Enumerate words independently of the written proof, including the equality boundary R.
const seen = new Set([JSON.stringify(I)]);
let words = [{ word: "", matrix: I }];
for (let length = 1; length <= 9; length++) {
  const next = [];
  for (const { word, matrix } of words)
    for (const [letter, factor] of [
      ["R", R],
      ["L", L],
    ]) {
      const product = multiply(matrix, factor),
        key = JSON.stringify(product);
      assert.ok(!seen.has(key), `Duplicate R/L product: ${word + letter}`);
      seen.add(key);
      assert.equal(product[0][0] <= product[0][1], letter === "R");
      assert.deepEqual(
        operation(
          product,
          "column",
          letter === "R" ? 1 : 0,
          letter === "R" ? 0 : 1,
          -1,
        ),
        matrix,
      );
      next.push({ word: word + letter, matrix: product });
    }
  words = next;
}
for (const a of [
  I,
  [
    [1, 0],
    [0, 2],
  ],
  [
    [1, 0],
    [0, 0],
  ],
  [
    [1, 0],
    [0, -1],
  ],
]) {
  const u = apply2(a, [1, 0]),
    v = apply2(a, [0, 1]);
  assert.equal(u[0] * v[1] - v[0] * u[1], determinant2(a));
  assert.ok(!matrixGeometry(a).includes("NaN"));
}
assert.throws(() =>
  matrixGeometry([
    [8, 0],
    [0, 1],
  ]),
);
console.log(
  "Verified worksheet 2.1 products, both operation traces, inverse order, signed area, and 1,023 distinct R/L words including the empty word.",
);

assert.ok(
  katex
    .renderToString(
      determinantEquation([
        [1, 0],
        [0, 2],
      ]),
      mathOptions,
    )
    .includes("math-result"),
  "The determinant figure must render semantic KaTeX rather than command names as text",
);
