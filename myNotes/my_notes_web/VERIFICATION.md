# Analysis I update · 2 November 2026

- Visually inspected all six one-page PDF posters, using complete renders and enlarged columns for handwritten formulas and proof chains. Private originals and SHA-256 records remain in ignored references/source/.
- Added 15 Analysis lessons in each of EN/DE/ES (45 new MDX files), independently organized from 17 Linear Algebra lessons per language. Human mathematical/editorial review remains pending; all new flags are unreviewed.
- Production and BASE_PATH=/myNotes builds pass: Astro diagnostics 0 errors/warnings/hints, reusable vector checks, worksheet 2.1 checks, new Boolean/NAND/complement/parity checks, 119 generated pages, 6,280 local links/assets/anchors, formula parity, and 58 text-contrast pairs. Pagefind indexes 96 lessons in three languages.
- New shared assets: static nested number domains, associativity/distributivity expression trees, implication comparison, and live NAND networks. Gallery examples are executable in /library/.
- Browser: visited all 15 English Analysis lessons at 1440×1000 and 390×844; no page-wide horizontal overflow. Inspected number-set nesting, colored algebraic derivations, NAND layout, and both themes. Long equations scroll locally on compact screens.
- Exercised NAND AND/OR input changes and reset, converse counterexample/current truth-table row, German NAND and Spanish implication feedback, mobile menu, and course language switching. No warnings/errors appeared in the checked browser log.
- Prefix preview: German Analysis lesson → Spanish equivalent → Spanish search for complemento → correct prefixed Analysis result. German Kontraposition search returned matching Analysis lessons. Root build and preview restored afterward.
- Preserved legacy Linear Algebra lesson URLs. Root is now the course directory. Prerequisites, counts, previous/next, breadcrumbs, and source metadata are course-scoped. Every locale has a separate Analysis and Linear Algebra overview.
- Source correction documented: n² > n is false at n = 1; the lesson uses n² ≥ n universally and strict inequality for n > 1. Boolean proofs retain their permitted-law dependency order without replacing derivations by truth tables.

These checks are not a complete screen-reader, physical-touch, or human translation audit. No commit, push, deployment, or source publication was performed.

---

# Reference implementation verification

## Iteration 5 worksheet 2.1 ingestion

Checked 2 November 2026 using Node 24.22.1 and unchanged dependency versions.

- Visually inspected all six pages of the supplied PDF, including higher-resolution exercise 8/9 crops. Text extraction contained almost only headings. Original, renders, checksum, and a correction/coverage record remain in ignored references/source/sheet-2-1/; nothing from that private directory ships in dist.
- Added nine lessons in each language: elementary shears, determinant/area/orientation, diagonal matrices/involutions, sign parity and shear products, unique R/L products, worked shear equivalence, the −I construction, inverse products/MAN, and recap. The archive now has 17 lessons per language in two worksheet chapters.
- Explicit chapter/sourceId metadata and registered PDF page bounds now cover both worksheets. Translation identities, exact navigation membership, previous/next links, breadcrumbs, chapter indexes, thumbnails, and sidebar expansion work with the second chapter. Existing lesson URLs remain stable; legacy redirects are restricted to the original eight lessons.
- Root and /myNotes builds pass: 68 static pages, 2,416 checked local links/assets, 51 Pagefind lesson pages in three languages, and zero Astro errors/warnings/hints. All shared library and original numerical checks still pass.
- New content checks independently verify both exercise 8 operation traces (determinants 6 and 42), mixed left/right steps for −I, HLHL and six-unit-factor products, HVH, a four-dimensional paired sign change, the 3D elementary inverse, both inverse orders for the MAN example, and signed unit-square areas.
- Enumerated 1,023 R/L words through length nine including the empty word: products are distinct, the last factor is recovered correctly, and cancellation returns the prefix. The source's strict R inequality is corrected to ≤, with R itself as the equality boundary; identity is tested separately.
- Added pure MatrixComparison geometry/determinant rendering and a data-only area-and-orientation preset using the existing vector engine. Flow accepts localized explicit nodes/captions. Public library examples and guides include the additions.
- Browser inspection caught valid-but-incorrect plain-text command rendering in the first determinant caption template. It was fixed with a shared raw-TeX helper; a KaTeX semantic-class regression check now covers it. Final captions visibly render colored det A = 1/2/0.
- At 1440×1000, the new area comparisons, orientation figures, colored equations, chapter navigation, and lesson thumbnails were inspected. At 390×844, all nine Spanish lessons have no page-wide overflow; centered operation tables remain readable and long equations scroll locally. Light and dark table/figure views were inspected.
- Actual blue-tip dragging changes the determinant from +1 to −1. ArrowUp changes it to −0.75; reset restores +1. Nonzero collinear vectors trigger correct rank-one/zero-area feedback. German/Spanish localized activity labels and equivalent-lesson switching work under /myNotes.
- Spanish search for unimodular finds the new sign-change lesson with correct prefixed links. Mobile chapter navigation opens the worked equivalence page, and selecting matrix cell (2,2) shows 3·2 + 1·1 = 7. No warnings/errors appeared in the tested final browser flows.
- Restored the normal root preview for review. Screenshots: previews/v5-sheet2-determinants-dark.jpg and previews/v5-sheet2-table-mobile-light.jpg. Documentation now describes the required source/chapter metadata and new-source workflow.

