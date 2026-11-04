## Analysis visual teaching update · 3 November 2026

All twenty Analysis I lessons now include either a new graphical explanation or improved guidance for an existing representation, in EN/DE/ES. See [the full audit](analysis-visuals.md) for the five focused Interactive kinds, four Flow-based proof presets, finite/infinite evidence boundaries and exact additive preservation contract. `analysis-visual-coverage.json` preserves the previous independently reviewed summary byte for byte underneath the registered additions; do not silently renew either review record after changing learning material. The production build and 240 localized/theme/viewport browser states passed; the detailed evidence is in `../my_notes_web/VERIFICATION.md`. Changes remain local and uncommitted.

# Context for future sessions

## Publication checkpoint · 4 November 2026

Jean authorized committing all pending website changes and pushing them to `main`. The release includes the Analysis teaching/visual work and its preserved evidence, the English/German-only application, and shared page/navigation scrollbar refinements. The existing GitHub Pages workflow builds relevant main pushes with the `/MyNotes` prefix and publishes the static artifact. Older dated notes below describing local/uncommitted work record earlier checkpoints.

## Supported languages · 4 November 2026

Jean requested removal of the Spanish website. English (unprefixed) and German (`/de/`) are the only active languages. Spanish lessons, course guides, shared UI/figure copy, aliases and template downloads have been removed from the application. Search and published counterpart checks require only EN/DE. The 54 lessons per language remain. Do not add Spanish translations for future changes. Older dated notes and review ledgers below describe historical three-language editions, not current requirements. Historical sources and review receipts remain frozen outside the loader/public output; `localization-retirement.json` records the mechanical shared-copy migration separately from semantic review.

## Analysis teaching implementation · 4 November 2026

Jean approved the EGM-reviewed first batch for a first-year, first-semester mathematics and physics student. The overview and predicates/quantifier-order/convergence pilots have focused explanations and independent tasks, with small notation, sequence and no-limit-proof bridges in EN/DE/ES. Four focused presentations reuse existing models. Read [analysis-teaching.md](analysis-teaching.md) before editing the 14 active locale sources: actual-version review and disclosure-role checks precede historical reconstruction. Old tasks/proofs/answers/anchors remain. ReviewStatus stays unreviewed; student trials are not established. Further blanket revision, Git writes and publication are separate decisions.

Updated 3 November 2026. This file records current state; AGENTS.md and DESIGN-SYSTEM.md define the rules.

## Established

- Jean approved the quiet reading layout, dark/light themes, EN/DE localization, expandable sidebar, centered content/tables, visual lesson previews, colored KaTeX, and static search.
- The sole application moved from test/ to my_notes_web/. Update source here; do not recreate the prototype.
- The representation library now has public Interactive and VectorFigure APIs, typed vector presets, reusable SVG primitives, configurable matrix multiplication, existing rotation/shear demonstrations, an executable /library/ gallery, and numerical/configuration checks.
- Vector examples include linear-combination, rank-collapse, and coordinate-basis presets. The third proves reuse with a new basis/target and a horizontal dependent line.
- Lesson metadata, translations, MDX registration, source-page bounds, counts, and navigation validation have shared contracts. Read the authoring guide rather than copying an entire page implementation.
- Worksheet 2.1 adds nine lessons per language (seventeen total), two chapter branches, explicit source ids/page validation, MatrixComparison, configurable Flow nodes, and an area/orientation preset. See source-ingestion.md for coverage and source corrections.
- Analysis I adds 15 lessons per language from six visually inspected one-page posters. At that stage the archive had two courses, 32 lessons per language, course-specific overviews/prerequisites/numbering, and multilingual search. New number-domain, expression-tree, implication, and NAND assets are documented in representation-library.md.
- The Learning & Teaching expansion introduced a second knowledge area with one methodology course: 17 lessons per language (including four distinct transcript guides), bringing the archive at that stage to 49 lessons per language. The area/course registry, generic new-course routes, text-source locations, reusable process graphs, static method figures, Bloom question lens, and six blank Markdown downloads are documented in learning-teaching.md. Jean moved the original study documents and deep-learning-method folder into Learning&Teaching/; do not undo that source reorganization.
- All answers remain local. The site collects no submissions. GitHub Pages publishing is configured in .github/workflows/mynotes-pages.yml for https://ordinantsystem.github.io/MyNotes/.

