# Three-variable truth table · 3 November 2026

- Added a separate three-variable section to the Logical connectives lesson in EN/DE/ES, retaining the original two-variable table. The new table lists all eight assignments of A, B, C and six intermediate/compound-expression columns, including conjunction, inclusive disjunction, implication and equivalence. Explains that the variables remain two-valued and that a new variable doubles rows without prescribing a fixed number of expression columns. This is an additional teaching example, not a new source quotation; reviewStatus remains unreviewed.
- Extended scripts/verify-analysis.mjs to check the authored headers and every cell of all eight rows against independently computed Boolean expressions in each language. Uses the existing table renderer and tokens without component, route, dependency or sibling-site changes.
- npm ci and npm run build passed on Node 24.22.1: 173 static pages, 147 indexed lesson pages across three languages, 12,159 local links/assets and 3,138 generated TeX annotations. Astro reported zero errors/warnings and the pre-existing unused formula import hint in LogicLab.astro.
- Browser checked all three localized lessons at 1440 and 390 px in light/dark themes (12 states): original table retained; new table has eight data rows and nine columns; no page-wide overflow or KaTeX errors. Desktop shows the complete table; compact widths use the shared labeled, keyboard-focusable scrolling region. Confirmed ArrowRight scrolls the focused table horizontally. Visually inspected desktop light and compact dark layouts.
- Build and browser checks were completed before the authorized Gitmoji commit and main push. GitHub Pages deployment is verified separately after pushing; this local record does not assert a remote deployment outcome.

---

# Repository rename to MyNotes · 3 November 2026

- Renamed the GitHub repository from OrdinantSystem/MasteryFramework to OrdinantSystem/MyNotes, preserving repository identity and history, and updated the local origin URL. The local workspace is /Users/jean/Documents/OrdinantSystems/MyNotes. Updated the project title, local instructions, and current Pages links; historical records retain their original paths.
- The existing workflow derives BASE_PATH from github.event.repository.name, so the new public site uses https://ordinantsystem.github.io/MyNotes/. Added an explicit comment documenting rename support. GitHub Pages retains its workflow publishing source. This commit triggers the first build at the new prefix.
- Node 24.22.1 production builds passed with SITE_URL=https://ordinantsystem.github.io and BASE_PATH=/MyNotes, then again at the root to restore local preview output: 173 static pages, 147 indexed lessons, 12,156 local links/assets, contrast checks, and 3,051 TeX annotations. Root and localized generated pages reference /MyNotes/ navigation and assets, with no old /MasteryFramework/ URLs in those pages. Remote deployment outcome is reported in the rename chat and GitHub Actions run. No lesson or interaction changes.

---

# GitHub Pages activation · 3 November 2026

- Activated repository-root .github/workflows/mynotes-pages.yml at Jean's request. Relevant main pushes run Node 24, npm ci and the full production build, upload only the static dist artifact, and deploy through the github-pages environment with scoped Pages/OIDC permissions. Pull requests run checks without deploying. Manual workflow dispatch is available.
- Updated checkout/setup-node/upload-pages-artifact versions and included configure-pages before deployment. The configured origin is https://ordinantsystem.github.io and the base derives from the repository name (currently /MasteryFramework). Updated active hosting documentation; the former deployment template remains a reference.
- Local Node 24.22.1 production builds passed with the Pages prefix and again at the root to restore local preview output: 173 pages, 147 indexed lessons, 12,156 local links/assets, contrast checks and 3,051 TeX annotations. No lesson or interface changes. Remote deployment outcome is reported in the activation chat and GitHub Actions run.

---

# Session release validation · 3 November 2026

- Ran the complete production build on Node 24.22.1 before creating the session commits. Repeated it with SITE_URL=https://ordinantsystem.github.io and BASE_PATH=/MasteryFramework, then restored the normal root build. All three runs passed: Astro diagnostics (0 errors/warnings/hints), library/content checks, 173 static pages, 147 indexed lessons, 12,156 local links/assets, contrast checks and 3,051 generated TeX annotations.
- Checked that the root, German Analysis lesson and Spanish composition lesson in the prefixed output contain /MasteryFramework/ navigation and asset URLs. The prefix build is a local compatibility check; GitHub Pages deployment has not been activated or tested.
- Session changes are grouped into local development setup, application/content improvements, and documentation/screenshots. Existing per-task records below describe the earlier browser checks and their limits. The Pages workflow remains an inactive template; generated build output and private source directories are excluded from Git.

---

# Breadcrumb hierarchy and homepage cleanup · 3 November 2026

- Removed the Notes/root breadcrumb. Course breadcrumbs begin with the course name, using the same navigationColorAt-derived foreground token as the sidebar. Chapter and lesson labels retain neutral colors and the existing breadcrumb size. Removed the repeated course/type/count metadata row above lesson titles, plus area/archive eyebrows above course and search titles.
- Homepage now starts with the topic sections: removed its breadcrumb and visible archive/myNotes heading. Retained a visually hidden h1 for document structure. Updated DESIGN-SYSTEM.md. Preserved unrelated pre-existing edits to page descriptions and the course navigation.
- Node 24.22.1 production build passed: diagnostics, library/content checks, static generation, search, local references, contrast and math-copy verification. git diff --check passed.
- Browser checked Linear Algebra and Analysis lessons in EN/DE/ES, 1440 × 1000 and 390 × 1000, light/dark (24 lesson states): course breadcrumb colors match sidebar course headings, all other breadcrumb text stays neutral, no lesson metadata row, no page-wide overflow. Also verified Learning course color matching.
- Checked all three localized homepages at desktop/compact widths: no breadcrumb or visible index heading, two topic sections, offscreen h1, no overflow. Visually inspected desktop English lesson and compact Spanish homepage. Screenshots: previews/breadcrumb-course-color.png and previews/homepage-topics-compact.png.
- Routes and localization identities are unchanged. No commit, push or deployment performed.

