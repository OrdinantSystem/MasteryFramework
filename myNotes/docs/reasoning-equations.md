# Reasoning Episode 03: equality and solutions

`equality-and-solutions` is page three of Part One, following `letters-and-relationships`, in EN/DE. The private source identity is `reasoning-episode-03`, with locations in sections 1–8 and the references. The original/checksum remain outside public output. Review status remains unreviewed; local publication does not authorize Git writes or deployment.

The English article retains all 255 narration blocks after normalizing math delimiters, malformed escaped spacing and aligned-equation line endings. Eight flattened UI blocks become localized representations. Timestamps, production/editorial notes and branding are excluded. Added qualifications establish the real-number domain and explain that the balance variable is the numerical mass in kilograms. German develops the same reasoning and all 24 display equations. Central explanations and worked application remain visible; there is no required score or new hidden answer.

## Representation contract

Use `Interactive kind="equations" preset="…" id="unique-id"` through the central MDX registry. The seven presets and one static `ReasoningFigure` variant represent the supplied screenshots:

| Source | Preset / figure | Meaning and state |
| --- | --- | --- |
| 1. Added answer | `ReasoningFigure kind="squared-solutions"` | Original solutions {2}; squared solutions {−2, 2}; forward implication over the reals |
| 2. Equality | `stones` | Switch 3 + 4 / 2 + 5; exactly seven stones remain |
| 3. Balance | `balance` | Before/after subtracting three kilograms from both sides, x + 3 = 8 ↔ x = 5 |
| 4. Identity | `identity` | Integer samples −5…10, initial 2; identity always holds, x + 3 = 8 holds at 5 only |
| 5. Lost information | `square` | x from −3…3 in quarter steps, initial 2; show x and −x at the same height on y = x² |
| 5. Additional condition | `restriction` | All real values / require x ≥ 0; exclude −2 explicitly and show the conditional equivalence |
| 6. Lost solution | `division` | Test x = 0 / 2; distinguish a valid original solution from undefined division by zero |
| 7. Complete answer | `distance` | x from 0…6 in quarter steps, initial 5; both 1 and 5 solve the distance equation |

Section 8 retains the source's implication/equivalence synthesis in ordinary display mathematics. All eight representations also run in `/library/`.

`equation-model.ts` validates finite choices, bounds and steps, derives numerical results and square preimages, and owns plot coordinate mappings. `equation-copy.ts` owns localized state-derived feedback and accessible descriptions. `equation-render.ts` shares escaped SVG and restricted KaTeX rendering between the build and browser. `EquationLab.astro` owns native input events; `EquationFigure.astro` supplies the static comparison. `equations.css` uses existing tokens. No new dependency, general equation solver or alteration of the Analysis model is involved.

## Mathematical and interaction boundaries

- Controls sample a bounded range; they do not restrict the mathematical real domain or prove an identity by enumeration. The article and feedback justify the identity by commutativity.
- Squaring preserves a forward implication. At a nonzero output, two opposite real inputs can have the same square. At zero, the marked inputs coincide and there is only one preimage. The negative input is parenthesized before squaring.
- Restricting to nonnegative x excludes −2. The excluded value has a strike-through, dashed boundary and accessible explanation, so color is not the only signal. The displayed equivalence retains the condition.
- Division by x requires x ≠ 0. The zero case displays an attempted undefined quotient, never treats 0/0 as a number and never cancels it. The complete solution follows separately from the zero-product property in the article.
- Absolute value measures distance, not direction. Both 1 and 5 satisfy the original equation; x = 3 gives distance zero and a false verdict. The full solution is justified in prose, not inferred solely from a sampled plot.
- Each instance has local state and reset. Numeric/range controls share validation; blank, nonfinite, out-of-range and off-step entries retain the previous drawing. The numeric draft stays intact while typing a decimal; commit/blur restores a canonical valid value and explains invalid entries. Pointer and keyboard controls are equivalent and remain stable while the view redraws. Quarter-step squares retain all four decimal places where needed, including 1.25² = 1.5625, rather than presenting a rounded value as exact.
- All initial figures, equations and feedback render at build time. Buttons have explicit accessible names/pressed state and valid controlled-view ids; numeric controls have labels and bounds help. Feedback is polite and uses shared MathText rendering. Controls are at least 44px high. There is no timed animation, remote collection, scoring or stored learner response.
- Comparison panels stack at compact widths. SVG labels fit the responsive view. Wide display equations use the existing labeled keyboard-focusable local scroll convention. German numbers use decimal commas in readouts and equations; SVG descriptions remain plain speech.

## Verification and preservation

`verify-equations.mjs` runs in `verify:library`. It checks every illustrated grid/choice in EN/DE, conserved counts, identity and solution truth, square preimages including zero, the restored sign condition, undefined division, both distance solutions, invalid inputs, state independence, proportional coordinates, localized decimals, feedback and KaTeX rendering. These checks do not certify translation or teaching outcomes.

The shared dispatcher/catalog/gallery additions are recorded reversibly in `reasoning-shared-extension.json`. Full previous Analysis dependencies reconstruct exactly for their frozen gates. No historical semantic review is renewed to cover this lesson. Source coverage binds the new files and the unchanged first two pages; concrete build/browser evidence and limitations are in `VERIFICATION.md` and `previews/reasoning-equations-*`.
