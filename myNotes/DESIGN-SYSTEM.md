# myNotes canonical design system

The approved myNotes reference is a quiet, multilingual learning archive: readable explanations, inspectable mathematics, useful diagrams, and optional manipulation. Jean approved this direction on 2 November 2026. It is the baseline for future learning areas.

The canonical application is [my_notes_web](my_notes_web/README.md), renamed from test after approval. Keep this single source while the archive grows. The newer vector activities extend the approved shell and are documented in [the interaction analysis](docs/interactive-learning-analysis.md). Approval of the interface does not change the lessons' mathematical review status.

## Canonical sources

| Responsibility | Source |
| --- | --- |
| Architecture and remaining scope | [README](README.md) |
| Contributor rules | [AGENTS](AGENTS.md) |
| Colors and shared scales | [tokens.css](my_notes_web/src/styles/tokens.css) |
| Layout and typography | [site.css](my_notes_web/src/styles/site.css) |
| Main shell and navigation | [SiteLayout.astro](my_notes_web/src/layouts/SiteLayout.astro) |
| Chapter organization | [navigation.ts](my_notes_web/src/lib/navigation.ts) |
| Content schema | [content.config.ts](my_notes_web/src/content.config.ts) |
| Translation dictionaries | [i18n.ts](my_notes_web/src/lib/i18n.ts) |
| URL construction | [content.ts](my_notes_web/src/lib/content.ts) |
| Mathematical notation | [math-options.mjs](my_notes_web/src/lib/math-options.mjs) |
| Teaching components | [components](my_notes_web/src/components) |
| Interactive vector mathematics | [vector-model.ts](my_notes_web/src/lib/interactive/vector-model.ts) |
| Build checks | [verify.mjs](my_notes_web/scripts/verify.mjs) |

Implementation and documentation must evolve together. Edit shared sources to change a pattern across the archive. Avoid an independent stylesheet, navigation system, or component vocabulary for each subject.

## Learning experience

Each page serves one coherent purpose. A learner should quickly see what the concept means, why a relationship holds, and where an example or independent attempt can help.

Use direct language and concrete situations before dense notation. State assumptions, domains, units, and limits of analogies. Show the reasoning behind a calculation rather than only its result. Preserve formal precision when simplifying language.

The site supports four content types:

| Type | Appropriate structure |
| --- | --- |
| Concept | Motivation, meaning, formal statement, explanation, useful example |
| Worked problem | Problem, conditions, justified steps, result, check |
| Note | Focused observation with enough context to interpret it |
| Recap | Compact definitions and relationships, conditions, links to fuller explanations |

These are editorial contracts, not compulsory sections. Short notes stay short. Do not render subtitle/tagline descriptions beneath page, chapter, or overview-entry titles. Keep descriptions as metadata; start the visible explanation in the article body. Do not repeat the title, description, question, and objectives when they express the same thing. Do not force every page to contain an exercise or a minimum number of sections.

Central explanations remain visible in a continuous article. Hide reference solutions and optional additional explanations behind disclosures when that helps an independent attempt. Do not require a wizard, score, or completed interaction to read the material.

## Page shell

The header contains one archive-home anchor wrapping the book icon and the complete myNotes wordmark. It uses localeUrl(locale) so every page returns to the localized archive overview, including under a repository prefix. Do not add a separate “Study notes” label or link. The remaining controls are a real search link, the language disclosure, theme control, and a compact navigation control when needed. The language menu uses themed native details and ordinary links. Its panel follows the current surface, border, typography, and focus rules. Escape closes it and restores focus; clicking outside or moving focus away closes it as well.

Do not add nonfunctional symbols or pretend buttons. The visible slash badge and decorative language circle have been removed. A working slash keyboard shortcut may remain without an ornamental badge. The sidebar footer says only Learning archive, translated in each language.