---

# Archive study-field heading alignment · 3 November 2026

- Added a dedicated area-heading class to the archive overview's Mathematics and Learning & Teaching headings. Both now group the icon and title at the left with a 12 px gap; the icon's old right margin is removed for these headings. Other chapter headings retain their space-between layout for right-aligned lesson counts. Updated DESIGN-SYSTEM.md.
- Node 24.22.1 production build passed: no Astro diagnostics, library/content and generated-math checks, 173 static pages, 147 indexed lessons, 12,320 checked links/assets, and theme contrast checks. Totals describe the shared working tree.
- Browser checked EN/DE/ES at 1440 × 1000 and 390 × 844, light/dark (12 states): both headings use flex-start, a 12 px gap, and zero icon offset from the heading's left edge; no heading or page-wide overflow. Visually inspected desktop English and compact Spanish dark layouts. Confirmed the four Analysis chapter headings still use space-between with their counts. Screenshot: previews/archive-area-headings.png. No routes, dependencies, commit, push, or deployment changed; physical-device and screen-reader checks not performed.

---

# Subtle scrollbars and automatic course colors · 3 November 2026

- Softened navigation scrollbar thumbs from 18% muted/30% hover blends to 10% muted/16% hover mixed with the reading background; tracks remain transparent. Applies to sidebar and page contents, so light thumbs are whiter and dark thumbs darker.
- Replaced course-id CSS color rules with navigationColorAt in src/lib/navigation-colors.ts. SiteLayout computes colors from global course-registry order before filtering by area: blue → accent/teal → purple → coral, repeating. Chapters/groups and active lessons inherit the parent course color and tint. Current assignments are retained. Append-only growth preserves them; reordering deliberately changes them. Mathematical figure roles are untouched. Documented the contract in DESIGN-SYSTEM.md and development.md.
- Direct checks verified the first eight assignments, wraparound, invalid indices, and balanced distribution over 101 positions (counts differ by at most one). Node 24 production build passed: 173 pages, 147 indexed lessons, 12,320 local links/assets and existing mathematical/content/library/contrast checks.
- Browser at 390 and 1440 px, EN/DE/ES, light/dark (12 states): consistent three-course token mapping, correct theme-dependent scrollbar blends, no page-wide overflow. Expanded course branches and visually inspected the dark scrollbar. Screenshot: previews/navigation-colors-scrollbar.jpg. Physical scrollbar dragging, screen readers and OS scrollbar-preference variants were not independently exercised. No routes or localization mechanics changed.
- No commit, push or deployment performed.

---

# Fainter navigation details · 3 November 2026

- Removed the sidebar's vertical article divider. Reduced colored course rails from 2 px to 1 px. Navigation scrollbar thumbs now blend the muted color at 18% at rest and 30% on hover/focus, retaining transparent tracks and native scrolling. Updated the design guide and refreshed the course-color rollback patch so it preserves these independent divider/scrollbar refinements.
- Node 24.22.1 production build passed: no Astro diagnostics, library/content and generated-math checks, 173 static pages, 147 indexed lessons, 12,308 local links/assets, and contrast checks. No route, localization, dependency, or behavior change.
- Browser checked EN/DE/ES at 1440 × 1000 and 390 × 844 in both themes (12 states): computed sidebar divider 0 px, all three course rails 1 px, and no page-wide overflow. Resting scrollbar colors resolve to the 18% mix in both themes. Expanded a long desktop branch and verified a scrollable sidebar with the 30% focus mix; visually inspected the dark appearance. Screenshot: previews/navigation-faint-dark.png. Native scrollbar rendering can vary by operating system. No new commit, push, or deployment.

---

# Course navigation color trial · 3 November 2026

- First committed the existing navigation cleanup as `2901665`: localized header-home behavior, removal of duplicate archive navigation, quiet scrollbars, related guide/verification notes, and two existing screenshots. Staged only navigation changes, including selected CSS/documentation changes; unrelated content and interaction edits were excluded. The Node 24 production build passed before committing.
- The uncommitted trial assigns stable blue/teal/purple colors to Linear Algebra/Analysis/Learning Methodology. Added `data-course` to each course branch; shared tokens color course and subsection headings, overview links, continuous course rails, active lessons, and their dots. Course headings have stronger weight and a 44 px minimum height. Desktop headings stick at the sidebar edge while their expanded branch scrolls. Existing labels, grouping, stored expansion state, URLs, and active-ancestor reveal remain intact.
- Final Node 24.22.1 production build passed: no Astro diagnostics, library/content checks, 173 static pages, 147 indexed lessons, 12,308 checked links/assets, both-theme contrast checks, and generated-math checks. Totals describe the shared working tree. No route, localization, or dependency changes.
- Browser: all three courses in EN/DE/ES at 1440 × 1000 and 390 × 844, light/dark (36 states): every course heading and active lesson had the expected computed color, active ancestors were open, and no page-wide overflow occurred. Opened the compact menu in every tested course/language. Exercised keyboard Enter collapse/reopen, desktop lesson navigation, and compact lesson navigation. Verified a long Analysis branch scrolls with its course title at y=76, matching the sidebar top. Visually inspected the light desktop course comparison and compact Spanish learning branch. Saved previews/course-navigation-desktop.png, previews/course-navigation-compact.png, and previews/course-navigation-sticky.png.
- A transient preview 404 occurred during the language sweep; reload restored the localized page and the completed sweep passed. No usability study, physical touch, screen-reader, or print check. The color trial remains uncommitted; no push or deployment. Its isolated implementation patch is ../docs/history/course-navigation-color-trial.patch; applying it in reverse from the repository root removes only the trial code, preserving other workspace edits.