Passing checks do not constitute a complete human translation/editorial review; lesson reviewStatus remains unreviewed. No commit, push, deployment, new dependency, or publication of private source files. Earlier evidence below remains historical.

## Iteration 4 reusable library and canonical folder migration

Checked 2 November 2026, Node 24.22.1. The canonical application is now myNotes/my_notes_web; the old test directory no longer exists. Website branding remains myNotes.

- Root and BASE_PATH=/myNotes builds pass: 41 static pages, 937 local links/assets, three Pagefind languages and 24 indexed lessons, no Astro errors/warnings/hints. The added authoring gallery is noindex and excluded from Pagefind lesson bodies and learner navigation.
- Three vector presets validate and render through one model: linear-combination, rank-collapse, and coordinate-basis. Tests verify state isolation, independent reachability, dependent projection, reachable dependent targets, an alternative diagonal rank line, invalid configurations, configurable plane transforms, SVG label escaping, and arbitrary rectangular matrix calculations. The original numerical checks remain active.
- Existing lessons now use the public Interactive API for vectors/rank. The MDX registry centralizes shared components. Configurable matrices use the same arrays for initial and browser rendering; the gallery's 2×3 by 3×2 example selects entry (1,2) and displays 1·0 + 2·1 + 3·3 = 11 with matching dimensions/caption.
- Browser checks confirm that changing the coordinate-basis instance to a=1,b=2 reaches (1,2) without changing the original combination instance. Dependent feedback uses the new target and a horizontal image line. The library renders multiple independent controllers on one page.
- Actual dragging on the extracted default component reaches (3,4). A subsequent ArrowLeft changes it to (2.75,4) and keeps focus on the result handle. Numeric input, context buttons, reset, and feedback retain the shared contracts.
- Desktop 1440×1000 and compact 390×844 gallery layouts were inspected. Code examples initially caused overflow; shared wrapping styles fixed it. Final gallery checks show no page-wide horizontal overflow. Dark and light themes remain supported by unchanged semantic tokens; light-theme gallery screenshot inspected in this iteration.
- Prefixed German rank feedback and German→Spanish equivalent-lesson switching work; Spanish rango search returns three results with /myNotes/es/ links. All three dictionaries are present and typed. Existing shell conventions remain unchanged.
- The default root build/preview was restored from the new directory. Dependency versions did not change; package and lockfile names and inactive workflow paths were updated together. Interactive code still loads only on relevant lesson pages.
- Markdown file links were checked after migration with no missing targets. Repository/app AGENTS files, design system, current guides, context, decisions, templates, and historical plan location were reconciled. Published lesson counts are derived; navigation must cover each published order exactly once. Source-page metadata no longer assumes a four-page reference.