The myNotes wordmark links to the localized archive overview; do not duplicate that destination with a top-level Overview link in the sidebar. Course overview links remain part of the course hierarchy. Navigation scrollbars use a thin thumb mixed from the muted color at 18% opacity over a transparent track, rising gently to 30% on hover or keyboard focus. The sidebar has no vertical divider against the article.

The current course-color trial assigns blue to Linear Algebra, teal to Analysis, and purple to Learning Methodology. Course headings, nested section headings, overview links, 1 px branch rails, and active lessons share that course color. Names, indentation, and disclosure controls retain the hierarchy without relying on color alone. On desktop, an open course heading stays visible while its branch scrolls. Colors are keyed to the stable course identity rather than alternating by row. This trial follows navigation checkpoint commit `2901665` and remains uncommitted for comparison.

The desktop sidebar begins at x=0. Its position is not constrained by a centered outer container. Use native details for a subject → course → chapter-group → lesson hierarchy. Store expansion locally where available, and reveal the active lesson's ancestors on navigation. Do not display empty subject placeholders.

The archive homepage starts with its topic sections, without a visible archive label, myNotes heading, or breadcrumb. An offscreen level-one heading retains the page identity for assistive technology. Course breadcrumbs start with the course name, colored using the same navigation-order color as its sidebar entry; chapter and lesson text stays neutral. Do not repeat the course/type metadata row above lesson titles or add an area/archive eyebrow above course and search titles.

Breadcrumbs, the article, and the footer share the content width. The article is centered in the area available after navigation and the right rail. Lesson paragraphs, display mathematics, and figures use the same article width. The page contents list belongs near the top-right edge, remains secondary, and can collapse. It lists relevant second-level headings rather than every label inside a figure.

## Responsive layout

| Range | Behavior |
| --- | --- |
| Above 2000 px | Article maximum 1000 px, sidebar 260 px, right contents about 170 px |
| 1280 to 2000 px | Article maximum 900 px, sidebar 260 px, compact right contents about 165 px |
| 801 to 1279 px | Hide right contents; article expands within remaining space |
| Up to 1050 px | Sidebar narrows to 230 px |
| Up to 800 px | Content tree becomes a header-controlled block; reading is one column |
| Up to 540 px | Compact controls, smaller index thumbnails, stacked concept map branches |

The header is approximately 76 px on large screens and 64 px on compact screens. Keep header controls usable at 390 px without page-wide overflow. Compact vector plots crop unused side margins through their viewBox, retaining the same coordinate model and physical drag targets. The sidebar may scroll independently on desktop. Wide formulas and tables scroll locally, never by shrinking the page's body text.

These breakpoints are the implemented baseline. Adjust a breakpoint when real content demonstrates a failure, while preserving the hierarchy and reading priorities.

## Typography and spacing

Use the system sans-serif stack already implemented; no remote font request is needed. KaTeX supplies its locally bundled mathematical fonts.

| Role | Baseline |
| --- | --- |
| Main title | 32 to 44 px with modest responsive scaling; about 33 px on compact screens |
| Section heading | About 25 px, reduced where needed on compact layouts |
| Figure heading | About 18 to 19 px |
| Lesson prose | 16 px with 1.85 line height |
| Supporting control text | About 11 to 12 px, with explicit labels |
| Caption | About 11 px with generous line height |
| Small navigation and metadata | About 10 to 12 px; kept secondary |

Lesson prose fills the available article width, matching display mathematics and figures without an additional character-based paragraph cap. The responsive article maximum (900–1000 px on large screens) and page gutters constrain the reading area.

The shared spacing scale is 4, 8, 12, 16, 20, 24, 32, 40, and 48 px. Use its CSS variables for new shared patterns. Existing alignment-specific values in the reference may remain when they serve the layout. Control radii are approximately 4 px; figure panels use approximately 8 px. A visible border normally uses 1 px.

Separate major sections more strongly than paragraphs. Use ordinary headings and whitespace before adding containers. Avoid large heroes, promotional calls to action, decorative counters, unnecessary badges, and nested card grids.

## Theme tokens

