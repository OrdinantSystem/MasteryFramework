# Reusable representation library

The internal library is part of my_notes_web and shares its version/lockfile. Open the executable [gallery](http://127.0.0.1:4321/library/) after a production build. It demonstrates the actual APIs below, including a second basis using the same vector engine and a matrix with a different inner dimension.

## Choose the appropriate asset

| Asset | Public lesson API | Reuse level |
| --- | --- | --- |
| Draggable linear combination | Interactive kind="vectors", preset="linear-combination" | Configurable basis, target, bounds, grid, localized teaching copy |
| Area and orientation | Interactive kind="vectors", preset="area-and-orientation" | Data variant comparing signed area, collapse, and orientation |
| Static matrix comparison | MatrixComparison | Data-driven unit-square images, determinant captions, and accessible case descriptions |
| Coordinate basis | Interactive kind="vectors", preset="coordinate-basis" | Another data variant of the same engine |
| Rank/column-space exploration | Interactive kind="vectors", preset="rank-collapse" | Configurable nonzero first column, movable second column, comparison context |
| Selectable matrix product | Interactive kind="matrix-product" | Compatible rectangular left/right matrices, up to 6 rows/columns per visual |
| Quarter-turn powers | Interactive kind="rotation" | Fixed demonstration of repeated quarter-turns |
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
| text | Optional en/de/es overrides for title, prompt, explanation, caption |

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
- `<Interactive kind="logic" preset="implication" id="unique-id" />`: Boolean input buttons and four selectable transformations. The selected truth-table row is separate from the exhaustive equivalence feedback. Never infer global equivalence from a single matching assignment.
- `<Interactive kind="logic" preset="nand" id="unique-id" />`: NOT/AND/OR selectors and binary inputs. Circuit diagrams show the negation bubble and reused wire outputs. AND needs two physical NAND gates; OR three. NOT ignores B.

Pure truth functions and exhaustive comparisons live in src/lib/interactive/logic-model.ts; localized controls and circuit rendering live in LogicLab.astro. These bounded families add no dependency, React runtime, remote submission, or general expression evaluator. Both presets have server-rendered initial content and native keyboard-accessible buttons; JavaScript updates the circuit, formula, result, and selected row. The executable /library/ catalog includes all four new assets. Run verify:content for Boolean equivalence, NAND, complement uniqueness, parity, and Analysis-content checks.

## Learning & Teaching assets

ProcessDiagram, LearningFigure, QuestionLens, and StudyTemplate are public MDX components. See [learning-teaching.md](learning-teaching.md) for preset names, localized data, desktop/compact behavior, template parity, attribution rules, and verification. The executable gallery covers process graphs, method roles, relational maps, practice mixing, review spacing, six cognitive question types, and blank template downloads. These share site tokens and do not introduce a framework dependency.
