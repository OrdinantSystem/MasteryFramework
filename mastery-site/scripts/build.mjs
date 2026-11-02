import { build } from "esbuild";
import { mkdir, readFile, writeFile, rm, cp } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
process.chdir(root);
await mkdir(".build", { recursive: true });
await build({
  entryPoints: ["src/render.tsx"],
  outfile: ".build/render.mjs",
  bundle: true,
  platform: "node",
  format: "esm",
  packages: "external",
  jsx: "automatic",
  define: { "process.env.NODE_ENV": '"production"' },
});
const { pages, render } = await import(
  `${root}/.build/render.mjs?build=${Date.now()}`
);
const tokens = JSON.parse(await readFile("design-tokens.json", "utf8"));
const block = (selector, values) =>
  `${selector}{${Object.entries(values)
    .map(([k, v]) => `--${k}:${v};`)
    .join("")}}`;
const tokenCss =
  block(":root", { ...tokens.primitives, ...tokens.layout }) +
  block(':root,html[data-theme="light"]', tokens.themes.light) +
  block('html[data-theme="dark"]', tokens.themes.dark) +
  'html{color-scheme:light}html[data-theme="dark"]{color-scheme:dark}@media print{' +
  block(":root,html[data-theme]", tokens.themes.light) +
  "html[data-theme]{color-scheme:light}}";
const styles = (
  await Promise.all([
    readFile("src/styles/site.css", "utf8"),
    readFile("src/styles/visuals.css", "utf8"),
  ])
).join("\n");
const originals = JSON.parse(await readFile("content/sources.json", "utf8"));
const transcripts = JSON.parse(
  await readFile("content/transcripts.json", "utf8"),
);
// Only generated output is replaced. Authoring source and the archived edition stay intact.
await rm("dist", { recursive: true, force: true });
await mkdir("dist/assets", { recursive: true });
await Promise.all([
  writeFile("dist/assets/tokens.css", tokenCss),
  writeFile("dist/assets/site.css", styles),
  cp("legacy/dist", "dist/archive", { recursive: true }),
  cp("content/sources.json", "dist/sources.json"),
  cp("content/transcripts.json", "dist/transcripts.json"),
  build({
    entryPoints: ["src/client.tsx"],
    outfile: "dist/assets/app.js",
    bundle: true,
    platform: "browser",
    format: "iife",
    jsx: "automatic",
    minify: true,
    target: ["es2020"],
    legalComments: "linked",
    define: { "process.env.NODE_ENV": '"production"' },
  }),
]);
const bootstrap = `(()=>{document.documentElement.classList.add('js');let saved;try{saved=localStorage.getItem('mastery-theme')}catch{}const q=new URLSearchParams(location.search).get('theme');const theme=q==='light'||q==='dark'?q:saved==='light'||saved==='dark'?saved:matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';document.documentElement.dataset.theme=theme;try{localStorage.setItem('mastery-theme',theme)}catch{}})();`;
const escape = (s) =>
  s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");
const json = (value) =>
  JSON.stringify(value)
    .replaceAll("<", "\\u003c")
    .replaceAll("\u2028", "\\u2028")
    .replaceAll("\u2029", "\\u2029");
const allPages = pages([...originals, ...transcripts]);
for (const page of allPages) {
  const description =
    page.kind === "lesson"
      ? page.lesson.summary
      : "A practical field guide to understanding ideas, using them independently, and remembering them later.";
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(page.title)} · Mastery Framework</title><meta name="description" content="${escape(description)}"><link rel="icon" href="data:,"><script>${bootstrap}</script><link rel="stylesheet" href="assets/tokens.css"><link rel="stylesheet" href="assets/site.css"><script src="assets/app.js" defer></script></head><body><div id="root">${render(page)}</div><script type="application/json" id="page-data">${json(page)}</script></body></html>`;
  await writeFile(`dist/${page.id}.html`, html);
}
await writeFile(
  "dist/full-guide.html",
  '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Earlier edition · Mastery Framework</title><meta http-equiv="refresh" content="0;url=archive/full-guide.html"></head><body><a href="archive/full-guide.html">Open the earlier edition</a></body></html>',
);
await writeFile(
  "dist/build-manifest.json",
  JSON.stringify(
    {
      pages: allPages.map((p) => p.id),
      runtime: "React static HTML + local classic-script bundle",
      externalRequests: [],
    },
    null,
    2,
  ),
);
console.log(
  `Built ${allPages.length} prerendered React pages in dist/. No server or network is required to read the built site.`,
);