All new colors come from semantic CSS variables. The canonical palette is:

| Token | Light | Dark | Purpose |
| --- | --- | --- | --- |
| `--bg` | `#fcfcfa` | `#101214` | Reading background |
| `--panel` | `#ffffff` | `#15181b` | Figure and menu surfaces |
| `--surface` | `#f4f5f5` | `#191c20` | Secondary surfaces |
| `--text` | `#252a30` | `#e8e9ec` | Main text |
| `--secondary` | `#515b65` | `#bcc0c8` | Supporting prose |
| `--muted` | `#657069` | `#a0a4ad` | Secondary navigation and captions |
| `--line` | `#e1e5e7` | `#2b3036` | Structural borders |
| `--accent` | `#116c64` | `#68c9bd` | Teal, first mathematical object, active navigation |
| `--blue` | `#315ca4` | `#89aeff` | Second mathematical object |
| `--purple` | `#7650a3` | `#c39af4` | Result, image, or combined relationship |
| `--coral` | `#a84330` | `#f2a28c` | Target or third mathematical object |
| `--cyan` | `#076b82` | `#70c8df` | Independent attempts and explanations of feedback |

Corresponding tint tokens provide quiet selected states. Grid and axis tokens support figures. Use the implemented token file for exact tints, grid colors, and shared scales. Do not introduce yellow or amber.

Dark mode is neutral and near black, with no green cast across the entire background. Theme choice persists locally when possible; the first visit follows the system setting. Analysis truth tables use blue (`--blue`) for `0` and teal (`--accent`) for `1`, including selected cells and interactive updates. The visible digits remain the primary labels. Color must agree between an equation, legend, figure, and selected control. It never carries meaning alone: retain labels, symbols, values, and explanatory text.

The build checks supported text pairs at 4.5:1 in both themes. Focus visibility, control affordances, and diagram clarity still need browser inspection.

## Mathematical notation

Use inline dollar math and display dollar math in Markdown. Use the Math component when an embedded figure or derivation needs an explicit TeX value. Build-time rendering uses remark-math, rehype-katex, and locally bundled KaTeX assets. Inline mathematics uses 1.16em for a modest emphasis within prose; display mathematics retains 1.1em. Component copy with mixed prose and explicit dollar math uses the shared MathText renderer. Keep a complete expression, including signs and parentheses, in one math run.

| Macro | Role |
| --- | --- |
| `\colA{...}` | Teal first matrix, vector, or contribution |
| `\colB{...}` | Blue second matrix, vector, or contribution |
| `\colC{...}` | Coral third object or target |
| `\colResult{...}` | Violet result |

The same configuration is used for authored math and browser-updated equations. Trust is restricted to the htmlClass command used by these macros; do not enable arbitrary trusted TeX commands. Theme colors come from classes, not hardcoded TeX color values.

Keep expressions centered where appropriate. Long expressions get their own horizontal scroll region. Explain variables and conditions in nearby prose. Use aligned equations for derivations and include the reason for consequential steps. A successful render is not a proof of mathematical correctness.

## Teaching components

| Component | Inputs or variant | Required behavior |
| --- | --- | --- |
| Math | `tex`, optional `display` | Shared TeX configuration and accessible output |
| Note | Optional title and body | Short useful qualification, restrained accent border |
| Exercise | Question and solution body | Independent attempt before native solution disclosure |
| Flow | Named variant or explicit localized nodes/caption | Clear labels, directional relationship, caption |
| Interactive | Vector preset, configurable matrix product, rotation, or shear | Public lesson API; see the representation library |
| MatrixComparison | Labeled 2×2 matrices and caption | Static unit-square images and signed determinant, with a dashed input reference |
| MatrixProduct | Compatible left/right matrices | Selected result entry identifies its row, column, and derived calculation |
| Explorer | Vectors, rank, rotation, or shear | Stable entry point for the existing lesson content |
| VectorLab | Validated combination/rank scenario | Draggable mathematical objects, numeric and keyboard equivalents, reset, checked feedback |
| ParameterExplorer | Rotation or shear | A labeled parameter changes the figure and readout |
| Thumbnail | Current lesson order and locale | A small meaningful preview in the chapter listing |
| ConceptMap | Locale | Linked concepts with explicit relationships; stacks on mobile |

