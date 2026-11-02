# myNotes

myNotes is a static, multilingual university learning archive. Its approved design is canonical. The application is **my_notes_web/**, renamed from test on 2 November 2026; there is one implementation.

## Start here

| Task | Read |
| --- | --- |
| Any change | [AGENTS.md](AGENTS.md), then [design system](DESIGN-SYSTEM.md) |
| Run, build, or preview | [Application README](my_notes_web/README.md) |
| Understand the source and rendering flow | [Architecture](docs/architecture.md) |
| Import another PDF/worksheet | [Source ingestion](docs/source-ingestion.md) |
| Write or correct a lesson | [Authoring](docs/authoring.md) |
| Add or reuse a visual/interaction | [Representation library](docs/representation-library.md) |
| Change navigation, themes, search, or deployment | [Development](docs/development.md) |
| Resume in a future session | [Project context](docs/context.md) |
| Understand prior decisions | [Decisions](docs/decisions.md), [Brilliant research](docs/interactive-learning-analysis.md) |
| Check what was verified | [Verification record](my_notes_web/VERIFICATION.md) |

From this directory, using Node 24:

```sh
cd my_notes_web
npm ci
npm run build
npm run preview
```

Open [myNotes](http://127.0.0.1:4321/) and the working [representation library](http://127.0.0.1:4321/library/). Search is generated during the production build. The developer gallery is English-only and excluded from lesson search and navigation.

## Structure

```text
myNotes/
  AGENTS.md                 # Rules for all work here
  DESIGN-SYSTEM.md          # Approved visual and teaching contracts
  README.md                 # Documentation entry point
  docs/                     # Architecture, authoring, assets, workflow, context
  my_notes_web/             # Canonical executable application
    AGENTS.md
    README.md
    src/content/lessons/{en,de,es}/
    src/components/         # Teaching views and MDX registration
    src/components/interactive/
    src/lib/interactive/    # Pure primitives, models, presets, catalog
    src/layouts/
    src/styles/
    src/pages/
    scripts/
    templates/
    deployment/             # Inactive GitHub Pages workflow template
    previews/
```

Astro generates HTML from MDX; KaTeX renders mathematics; Pagefind builds language-specific search. Small native browser components handle optional interactions. There is no application backend or visitor submission service.

The archive contains two courses: Linear Algebra I (17 lessons) and Analysis I (15 lessons), each in English, German, and Spanish. Courses, source documents, chapters, localized routes, and course-local prerequisites/orders have validated identities. See docs/source-ingestion.md before extending the archive. Mathematical and translation review remains separate from design approval. Publishing is not active. Earlier sites and private source material remain preserved.

The [original plan](docs/history/original-plan.md) is historical context, not an alternate implementation specification.
