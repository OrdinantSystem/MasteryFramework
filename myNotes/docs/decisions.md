# Accepted decisions

| Decision | Reason and consequence |
| --- | --- |
| One canonical application in my_notes_web/ | The approved test became the standard. Preserve one implementation; new subjects reuse it. |
| Astro static + MDX | Git-tracked content produces complete static pages, while shared components handle presentation. |
| Custom restrained shell | Preserve the approved learning-focused layout instead of introducing another theme or marketing template. |
| English default, German/Spanish counterparts | Matching stable keys connect concepts across languages. Published translations are checked together. |
| KaTeX and semantic color macros | Equations, diagrams, and controls share roles across both themes. |
| Pagefind | Language-specific full-text search over static published lessons. |
| Native SVG/TypeScript activity library | Reuse small mathematical models and primitives with no new runtime/framework dependency. |
| Validated named presets | Change vectors, targets, bounds, and localized teaching copy without copying controllers or encoding answers separately. |
| Public Interactive and VectorFigure components | Lessons use stable author-facing APIs registered once in mdx.ts. Explorer and MatrixProduct stay as compatibility names. |
| Executable /library/ gallery | Authors can inspect working assets and copy tested usage syntax. It stays out of learner search/navigation. |
| Dynamic lesson counts + exact navigation coverage | Adding a lesson should not require rewriting test constants, and no published page should disappear from the tree. |
| Documentation separated by task | README indexes current guides; context records state; design system defines presentation; historical plans are noncanonical. |
| Internal library, no separate npm package | Keep versioning and examples with the consuming site until a second actual consumer justifies packaging. |
| Static hosting still inactive | Local build and source organization are complete; deployment remains a separate authorized task. |

Do not treat a future possibility in research/history as an accepted decision. Add a dated rationale here when changing an architectural contract, and update the corresponding guide/source.