Content chooses a teaching purpose, not arbitrary markup or CSS. A new subject may require a new diagram family, but it still shares the shell, tokens, mathematical rendering, interaction contracts, and review workflow.

MatrixProduct accepts explicit data; vector scenarios provide typed reusable presets. Thumbnail supports semantic diagrams for the new lessons; the first ConceptMap remains course-specific. See the [representation library](docs/representation-library.md) for public APIs, constraints, examples, and extension rules. Shared MDX registration lives in my_notes_web/src/components/mdx.ts.

Code blocks wrap long lines, constrain overflow locally, and use the shared surface/border/spacing tokens. Keep snippets readable on compact screens.

## Figures and tables

Every figure needs meaningful labels and a nearby explanation of its relationship to the concept. Supply a caption and a useful accessible description. Prefer code-native SVG for mathematical geometry. Raster illustrations belong only where a photograph, texture, or other bitmap actually helps.

On the archive overview, each study-field heading groups its icon and title together on the left with a shared 12 px gap. Course chapter headings retain their separate lesson-count alignment.

Chapter listings include a small preview for every lesson. Use a relationship actually discussed by that lesson: transformed vectors, a selected matrix entry, an image line, or a transformation chain. Do not use unrelated stock illustrations.

Tables are centered within the article. Headers and values should align for comparison; descriptive first-column labels may align left. Markdown tables are wrapped at build time in a labeled, focusable scrolling region. Preserve readable cell text on mobile instead of reducing font size until the table fits.

## Interactive learning pattern

Use a short cycle: pose a concrete challenge, let the learner manipulate a constrained model, show consistent mathematical consequences, offer a deliberate check, and explain the result. The surrounding article supplies the formal statement and reasoning.

Two implemented examples establish the contract:

1. Linear combination: reach the target `(3, 4)` with independent directions, then examine the same target with dependent directions. Switch between parallelogram and head-to-tail views without changing the mathematical sum.
2. Span and rank: drag a matrix column until the determinant becomes zero without making that column zero. Relate the vanishing area to the image changing from a plane to a line.

The reusable pattern is the relationship among state, constraints, representation, and feedback. Adding motion alone does not improve an explanation.

### Model and constraints

Keep mathematics in pure TypeScript functions. Derive the SVG, numbers, equation, and feedback from one state. Never maintain independent copies of the same mathematical result in separate event handlers.

The default combination preset restricts coefficients to `[-2, 2]` in 0.05 steps for a readable viewport. The default rank preset moves column coordinates through `[-4, 4]` in 0.25 steps. Explain that these control limits are display limits, not a restriction on the mathematical definition of span.

Reject nonfinite input. Keep drag coordinates, bounds, and snapping consistent. Do not invert a singular matrix. In the dependent context, dragging the sum must remain on its image line. Recognize an impossible target as mathematically impossible, rather than asking the learner to keep guessing.

### Input and accessibility

Use browser Pointer Events so mouse, pen, and touch share the same mathematical handlers. Convert screen coordinates through the SVG transformation matrix. Capture the pointer on a stable SVG element and release interaction on completion or cancellation. Do not replace the focused handle while updating the drawing.

Each handle has a descriptive name including its current coordinates. Arrow keys adjust a focused handle; Shift makes the step larger. Numeric controls provide the complete equivalent operation. Adapt invisible hit areas to maintain at least about 44 px of physical target size, including compact screens. Allow normal page scrolling outside the handles.

Offer context presets, reset, readable numerical output, and explanatory feedback. Do not use a timed animation as the only way to inspect a result. Respect reduced motion. Keep the initial SVG and the central explanation useful without browser JavaScript.