Saved previews for this migration: previews/v4-library-overview-dark.jpg and previews/v4-library-coordinate-light.jpg.

No commit, push, or deployment. Physical touch/pen and screen-reader checks remain outstanding; numerical and structural checks do not establish full editorial/mathematical review or learning outcomes. Earlier iteration evidence below is historical and retains its original page counts and observations.

## Iteration 3 canonical design and richer activities

Checked on 2 November 2026 with Node 24.22.1 and the existing locked dependencies. Jean's approval establishes the iteration 2 shell as canonical; the new interaction family extends that shell. See ../DESIGN-SYSTEM.md and ../docs/interactive-learning-analysis.md.

- Root and `/myNotes` production builds pass: 40 pages, 905 local links/assets, no Astro errors, warnings, or hints; Pagefind indexes 24 lessons in three languages.
- Mathematical tests cover 289 coefficient pairs, inverse and screen-coordinate round trips, exact target (3, 4), a keyboard-sized output movement, dependent projection, coefficient bounds, nonfinite input rejection, zero and nonzero parallel columns, and determinants over 1,089 column configurations. Representative dynamic equations parse with the shared KaTeX configuration.
- Color checks explicitly assert that all 58 text/background pairs across both themes were exercised; CSS whitespace cannot silently skip them.
- Actual pointer drags move the output to (3, 4) and the second column to (4, 2). Numeric input and focused-handle arrow keys update the picture, controls, equation, and textual result. Output-handle keyboard focus survives rendering.
- Switching parallelogram/head-to-tail keeps the vector value. Dependent context explains that the target is unreachable. Rank feedback distinguishes nonzero parallel columns from a zero column; reset restores the starting state. Editing clears previous feedback.
- EN, DE, and ES controls were inspected. The language menu follows the active theme, switches to the equivalent concept, and closes with Escape while restoring focus.
- Under `/myNotes`, German `Rang` and Spanish `rango` searches return localized results with correct prefixed links. Switching the search language preserves the query.
- Desktop at 1440 × 1000 and compact at 390 × 844 were inspected in the browser. The vector family has no page-wide overflow; compact plots crop unused margins, numeric controls remain usable, and drag hit areas measure approximately 44 CSS pixels. The compact navigation menu opens and closes, and DE/ES language switching works. Both themes were inspected.
- Rotation still returns (2, 1) at n = 4; shear keyboard input still updates its parameter. Component modules are conditional: the linear-maps lesson loads neither activity controller.
- The header no longer shows the decorative slash badge or circle, and sidebar footers show only the localized Learning archive label. No prototype date remains in the public shell.
- No browser warning/error logs appeared in the tested desktop flows. Screenshots: previews/v3-vector-activity-dark.jpg and previews/v3-rank-mobile-dark.jpg.

The responsive override worked in a separate hidden preview tab; the embedded user-visible browser retained its host window size. Temporary test tabs were closed and the viewport override reset. The normal local production preview remains available at http://127.0.0.1:4321/ for review.

No new package, deployment, commit, or push. Physical touch/pen hardware, screen-reader behavior, full accessibility compliance, and learning outcomes were not tested. Mathematical/editorial review flags remain unreviewed. Bundle measurements and reuse limits are recorded in the analysis.

## Iteration 2 multilingual layout

The current iteration has forty generated pages: thirty localized pages, a 404 page, and nine redirects for earlier addresses. Its eight lessons are available in English, German, and Spanish. The baseline checks below describe the earlier iteration.

