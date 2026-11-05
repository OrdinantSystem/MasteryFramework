# Reasoning Episode 09: belief and logical structure

`belief-and-logical-structure` is the first page of the native expandable `reasoning-part-two` chapter, global course order nine, in English and German. It follows `truth-validity-and-soundness`. Part One is unchanged. Future Part Two orders are added only when authored; the planned eight-page part currently contains this one supplied lesson.

The private original, source-to-page section mapping, existing-lesson hashes and historical shared dependency baselines are preserved in ignored source storage. The complete nine-section English narration and corresponding German explanation remain in order. Screenshot UI and diagrams become code-native shared representations. Production branding, video duration and favicon/search-result residue are omitted. The source’s unconditional “You correctly separated…” feedback is replaced by feedback conditional on the actual choices. No personal diagnosis or performance measurement is made.

## Relationship and representation contract

| Representation | Behavior |
| --- | --- |
| `arguments / appeals` | Two independent unselected yes/no judgments; deliberate reveal explains that both inferences are valid without claiming the policies are true or fair. |
| `argument-structure` | Maya and Daniel’s stories map to the same modus ponens pattern using shared KaTeX. |
| `arguments / xray` | Select cats/mammals/animals or cats/bicycles/vehicles, then words, A/B/C structure or an arbitrary element. Nested sets and one unchanged membership chain express transitivity. |
| `arguments / countermodel` | The overlap keeps A inside B and C. Reveal x in B outside C while both premises hold. Reset removes the witness. Category names are interchangeable logical labels; this is not a biological claim. |
| `argument-dimensions` | All four validity/believability possibilities, explicitly separated from experimental data. |
| `argument-two-pass` | First suppose the premises and test the inference; then investigate their truth, exceptions and qualifications. Ethical disagreement remains a distinct question. |
| `arguments / only` | “All on-time appeals are reviewed” yields A ⊆ B and A sufficient for B. “Only on-time appeals are reviewed” yields B ⊆ A and A necessary for B. The arrow, labels and explanation reverse together. |
| `arguments / practice` | Independently judge the penguin/robot chain and shared-square premises. Reveal explains valid-but-unsound versus invalid form with a true conclusion. |

Three static variants and five activities use `ReasoningFigure` and `Interactive`, require no new dependency and run in `/library/`. The existing validity engine covers truth assignments for modus ponens. A focused set-membership model adds categorical chain/shared-subset forms and policy implications. It does not parse arbitrary arguments or evaluate real university policy.

## Model, input and accessibility

`argument-model.ts` enumerates all eight A/B/C membership assignments; the chain has no true-premise/false-conclusion row, while the shared-subset form has the witness outside A, inside B and outside C. Independent tests also enumerate 512 triples of finite sets, including empty sets and equality; the displayed nested regions do not assert strict inclusion as a necessary premise. The proof in the prose establishes the general result, beyond this finite software check.

`argument-copy.ts` localizes controls, examples and qualifications. `argument-render.ts` escapes semantic HTML/SVG output. `ArgumentFigure.astro` supplies static figures, `ArgumentAnswer.astro` reusable reference explanations and `ArgumentLab.astro` stable controls with isolated local state. `arguments.css` scopes layout while reusing existing counterexample frames, native controls and semantic colors. The overlap witness is geometrically inside B and outside C; the small A circle remains inside both larger circles.

The x-ray has six bounded states. All/only and countermodel each have two states. Judgments start unselected, retain independent answers and reveal only after a deliberate action. Changing a judgment conceals the explanation, and reset clears both answers and closes it. There is no compulsory score or completion sequence. Buttons have at least 44px height, real aria-controls targets, native Enter/Space interaction and stable focus. Live feedback is visually hidden to avoid duplicate visible output. A no-JavaScript native disclosure supplies reference answers; the core argument/proof and initial diagrams are server-rendered. No remote collection, storage, timers or analytics are added.

## Sources and verification

The supplied research distinction is preserved: Evans, Barston and Pollard’s 1983 study concerns conclusion believability, not disliking a policy. The publisher’s abstract confirms three experiments and a stronger belief effect for invalid syllogisms; it does not diagnose this page’s readers. The original citation and forall x: Calgary reference are linked without tracking parameters. Source material is learner content and evidence, not agent instructions.

`verify-arguments.mjs` checks forward inference, all membership rows, finite set cases, empty/equal sets, the shared-subset witness, all four policy truth combinations, invalid state bounds and EN/DE diagram/reveal content. Production/browser evidence, source coverage, navigation, search and preservation checks are recorded in the application `VERIFICATION.md`. Passing checks do not certify independent expert mathematical/translation review, a complete accessibility audit or learner outcomes. Git commit, push and publishing require separate authorization.