### Feedback and limits

Check the local configuration, not the learner's overall mastery. Provide a reason rather than only a red or green signal. Distinguish the rank-one zero-column case from the specific challenge to find a nonzero dependent column.

No answers are submitted, stored, or graded by an external service. Do not add tracking, accounts, streaks, badges, or a tutor backend as part of implementing these interactions.

Use native SVG and small scripts for these bounded 2D models. Evaluate JSXGraph for substantial geometry, plotting, or constraints that would otherwise require a custom engine. Evaluate Mafs when a React-based visualization is already justified. Do not add a library to draw two vectors that the current model already handles.

## Localization

English is the unprefixed default. German uses `/de/`; Spanish uses `/es/`. Keep one MDX file per language and lesson, with the same stable filename and order. Titles can be translated independently of that identity.

Generic interface text lives in the typed central dictionaries. Vector-specific instructions and feedback live in src/lib/interactive/vector-copy.ts, with state-derived numerical values and optional localized scenario copy. Localize headings, controls, captions, accessible names, feedback, and equations' natural-language labels. Retain mathematical meaning rather than translating word by word.

Language links open the equivalent concept and preserve the search query on search pages. They remain functional without JavaScript. Use the centralized route helpers for both locale and GitHub Pages prefixes.

Set the page's actual html language. Pagefind builds and searches the matching language index. This is language-specific full-text search, not automatic translation of a search query. Check German umlauts and Spanish accents with real terms.

The build validates published counterparts and equation parity across translations. Human review still covers the prose, notation, and interpretation. Do not mark a translation reviewed because it compiles.

## Applying the design to another area

1. Define the subject, chapter order, prerequisites, and learner question before page layout.
2. Write the English concept or problem and its sources, then create German and Spanish equivalents with matching identities.
3. Reuse the existing shell and teaching components; do not generate a new landing-page design.
4. Select a visual relationship that clarifies the concept. Use a static figure if manipulation adds no useful question.
5. For an interaction, specify state, permitted actions, constraints, feedback, edge cases, and an input alternative before coding.
6. Add a data variant to a reusable family when possible. Create a new engine only when the mathematical relationship warrants it.
7. Validate the mathematics, build, read the page, and try its relevant input modes on desktop and mobile.

The current reference contains one populated course, not a finished multi-subject archive. Extending the navigation data and route model is required when actual new courses are added. Shared visual conventions are canonical; the current linear-algebra examples are not universal data.

## Review and release gate

Run `npm ci` when dependencies change, then `npm run build` from my_notes_web/ with Node 24. The build includes types, content relationships, static generation, Pagefind, internal links and anchors, source-file exclusion, equation rendering, selected numerical invariants, and text contrast.

For an interaction change, also verify pointer dragging, numeric input, keyboard movement, reset, context changes, singular and zero states, explanatory feedback, both themes, relevant languages, and a compact viewport. Check that no page-wide overflow appears and that the active navigation remains discoverable.

Changes to routes or localization require a repository-prefix build and preview. Committing, pushing, and publishing remain separate actions. GitHub Pages deployment is still an inactive template until requested.

Keep verification findings and representative screenshots with the implementation. Record a concrete reason when extending a pattern; do not silently substitute a different design system.

### Navigation color assignment

Course navigation colors come from `src/lib/navigation-colors.ts`, using the global order in the course registry. The four-role cycle is blue → teal (accent) → violet (purple) → orange (coral), then repeats. Assignment happens before grouping by knowledge area, and does not depend on language or expanded state. Every chapter, group and active lesson inherits its course's color and matching tint; adding a lesson does not introduce an unrelated color inside that branch. Append courses to preserve current assignments; reordering courses intentionally changes their colors. These are navigation identities, not difficulty or progress indicators, and do not change semantic colors within mathematical figures.

Sidebar and contents scrollbars mix 10% muted color into the reading background, increasing to 16% while hovered or focused. Their tracks remain transparent.