---

# Implication comparison refinement · 3 November 2026

- Replaced boxed table-header selectors and repeated operation names with formula-only headers, retaining localized accessible names. Selection stays in the top comparison controls. A/B headers use KaTeX. Reduced implication-panel vertical padding/margins, formula spacing, and table row padding; kept horizontal room with a full-width table and a compact-screen local scroll minimum.
- Column tint now mixes 6% accent with transparency; row tint uses 4% muted. The active output has a larger bold digit and no outline. Existing blue/teal truth-value colors are preserved. Updated representation-library.md to describe the revised selection contract.
- Node 24.22.1 production build passed: Astro diagnostics, library/content checks, 173 pages, 147 indexed lessons, 12,308 local links/assets, contrast and math-copy checks. git diff --check passed.
- Browser exercised all four operations over all four input assignments (16 states): exactly one active cell, matching status output, no cell outline. Reset returned to implication and inputs 0/0. EN/DE/ES checked at 1440 × 1000 and 390 × 1000 in both themes: six KaTeX headers, no header buttons, correct selection via keyboard Enter, no KaTeX errors or page-wide overflow. Visually inspected desktop English dark and compact Spanish dark. Screenshot: previews/implication-table-refined.png.
- No routes, dependencies, or mathematical truth functions changed. No commit, push or deployment. Other workspace edits preserved.

---

# Remove title subtitles · 3 November 2026

- Removed visible description/tagline paragraphs from the shared lesson, archive, course and search page headings, chapter headings, course/lesson overview entries, and authoring-gallery heading. Removed the generic course index introduction and unused lead/chapter-description/index-intro CSS. Metadata descriptions remain in frontmatter/configuration and SiteLayout's meta description. Article explanations, math, exercises and captions were not edited by this task. Updated DESIGN-SYSTEM.md to make subtitle-free headings the ongoing contract.
- Node 24 production build passed: 173 pages, 147 indexed lessons, 12,308 local links/assets, existing content/library/contrast checks and mathematical-notation checks. Parsed all 164 pages using the shared layout: no lead/chapter-description/index-intro blocks; all retain nonempty description metadata.
- Browser production preview: Logical connectives, archive overview, and Analysis course overview in EN/DE/ES at 390 and 1440 px in both themes (36 states) had no subtitle blocks and no page-wide overflow. Visually inspected the requested Logical connectives page. Screenshot: previews/no-title-subtitles.jpg. Routes/localization mechanics unchanged, so no prefix rebuild for this presentation change.
- No physical-device or screen-reader check for this rendering-only change. No commit, push or deployment.

---

# Combined archive-home logo · 3 November 2026

- Removed the Study notes label, its three unused translations, and label-only CSS. The shared SiteLayout keeps one native anchor around the book icon and full myNotes wordmark, with explicit wordmark grouping, a 44 px click area, and constrained SVG sizing. Its href continues to use localeUrl(locale), returning to the archive overview rather than a course or external site. Updated the canonical header contract in DESIGN-SYSTEM.md.
- The inspected source already used one localized home anchor; the reported inconsistent external navigation was not reproduced. No external destination or separate Study notes anchor was found in the canonical header.
- Node 24 production builds passed at the root, with BASE_PATH=/myNotes, and again at the root to restore normal local use: 173 pages, 147 indexed lessons, 12,308 links/assets and existing library/content/contrast checks. Parsed every generated page with the shared header: all 164 contained exactly one home anchor wrapping both icon and name, with text exactly myNotes and the correct localized/root-prefixed href.
- Browser: nine actual logo navigations from Bloom, Analysis overview, and matrix-product lessons across EN/DE/ES landed at /, /de/, or /es/ respectively; each destination showed all three course cards. Clicked both book-icon and wordmark descendants. Checked 390 and 1440 px in both themes across three locales (12 layouts): one logo, no Study notes text, no page-wide overflow. Screenshot: previews/header-home-link.jpg.
- Physical-touch and screen-reader checks were not performed. Repository-prefix navigation was checked in generated output; browser clicks used the normal root preview. No commit, push or publication.

---

# Navigation cleanup · 3 November 2026

- Removed the top-level archive Overview link duplicated by the localized myNotes wordmark. Retained distinct course overview links. Removed unused archive-link CSS. Sidebar and page-contents scrollbars now have thin translucent thumbs, transparent tracks, and stronger hover/focus visibility using shared theme colors; native scrolling is retained. Updated DESIGN-SYSTEM.md.
- Fixed build-blocking extra dollar delimiters inside existing Math.tex attributes in the three recap counterparts and inside display-math blocks in the three composition counterparts. These were present in unrelated workspace edits; surrounding content was preserved.
- Node 24.22.1 production build passed: Astro diagnostics, library/content checks, 173 static pages, 147 indexed lessons, 12,301 local links/assets and theme contrast checks. git diff --check passed.
- Browser checked EN/DE/ES matrix lessons at 1440 × 1000 and 390 × 1000 in both themes: duplicate link absent, all three course overview links retained, wordmark targets the correct locale, no horizontal page overflow. Opened the compact menu in each locale. Computed scrollbar tracks are transparent; thumb opacity is 35% at rest and 65% with keyboard focus. Expanded the second chapter to confirm a scrollable desktop sidebar and visually inspected its dark scrollbar. Screenshot: previews/navigation-scrollbar-desktop.png.
- No commit, push or deployment. Browser checks used the available macOS browser; other operating systems may render native scrollbar dimensions differently.

