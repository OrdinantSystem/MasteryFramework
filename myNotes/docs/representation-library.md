# Reusable representation library

Episode 05 adds `Interactive kind="patterns" preset="continuations|next-test" id="unique-id"` and six `ReasoningFigure kind="pattern-…"` variants: history, machines, rules, test, forecasts and challenge. They distinguish observations from conditional predictions, compare candidate rules and identify an informative test. Shared Flow supplies the observation/conjecture/prediction chain. All eight new presets/variants run in the gallery. See [the mathematical, evidence and accessibility contract](reasoning-patterns.md).

Episode 04 adds `Interactive kind="parity" preset="even-sum" id="unique-id"` and ten `ReasoningFigure kind="proof-…"` variants. The explorer combines independently selected 0–6 pair counts, including empty collections, while preserving all counters. Static views distinguish examples from proof, show pair templates, integer closure, signed multiples and the extra pair in an odd sum. All eleven run in the gallery. See [the source, mathematical and accessibility contract](reasoning-proofs.md).

Episode 03 adds `Interactive kind="equations" preset="stones|balance|identity|square|restriction|division|distance" id="unique-id"` and `ReasoningFigure kind="squared-solutions"`. All eight representations render in the gallery. They reuse native controls, restricted KaTeX/MathText, tokens and escaped SVG while preserving the real-domain and solution-set distinctions. See [the state, input, mathematical and accessibility contract](reasoning-equations.md).

Episode 02 adds `Interactive kind="algebra" preset="tables|grouping" id="unique-id"` and eight `ReasoningFigure` kinds: `room`, `table-pattern`, `impossible-chairs`, `letter-roles`, `domains`, `ticket-fees`, `heating`, and `candles`. Counts, grouping, totals and feedback share a pure model; both explorers provide a 0–6 whole-table range, numeric entry and reset. The finite control range does not restrict the algebraic rule. All ten representations run in `/library/`. See [the source, state, accessibility and mathematical contract](reasoning-algebra.md).

The Art of Reasoning adds `Interactive kind="reasoning" preset="appearance|units|water" id="unique-id"` and `ReasoningFigure kind="opening|collections|objects|singleton|singletons|matching|addition|overlap|pairs|function|symbols|process"`. These finite counting/unit/merging comparisons and static diagrams share the standard tokens and controls; process uses Flow. See [the state, source-preservation and accessibility contract](reasoning.md). All variants run in the gallery.

Analysis teaching presentations introduced on 4 November 2026 use the same models with a closed optional `presentation` prop. Supported pairs are candidates/equation/input, quantifiers/keys/witnesses, sequence/device/terms and sequence/reciprocal/tail. Default full preserves the explorer. Each view has coherent localized instructions, actions, readouts, static rendering and reset; unsupported pairs fail initialization. See [the contract and gallery obligations](analysis-teaching.md); bind review receipts to shared source versions.

