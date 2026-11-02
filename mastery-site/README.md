# Mastery Framework

A React + TypeScript teaching website compiled into complete static HTML pages. No runtime server, API key, external font, CDN, or build tool is needed to read the output. Open `dist/index.html` directly, or serve `dist/` from a static host.

## Work on the website

Requires Node.js 22 or later and npm.

```sh
npm ci
npm run dev
```

The local preview is at `http://127.0.0.1:8765`. The development task rebuilds when content, components, or tokens change; reload the browser after each successful build.

```sh
npm run build     # Typecheck, prerender, bundle, and validate
npm run preview   # Serve the existing dist output
npm run package   # Build and create the offline website/source ZIP
```

`npm run check` runs the same complete build and validation gate. `python3 build.py` forwards to the React build for compatibility with the previous workflow.

## Architecture

- `src/model.ts` defines typed courses, lessons, sections, and teaching blocks.
- `src/content/` contains course sequence and authored explanations. It contains no HTML strings or component styling.
- `src/components/` implements the shell, reading layout, teaching patterns, and diagrams. `Visuals.tsx` and `BloomPyramid.tsx` contain the graphical explanations; `src/styles/visuals.css` supplies their shared visual grammar.
- `design-tokens.json` owns both color themes and the shared type, spacing, radius, and layout scales.
- `src/styles/site.css` implements component presentation using those tokens.
- `src/render.tsx` renders the same React component tree used by `src/client.tsx`.
- `scripts/build.mjs` prerenders each page and bundles a classic script for local `file://` compatibility. Current-page content is embedded safely as JSON; the client bundle does not contain the entire source library or every lesson.
- `scripts/check.mjs` validates the teaching contract, unique IDs, navigation, output, tokens, excluded colors, and supported text contrast.
- `content/` preserves the 19 original documents and four transcripts.
- `legacy/` preserves the previous site and its authoring sources. The build copies that site to `dist/archive/`; it does not rebuild it. `full-guide.html` forwards to the retained earlier edition.

React supplies reusable components, state, and shared server/browser rendering. This site does not need Next.js routing, a server runtime, or server actions. Prerendered HTML plus a classic local bundle preserves double-click use as well as static hosting. The build uses documented [React server rendering](https://react.dev/reference/react-dom/server/renderToString), [hydration](https://react.dev/reference/react-dom/client/hydrateRoot), and [esbuild bundling](https://esbuild.github.io/api/).

## Add a lesson or course

1. Read `DESIGN-SYSTEM.md`.
2. Add a typed `Lesson` to the content collection. Include a guiding question, objectives, explanatory sections, a worked example, an independent task, a takeaway, and a source note.
3. Add its ID to a course group in `src/content/courses.ts`. Add a new course when its sequence and identity warrant one.
4. Use existing teaching blocks for repeated structures. For a visual that needs a different representation, create a named React component and register a typed diagram variant. Keep captions and accessible labels.
5. Run `npm run build`; inspect light/dark, compact layouts, and the built local page.

The two mathematical mini-lessons demonstrate the format. They are not complete linear algebra or analysis courses.

## Local data and limits

Practice text is saved only in this browser when storage is available. It is not graded or sent to an AI service. File-page storage varies between browsers; writing on paper remains supported. Source selection, optional drafts, and interactive explorers use the bundled JavaScript. Definitions, explanations, worked examples, native answer disclosures, and navigation are present in the HTML without it. The mobile contents menu defaults to a visible navigation fallback without JavaScript.

The tutor prompt is intended to be copied to a separate AI tutor. This website does not pretend that an AI tutor is connected or that completing a page demonstrates mastery.