---

# Truth-table value colors · 3 November 2026

- Added blue `0` / teal `1` styling using the existing semantic tokens. The Markdown table transform marks binary-only Analysis table bodies in all locales; LogicLab marks initial and regenerated implication/NAND cells. Selected rows, columns, and outlined cells retain value colors. Other numeric tables and Boolean mathematics remain unchanged. Updated the representation guide and design system.
- Final Node 24.22.1 production build passed: Astro 0 errors/warnings/hints, library/content checks, 173 static pages, 147 indexed lessons, 12,465 local links/assets. Expanded the existing contrast checks to include blue text on the teal selected-column background (60 pairs across both themes).
- Browser checked logical connectives, implication/contraposition, and NAND in EN/DE/ES at 1440 × 1000 and 390 × 844, light/dark: 36 layout states and 672 binary cell checks, all with correct computed colors and no page-wide overflow. Checked all seven operation selectors with input toggles in English in both themes, plus reset and a German implication reset; no incorrect value colors observed. Inspected desktop dark and compact light layouts; tables retain local horizontal scrolling. No console errors observed in the final checked page. Screenshots: previews/truth-values-desktop-dark.png and previews/truth-values-compact-light.png.
- No route, translation, dependency, or public component API change. Physical touch, screen readers, and printing were not tested. No commit, push, or deployment performed; unrelated workspace changes preserved.

---

# Irrationality of √2 and proof methods · 3 November 2026

- Read and rewrote the complete contradiction/irrationality lesson in EN/DE/ES, preserving stable identities and unreviewed status. Added the purpose of proof, a four-stage natural-number example, a self-contained parity lemma by contraposition, six justified steps for √2, a comparison of proof methods, a complete descent explanation, and two reference-answer exercises including the √4 boundary case. Authoring comments distinguish expanded teaching material from the source example.
- Checked the algebra and logical dependencies: reduction is available for every rational; q is nonzero; even-square implies even-integer by the odd-square calculation; substitution gives q² = 2k²; both entries even contradict gcd = 1. For √4 substitution instead gives k² = q² and does not force the denominator even. Descent uses least positive denominator, with no assumption of reduction.
- Node 24.22.1 production build passed: Astro 0 errors/warnings/hints, all library/content checks, 173 pages, 147 indexed lessons and 12,465 local links/assets plus contrast checks. git diff --check passed. An additional isolated root build was used for browser QA because shared dist output changed during verification.
- In the isolated production preview, checked EN/DE/ES at 1440 × 1000 and 390 × 1000, light/dark (12 states): all six proof steps present, no KaTeX errors, no page-wide horizontal overflow. The methods table scrolls locally on compact screens. Keyboard Enter opened the √4 reference answer in each locale at both sizes. Visually inspected desktop English proof in dark, methods table in light, and compact Spanish dark. Screenshot: previews/irrationality-proof-desktop.png.
- No routes, shared components, or dependencies changed. This is an authored explanation, not a completed external mathematical or translation review. No commit, push or deployment performed. Other workspace changes preserved.

---

# Bloom minimal styling · 3 November 2026

- Removed left-edge accent stripes from the six tier buttons and the example panel. Removed the topic label and interaction instructions above the tiers, including their unused CSS and script lookup. Colors, action descriptions, selection/focus feedback, prompts and input behavior remain.
- Updated the learning guide and appended the presentation change to ../docs/history/bloom-taxonomy.md.
- Final canonical Node 24 production build passed: 173 pages, 147 indexed lessons, 12,465 local links/assets and existing content/library/contrast checks. Initial builds encountered concurrent dependency changes and unrelated rotation type/runtime errors; those were corrected by other work before the successful final build. This task did not edit rotation components.
- Browser QA used a temporary source snapshot while the shared checkout was changing: EN/DE/ES at 390 and 1440 px in light/dark (12 states), no overflow, no introductory labels, and no accent stripe borders. Verified selection and captured the simplified graphic. Then opened the final canonical production preview on port 4321 and checked Analyze selection and removed introductory lines. Screenshot: previews/bloom-minimal-desktop.jpg. Temporary preview stopped afterward.
- No physical-touch, screen-reader or print checks for this styling-only change. No commit, push or publication.

---

# Implication comparison columns · 3 November 2026

- The implication lab now shows all four truth-table output columns simultaneously, with localized names and formulas in clickable headers. Existing selectors and header buttons highlight the selected column; an outlined cell identifies the current input result. Static values use the shared Boolean model, and input changes preserve the table DOM. NAND keeps its existing selected-output table.
- Node 24.22.1 production build passed: Astro 0 errors/warnings/hints, library/content checks, 173 pages, 147 indexed lessons, 12,459 local links/assets and contrast checks. No dependencies or routes changed. Updated the representation-library contract.
- Browser tested EN/DE/ES at 1440 and 390 px in light/dark (12 states). Independently checked all 16 truth-table results, clicked all four column headers, checked five highlighted column cells and one active intersection, changed A/B, reset, and selected a header using keyboard Enter. No page-wide overflow or page errors. Compact tables scroll locally; desktop displays all columns together. NAND NOT/AND/OR row counts still update correctly.
- Visually inspected desktop and compact dark screenshots: previews/logic-columns-1440.png and previews/logic-columns-390.png. Physical touch, screen-reader output, print and JavaScript-disabled browser mode remain untested. Initial four-column content is server-rendered. No commit, push or deployment performed; unrelated workspace changes preserved.

