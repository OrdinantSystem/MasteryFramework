# Analysis I visual teaching audit

This pass follows the owner's request to inspect every Analysis I page and improve learning through useful graphical explanations. It applies to the twenty canonical lessons in English, German and Spanish. Existing content, source provenance, routes, headings, exercises and solutions remain intact. The new finite examples, sequence comparison and proof diagrams are authored teaching additions, not quotations from the private sources. They do not change mathematical or translation reviewStatus.

## Lesson dispositions

| Lesson | Decision and teaching purpose |
| --- | --- |
| Number systems, equality and order | Retain the nested number domains. Add an adjustable number line for `(0, 2]`, showing why the two endpoints differ. |
| Statements, predicates and definitions | Fix `x + 3 = 10` and vary the input/domain. Distinguish a selected input's truth from its domain membership and the quantified verdicts. |
| Logical connectives and combined conditions | Use the existing truth table and examples. The redundant AND/OR tile activity was removed at the owner's request on 4 November 2026. |
| Constructing and comparing truth tables | Use the existing complete truth tables and intermediate columns. The redundant construction tile activity was removed at the owner's request on 4 November 2026. |
| Negation, De Morgan and inequalities | Retain the complement ray including its boundary and the existing truth-table explanations. The redundant De Morgan tile activity was removed at the owner's request on 4 November 2026. |
| Implication, contraposition and assumptions | Retain the existing complete-column implication explorer. Add a specific prediction/comparison instruction so one matching row is not mistaken for equivalence. |
| Equivalence and reversible transformations | Show the solution sets before/after squaring and the extra negative candidate. Reuse the existing Flow component. |
| For every and there exists: domains and scope | Change a complete finite domain without changing the predicate, including the empty set. Add a colored scope/capture comparison using Flow. |
| Witnesses, existence and uniqueness | Show all finite integer candidates and the three distinct successes for `4 < x < 8`. Distinguish membership, a witness, and uniqueness. |
| Quantifier order, dependence and translation | Toggle a complete person/key relation. Read per-row witnesses versus a whole shared column. Include all empty-domain cases. |
| Negating quantified statements and inequalities | Reuse the finite-domain view to show that one failure denies every without denying all successes. |
| Nested negations: worked derivations | Start with the relation `y > x` on `{1, 2}`. An empty success row witnesses the failed universal-existential claim. Show both orders and their exact negations. Editing a cell explicitly changes the relation. |
| Proof methods, counterexamples and parity | Draw the complete counterexample region `(2, 5]` for `x > 2 ⇒ x > 5`; test hypothesis and conclusion at the same point. |
| Contradiction and irrationality | Connect lowest terms, the two parity inferences and the incompatible common divisor. Retain the complete detailed proof and its dependence on the parity lemma. |
| Real sequences and absolute distance | Plot positions separately from repeated values of the device sequence. Add a movable point and open tolerance interval around 3. |
| Convergence: definition and proofs | Explore reciprocal tails with epsilon, target and threshold controls. The whole-tail verdict uses an exact rule, not the finite displayed sample. Preserve the optional proof's accepted background. |
| Failure of convergence and no real limit | Explore alternating tails. Each tail has both signs, so epsilon one half defeats every real target. Compare constant zero at targets one and zero to distinguish failed target from no limit. |
| Boolean laws and elementary derivations | Retain both existing expression trees. Explain top-down reading, regrouping versus repeated inputs, and the role of numbered-law derivations. |
| Unique complements and algebraic negation laws | Diagram candidate → two complement obligations → uniqueness, preserving the algebraic proof and its noncircular order. |
| NAND and logic circuits | Retain the existing working circuit explorer. Add instructions to predict and trace the shared intermediate signal through the second NAND. |

There are thirteen new interactive instances, four static Flow diagrams and twenty connecting explanations per language after the owner's requested removal of the three condition-tile activities and their introductory paragraphs. The condition presets remain available in the developer library. The existing useful diagrams and interactions remain. No new graphic is hidden in a disclosure; the substantive proofs are still visible.

## Interaction specifications

All activities use native buttons, selects, range and numeric controls, local state, the existing semantic colors and shared mathematical renderer. The purple diamond or outline marks the selected input/assignment. Truth is also stated in text or digits, and interval membership is visible geometrically. Stable controls remain in the DOM during updates, preserving keyboard focus. Reset restores every setting, including domain permissions. Numeric inputs reject empty/nonfinite/out-of-range/off-step commits and restore the prior valid state. Multiple instances have independent state and unique ids. No data is transmitted or scored.

