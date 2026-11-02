import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { allLessons, pages } from "../.build/render.mjs";
const tokens = JSON.parse(await readFile("design-tokens.json", "utf8"));
const ids = new Set();
let exercises = 0;
for (const lesson of allLessons) {
  assert(!ids.has(lesson.id), `Duplicate lesson: ${lesson.id}`);
  ids.add(lesson.id);
  assert(
    lesson.objectives.length >= 2 && lesson.sections.length >= 3,
    `Incomplete learning structure: ${lesson.id}`,
  );
  assert(
    lesson.question && lesson.takeaway && lesson.sourceNote,
    `Missing learning contract: ${lesson.id}`,
  );
  const sectionIds = new Set(),
    exerciseIds = new Set();
  const blocks = lesson.sections.flatMap((s) => s.blocks);
  for (const section of lesson.sections) {
    assert(!sectionIds.has(section.id));
    sectionIds.add(section.id);
  }
  assert(
    blocks.some((b) => b.type === "exercise"),
    `No independent attempt in ${lesson.id}`,
  );
  assert(
    blocks.some((b) => b.type === "example"),
    `No worked example in ${lesson.id}`,
  );
  for (const block of blocks) {
    if (block.type !== "exercise") continue;
    assert(!exerciseIds.has(block.id));
    exerciseIds.add(block.id);
    assert(
      block.question && block.answer && block.criteria.length >= 2,
      `Uncheckable exercise: ${lesson.id}`,
    );
    exercises++;
  }
  assert(ids.has(lesson.id));
}
const knownPages = new Set(pages([]).map((p) => p.id));
for (const l of allLessons)
  if (l.next) assert(knownPages.has(l.next), `Missing next lesson: ${l.next}`);
assert(
  !Object.keys(tokens.primitives).some((k) => /yellow|amber/.test(k)),
  "Excluded colors returned to the palette",
);
const luminance = (hex) => {
  const rgb = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
};
let pairs = 0;
for (const [name, theme] of Object.entries(tokens.themes)) {
  const values = { ...tokens.primitives, ...theme };
  function resolveToken(key, path = []) {
    assert(!path.includes(key), `Token cycle: ${key}`);
    assert(values[key], `Missing token: ${key}`);
    const ref = values[key].match(/^var\(--([\w-]+)\)$/);
    return ref ? resolveToken(ref[1], [...path, key]) : values[key];
  }
  for (const key of Object.keys(values)) resolveToken(key);
  const checks = [];
  for (const surface of ["canvas", "surface", "surface-raised"])
    for (const fg of ["text", "text-secondary", "action"])
      checks.push([fg, surface]);
  for (const role of [
    "connect",
    "explain",
    "compare",
    "recall",
    "warning",
    "success",
    "error",
  ]) {
    for (const bg of ["canvas", "surface", `${role}-soft`])
      checks.push([`${role}-text`, bg]);
    checks.push(["text", `${role}-soft`], ["text-secondary", `${role}-soft`]);
  }
  checks.push(["on-action", "action"], ["on-action", "action-hover"]);
  for (const [fg, bg] of checks) {
    const [lo, hi] = [
      luminance(resolveToken(fg)),
      luminance(resolveToken(bg)),
    ].sort((a, b) => a - b);
    const ratio = (hi + 0.05) / (lo + 0.05);
    assert(ratio >= 4.5, `${name}: ${fg} on ${bg} only ${ratio.toFixed(2)}:1`);
    pairs++;
  }
}
const knownTokens = new Set([
  ...Object.keys(tokens.primitives),
  ...Object.keys(tokens.layout),
  ...Object.keys(tokens.themes.light),
  "concept-text",
  "concept-soft",
  "concept-border",
]);
const css = (
  await Promise.all([
    readFile("src/styles/site.css", "utf8"),
    readFile("src/styles/visuals.css", "utf8"),
  ])
).join("\n");
assert(!/#[a-f0-9]{3,8}\b/i.test(css), "Raw color in layout stylesheet");
for (const ref of css.matchAll(/var\(--([\w-]+)/g))
  assert(knownTokens.has(ref[1]), `Unknown CSS token: ${ref[1]}`);
const manifest = JSON.parse(await readFile("dist/build-manifest.json", "utf8"));
let links = 0;
for (const id of manifest.pages) {
  const source = await readFile(`dist/${id}.html`, "utf8");
  assert.equal(
    (source.match(/<h1[ >]/g) || []).length,
    1,
    `${id}: one clear page title required`,
  );
  assert(source.includes('id="root"') && source.includes('id="page-data"'));
  assert(
    !source.includes('type="module"'),
    "Built pages must work without module loading from file URLs",
  );
  assert(!/https?:\/\/[^" ]+\.(js|css)/.test(source), "External runtime asset");
  for (const match of source.matchAll(/(?:href|src)="([^"#]+)"/g)) {
    const url = match[1];
    if (/^[a-z]+:/i.test(url)) continue;
    const path = url.split(/[?#]/)[0];
    if (!path) continue;
    await stat(resolve("dist", path));
    links++;
  }
}
console.log(
  `Checked ${allLessons.length} typed lessons, ${exercises} independent tasks, ${pairs} AA text pairs, and ${links} local asset/navigation links.`,
);

for (const name of ["sources.json", "transcripts.json"]) {
  assert.equal(
    await readFile(`dist/${name}`, "utf8"),
    await readFile(`content/${name}`, "utf8"),
    `Originals changed: ${name}`,
  );
}
const originals = JSON.parse(await readFile("content/sources.json", "utf8"));
const transcripts = JSON.parse(
  await readFile("content/transcripts.json", "utf8"),
);
assert.equal(originals.length, 19);
assert.equal(transcripts.length, 4);
console.log(
  "All 19 original documents and four transcripts preserved byte-for-byte.",
);

// These visual explanations are part of the course, not just unused components.
const visualPlacements = {
  bloom: ["bloom"],
  mapping: ["concept-map"],
  feynman: ["feynman-loop"],
  interleaving: ["practice-pattern"],
  retrieval: ["retrieval-cycle", "spacing-timeline"],
  cycle: ["learning-cycle"],
  ai: ["hint-ladder"],
  mastery: ["mastery-profile"],
  methods: ["framework-overview"],
};
for (const [lessonId, kinds] of Object.entries(visualPlacements)) {
  const html = await readFile(`dist/${lessonId}.html`, "utf8");
  for (const kind of kinds)
    assert(
      html.includes(`teaching-figure figure-${kind}`),
      `${lessonId}: missing published visual ${kind}`,
    );
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(
    new Set(ids).size,
    ids.length,
    `${lessonId}: duplicate control/section IDs`,
  );
  for (const [, target] of html.matchAll(/aria-controls="([^"]+)"/g))
    assert(
      ids.includes(target),
      `${lessonId}: missing controlled visual panel ${target}`,
    );
}
console.log(
  "Visual explanations are present on all nine relevant lessons with unique, connected control IDs.",
);