---

# Shared lesson paragraph width · 3 November 2026

- Removed both `.prose > p` character-width caps (the original 68ch rule and the later effective 78ch override) from shared site.css. Lesson body paragraphs now fill the same responsive article container as display mathematics and figures. Updated DESIGN-SYSTEM.md to record this requested layout change.
- Node 24.22.1 production build passed: Astro 0 errors/warnings/hints, library/content checks, 173 static pages, 147 indexed lessons, 12,455 local links/assets and text contrast checks in both themes. Existing unrelated workspace changes were preserved.
- Checked the built matrix-multiplication lesson in EN/DE/ES at 1440 × 1000 and 390 × 1000, both themes (12 states). Every direct prose paragraph matched its article width: 900 px desktop and 333 px compact. No page-wide horizontal overflow. Visually inspected desktop English light and compact Spanish dark. Screenshot: previews/paragraph-width-desktop.png.
- This check covers the shared body-paragraph layout; component-specific captions and header leads retain their own typography. No commit, push or deployment performed.

---

# Matrix multiplication as column combinations · 3 November 2026

- Added a visible second method to the EN/DE/ES matrix multiplication lessons, preserving the existing row-by-column interaction and all earlier content. Expanded each right-hand column in the standard basis, applied linearity, and calculated all three product columns as weighted sums of the left-hand columns using the existing example. Independently recalculated the nine product entries. Review status remains unreviewed.
- Node 24.22.1 production builds passed at the root and with BASE_PATH=/myNotes; restored the normal root build. Astro reported no errors/warnings/hints; library/content checks, 173 generated pages, 147 indexed lessons, 12,455 local links/assets, and theme contrast checks passed. No dependencies, routes, or component contracts changed.
- Browser checked all three languages at 1440 × 1000 and 390 × 844 in light/dark (12 states): new section present, no KaTeX errors, no page-wide overflow. Visually inspected English desktop dark/light and Spanish compact worked vectors. The general derivation scrolls in its existing math wrapper on compact screens; numerical column calculations fit. Screenshot: previews/matrix-column-combinations-compact.png.
- Repository-prefix output passed automated checks; a separate prefixed browser server could not bind within the sandbox, so prefixed navigation was not browser-verified. Existing interaction behavior was not changed. Physical touch, screen readers, and print were not tested. No commit, push, or deployment performed; unrelated workspace changes preserved.

---

# Composition dimensions · 3 November 2026

- Replaced the nine defined-product labels with theme-aware green/teal ticks and localized accessible names. Added a tick/dash legend. Both groups of matrix dimensions now use vertically aligned membership notation in EN/DE/ES; mathematical sizes and compatibility entries are unchanged.
- Node 24.22.1 production build passed: Astro 0 errors/warnings/hints, library/content checks, 173 static pages, 147 indexed lessons, 12,455 local links/assets and contrast checks. An initial prerender attempt failed on a missing generated chunk; the complete rerun passed.
- Production-preview browser checked all three languages at 1440 and 390 px in light/dark (12 states): all nine ticks have their localized accessible label and existing accent color, with no page-wide overflow. Visually inspected the desktop dark stacked notation and table. Screenshot: previews/composing-dimensions-desktop.png. Screen-reader output and print remain untested. No routes, dependencies or shared styles changed; no commit, push or deployment performed.

---

# Mind Maps and reusable concept graphs · 3 November 2026

- Revised the full Mind Maps lesson in EN/DE/ES. Replaced calculus and linearity examples with an illustrative study-method map and a worked correction distinguishing retrieval from feedback. Explained radial mind maps versus concept maps, bounded questions, hierarchy, named direction, cross-links, conditions, source checking, reconstruction, and changed application. Preserved metadata and unreviewed status. Checked the existing Karpicke–Blunt abstract against the lesson's limited evidence claim.
- Added the typed MindMap family through Interactive and central MDX registration. Shared localized data produces HTML controls/details/relationship lists and SVG branches/cross-links. Three views, concept selection, native keyboard input, and reset stay local. The compact layout responds to available article width. The gallery demonstrates both the seven-node study preset and a separate three-node teaching graph through the custom-data API; controls are independent. No dependency added.
- Node 24.22.1 and locked dependencies: production build passed with zero Astro errors/warnings/hints; graph, existing library and content checks; 173 pages, 147 indexed lessons, 12,455 local links/assets, and existing text-contrast checks. New validation covers graph reachability, duplicate/self/missing links, localization, finite coordinates and height, bounded node rectangles, and supported routes. These are structural checks, not validation of learning outcomes or automatic layout quality.
- Browser: all three lesson languages at 1440×1000 and 390×1000 in both themes (12 layout states) fit without page-wide overflow. Inspected English and German desktop labels and Spanish/English compact controls. Exercised all three stages, pointer selection, Enter/Space selection, repeated selection, reset, and two gallery instances with independent states. No browser console errors in the checked flows. Production search for “Mind Maps” returned the lesson and opened its correct route. Fixed an observed overlapping edge label. The complete node explanations and relationship list are server-rendered; a separate JavaScript-disabled browser session was not tested.
- Screenshots: previews/mind-map-learning-desktop.jpg and previews/mind-map-learning-compact.jpg. Public API and limitations: ../docs/representation-library.md; design specification: ../docs/mind-map-interaction.md. Physical touch/pen, screen readers and print were not tested; translations still need independent human review. Routes and localization mechanics were unchanged. No commit, push, or publication performed. Concurrent edits elsewhere in the workspace were preserved.

