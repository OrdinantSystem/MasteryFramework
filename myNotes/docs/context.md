# Context for future sessions

Updated 2 November 2026. This file records current state; AGENTS.md and DESIGN-SYSTEM.md define the rules.

## Established

- Jean approved the quiet reading layout, dark/light themes, EN/DE/ES localization, expandable sidebar, centered content/tables, visual lesson previews, colored KaTeX, and static search.
- The sole application moved from test/ to my_notes_web/. Update source here; do not recreate the prototype.
- The representation library now has public Interactive and VectorFigure APIs, typed vector presets, reusable SVG primitives, configurable matrix multiplication, existing rotation/shear demonstrations, an executable /library/ gallery, and numerical/configuration checks.
- Vector examples include linear-combination, rank-collapse, and coordinate-basis presets. The third proves reuse with a new basis/target and a horizontal dependent line.
- Lesson metadata, translations, MDX registration, source-page bounds, counts, and navigation validation have shared contracts. Read the authoring guide rather than copying an entire page implementation.
- Worksheet 2.1 adds nine lessons per language (seventeen total), two chapter branches, explicit source ids/page validation, MatrixComparison, configurable Flow nodes, and an area/orientation preset. See source-ingestion.md for coverage and source corrections.
- Analysis I adds 15 lessons per language from six visually inspected one-page posters. At that stage the archive had two courses, 32 lessons per language, course-specific overviews/prerequisites/numbering, and multilingual search. New number-domain, expression-tree, implication, and NAND assets are documented in representation-library.md.
- Learning & Teaching now forms a second knowledge area with one methodology course: 17 lessons per language (including four distinct transcript guides), 49 total lessons per language. The area/course registry, generic new-course routes, text-source locations, reusable process graphs, static method figures, Bloom question lens, and nine blank Markdown downloads are documented in learning-teaching.md. Jean moved the original study documents and deep-learning-method folder into Learning&Teaching/; do not undo that source reorganization.
- All answers remain local. The site collects no submissions. No GitHub Pages deployment is active.

## Open work

1. Human review of translations and mathematical explanations. Current review flags remain unreviewed; visual approval does not change them.
2. Future subjects must extend the existing course registry and validated source/chapter metadata. The first Linear Algebra concept map remains scoped to its original chapter.
3. Physical touch/pen and screen-reader checks. Mouse, numeric, keyboard, and responsive checks are recorded in the verification file; these do not imply a full accessibility audit.
4. Actual repository Pages URL, authorized workflow activation, and publication. The template uses current folder paths but is inactive.
5. New interaction families only when a real teaching relationship requires them. No plotting package, React runtime, or general game engine is required by the current library.

## Resume procedure

Read ../AGENTS.md and ../DESIGN-SYSTEM.md, then the task-specific guide. Inspect the relevant source and current verification record. Use Node 24, build from my_notes_web/, and verify the outcome. Update this file when an accepted decision or a genuine boundary changes; keep transient commands/logs out of it. Do not infer a pending task from historical plans or implement the open-work list without a relevant request.

Editorial revision: Analysis lessons now explain proof strategy and intermediate reasoning and include independent exercises. Learning Methodology uses subject titles and descriptive headings, concrete study cases, and a substantially expanded source-grounded Mind Maps lesson with RelationMap. Preserve this explanatory approach; do not replace worked reasoning with brief summaries or promotional headings.
