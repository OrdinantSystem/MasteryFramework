import { readFile, readdir, access } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
import ts from "typescript";
import katex from "katex";
import { mathOptions } from "../src/lib/math-options.mjs";

const root = path.resolve("dist");
const base = (process.env.BASE_PATH || "/").replace(/\/$/, "");
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)],
    ),
  );
  return files.flat();
}
const files = await walk(root);
const pages = files.filter((p) => p.endsWith(".html"));
let links = 0;
const errors = [];
for (const page of pages) {
  const html = await readFile(page, "utf8");
  if ((html.match(/<h1[\s>]/g) || []).length !== 1)
    errors.push(`${page}: expected one h1`);
  const identifiers = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  if (new Set(identifiers).size !== identifiers.length)
    errors.push(`${page}: duplicate HTML identifiers`);
  if (html.includes("katex-error"))
    errors.push(`${page}: math rendering error`);
  for (const [, raw] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(?:https?:|data:|mailto:|tel:)/.test(raw)) continue;
    const [pathname, hash] = raw.split("#");
    const clean = decodeURIComponent(pathname.split("?")[0]);
    let target;
    if (!clean) target = page;
    else if (clean.startsWith("/")) {
      if (base && !(clean === base || clean.startsWith(base + "/"))) {
        errors.push(`${page}: escapes configured base: ${raw}`);
        continue;
      }
      target = path.join(root, clean.slice(base.length));
    } else target = path.resolve(path.dirname(page), clean);
    if (target.endsWith(path.sep) || !path.extname(target))
      target = path.join(target, "index.html");
    try {
      await access(target);
      links++;
      if (hash && target.endsWith(".html")) {
        const dest = await readFile(target, "utf8");
        if (!dest.includes(`id="${decodeURIComponent(hash)}"`))
          errors.push(`${page}: missing anchor ${raw}`);
      }
    } catch {
      errors.push(`${page}: missing local file ${raw}`);
    }
  }
}
const moduleSource = await readFile("src/lib/geometry.ts", "utf8");
const compiled = ts.transpileModule(moduleSource, {
  compilerOptions: { module: ts.ModuleKind.ESNext },
}).outputText;
const { multiply, rotate, combine, shear } = await import(
  "data:text/javascript;base64," + Buffer.from(compiled).toString("base64")
);
const A = [
    [3, 2],
    [7, -5],
    [-1, 11],
  ],
  B = [
    [1, 1, 1],
    [3, -2, 4],
  ];
assert.deepEqual(multiply(A, B), [
  [9, -1, 11],
  [-8, 17, -13],
  [32, -23, 43],
]);
assert.deepEqual(multiply(B, A), [
  [9, 8],
  [-9, 60],
]);
assert.deepEqual(multiply(B, multiply(A, B)), [
  [33, -7, 41],
  [171, -129, 231],
]);
assert.deepEqual(rotate(4), [2, 1]);
assert.deepEqual(rotate(2), [-2, -1]);
assert.deepEqual(combine(1, 1), [1, 3]);
assert.deepEqual(shear(-1, shear(1, [2, 3])), [2, 3]);
assert.throws(() => multiply([[1, 2]], [[1, 2]]));
const lab = await import("../src/lib/interactive/vector-model.ts");
const near = (a, b) => assert.ok(Math.abs(a - b) < 1e-8, `${a} != ${b}`);
for (let a = -2; a <= 2; a += 0.25)
  for (let b = -2; b <= 2; b += 0.25) {
    const state = lab.initialLab("combination");
    state.a = a;
    state.b = b;
    const output = lab.sum(state),
      solution = lab.coefficients(state.u, state.v, output);
    near(solution[0], a);
    near(solution[1], b);
    const back = lab.fromScreen(lab.toScreen(output));
    near(back[0], output[0]);
    near(back[1], output[1]);
    assert.ok(!lab.equation(state).includes("NaN"));
  }
