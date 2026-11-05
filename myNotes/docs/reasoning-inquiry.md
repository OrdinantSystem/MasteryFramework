# Reasoning Episode 07: testing competing explanations

`testing-competing-explanations` is order seven in the existing EN/DE Part One. The supplied script is registered as `reasoning-episode-07`; its original, paragraph mapping and preservation hashes stay in ignored private source storage. The public pages preserve all 61 English narration blocks in eight sections, with a complete German translation. Timings, YouTube production directions, branding and the production-plan footer are source artifacts, not instructions or learner content. Research references link the Wason (1960) and Klayman/Ha (1987) primary papers. Historical numbers and positive-test-strategy qualifications remain as supplied. Review status is unreviewed.

## Model and representations

The five presets use the public `Interactive kind="inquiry"` dispatcher and a unique id:

| Preset | State and teaching relationship |
| --- | --- |
| machine | A freely editable hypothesis note and three integer inputs; strictly increasing triples are accepted. Recent history contains at most twelve submitted cases; reset clears note/history. |
| regions | Four triples occupy A, B-only, C-only or outside all three candidate sets. A is consecutive even integers, B steps of exactly two, C strictly increasing integers. |
| evidence | Inspect all three predictions, then explicitly reveal the observed response and contradicted candidates. A new choice conceals the response again. |
| phone | Original equipment, known-good cable, then known-good cable and adapter. Predicted charge outcomes are compared under exactly one fault among cable/adapter/port and a functioning power source. |
| challenge | Reloading the same unavailable page versus trying a different reliable website, with explanatory feedback and no score. |

`ReasoningFigure` adds `inquiry-opening`, `inquiry-successes` and `inquiry-cycle`. The screenshots are interpreted as teaching relationships and implemented through the existing tokens and semantic HTML rather than embedded bitmap screenshots. All five presets and three static variants appear in `/library/`.

`inquiry-model.ts` contains triple parsing, candidate predicates, set classification, candidate elimination and phone outcomes. `inquiry-copy.ts` localizes UI text. `inquiry-render.ts` escapes copy and builds shared initial/update markup. `InquiryLab.astro` owns stable native controls and independent browser state; `InquiryFigure.astro` owns static figures. `inquiry.css` scopes responsive layouts and reuses the established counterexample frames. No dependency or general experiment engine is introduced.

## Boundaries and controls

The mathematical domain is all integer triples; the software input is limited to safe integers and states that limit when validation fails. Exact step comparisons use BigInt to avoid unsafe subtraction. Fractions, malformed triples, missing/extra entries and unsafe integers are rejected while preserving prior history. Increasing negative triples are accepted; repeated or decreasing values are rejected. Hypothesis text is never executed, classified, collected remotely or stored. History uses text nodes.

Native form submission supports Enter. Buttons support Tab, Enter and Space, show pressed state, retain focus, and have a minimum 44px height. Each non-form control targets a real result region. A polite live region announces revealed results without duplicating them visually. Reset restores the documented initial state. There are no timers, scores, forced progression, answer collection or persistent storage.

Nested regions are schematic inclusions rather than metric coordinates. Matching C among three candidates does not establish that finite observations uniquely identify an arbitrary hidden rule. Positive responses can contradict narrower hypotheses; a negative response on a shared prediction can distinguish none. The phone diagnosis deliberately states its single-fault assumptions and the prose retains real-world exceptions.

## Verification

`verify-inquiry.mjs` checks all 729 triples in a small signed-integer cube for nested inclusions, the four example regions and elimination sets, parser boundaries, repeated/negative cases, reveal boundaries in both languages, and all single-fault predictions. The production build runs this alongside existing library, frozen-content, link, source, search and contrast checks. Browser checks and exact production counts are recorded in the application `VERIFICATION.md`. Public source coverage records hashes and counts only; private source paths do not enter public output. Passing checks do not establish independent expert translation review or learner outcomes. Content editing does not authorize Git writes or publishing.