---

# Interleaved practice example · 3 November 2026

- Defined A/B/C before the schedules as direct proof, counterexample, and contraposition within integer reasoning. Added worked examples, equally balanced blocked/mixed schedules, and three unlabelled problems with native disclosures explaining strategy selection. Compared two valid routes for one claim in the article. Kept the distinction between interleaving and broader perspective changes.
- Checked the PubMed abstracts for Rohrer, Dedrick & Burgess (2014), PMID 24578089, and Brunmair & Richter (2019), PMID 31556629. All three lesson languages now link concise findings and material-specific limits. The proof examples are explicitly authored illustrations, not research stimuli; review status remains unreviewed.
- Final production build passed on Node 24.22.1: Astro 0 errors/warnings/hints, library/content checks, 173 static pages, 147 indexed lessons in three languages, 12,455 local links/assets and existing contrast checks. No dependencies or routes changed. Used the existing npm cache to install locked dependencies offline.
- Browser checked EN/DE/ES at 390 × 844 and 1440 × 1000, light/dark (12 states): no page-wide overflow, all three method definitions and both research links present, no formula scrolling in the method legend. Keyboard Enter opened the third strategy disclosure at both widths in each language; separately checked first-task keyboard and second-task click reveals. Visually inspected desktop dark/light and compact German/Spanish layouts. No console errors observed. Screenshot: previews/interleaving-desktop.png.
- No physical touch/pen, screen-reader, print, or JavaScript-disabled browser test. Content and native disclosures are server-rendered. No commit, push or deployment performed. Other concurrent workspace changes were preserved.

---

# Bloom rectangular tiers · 3 November 2026

- Before revising, recorded the first pyramid version and retained its screenshot in ../docs/history/bloom-taxonomy.md. Read the sibling mastery-site BloomPyramid and tier styles as the reference; sibling files remain unchanged by this task.
- Replaced triangle/trapezoids with centered colored rectangles, width 60%–100%, using existing tokens. Added localized action descriptions, an example-topic label, a selected outline, and matching detail-panel color. Kept native hover/focus/click and keyboard selection, server-rendered examples, and the qualification about effectiveness rankings. No dependency/configuration or route changes for this task.
- Restored locked dependencies with npm ci and passed the final Node 24.22.1 production build: Astro 0 errors/warnings/hints, all library/content checks, 173 static pages, 147 indexed lessons, 12,455 local links/assets and existing contrast checks. Other work is present in the shared checkout; these totals describe the whole checkout.
- Browser: all six tier clicks exercised in each locale at 390 px in light/dark, plus DE/ES at 1440 px in both themes; EN desktop visually inspected in both themes. These 12 distinct locale/width/theme layouts had no page-wide overflow. Exactly one detail panel remained visible in the automated selection checks. Home selected Create, ArrowDown selected Evaluate, End selected Remember. Visually checked German compact action wrapping. Screenshots: previews/bloom-rectangles-desktop.jpg and previews/bloom-rectangles-compact.jpg.
- Physical touch/pen, screen-reader behavior, isolated hover-only input, print rendering and JavaScript-disabled browser mode remain untested. No commit, push or deployment performed.

---

# Bloom pyramid · 3 November 2026

- Replaced QuestionLens's horizontal selector with six native, clipped pyramid layer buttons using the existing question data and shared theme/spacing tokens. Added pointer-entry, focus, click, Up/Down and Home/End selection. Details sit beside the pyramid on wide screens and below it on compact screens. All examples remain server-rendered for reading without JavaScript and for print. The public component and gallery share this implementation; no dependency was added.
- Node 24.22.1 production build passed: Astro 0 errors/warnings/hints, all library/content checks, 173 pages, 147 indexed lessons in three languages, 12,445 local links/assets and existing contrast checks.
- Production-preview browser checks: all six layer clicks in EN/DE/ES at 390 px; exactly one detail panel remained visible. ArrowUp moved focus/selection from Analyze to Evaluate. All three languages at 390 and 1440 px in light/dark themes had no page-wide horizontal overflow (12 states). Visually inspected English desktop in both themes and compact German labels, including the apex. Representative screenshot: previews/bloom-pyramid-desktop.jpg.
- Physical touch/pen, screen readers, JavaScript-disabled browser mode and print output were not exercised. Hover is implemented through pointerenter; an isolated hover-only automation was unavailable. No routes or locale mechanics changed. No commit, push or deployment performed.

---

# Learning & Teaching prose revision · 2 November 2026

