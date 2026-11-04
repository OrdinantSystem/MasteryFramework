# The Art of Reasoning

The `reasoning` course belongs to the Reasoning area (`thinking`), separate from Mathematics. Its scope can grow into philosophy and psychology. It shares the existing application, route helpers, navigation colors and EN/DE shell. `reasoning-part-one` is a native expandable chapter with direct lesson links, selected through the optional chapter `directLessons` flag; other courses retain their hierarchy.

Part One contains five pages in EN/DE: `one-plus-one` (order 1), `letters-and-relationships` (order 2), `equality-and-solutions` (order 3), `pictures-and-proofs` (order 4), and `patterns-and-predictions` (order 5). English routes begin `/reasoning/lessons/`; German equivalents begin `/de/reasoning/lessons/`. Each later page names its predecessor as a prerequisite; all share the direct Part One branch and previous/next navigation. Its separate text source identity is `reasoning-episode-02`; see [the Episode 02 source and model contract](reasoning-algebra.md). The third uses `reasoning-episode-03`; see [the equality and transformation contract](reasoning-equations.md). The fourth uses `reasoning-episode-04`; see [the pictures and general proof contract](reasoning-proofs.md). The fifth uses `reasoning-episode-05`; see [the patterns, predictions and evidence contract](reasoning-patterns.md). The first page uses `reasoning-episode-01` and its expanded source below. Private originals, checksums and transformation notes live in ignored `references/source/` folders for each identity.

The initial edition preserved the supplied English explanations verbatim. The owner's follow-up explicitly authorizes a seamless expansion on the same page: retain effective explanations, make small editorial improvements, and remove redundant presentations. The original English/German lesson snapshots and both supplied sources are preserved privately. The expanded script has its own `reasoning-episode-01-expanded` source identity in additionalSources; it contributes sets, cardinality, one-to-one correspondence, union/intersection, nested sets, addition as a function, equality properties and the sports transfer question. EN/DE keep matching identities and mathematical content.

Video timings, animation directions, promotional branding and production notes are source artifacts, not learner-facing instructions. The earlier 11-minute label and timing lines are removed because they no longer describe the expanded page. Central explanations remain visible; reference answers stay in native disclosures. Legacy section fragments remain as explicit anchors when headings are renumbered. Publication status only controls local/static availability; reviewStatus remains unreviewed and does not authorize Git writes or deployment.

## Representation specification

Existing vector and Analysis engines cannot express changing a counting unit or merging physical objects. A small finite-comparison family is appropriate; it adds no dependency or continuous simulation. It reuses the shared Interactive dispatcher, semantic colors, native buttons, figure conventions and Flow renderer.

- `Interactive kind="reasoning" preset="appearance|units|water" id="unique-id"` supports three independent finite comparisons. Appearance has identical/colors/sizes states; the count remains two. Units counts the same matched shoes as two shoes or one pair. Water has separate/merged states: two drops become one; 5 + 5 hundredths of a milliliter remain 10 hundredths, assuming no loss.
- The pure `reasoning-model.ts` validates supported states and derives counts/volume. `reasoning/copy.ts` supplies EN/DE controls, accessible descriptions and state-derived numerical readouts. Unknown choices are rejected. There are no arbitrary numeric inputs, dragging, empty collections, impossible targets, or physical fluid dynamics in this bounded comparison.
- All initial content and alternate drawings render at build time. Native buttons support pointer, touch, Tab, Enter and Space, preserve focus and expose pressed state. Reset restores the first choice; each instance owns its state. A polite live region describes the result. Controls are at least 44px high. No timed animation, external answers, scores, or storage are involved.
- `ReasoningFigure kind="opening|collections|objects|singleton|singletons|matching|addition|overlap|pairs|function|symbols|process"` provides localized code-native visuals. Named objects, singleton boundaries, the complete matching, disjoint union, overlapping people, nested shoe pairs and addition input/output diagrams use the same finite example data as their mathematical readouts. The process variant supplies five localized nodes and TeX to the existing Flow view. No screenshots or private source files are published. Teal/blue colors follow the canonical palette; the revised prose names the diagram colors consistently.
- All three comparisons and twelve static variants run in `/library/`. The library test checks invariant cardinality, unit conversion, conserved volume, invalid states and localized numerical feedback, plus all 256 pairs of subsets of a four-element universe for inclusion/exclusion, complete/incomplete/noninjective matchings, nested units and addition examples. The finite figures are static comparisons; no automatic animation or new browser controller is needed. Browser QA covers both languages/themes, desktop/compact layouts, keyboard selection/reset, state isolation, navigation, search and prefixed routes.

The pictures illustrate the stated model; they are not a formal proof of arithmetic or a quantitative fluid simulation. No mathematical or native-language expert review is claimed.

## Existing review preservation

Four shared presentation dependencies receive additive Reasoning branches/examples: Interactive, the asset catalog, the route's course thumbnail choice and singular lesson counts, and the library. `reasoning-shared-extension.json` records their complete before/after hashes and exact reversible source blocks. `reasoning-extension.mjs` validates the active versions and reconstructs each complete original before the unchanged Analysis review gate runs. Negative fixtures reject unrecorded edits. The original review receipts and Analysis lesson sources remain unchanged; the new extension is not represented as independently reviewed Analysis teaching.

## Expanded source mapping

| Expanded script | Integrated lesson destination |
| --- | --- |
| 1–2: abstraction and units | Existing sections 1–3; retained effective explanations, clarified quantity/unit distinction |
| 3: objects, set notation and membership | Section 4; named objects, singleton and two-set figures, element versus singleton |
| 4: cardinality and one-to-one matching | Section 5; complete matching and careful rebinding of A/B for the three-element example |
| 5: union, intersection and disjointness | Section 6; replaces the shorter set sketch, explains inclusion/exclusion through Alex/Sam/Jo and the empty set |
| 6: sets of sets and counting units | Section 7; four shoes versus two matched inner sets, distinction between a set and a unit |
| 7: addition as a function | Section 8; exactly one output, binary operation, ordered pairs and Cartesian product, nonnegative domain including zero |
| 8: water and physical change | Existing water section, now 9; preserved core explanation and clarified the additive-volume assumption |
| 9: equality | Existing symbol section, now 10; retained numeral/expression/equation explanation, added equality properties and equal cardinality versus set equality |
| 10: synthesis and sports question | Sections 11–12 and final checkpoint; retained practice, added the missing-overlap transfer question and five-step structure diagram |

An ordered pair is distinguished from a set with repeated listings. The general function rule is distinguished from the stricter perfect matching of a bijection. These small connective explanations avoid introducing new notation without an interpretation.

## Collection and symbol layout

The outer figure keeps its variant hook (`reasoning-collections` or `reasoning-symbols`) and ordinary block flow. Only the inner `reasoning-collection-items` / `reasoning-symbol-items` container gets grid layout: three evenly spaced collections or five equation symbols in one row. Do not reuse an outer variant class as an inner layout class; doing so puts the caption into a grid column and lets a cell rule override the nested symbol grid. Captions occupy the full figure width below the diagram. Compact symbol rows use all available column width for the longer German labels.