const combination = lab.initialLab("combination");
lab.moveHandle(combination, "result", [3, 4]);
assert.ok(lab.equal(lab.sum(combination), [3, 4]));
near(combination.a, 2);
near(combination.b, 1);
lab.moveHandle(combination, "result", [3.25, 4]);
assert.ok(
  !lab.equal(lab.sum(combination), [3, 4]),
  "A keyboard-sized movement must change the output",
);
lab.setContext(combination, "dependent");
assert.equal(lab.coefficients(combination.u, combination.v, combination.scenario.target), null);
for (const p of [
  [3, 4],
  [-10, 9],
  [0, 0],
  [6, 6],
]) {
  lab.moveHandle(combination, "result", p);
  const result = lab.sum(combination);
  near(result[0], result[1]);
  assert.ok(
    combination.a >= -2 &&
      combination.a <= 2 &&
      combination.b >= -2 &&
      combination.b <= 2,
  );
}
const rankLab = lab.initialLab("rank");
assert.equal(lab.det(rankLab.u, rankLab.v), 5);
lab.moveHandle(rankLab, "column", [4, 2]);
assert.equal(lab.det(rankLab.u, rankLab.v), 0);
lab.moveHandle(rankLab, "column", [0, 0]);
assert.equal(lab.det(rankLab.u, rankLab.v), 0);
lab.moveHandle(rankLab, "column", [100, -100]);
assert.deepEqual(rankLab.v, [4, -4]);
const beforeInvalid = JSON.stringify(rankLab);
lab.moveHandle(rankLab, "column", [NaN, 2]);
assert.equal(JSON.stringify(rankLab), beforeInvalid);
for (let x = -4; x <= 4; x += 0.25)
  for (let y = -4; y <= 4; y += 0.25) {
    rankLab.v = [x, y];
    assert.equal(lab.det(rankLab.u, rankLab.v), 2 * y - x);
    assert.ok(!lab.sceneMarkup(rankLab).includes("NaN"));
  }
