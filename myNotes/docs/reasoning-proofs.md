# Reasoning Episode 04: pictures and general proofs

`pictures-and-proofs` is the fourth English/German page in the existing expandable Part One, following `equality-and-solutions`. The course remains in the Reasoning area, separate from Mathematics, with room for philosophy and psychology. The source identity is `reasoning-episode-04`, with locations in sections 1–8 and Further reading. Original text, checksum, visual mapping and preservation hashes stay in ignored `references/source/reasoning-episode-04/`. Review status remains unreviewed. Local publication does not authorize Git writes or deployment.

The English explanation is retained verbatim. Pasted math delimiters, doubled thousands-spacing escapes and the malformed aligned-equation line ending are normalized for KaTeX. Eleven flattened visual/UI fragments become ten static figures and one explorer, retaining their teaching meaning. Production branding, duration, favicon/search artifacts and link tracking are omitted. The full German counterpart has the same mathematical displays and representations. The complete direct proof stays visible in a Note; no central explanation requires interaction or a disclosure.

## Representation contract

The existing public registry dispatches `ReasoningFigure kind="proof-…"` and `Interactive kind="parity" preset="even-sum" id="unique-id"`. All eleven representations run in `/library/`.

| Source visual | Representation | Relationship |
| --- | --- | --- |
| Three sums | `proof-examples` | 2 + 4 = 6, 6 + 8 = 14, 12 + 20 = 32 |
| Observation/general claim | `proof-evidence` | Finite evidence differs from a universal assertion |
| Eight/seven counters | `proof-pairs` | Four complete pairs versus three pairs and one leftover |
| Arbitrary pair count | `proof-general-pairs` | A variable number of complete pairs, not a literal infinity |
| Two changing collections | `even-sum` explorer | Each collection has 0–6 pairs; initial 3 and 2; separated/combined views |
| General template | `proof-template` | Independent witnesses a and b give a + b pairs |
| Proof chain | `proof-chain` | 2a + 2b = 2(a + b), with integer closure explicitly stated |
| Signed number line | `proof-number-line` | Multiples of two include zero and negative integers |
| Odd + odd | `proof-odd-sum` | The two leftovers form a sixth complete pair |
| Particular/arbitrary | `proof-distinction` | More checks versus one justified general rule |
| Synthesis | `proof-process` | Examples → pattern → relationship → justified proof |

`parity-model.ts` separates signed integer witnesses from bounded nonnegative physical counts. `parity-render.ts` renders only validated finite counts with closed semantic roles. `proof-copy.ts` supplies EN/DE labels, descriptions, state-derived equations and feedback. `ProofFigure.astro` and `ParityLab.astro` share token-based `proof.css`. Source collection names remain verbatim; their drawings use the existing teal/coral roles rather than adding a gold/amber palette. Equations use those same roles. The figure's outer class is only `proof-figure`; layout classes belong to inner containers, so the caption and diagram do not accidentally become nested grids.

## Interaction and mathematical boundaries

- Both native sliders and numeric fields accept whole counts 0–6. Zero has an explicit empty-collection label. Nonfinite, blank, fractional or out-of-range entries keep the last valid drawing; invalid numeric drafts are restored on commit/blur with explanatory feedback.
- Combining changes the containing collection, preserving every counter, original color and complete pair. Returning to two collections preserves the selected counts. Reset restores three/two pairs and the separated view. Each instance has local state.
- Native buttons expose pressed state and controlled-view ids; inputs have localized labels and bounds help. Controls stay stable during rendering, are at least 44px high and support pointer/keyboard use. Feedback uses a polite live region. Initial drawings/equations render at build time. There is no remote response collection, scoring, persistence or timed animation.
- The finite control range is an illustration, not a proof by enumeration or a restriction on the theorem. The physical counter picture describes nonnegative quantities. Signed witnesses in the algebra extend the proof to all integers; negative physical counters are never drawn. Odd sums account for the extra pair algebraically as a + b + 1.
- Static comparisons stack on compact screens; pair rows wrap without shrinking the prose. Color is reinforced by grouping boundaries, labels and a dashed leftover boundary. Number-line arrows extend both ways; only even ticks are labeled. Responsive HTML labels stay 14px rather than shrinking with a scaled SVG.

## Verification

`verify-parity.mjs` runs as part of `verify:library`. It checks signed even/odd witnesses, zero, unsafe arithmetic, invalid counts, every permitted drawing/state in EN/DE, conserved counters, localized equations/feedback and matching lesson display equations. Shared dispatcher/catalog/gallery changes are recorded reversibly in `reasoning-shared-extension.json`; preceding Analysis dependencies reconstruct exactly for their frozen checks. No historical review is renewed to certify this lesson.

Concrete source-preservation, build, browser and prefix evidence belongs in `my_notes_web/VERIFICATION.md` and `previews/reasoning-proofs-*`. These checks do not establish human mathematical/native-language review or learning outcomes.