- Compared all 17 English methodology lessons and their German/Spanish counterparts with the two root learning-method modules, the deep-learning-method collection, and the four distinct supplied transcripts. Revised all 51 MDX article bodies using the human-prose approach, including tables, tutor prompts, exercises, and reference answers. Root source documents and sibling website files were not edited.
- Expanded the reasoning between actions: choosing a method for a diagnosed gap, novice support before independent work, worked decisions, changed retry tasks, adaptive reviews, and useful session records. Moved the Feynman exercise after its worked example and changed it to test the necessary/sufficient-condition distinction rather than repeat the same correction. Transcript guides retain source identities, attribution, missing-provenance notices, and the unverified-anecdote/evidence boundaries.
- All lesson frontmatter and second-level heading inventories remain unchanged: stable keys, titles, source metadata, prerequisites, order, publication status, and unreviewed flags are preserved. Key example expressions and review intervals were checked across EN/DE/ES. Source and sibling-file hashes match the pre-edit baseline. Only MyNotes lesson prose and its authoring/context/verification documentation changed.
- Final production build passed with Node 24.22.2 and the committed lockfile: Astro 0 errors/warnings/hints, all mathematical/library/content checks, 173 static pages, 147 indexed lessons in three languages, 12,445 local links/assets/anchors, and the existing contrast checks in both themes. npm ci reported zero vulnerabilities at installation. No dependency or configuration files changed.
- Production-preview browser checks covered all 51 revised lesson routes at 1440×1000 and 390×844 in light and dark themes: 204 unique layout states, correct page language and nonempty article in each, no page-wide horizontal overflow. Visually inspected representative desktop/mobile prose, the German dark Bloom selector, the English dark worked comparison, and the Spanish compact error table. The wide table retains its labeled local scrolling region. Exercised the revised Feynman answer disclosure in all three languages and all six German question selectors.
- Recalculated selected examples using exact rational/integer arithmetic: sequence differences and bounds for n=1..100, sampled odd-square/odd-sum identities, linearity and divisibility counterexamples, and the singular all-ones matrix. These checks test examples; numerical samples do not prove universal claims.

The prose review and structural checks are not independent human mathematical/translation approval, a full accessibility audit, physical-touch testing, or evidence of learning outcomes. All review flags remain unreviewed. Routes, localization mechanics, shared visual components, and deployment configuration were not changed; no repository-prefix rebuild was needed. No commit, push, or deployment was performed.

---

# Explanation revision

Analysis: expanded all 15 lesson bodies in EN/DE/ES with worked reasoning, strategy, boundary cases, and eight independent exercises per language. Added a localized parity-to-contradiction Flow to the √2 lesson. Learning: plain titles/descriptions for all 17 lessons per language, descriptive headings, worked cases for the main methodology lessons, and a rewritten Mind Maps lesson grounded in the supplied 6:01–8:58 transcript passage and method module. The four transcript guides retain their source discussions with shorter titles and descriptions.

RelationMap is centrally registered and included in the authoring gallery; it distinguishes a definition, consequence, and failed converse. Updated authoring and representation guidance. All published review flags remain unreviewed.

Production build: 173 pages; existing mathematical/library checks, translated formula parity, metadata, anchors, assets and contrast checks pass. Browser: all 32 English Analysis/Learning pages at 1440×1000 and all 96 localized variants at 390×844 have no page-wide overflow. Inspected the Mind Maps page in dark desktop and light compact layouts. These are layout and selected arithmetic checks, not independent human mathematical/translation review. Routes and localization mechanics were not changed. No commit or push performed.

---

# Learning & Teaching update · 2 November 2026

- Added a distinct knowledge area with a book-outline icon and one methodology course: 17 lessons in each of English, German, and Spanish. Four separate reading guides cover the four supplied transcripts; source identities distinguish the similarly named Spanish files.
- Read the source modules, 17-file protocol collection, and transcripts under Learning&Teaching/. Used all seven supplied visual references to guide code-native method comparisons, a branching learning cycle, relational map, Feynman feedback loop, practice mixing, review timeline, and problem-first comparison. No reference screenshot is copied into public learning content.
- Production and /myNotes repository-prefix builds pass with 173 static pages and 147 indexed lesson pages across three languages. Astro reports 0 errors, 0 warnings, 0 hints. Generated verification checks 12,273 local links/assets/anchors, localized counterpart formulas and metadata, and 58 existing text-contrast pairs. Existing Linear Algebra/Analysis checks still pass.
- New checks validate three process graphs (node bounds, reachability and labeled binary decisions), six localized Bloom question lenses, nine downloadable blank Markdown templates against visible template text, area/course membership, and all 51 lessons’ text-source provenance. Text sources use headings/timestamps, not fabricated page numbers.
- Browser: all 17 English lessons checked at 1440×1000, all 51 localized lesson variants checked at 390×844; no page-wide horizontal overflow. All three process graphs checked for clipped translated nodes in EN/DE/ES; none found. Inspected dark desktop cycle/map diagrams and light compact layout; the same graph data produces a semantic small-screen list, also accessible to screen readers on desktop.
- Exercised all six English question selectors, German Analyze and Spanish Create (keyboard activation), mobile menu, and language equivalence. Checked browser log contained no warnings/errors. JavaScript-free markup includes all six question panels; template disclosures use native details, and the site stores no personal learning records.
- Prefix preview: German Bloom lesson switched to Spanish while retaining /myNotes; the Spanish session Markdown template downloaded successfully, and Spanish espaciado search returned relevant Learning and Mathematics results with course filters and prefixed links. Root build and preview restored after testing.
- Updated contributor documentation, reusable gallery/catalog, source coverage and editorial boundaries. Preserved Jean’s source move to Learning&Teaching/; did not restore or stage the previous source paths.

Human review of language and educational explanations remains pending; published lessons remain unreviewed. No full accessibility, physical-touch, or browser-print audit was performed. No commit, push, or deployment was performed for this update.

---

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

## Matrix-power rotation refinement — 3 November 2026

Kept the existing lesson and public `Interactive kind="rotation"` entry point. Added a stable draggable vector tip, a visible radius-√5 orbit and four labeled stations, continuous R(θ) matrices (rounded values marked ≈), release snapping, five quarter-turn buttons including J⁴ = I, numeric angle input, keyboard movement and reset. The initial equation is server rendered. Copy is available in English, German and Spanish.