const tokens = await readFile("src/styles/tokens.css", "utf8");
const luminance = (hex) => {
  const values = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return values.reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
};
let contrastPairs = 0;
for (const block of tokens.split("}")) {
  const colors = Object.fromEntries(
    [...block.matchAll(/--([a-z-]+):\s*(#[a-f0-9]{6})/gi)].map((m) => [
      m[1],
      m[2],
    ]),
  );
  if (!colors.bg) continue;
  const pairs = [
    "text",
    "secondary",
    "muted",
    "accent",
    "blue",
    "purple",
    "coral",
    "cyan",
  ].flatMap((fg) => ["bg", "panel", "surface"].map((bg) => [fg, bg]));
  pairs.push(
    ["accent", "tint"],
    ["blue", "blue-tint"],
    ["blue", "tint"],
    ["purple", "purple-tint"],
    ["coral", "coral-tint"],
    ["cyan", "cyan-tint"],
  );
  for (const [fg, bg] of pairs) {
    contrastPairs++;
    const [low, high] = [luminance(colors[fg]), luminance(colors[bg])].sort(
      (a, b) => a - b,
    );
    assert.ok(
      (high + 0.05) / (low + 0.05) >= 4.5,
      `Insufficient contrast: ${fg} on ${bg}`,
    );
  }
}
assert.equal(
  contrastPairs,
  60,
  "Both themes must be checked even after CSS formatting changes",
);
for (const state of [
  combination,
  rankLab,
  lab.initialLab("combination"),
  lab.initialLab("rank"),
]) {
  assert.ok(
    !katex
      .renderToString(lab.equation(state), {
        ...mathOptions,
        displayMode: true,
      })
      .includes("katex-error"),
  );
}
const {courses}=await import('../src/lib/navigation.ts');
const courseIds=courses.map(c=>c.id);
const lessonSets = Object.fromEntries(
  await Promise.all(
    ["en", "de", "es"].map(async (locale) => {
      const entries = (await walk(`src/content/lessons/${locale}`)).map(f=>path.relative(`src/content/lessons/${locale}`,f));
      const published = [];
      for (const name of entries.filter((n) => /\.mdx?$/.test(n))) {
        const source = await readFile(
          `src/content/lessons/${locale}/${name}`,
          "utf8",
        );
        if (/^status:\s*['"]?published['"]?\s*(?:#.*)?$/m.test(source)) published.push(name);
      }
      return [locale, published.sort()];
    }),
  ),
);
assert.equal(
  pages.length,
  3 * (2 + courseIds.length + lessonSets.en.length) + 11,
  "Expected localized archive/course indexes/search/lessons, 404, library, and nine legacy redirects",
);
for (const locale of ["en", "de", "es"]) {
  const prefix = locale === "en" ? "" : `${locale}/`;
  const landing = await readFile(path.join(root, prefix, "index.html"), "utf8");
  assert.ok(
    !landing.includes("<kbd>"),
    "Decorative shortcut badge should be absent",
  );
  assert.ok(
    landing.includes('class="language-menu"'),
    "Expected themed language disclosure",
  );
  assert.ok(
    !landing.includes("Prototype · November") &&
      !landing.includes("Testausgabe · November") &&
      !landing.includes("Prototipo · Noviembre"),
    "Prototype footer should be absent",
  );
  assert.ok(
    landing.includes(`lang="${locale}"`),
    `Wrong language on ${locale} home`,
  );
  const entries = lessonSets[locale];
  assert.deepEqual(
    entries,
    lessonSets.en,
    `Published translation mismatch in ${locale}`,
  );
  assert.equal(
    (landing.match(/class="lesson-thumbnail/g) || []).length,
    courseIds.length,
    `One visual preview per published lesson in ${locale}`,
  );
  for(const course of courseIds){const overview=await readFile(path.join(root,prefix,course,"index.html"),"utf8");assert.equal((overview.match(/class="lesson-thumbnail/g)||[]).length,entries.filter(f=>course==='linear-algebra'?!f.includes('/'):f.startsWith(course+'/')).length);}
  for (const filename of entries) {
    const course=filename.includes('/')?filename.split('/')[0]:'linear-algebra';
    const key = path.basename(filename).replace(/\.mdx?$/, "");
    const html = await readFile(
      path.join(root, prefix, course==='linear-algebra'?'':course, "lessons", key, "index.html"),
      "utf8",
    );
    assert.ok(html.includes(`lang="${locale}"`));
    assert.ok(html.includes("data-pagefind-body"));
    assert.ok(
      !html.includes("/source/"),
      "Original-source links should not be public",
    );
    assert.ok(!html.includes("{{"), "Unresolved translation placeholder");
    const source = await readFile(
      `src/content/lessons/${locale}/${filename}`,
      "utf8",
    );
    const english = await readFile(
      `src/content/lessons/en/${filename}`,
      "utf8",
    );
    const normalize = (s) =>
      s
        // German and Spanish use a decimal comma; the value is unchanged.
        .replace(/(\d)\{,\}(?=\d)/g, "$1.")
        .replace(/\\text\{(?:aber|but|pero)\}/g, "TEXT")
        .replace(/\\operatorname\{(?:Bild|im)\}/g, "IMAGE")
        .replace(/\\operatorname\{(?:rang|rank|rango)\}/g, "RANK");
    const formulas = (s) =>
      [...s.matchAll(/<Math\s+tex="([^"]*)"/g)].map((m) => normalize(m[1]));
    assert.deepEqual(
      formulas(source),
      formulas(english),
      `Equation mismatch in ${locale}/${filename}`,
    );
  }
}
assert.ok(
  !files.some((f) => f.includes("/source/")),
  "Source PDF must not ship with the public build",
);
if (errors.length) throw new Error(errors.join("\n"));
console.log(
  `Verified ${pages.length} static pages, ${links} local links/assets, source matrix products, rotation cycle, inverse shear, and text contrast in both themes.`,
);
