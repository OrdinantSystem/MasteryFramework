# Reasoning Episode 06: counterexamples and claims

`counterexamples-and-claims` is page six of Part One in EN/DE, following `patterns-and-predictions`. Its source identity is `reasoning-episode-06`, with locations in sections 1–10 and further reading. The original, checksum and transformation record stay private. Publication status makes the page locally visible; review status remains unreviewed.

The supplied explanation and complete factor argument are retained. Flattened headings, numerical controls and diagrams become representations. The two escaped underscores after source underbraces are repaired to mathematical subscripts. Branding, duration, favicon/tracking artifacts and the next-episode production bridge are omitted. The provided divisibility response stays intact inside the existing native Exercise disclosure. The German page translates the complete explanation, all controls, diagram labels and feedback, with nine matching authored display equations after the two explanatory underbrace labels are normalized.

## Public representations

| Source visual | Shared public API | Purpose |
| --- | --- | --- |
| 3, 5, 7, ? | `ReasoningFigure kind="counter-prime-start"` | Successful cases do not settle the next case |
| Nine and a 3×3 arrangement | `counter-nine` | Nine satisfies the conditions and has a nontrivial factor; all counters stay inside the boundary |
| Domain, condition and selected/excluded branches | `counter-filter` | The selected branch states a conjecture's promise, not a certified conclusion |
| Two-gate detector | `Interactive kind="counterexamples" preset="prime-detector" id="unique-id"` | Select −9, 1, 3, 4, 9, 15 or 21; initial/reset nine |
| Universal claim and negation | `counter-negation` | Every qualifying case succeeds versus at least one qualifying failure |
| Number sieve's three views | `preset="sieve"` | All 1–35, apply condition, inspect primality; initial/reset all candidates |
| Complete finite domain and infinite comparison | `counter-finite` and `counter-domains` | Verify exactly 3, 5, 7; nine is explicitly a failure in the original domain |
| Universal and existential tasks | `counter-quantifiers` | One failure refutes a universal; one witness establishes existence |
| Exact ten-card threshold | `preset="cards"` | Change red count 0–10 by native range/numeric input; initial/reset one |
| From a failed conjecture to structural reasoning | `counter-repair` and `counter-factors` | Retain the general odd-divisor criterion and its complete square-root argument |
| Divisibility transfer | `preset="divisibility"` | Select 6, 8, 12 or 16; initially no selection, reset clears it |
| Many confirmations and one exception | `counter-synthesis` | Schematic counters express logical asymmetry, not a vote |

There are ten static variants and four interactive presets, all in `/library/`. Each explorer requires a unique id. The fixed Analysis candidate presets do not represent a conditional prime test, a three-stage sieve and a count threshold; this closed family adds those relationships without changing the Analysis model or introducing arbitrary executable predicates. It reuses the public dispatcher, ReasoningFigure, native controls, shared Math/MathText, semantic tokens and standard figure layout. There is no new dependency or general inference engine.

## Mathematics and state

`counterexample-model.ts` separates condition A, conclusion B and the counterexample test A ∧ ¬B. An excluded case is not presented as a failed conclusion: gate two is irrelevant to that case. Qualifying prime cases confirm only themselves; qualifying composites supply a factor. One is neither prime nor composite. Negative and even cases remain outside the original condition.

Trial division includes the square-root endpoint (`d ≤ n/d`), so perfect squares such as 9, 25, 49 and 121 are composite. Software inputs must be safe integers. The displayed states are closed finite choices; the source claim still quantifies over all integers. The factor argument, rather than the bounded computation, justifies the general criterion for odd integers greater than one.

The sieve keeps all 35 numbers in order. Seventeen qualify, eighteen are excluded, ten qualifying numbers are prime, and seven are counterexamples: 9, 15, 21, 25, 27, 33, 35. No finite window is labeled the complete infinite domain. The finite repaired claim concerns exactly 3, 5 and 7, making exhaustive verification valid there. The original claim already fails at nine, regardless of unchecked later cases.

The card model conserves ten blue/red cards. The claim is blue ≥ 8, equivalently red ≤ 2. Zero, two, three and ten red cards remain explicit boundary cases. This is an exact statement about the displayed collection, not a probability estimate or a conclusion about an unobserved population. The transfer model tests divisibility by four and failure of divisibility by eight; twelve is the sole counterexample among the four choices, not the only counterexample among all integers.

## Rendering and input

`counterexample-copy.ts` derives localized explanatory feedback from state. `counterexample-render.ts` shares escaped semantic HTML and restricted mathematical rendering between the build and browser updates. `CounterexampleFigure.astro` owns static diagrams, `CounterexampleLab.astro` stable controls and local events, and `counterexamples.css` scoped layout using existing tokens.

All initial figures, number cells, cards, equations and feedback render at build time. Native buttons support pointer, Tab, Enter and Space, expose pressed state and control a real result id. Cards additionally support Home/End/arrows and equivalent numeric input. Invalid fractional/out-of-range input retains the last valid collection and restores its value on blur; reset retains focus. Instances are independent. A polite live region reports the local result; there is no score, external answer collection, storage, timer or required progression.

Gate comparisons stack on compact screens. The sieve uses seven columns on desktop and four on phones, preserving number order. Cards use five and two columns. Textual colors, checks/crosses, numbers and explanatory prose complement color. Static diagrams use responsive HTML and CSS rather than scaled SVG labels; wide formal mathematics retains the shared local-scroll treatment.

## Verification and preservation

The model check covers an independent prime list, perfect-square endpoints, qualifying/excluded cases, Boolean implication/negation including empty finite domains, all sieve stages, all eleven card states, invalid input, transfer cases, localized rendering and display-equation parity. Shared-source reconstruction still validates the complete prior Analysis presentation dependencies, without renewing historical semantic review. Source coverage binds all 118 preceding lesson files, including all ten EN/DE Reasoning files. Episode 08 was added concurrently; its imports, dispatch branches, source, order and gallery entries remain alongside Episode 06. A shared-output preview race was resolved by building an isolated prefixed artifact for navigation/search QA; this is generated output, not another application. See `VERIFICATION.md` and `previews/reasoning-counterexamples-*` for actual build/browser findings and limitations.