| Family | Question, state and actions | Invariants, feedback and boundary cases |
| --- | --- | --- |
| Candidates | What changes when an input or its finite domain changes? Select mixed, positive-only or empty domain; choose an integer input −1…9. Presets: equation, positivity, interval witnesses. | The predicate never changes. Circle positions/results, witness count and universal/existential/unique verdicts derive from that predicate and the complete domain. An out-of-domain successful input is not a witness. Empty universal is true; existential and uniqueness are false. A finite example is explicitly not an infinite-domain proof. |
| Conditions | Which assignments satisfy each expression? Toggle independent P and Q. Presets: AND/OR, worked OR/NOT/AND construction, De Morgan. | All four assignments are displayed. Intermediate outputs and selected assignment derive from the same Boolean values. The De Morgan paths agree everywhere; construction succeeds only at P=1,Q=0. |
| Number line | Which region contains the selected real point? Move x via native range or numeric input; distance additionally changes positive epsilon. | Bounds are −2…8 in steps of 0.25. Open/filled circles explicitly exclude/include endpoints, separately from the selected diamond. Presets cover `(0,2]`, `x≥1`, `(2,5]`, and the strict distance band centered at 3. Equality fails a strict distance test. |
| Finite relation | Does each row have some witness, or does one column work for all? Toggle individual cells, choose 0 or 2 rows and 0, 2 or 3 columns. | Compute row existence, shared columns, both quantifier orders and both negations from one complete matrix. Shared implies separate. With neither domain populated: separate is true, shared false. With no rows but a nonempty column domain: both true. Row/column headers remain usable on compact screens. |
| Sequence | Does every term at or after N lie in the open band? Select reciprocal, device, alternating or zero sequence; vary L, epsilon and N. | The plot contains exactly 32 discrete terms and labels its limitation. The whole-tail verdict uses the exact rule and either certifies the tail or returns an actual bad index, possibly beyond the picture. Reciprocal strictness, early device exceptions, persistent alternating signs, and constant zero's wrong/right targets are distinct cases. One successful band does not establish convergence. |

The useful initial diagram, formula, values, exact verdict and explanatory caption are server-rendered. Reading the page requires no interaction or JavaScript; changing state requires JavaScript. Range inputs support pointer movement and arrow keys, with equivalent numeric input. Static proof diagrams reuse Flow and its compact stacking; this is not a second proof-layout engine.

## Model and rendering contracts

- `src/lib/interactive/analysis-model.ts`: pure finite predicates, quantifiers, relation summaries, line predicates and sequence rules/tail certificates.
- `analysis-copy.ts`: localized teaching/control copy; `analysis-scenes.ts`: shared initial/live rendering from the models.
- `src/components/interactive/AnalysisLab.astro`: stable native controls, updates, reset and finite-relation buttons. Public entry point is Interactive with discriminated kinds.
- `src/components/AnalysisProof.astro`: localized data presets for the existing Flow component. Registered once in the MDX registry.
- `src/styles/analysis-lab.css`: shared token-based styling. Compact plot labels enlarge inside SVG; logic tiles keep complete math runs intact. Wide math remains locally scrollable.
- All five families and all four proof presets have executable library examples and catalog entries.

## Preservation and verification

The previous independent summary review is frozen in `analysis-summary-coverage.json`; it is not relabelled as review of these new graphics. `analysis-visual-coverage.json` records each exact visible addition and the hash of each of the sixty resulting MDX files. Removing only those registered additions reconstructs the entire independently reviewed source byte for byte. `analysis-visual-contract.mjs` validates this relation before the unchanged summary inventories run. Unregistered or edited additions, removed original material, or stale hashes fail. This retains every original proof, exercise, hint, answer, table, graphical invocation and stable anchor without claiming a new independent review.

`npm run verify:library` includes `verify-analysis-visuals.mjs`. It checks all sixty additions, all 64 complete 2×3 relations, empty-domain combinations, strict/inclusive endpoints, all Boolean inputs, reciprocal boundary N=10 versus 11 at epsilon 0.1, device exceptions, exact bad-index witnesses, and rule-based tail certificates across sequences/parameters. The old positive/negative summary fixtures remain mandatory checks when changing preservation support. Build and browser evidence belongs in VERIFICATION.md. Human expert and screen-reader review remain separate from these checks.

The 4 November condition-tile removal is recorded as `removed_additions` in the visual coverage ledger, including the exact former blocks and the owner's reason. Active hashes reflect the nine changed localized lesson files; stripping only their remaining additions still reconstructs the original reviewed summary byte for byte. Existing truth tables, proofs, practice, metadata and anchors are unchanged. The verifier permits an audited page with no remaining visual additions when it has an explicit removal record.
