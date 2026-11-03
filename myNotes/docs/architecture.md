# Architecture

The canonical package is ../my_notes_web/. Source is shared through Git; the deployable result is a static directory. There is no runtime server. The website remains named myNotes; my_notes_web is its source directory/package location.

## Source map

| Layer | Location inside my_notes_web | Responsibility |
| --- | --- | --- |
| Content | src/content/lessons/{en,de,es}/ | One note/concept/problem/recap per file |
| Schema | src/content.config.ts | Metadata, publication and review state |
| Content/routing | src/lib/content.ts | Published counterparts, prerequisites, base-aware URL helpers |
| Source provenance | src/lib/sources.ts | Registered document identities/page counts; original files stay private |
| Course structure | src/lib/navigation.ts | Ordered expandable groups; exact membership validation |
| Route generator | src/pages/[...path].astro | Localized overview, search, and lesson routes |
| Shell | src/layouts/SiteLayout.astro | Header, sidebar, breadcrumbs, article, contents, theme/language controls |
| MDX registry | src/components/mdx.ts | Shared teaching vocabulary available without imports |
| Teaching views | src/components/ | Math, Note, Exercise, Flow, VectorFigure |
| Interactive views | src/components/interactive/ | Public dispatcher and small browser controllers |
| Reusable math/assets | src/lib/interactive/ | SVG primitives, vector state, validated presets, matrix equation, catalog |
| Interface language | src/lib/i18n.ts | EN/DE/ES shared shell and teaching labels |
| Mathematical presentation | src/lib/math-options.mjs | KaTeX options, restricted trust and semantic macros |
| Appearance | src/styles/ | Theme tokens, shell/content styles, vector activity styles |
| Build verification | scripts/ | Mathematical invariants and generated output checks |
| Working asset catalog | src/pages/library.astro | English-only, unindexed developer gallery |

## Rendering flow

1. Astro loads MDX/Markdown collections and validates metadata.
2. getLessons filters published content, checks matching languages, order, navigation, prerequisites, and cycles.
3. The route generator builds localized archive, course and search pages. Analysis lessons use `/analysis/lessons/<stable-key>/`, Learning Methodology uses `/learning/lessons/<stable-key>/`, and legacy Linear Algebra retains `/lessons/<stable-key>/`; DE/ES counterparts prepend their locale.
4. MDX renders through the central component registry. KaTeX emits visual HTML and accessible MathML; CSS/fonts are local. Tables and Markdown display equations get labeled, focusable scroll wrappers. The Math component provides the same local scrolling and keyboard focus for display expressions.
5. Interactive components emit initial HTML/SVG/equations during the build. Only components actually rendered add their browser controller. Browser state derives drawings, values, equations, and feedback from one model.
6. Pagefind indexes published lesson bodies by actual html language. It excludes shell, rendered equation duplication, and the developer gallery.
7. The verifier checks generated links, anchors, assets, localized counterparts, source exclusion, math samples, and token contrast.

The build currently emits 287 pages: 261 localized lesson pages, 15 localized archive/course/search pages, a 404, nine legacy redirects, and the library. Checks derive lesson counts from published content; add a new route family deliberately and update its route-count contract.

## Representation layers

plane.ts provides coordinate transforms, a grid, arrows, guide lines, polygons, SVG text escaping, and clipped lines. vector-model.ts owns state, determinants/inverses, projection, snapping/bounds, scene derivation, and equation derivation. vector-scenarios.ts owns data variants. vector-copy.ts derives translated instructions/feedback from state. VectorLab.astro owns controls and pointer/keyboard/numeric events.

matrix.ts creates equations for arbitrary compatible matrices. MatrixProduct.astro uses the same input arrays for initial rendering and browser behavior. Rotation/shear remain intentionally small fixed demonstration families; new domains should reuse primitives or add a justified family rather than pretending those demonstrations are fully generic simulations.

## Current boundaries

The archive has three courses and 87 published lessons per language: 17 in Linear Algebra I, 53 in Analysis I (including Analysis 0 foundations), and 17 in learning methodology. Chapters have localized labels, exact group membership, and source identities. The original Linear Algebra concept map stays scoped to its first chapter. New subjects extend the shared course registry and shell. Source identities and PDF page bounds are registered in src/lib/sources.ts and validated by the content schema. See source-ingestion.md for the multi-document workflow.

The original source is not public content. references/source/, generated files, dependency folders, and local runtime metadata are ignored. deployment/ contains a template only. Existing sibling websites remain separate and preserved.

## Multiple courses

src/lib/navigation.ts owns course labels/descriptions and course-scoped chapter groups. sources.ts owns document identity, course, and page count. content.config.ts derives registered chapter/source enums, validates primary/additional provenance, and checks course membership. content.ts validates counterpart metadata, ordering, prerequisites, and cycles before route generation. pages/[...path].astro renders the archive directory, course overviews, published lessons, and search for every locale. SiteLayout receives courseId so breadcrumbs, language equivalents, active navigation, and footer stay course-specific. A course’s previous/next links never cross into another course.

## Areas and text-source provenance

navigation.ts now registers areas as well as courses. A course references a valid area; the archive and sidebar group only populated areas. No separate pages or shell are cloned for a new area. The generic lesson route prefix is the course id except for legacy Linear Algebra URLs, which remain /lessons/<key>/.

The source catalog distinguishes pdf, markdown, and transcript kinds. Text sources use sourcePages: [] and nonempty sourceLocations (headings, exact file/section names, or actual timestamps). additionalSources supports pages and/or locations. The schema rejects fictitious text-source page numbers and missing text locations; counterpart checks include these locations. See learning-teaching.md for actual coverage and source identity mapping.