- Production builds pass with no Astro errors, warnings, or hints, both at the root and with `BASE_PATH=/myNotes`.
- Pagefind indexes twenty-four lesson pages across three languages. Browser searches for `rank`, `Rang`, and `rango` return the corresponding language's lessons.
- Language switching retains the concept and changes the complete lesson, navigation, controls, captions, and page language. Search queries are retained when switching search pages.
- Under the repository prefix, German and Spanish search results retain both the base path and locale and open the correct lesson.
- At 2560 pixels wide, browser measurements place the sidebar at x=0 with width 260, the article at width 1000, and the page contents at the top right. The dark background is rgb(16,18,20).
- Native subject, course, and chapter disclosures expand and collapse. The active lesson's ancestor branches open automatically.
- At 390 pixels wide, the Spanish overview and matrix lesson fit without page-wide overflow. The mobile menu, matrix selection, and language switch work.
- Colored KaTeX calculations preserve the selected matrix entry result of −13. The Spanish rank explorer changes its explanation to rank 2 with no console errors.
- The verifier checks every localized page's language, equivalent lesson availability, eight thumbnails per overview, equation parity across translations, source-file exclusion, and text contrast including coral and cyan roles.
- The source PDF and page images are retained locally in ignored `references/source/`; they are absent from the public output. Source links have been removed from the interface.

Translations remain editorial drafts for Jean's review. This iteration was subsequently approved as the canonical visual baseline. Its screenshots use the `v2-` filename prefix.

## Baseline iteration 1

Checked on 2 November 2026 using Node 24.22.1 and the locked npm dependencies.

## Automated checks

- Astro diagnostics: no errors, warnings, or hints.
- Static generation: twelve pages, including eight MDX lessons.
- Pagefind: eight published lessons indexed in German.
- Internal references: local links, section anchors, scripts, styles, original PDF, and page images checked against the build output.
- Content metadata: schema validation, unique ordering, available prerequisites, and prerequisite cycle detection.
- Arithmetic: the source matrices produce the expected AB, CA, and CAB products; four quarter-turns restore the original vector; inverse shear restores the original point; incompatible dimensions are rejected.
- Text contrast: supported text colors meet at least 4.5:1 against the reading surfaces and selected-state backgrounds in both themes.
- Dependencies: npm's online audit reported zero known vulnerabilities after installing the final locked dependency versions.

## Browser checks

The production preview returned HTTP 200. The browser showed the rendered lessons and equations with no console errors during the tested flows.

| Flow | Observed result |
| --- | --- |
| Overview and lesson navigation | Opens the corresponding static page and marks the current lesson. |
| Theme switch | Changes theme and retains it when navigating to another lesson. |
| Vector coefficient keyboard input | Setting a to 2 with b equal to 1 changes the result from (1, 3) to (3, 4). Reset restores (1, 3). |
| Matrix entry selection | Selecting row 2, column 3 highlights the corresponding row and column and shows 7 × 1 + (−5) × 4 = −13. |
| Rank comparison | Independent columns change the graph, matrix, and explanation to rank 2. |
| Quarter-turn slider | At n equal to 4, the displayed result returns to (2, 1). |
| Shear slider | Keyboard input changes the shear parameter and corresponding figure. |
| Answer disclosure | Opens the reference solution using native details. |
| Search for Rang | Returns the rank lesson, recap, and relevant composition section. |
| Repository URL prefix | A build with BASE_PATH=/myNotes passed link checks; search results retained that prefix and opened the lesson successfully in the browser. |
| Mobile menu | Opens the grouped lesson navigation; selecting a lesson opens the page. |
| Responsive layout | Inspected at 390 × 844 and 1440 × 1000; tested pages had no page-wide horizontal overflow. Wide equations remain locally scrollable. |

Representative light and dark layouts, mathematical figures, and the mobile matrix visual were inspected. The overview uses a separate stacked concept map on compact screens to keep labels readable. Preview images are stored in `previews/`.

## Scope of verification

The build verifies structure and selected numerical examples. It is not a formal mathematical review of every sentence or proof. Lesson review status remains unreviewed for Jean's editorial and mathematical check.

No deployment, Git commit, or push was performed. The GitHub Actions file is an inactive template inside this prototype. Source files and original PDF remain local. Direct file URL use, automated accessibility auditing, and browser printing were not tested.