- Node 24.22.1, locked `npm ci`, final `npm run build`: passed, zero diagnostics; 173 pages, 12,465 checked local links/assets, three Pagefind languages and both-theme contrast checks.
- Library checks cover all five exact quarter-turn results, length/determinant invariants at intermediate angles, nearest-quarter snapping, the atan2 seam, angle bounds and KaTeX rendering.
- Browser: desktop pointer drag from J to near J² snapped to 180° with the −I matrix and (−2, −1). Compact pointer drag from I toward J snapped to 90°. Checked intermediate 95° R(θ), numeric 37° snapping to 0° on blur, quarter-turn buttons, Home/End, Shift+arrow movement, reset and the J⁴ identity explanation.
- Inspected desktop (1440×1100) and compact (390×844 requested viewport; 375 px content with scrollbar), light/dark themes and EN/DE/ES controls. Compact pages had equal document client/scroll widths. The final English preview reported no browser errors.
- Representative images: `previews/rotation-desktop-light.jpg`, `previews/rotation-desktop-dark.jpg`, `previews/rotation-compact-dark-de.jpg`, `previews/rotation-compact-light-es.jpg`.

Physical touch/pen devices, screen-reader output and pointer cancellation were not exercised. A prefix-build command passed, but the existing persistent preview retained root routing, so no repository-prefix browser pass is claimed; the final normal root build was restored. No commit, push or publication.

## Inline mathematical notation audit — 3 November 2026

- Audited all 147 localized lesson sources across Linear Algebra, Analysis, and Learning & Teaching; updated notation in 118 lesson files. Preserved existing unrelated workspace edits and mathematical review statuses.
- Converted plain expressions in paragraphs, lists, table headings, questions, and relevant teaching captions to explicit inline TeX. Included logical connectives, quantifiers, number domains, parity examples, sequence formulas, dimensions, and map notation. Complete expressions retain their signs and parentheses in a single math run.
- Added shared mixed-copy rendering for component strings and dynamic logic/vector feedback and shear readouts. Regression checks cover escaped ordinary text, mixed localized copy, shared macros, invalid commands, seven logic formulas, and all seven localized truth-table headings.
- Production build with Node 24 passed: 173 pages, 12,308 local links/assets, existing content/library/contrast checks, and 2,861 generated TeX annotations without damaged delimiters or control characters. Source audit found no unbalanced parentheses in inline math across the three locales.
- Browser checks: English logical-connective prose at 1440×1000 in dark mode and 390×844 in light mode; computed inline math is 18.56px beside 16px prose (1.16em). The bundled KaTeX default no longer overrides the shared scale. No page-wide horizontal overflow; the compact truth table scrolls locally.
- German implication activity: selecting the converse updates the displayed TeX to B ⇒ A and retains KaTeX in feedback, with no browser console warnings/errors. Spanish grouping captions use KaTeX in both associativity and distributivity figures.
- Number-domain figure checked at desktop and compact widths: all 14 embedded math runs render, fractions remain inside the nested sets, and neither viewport has page-wide overflow. Representative screenshots: `previews/inline-math-desktop-dark.jpg` and `previews/inline-math-compact-light.jpg`.
- Plain metadata titles/descriptions and native SVG geometry labels remain plain strings. These checks verify typography/rendering and selected interactions, not a fresh mathematical or translation review. No commit, push, or deployment performed.

## Centered number-set boxes — 3 November 2026

- Reduced the nested number-set diagram to 50% of the available article width and centered its outer box. A 320px readable minimum is capped at the available width on compact screens; typography and caption remain unchanged.
- Production build passed with Node 24: 173 pages, 12,308 local links/assets, and 2,861 TeX annotations verified.
- Browser: at 1440×1000, the box is 450px within a 900px figure with zero center offset (dark theme). At 390×844 it is 320px within a 333px figure, also centered, with no page-wide overflow (light theme).
- Screenshot: `previews/number-domains-centered-desktop.jpg`. No commit, push, or deployment.

## Number-set definitions and proofs — 3 November 2026

- Expanded the existing number-set lesson in EN/DE/ES with definitions of all five sets, the convention excluding zero from the naturals, the meaning of strict inclusion, and witnesses distinguishing adjacent sets.
- Added worked terminating/repeating decimal conversions, a self-contained reduced-fraction proof of the irrationality of sqrt(2) including the odd-square argument, and a proof that i and 2+3i are not real. Linked the existing expanded irrationality lesson. Added classification and irrational-sum exercises with disclosed reference answers. Marked these as authored additions in source comments; review status remains unreviewed.
- Independently checked fraction reductions (125/1000 = 1/8, 27/99 = 3/11, 6/9 = 2/3), the parity identity, the reduced-fraction contradiction, and the real-square obstruction. These checks do not establish an independent editorial or formal mathematical review.
- Equation parity now normalizes digit-surrounded TeX decimal commas to decimal points, allowing localized numerical notation while retaining value/equation comparison.
- Node 24 production build passed: 173 pages, 12,320 links/assets, 3,051 TeX annotations and the existing type/library/content/contrast checks. git diff --check passed.
- Browser: English decimal proof at 1440×1000 (light), German and Spanish at 390×844 (dark); no page-wide overflow. German display decimals use commas. Spanish reference-answer disclosure opens and retains KaTeX; browser logs contained no warnings/errors. The centered number-set diagram is preserved.
- Screenshots: previews/number-sets-proofs-desktop.jpg and previews/number-sets-practice-compact-es.jpg. No commit, push, or deployment.
