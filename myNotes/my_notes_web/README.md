# my_notes_web

Canonical Astro application for [myNotes](../README.md). Renamed from test/ on 2 November 2026. Read [AGENTS.md](AGENTS.md), the [design system](../DESIGN-SYSTEM.md), and the relevant [project guide](../README.md) before editing.

## Run locally

Use Node 24 (the development version is pinned in .node-version):

```sh
npm ci
npm run dev
```

For a complete static preview including search:

```sh
npm run build
npm run preview
```

Open [the archive](http://127.0.0.1:4321/) or [the representation library](http://127.0.0.1:4321/library/). Astro runs preview in the background. Stop it from this directory with:

```sh
ASTRO_TELEMETRY_DISABLED=1 npm exec -- astro preview stop
```

On Jean's computer, the Codex bundled Node directory can be prepended to PATH: /Users/jean/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin. This is a local convenience, not a build dependency.

| Command | Purpose |
| --- | --- |
| npm ci | Install exact locked dependencies |
| npm run dev | Live development (search needs a build) |
| npm run check | Astro/TypeScript/content diagnostics |
| npm run verify:library | Preset, SVG, vector, and matrix checks |
| npm run build | Diagnostics, library checks, static generation, Pagefind, output verification |
| npm run preview | Serve dist locally over HTTP |

## Where to work

- Lessons: src/content/lessons/{en,de,es}/ and templates/.
- Shared lesson components: src/components/mdx.ts.
- Reusable representations: src/components/interactive/ and src/lib/interactive/.
- Layout/themes: src/layouts/ and src/styles/.
- Navigation/routes/localization: src/lib/navigation.ts, content.ts, i18n.ts.
- Checks: scripts/; evidence: VERIFICATION.md and previews/.

Detailed contracts and examples: [authoring](../docs/authoring.md), [representation library](../docs/representation-library.md), [architecture](../docs/architecture.md), and [development](../docs/development.md).

## Static hosting preparation

```sh
SITE_URL=https://OWNER.github.io BASE_PATH=/REPOSITORY npm run build
BASE_PATH=/REPOSITORY npm run preview
```

Use the same prefix for build and preview. Build output is dist/. Serve through HTTP, not file URLs. The active workflow is ../../.github/workflows/mynotes-pages.yml. It builds and validates relevant pushes to main, then publishes dist/ to https://ordinantsystem.github.io/MyNotes/. Pull requests run build checks without deploying. GitHub Pages uses GitHub Actions as its publishing source. deployment/github-pages.yml remains a reference template.

No accounts, analytics, database, remote answers, or runtime AI. Browser theme/tree preferences are stored locally when storage is available. Private reference PDFs remain ignored in references/source/ and excluded from dist/.
