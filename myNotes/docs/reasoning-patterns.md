# Reasoning Episode 05: patterns and predictions

`patterns-and-predictions` is page five of Part One in EN/DE, following `pictures-and-proofs`. Its source identity is `reasoning-episode-05`, with locations in sections 1–8, the central idea and further reading. The original and checksum remain private. Review status remains unreviewed.

The source explanation is retained, with one factual correction: five displayed values contain four observed doubling transitions. The English coverage check accounts for 174 explanation blocks: 173 retained after mathematical/whitespace normalization and that one corrected block, plus the preserved central idea. Flattened UI becomes figures, controls, Flow and a context table. Branding, duration, favicon widgets, tracking parameters and future-production notes are excluded. The empty example-solution disclosure receives an added reference answer: always double to get 48, or double through round four and then add three to get 27; round five separates those rules. German covers the complete explanation and the same five authored display equations.

## Representations

| Source relationship | Public component | Contract |
| --- | --- | --- |
| Five observed light counts | `ReasoningFigure kind="pattern-history"` | Exactly 2, 4, 8, 16, 32 lights, with the first value and four transitions distinguished |
| Two machines | `pattern-machines` | Both show the common 32-light state; conditional round-six predictions are 64 and 34 |
| Reveal continuations | `Interactive kind="patterns" preset="continuations" id="unique-id"` | Observed five / through six, seven, eight; initial/reset five; future bars remain hypothetical |
| Observation, conjecture, prediction | Existing `Flow` | Three localized stages; evidence motivates a rule, whose assumed validity yields a forecast |
| Simplicity and a mode change | `pattern-rules` and a Markdown context table | Compare the two specified rules over positive integer rounds; background information changes plausibility |
| Discriminating observation | `pattern-test` | Conditional outcomes 64 / 34 reject B / A respectively, without proving the survivor universally |
| Channel analogy | `pattern-forecasts` | Explicitly illustrative history and two possible forecasts; no actual channel data |
| New sequence challenge | `pattern-challenge` and existing `Exercise` | Visible 3, 6, 12, 24, ? task before the reference disclosure |
| Choose an informative round | `Interactive kind="patterns" preset="next-test" id="unique-id"` | Choose 3, 5 or 6; no initial selection, explanatory local feedback and reset |

All six static variants and both interactive presets run in `/library/`. Use unique ids. The existing authoring registry, page shell, tokens, native disclosures and KaTeX are retained; there is no plotting dependency or new application.

## Models and evidence boundaries

`patterns-model.ts` defines A(n) = 2ⁿ and B(n) = 2ⁿ through five, then 32 + 2(n − 5), for positive integer rounds. Historical agreement is exactly the first five values. Predictions at rounds six, seven and eight are A: 64, 128, 256; B: 34, 36, 38. Safe-integer checks bound software evaluation, not the mathematical positive-integer domain. No rule is inferred automatically from a finite list.

The continuation plot retains a fixed linear vertical scale through every selection and a boundary between rounds five and six. Observed bars have a single neutral representation; future A/B bars use different fills/outlines, labels and legend entries. All future values are labeled predictions. The numerical table carries the same state and observed/predicted distinction. Selecting a later horizon never changes the observed record or claims that a candidate actually generated it.

The next-test comparison evaluates the two candidates at the selected round. Three gives 8/8 and five gives 32/32; neither distinguishes them. Six gives 64/34 and separates these candidates. A compatible sixth observation does not rule out every other possible generating process. A third outcome, such as 50, would rule out both candidates; the model and branch caption preserve this possibility.

Channel values are reconstructed illustrative values from the supplied chart: 100, 150, 220, 320 in weeks one through four; possible later values 460/660 versus 250/220. They are not measured data or probability estimates. One shared neutral history precedes separate solid/dashed forecasts, with a week-four/five boundary, numerical time spacing, axis labels, localized descriptions, data table and explicit caption.

The general claim about finite evidence is explained through the construction of a rule that changes only after the observed prefix. Bounded tests and plots illustrate that reasoning; they do not prove universal statements by enumeration.

## Interaction and layout

`patterns-copy.ts` derives localized feedback from pure state. `patterns-render.ts` shares escaped SVG and accessible numerical tables between initial rendering and browser updates. `PatternFigure.astro` owns static views, `PatternLab.astro` the local native button controller, and `patterns.css` scoped token-based styling.

Every initial view is present at build time. Buttons expose pressed state, control a real result id, support pointer/Tab/Space/Enter and are at least 44px high. Reset restores the observed-only state or clears the test selection. Multiple instances remain independent. Updating a plot retains focus on its stable control and preserves an open numerical disclosure. No timers, animation, remote response, storage or mastery score are added.

Comparisons stack and the five observation tiles wrap in order on compact screens. Tables scroll locally in labeled, keyboard-focusable wrappers. Plot legends and axis labels remain adjacent to the plot when the data disclosure opens. Shape/fill, dash patterns, numbers and prose complement color.

## Concurrent integration and verification

Episode 04 was developed simultaneously in the same canonical workspace. Episode 05 was staged privately while its content was incomplete, then integrated with small additive patches against the current shared registries. Existing parity/proof imports, dispatch branches, catalog/gallery entries, thumbnail, source and navigation order four remain. The full build ran after the other task's build completed; Episode 05 uses a separate temporary prefix-preview port and does not stop the existing root preview.

The merged dispatcher/catalog/gallery source versions are recorded reversibly in `reasoning-shared-extension.json`. They reconstruct the full prior Analysis dependencies for unchanged frozen gates; no historical semantic review is renewed. Source coverage binds all eight preceding EN/DE lesson files, including the final Episode 04 source hashes.

`verify-patterns.mjs` checks matching histories, each illustrated horizon, diverging futures, safe arithmetic/domain failures, test discrimination, both/one/neither surviving candidates, challenge rules and earliest difference, conserved light counts, illustrative data, fixed coordinates and localized feedback. Full build/browser evidence and concrete limitations are in `VERIFICATION.md` and `previews/reasoning-patterns-*`.