## Current Analysis I organization

Analysis now has six sections and twenty canonical lessons per language, plus review inside its overview. The sidebar is course → section → lesson, with no subgroup folder. Boolean algebra and circuits follow the core convergence route as optional applications. The archive has 54 lessons per language; its 195 HTML documents include 66 compatibility documents preserving the retired Analysis URLs, rather than 53 separate teaching pages per language. Read [analysis-organization.md](analysis-organization.md) and its coverage ledger before revising this material. Exact former sources are retained under docs/history outside the loader; all distinct practice, hints, answers and tables remain.

## Initial Analysis 0 migration — historical baseline

The authored A0.1.1–A0.1.9 material is integrated through 38 new focused lessons per language and expansions of existing pages. At that stage Analysis had 53 lessons per language and the archive had 87. The [coverage ledger](analysis-zero-coverage.json) still accounts for all 52 original lessons and 28 companion concepts; it now points to the consolidated destinations. The original review receipts describe that baseline, not a new independent review of the consolidation. Read [analysis-zero.md](analysis-zero.md) before revising this material. Existing routes and the original Boolean worksheet proof requirements remain intact; numeric ordering and chapter placement now follow the prerequisite route. MyNotes owns the public teaching narrative for this migration; Obsidian preserves original drafts and private learning evidence, with its course index pointing to published counterparts. No automatic two-way lesson sync is established.

Markdown display equations and the shared Math display component scroll locally with labeled keyboard-focusable regions, avoiding mobile-wide overflow. Independent review and concrete execution results belong in VERIFICATION.md; publication or a passing build does not promote unreviewed mathematical/translation status.

## Open work

1. Human review of translations and mathematical explanations. Current review flags remain unreviewed; visual approval does not change them.
2. Future subjects must extend the existing course registry and validated source/chapter metadata. The first Linear Algebra concept map remains scoped to its original chapter.
3. Physical touch/pen and screen-reader checks. Mouse, numeric, keyboard, and responsive checks are recorded in the verification file; these do not imply a full accessibility audit.
4. For each authorized main push, verify the exact GitHub Actions build/deploy run and the resulting live content at https://ordinantsystem.github.io/MyNotes/; the root workflow controls deployment.
5. New interaction families only when a real teaching relationship requires them. No plotting package, React runtime, or general game engine is required by the current library.

## Resume procedure

Read ../AGENTS.md and ../DESIGN-SYSTEM.md, then the task-specific guide. Inspect the relevant source and current verification record. Use Node 24, build from my_notes_web/, and verify the outcome. Update this file when an accepted decision or a genuine boundary changes; keep transient commands/logs out of it. Do not infer a pending task from historical plans or implement the open-work list without a relevant request.

Editorial revision: Analysis lessons now explain proof strategy and intermediate reasoning and include independent exercises. All 17 Learning Methodology lessons in EN/DE/ES have a source-grounded prose revision covering the complete article, tables, prompts, exercises, and reference answers. Explanations now develop decisions and examples rather than only listing instructions; the Feynman follow-up checks necessary versus sufficient conditions instead of repeating the worked example. Preserve the named relationships in Mind Maps, research/claim/protocol boundaries, adaptive timing, assistance records, and delayed assessment. Do not replace worked reasoning with brief summaries or promotional headings.

Mind Maps (3 November 2026): both supported lesson languages use a learning-method example and a reusable directed concept graph. Interactive kind="mind-map" accepts a study-session preset or typed custom graph data; the gallery demonstrates a separate teaching graph with independent controls. See representation-library.md and mind-map-interaction.md. Concept-map claims remain illustrative and source-checked, not guarantees of learning outcomes.