The internal library is part of my_notes_web and shares its version/lockfile. Open the executable [gallery](http://127.0.0.1:4321/library/) after a production build. It demonstrates the actual APIs below, including a second basis using the same vector engine and a matrix with a different inner dimension.

## Choose the appropriate asset

Analysis I additionally uses five focused kinds through Interactive: `candidates` (equation/positive/witnesses), `conditions` (connectives/construction/demorgan), `number-line` (bounds/complement/counterexample/distance), `quantifiers` (keys/nested), and `sequence` (reciprocal/device/alternating/zero). Each requires a unique id and a listed preset. `AnalysisProof preset="equivalence|scope|contradiction|complement"` supplies localized data to the existing Flow renderer. See [the visual audit and specifications](analysis-visuals.md) for state bounds, exact mathematical feedback, finite-sample limitations, accessibility and preservation contracts. Every preset has a working gallery example.

| Asset | Public lesson API | Reuse level |
| --- | --- | --- |
| Draggable linear combination | Interactive kind="vectors", preset="linear-combination" | Configurable basis, target, bounds, grid, localized teaching copy |
| Area and orientation | Interactive kind="vectors", preset="area-and-orientation" | Data variant comparing signed area, collapse, and orientation |
| Static matrix comparison | MatrixComparison | Data-driven unit-square images, determinant captions, and accessible case descriptions |
| Coordinate basis | Interactive kind="vectors", preset="coordinate-basis" | Another data variant of the same engine |
| Rank/column-space exploration | Interactive kind="vectors", preset="rank-collapse" | Configurable nonzero first column, movable second column, comparison context |
| Selectable matrix product | Interactive kind="matrix-product" | Compatible rectangular left/right matrices, up to 6 rows/columns per visual |
| Quarter-turn powers | Interactive kind="rotation" | Draggable rotation with quarter-turn snapping and live matrices |
| Horizontal shear | Interactive kind="shear" | Fixed square, adjustable horizontal shear |
| Static labeled vectors | VectorFigure | Data-driven arrows, starts/ends, labels, roles, extent; no browser controller |
| SVG primitives | lib/interactive/plane.ts | Coordinates, grid, arrows, polygon points, guides, clipped origin line |

The catalog is src/lib/interactive/catalog.ts; working examples live in src/pages/library.astro. Central MDX registration is src/components/mdx.ts. Pure exports are available from src/lib/interactive/index.ts. Browser controllers import focused modules so unrelated families do not load accidentally. Explorer and MatrixProduct remain compatibility names for existing lessons.

## Embed an existing asset

```mdx
<Interactive kind="vectors" preset="linear-combination" id="addition-example" />
<Interactive kind="vectors" preset="rank-collapse" id="rank-example" />
<Interactive kind="matrix-product"
  left={[[1,2,3],[0,-1,2]]}
  right={[[1,0],[2,1],[0,3]]} />

<VectorFigure
  description="Two displacements placed head to tail"
  caption="The second displacement starts at the first tip."
  vectors={[
    {to:[2,1],label:"u",role:"accent"},
    {from:[2,1],to:[3,3],label:"v",role:"blue"}
  ]} />
```

IDs are stable anchor/accessibility identities, not filenames. Give every vector instance a unique id, including repeated presets on one page. Static vectors use mathematical coordinates (positive y up); from defaults to the origin. Roles are accent, blue, purple, coral, cyan, or muted. Labels are escaped before SVG rendering. extent defaults to 6 and must be an integer 2…20; coordinates must fit it. Localize description/caption and the surrounding teaching question.

Matrix results, shape labels, sum length, equation terms, and caption dimensions all derive from the input arrays. Invalid/ragged/nonfinite or incompatible matrices fail the build. New examples must not carry the original worksheet's numeric assumptions into prose.

## Add a vector data variant

Prefer a named preset in src/lib/interactive/vector-scenarios.ts. Copy templates/vector-scenario.ts, choose a stable id, and add the result to vectorPresets. The typed VectorScenario contract is:

| Field | Meaning |
| --- | --- |
| id | Lowercase stable slug |
| kind | combination or rank |
| initial | Nonzero independent u/v and starting a/b |
| dependent | Nonzero collinear u/v for the comparison context |
| target | Target coordinates for combination; unused by the rank task |
| coefficients | min/max/step for a and b |
| column | min/max/step for the rank column coordinates |
| extent | Integer visible coordinate extent, 2…20 |
| text | Optional en/de overrides for title, prompt, explanation, caption |

The validation function rejects zero starting directions, incorrect context types, off-grid coefficients/columns, nonfinite values, invalid bounds, unreachable independent targets, and configurations that extend beyond the visible plane. Bounds contain zero, align to step, and use steps of at least 0.01 with at most two decimal places. Both comparison contexts must fit all permitted coefficient corners; rank activities keep the first column fixed and allow zero only through the learner's movable column.

The independent target must be reachable within bounds and on the input grid. The dependent target can be reachable or impossible; feedback tests the actual relationship instead of assuming the answer. The line renderer follows the supplied direction, including a horizontal or vertical line. Distinguish a bounded visible sample from the mathematical span over all real coefficients.

Common numeric text interpolates from current state (target, coefficients, bounds, parallel example). Do not put a second copy of the answer into a translation string. Scenario text overrides must stay valid in both contexts. For combination views, head-to-tail and parallelogram change representation while preserving state; changing context resets coefficients; reset restores the full starting scenario.

For a one-off typed module, MDX can import its exported scenario and use `<Interactive kind="vectors" scenario={scenario} id="unique-example" />`. Prefer the shared preset registry for a representation that will recur. Do not embed event handlers or a renderer inside MDX.

After adding a preset: add a catalog/gallery example, extend scripts/verify-library.mjs with expected outcomes and boundary cases, run the full build, and inspect desktop/compact pointer, numeric, keyboard, reset, and translated feedback. Record the check. Reusing an engine does not establish the new task's correctness.

## Add a new family only when needed

Use templates/interaction-spec.md to define the learner question, state, actions, invariants, feedback, accessible alternatives, static initial view, localization, and meaningful edge cases before coding.

Keep pure math/model logic under src/lib/interactive/, share plane primitives where suitable, and put the Astro view/controller under src/components/interactive/. Add a discriminated kind to Interactive.astro, register public views once, add catalog/gallery examples, document the API, and test independent expected mathematical results. Keep styles in shared token-based CSS. Do not add an arbitrary executable task predicate or string-built visitor HTML to lesson content.

A second unrelated domain may need a new family: a force diagram can reuse VectorFigure/arrow primitives; a pendulum or nonlinear plot needs its own state and equations. Reuse presentation/input conventions without pretending that a linear-combination engine simulates every topic. Consider a geometry/plotting dependency only when repeated real requirements justify its integration and maintenance cost.

## Interaction quality contract

- State a specific question and what the user can change.
- Derive geometry, values, equations, and feedback from one state.
- Preserve keyboard focus when rendering; keep handle nodes stable.
- Support pointer capture, cancellation, numeric or keyboard alternatives, about 44 px hit areas, and predictable reset.
- Keep grid/snapping/bounds visible in the explanation where relevant; reject nonfinite values.
- Render a useful initial SVG/equation at build time. Reading must work without manipulation.
- Use local explanatory feedback, including impossible and zero states, with no remote submission or mastery score.
- Inspect both themes and compact widths; record physical-device or accessibility gaps honestly.

## Static comparison and proof chains

MatrixComparison accepts cases (matrix, label, detail, optional color role) and a caption. Each finite 2×2 matrix transforms the unit square; the initial dashed square, colored image columns, filled image, and determinant derive from the same data. The current viewport bounds transformed coordinates to ±3. Use localized labels/details and the component's semantic determinant rendering.

Flow also accepts optional nodes (label, tex, detail) and caption. Existing named variants remain supported. Prefer a few legible stages over a long chain; arbitrary nodes contain data and TeX, never scripts or raw HTML.

When deriving TeX in JavaScript/TypeScript, use String.raw or escape backslashes in string literals. MDX quoted TeX attributes and JS string expressions have different escaping rules. Check the rendered semantic math classes as well as syntax: a missing backslash can produce valid KaTeX text with the wrong mathematical presentation.

## Analysis families

- `<NumberDomains />`: static nested number sets with localized captions. ℝ\ℚ is visibly outside ℚ but inside ℝ; non-real complex examples sit outside ℝ. Uses the source convention 0 ∉ ℕ.
- `<ExpressionTrees />` or `<ExpressionTrees variant="distributivity" />`: static operator-tree pairs. Leaves retain A/B/C labels and consistent teal/blue/purple roles. Reproduce relationships rather than embedding source screenshots.
- `<Interactive kind="logic" preset="implication" id="unique-id" />`: Boolean input buttons and four simultaneous truth-table output columns with formula-only headers and localized accessible names. A/B headers use KaTeX. Select a transformation using the comparison buttons above the table; faint row/column tints locate the active assignment and formula, and a larger bold digit marks their intersection without a cell outline. Vertical panel/table spacing is compact while horizontal spacing remains unchanged. All outputs are server-rendered and remain visible on selection; compact layouts scroll the table locally. The selected truth-table row is separate from the exhaustive equivalence feedback. Never infer global equivalence from a single matching assignment.
- `<Interactive kind="logic" preset="nand" id="unique-id" />`: NOT/AND/OR selectors and binary inputs. Circuit diagrams show the negation bubble and reused wire outputs. AND needs two physical NAND gates; OR three. NOT ignores B.

Truth-table body cells use `data-truth-value="0"` (blue) or `data-truth-value="1"` (teal), including server-rendered cells and NAND updates. Row/column selection preserves these value colors. The Markdown build applies the same convention to binary-only table bodies in Analysis lessons across all locales; other tables remain unchanged. Visible digits carry the meaning independently of color.

Pure truth functions and exhaustive comparisons live in src/lib/interactive/logic-model.ts; localized controls and circuit rendering live in LogicLab.astro. These bounded families add no dependency, React runtime, remote submission, or general expression evaluator. Both presets have server-rendered initial content and native keyboard-accessible buttons; JavaScript updates the circuit, formula, result, and selected row. The executable /library/ catalog includes all four new assets. Run verify:content for Boolean equivalence, NAND, complement uniqueness, parity, and Analysis-content checks.

## Learning & Teaching assets

ProcessDiagram, LearningFigure, QuestionLens, and StudyTemplate are public MDX components. See [learning-teaching.md](learning-teaching.md) for preset names, localized data, desktop/compact behavior, template parity, attribution rules, and verification. The executable gallery covers process graphs, method roles, relational maps, practice mixing, review spacing, six cognitive question types, and blank template downloads. These share site tokens and do not introduce a framework dependency.

RelationMap is a static localized example of named relations in a linearity concept map. Its three rows distinguish a definition, a consequence, and a failed converse, with textual labels as well as colors. It is centrally registered and demonstrated in /library/. Use the existing Flow component for a justified linear reasoning sequence; do not make every graph a one-way chain when relationships branch or fail in reverse.

## Interactive mind maps

`<Interactive kind="mind-map" preset="study-session" id="unique-map" />` (or the centrally registered `<MindMap ... />`) displays a directed concept graph. `/library/#mind-map` runs the same component. The `study-session` preset concerns organization, retrieval, and feedback; it is an illustrative protocol, not a verified causal model of memory. The older `LearningFigure kind="mapping"` remains a static comparison and now also uses study methods.

For another subject, import a typed `MindMapData` object and pass `data={yourMap}` instead of a preset. Data lives under `src/lib/learning/`; no graph HTML belongs in MDX. Required fields:

- `title`, `question`, `caption`: EN/DE strings.
- `nodes`: unique slug `id`, localized `label`/`detail`, and `x`/`y` in the shared 900-wide layout (`height` defaults to 620 and accepts 200…1000). Node rectangles are 180×76 and must fit.
- `edges`: valid `from`/`to`, localized `label`/`reason`, `kind: 'branch' | 'cross'`, an SVG route `path`, and label-center `x`/`y`. Branches group concepts; dashed cross-links connect roles across branches. Directions express the named claim, not necessarily chronology or causation.

`validateMindMap` rejects duplicate nodes/links, invalid endpoints, self-links, disconnected concepts, nonfinite/out-of-bounds positions, missing translations, and unsupported route strings. It cannot judge whether the claims are true or whether routes collide: review both separately. Fixed authored positions keep this small teaching graph predictable; there is no force simulation, dragging, graph editor, or new dependency. Larger maps should be split into focused questions.

All nodes, connections, reasons, and the full initial graph render at build time. JavaScript enables three bounded views (terms, branches, named relationships), concept selection, and reset. Select a node again to clear it. Selection highlights incident edges and shows its detail; the complete relationship list remains available. Native buttons support pointer, touch, Tab, Enter and Space; there is no numeric state or drag interaction. Multiple instances have local state and unique marker/detail ids. At ≤700 px, readable HTML concept buttons and the explicit relationship list replace the scaled SVG; graph coordinates do not determine reading order. Provide a unique `id` per instance.

The underlying SVG and accessible HTML share the same data. Never rely only on color: solid/dashed paths and branch/cross-link labels distinguish edge roles. No answers are collected and selection does not assess mastery. Print retains all node explanations. Localized prose and human review remain necessary.

The `LearningFigure kind="interleaving"` preset defines three integer-reasoning methods before the blocked/mixed schedules and offers native strategy-reveal disclosures. It uses the same localized, server-rendered implementation in the lesson and gallery. See the learning/teaching guide for the example and evidence boundaries.

The gallery also passes `teachingMap` as explicit `data`, showing a smaller three-concept graph about examples and diagnostic questions. Both maps coexist with independent controls and ids. This is a working second use of the data contract, rather than a second renderer.

## Rotation refinement

`Interactive kind="rotation"` keeps the fixed input x = (2, 1). Drag its teal image around the radius-√5 circle to inspect continuous R(θ), then release to snap to the nearest multiple of 90°. Five buttons select 0…4 quarter-turns (four distinct matrices); J⁴ = I shares the starting point. The angle is bounded to 0…360°, with arrow-key steps of 5° (Shift: 90°), Home/End, and equivalent numeric input that snaps on commit. Pointer cancellation restores the pre-drag angle. The stable SVG handle retains focus and scales its hit area to at least 44 physical pixels. Model, matrix, vector and feedback derive from one angle; non-quarter-turns are labeled R(θ), never fractional powers of J. The pure model lives in rotation.ts and localized teaching copy in rotation-copy.ts. Shear retains its existing component behavior.

### Mixed prose and inline mathematics

Exercise questions, Flow node labels/details/captions, and MatrixComparison labels/details/captions accept explicit `$TeX$` within their existing string props. Internal `MathText.astro` delegates to `renderMathText` for server rendering; interactive logic/vector feedback and shear readouts use the same helper after updates. Plain text is escaped before HTML insertion, and formulas use the shared restricted KaTeX options and accessible MathML. This is an inline-only copy convention; use Math or the existing equation fields for display mathematics. Native SVG coordinate labels remain SVG text.
