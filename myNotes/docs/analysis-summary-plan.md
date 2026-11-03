# Analysis I: approximately 40% shorter prose

## Goal and authorization

The owner requests a substantially shorter, more accessible Analysis I recap, with parallel agents, followed by build, commit, push and GitHub Pages deployment. Scope is the twenty Analysis I lessons and its overview review in EN/DE/ES: sixty-three content files. Other courses, the navigation/design, original private sources and personal learning records are outside scope.

Baseline: `4bb67fc7345a5c1bfb29a8b3703f15c50b4e77c3`. Keep the six sections, twenty lesson identities and equivalent localized routes.

## Measurement

Target approximately 40% fewer authored prose words across Analysis I in each language, preferably a 38–43% reduction overall. This is a course-level target, not a demand to cut every small or proof-dense lesson by the same amount. Report any justified shortfall rather than lose material.

Use `scripts/analysis-prose.mjs`: it counts headings, ordinary explanation, Exercise question attributes, hints and solutions, including text inside closed disclosures. It excludes frontmatter, mathematical notation, markup and unchanged graphical configuration/captions. Thus merely collapsing text does not count as shortening. Keep an additional raw-body token measure for transparency. Do not game the measure by replacing necessary prose with TeX or telegraphic shorthand.

## Preservation and style contract

- Keep every distinct learning objective, definition, assumption, useful example, counterexample, boundary case, proof obligation and logical distinction active in the lessons. An archived original is a verification reference, not a substitute for a missing explanation.
- Keep all graphical component invocations/configurations, mathematical tables, distinct displayed formulas, circuit activities and interpretation of their meaning. Do not redesign shared components/styles or hide graphics/core explanations.
- Keep all existing exercises and reference tasks, with their hints and complete solutions. Unlike the earlier conservative pass, this request authorizes concise rewording of questions, hints and answers, but not deleting their mathematical task, solution reasoning or domain. Track each exercise by its original file and ordinal.
- Compress through synthesis: combine repeated qualifications; state domain/conventions once where safe; refer back instead of re-proving elementary rules; shorten arithmetic narration while keeping the justification of consequential steps. Explain notation near use and keep natural, readable sentences.
- Preserve semantic versus restricted-law proof obligations, alpha-renaming/capture/shadowing, empty-domain cases, witness dependence, existence versus uniqueness/counting, full irrationality and parity reasoning, six convergence-negation stages, fixed-target failure versus no real limit, and optional accepted prerequisites.
- Preserve all metadata/provenance and stable anchors. Keep corresponding learning meaning in all locales; do not translate shortened English mechanically or restore parallel-language readings.
- Retain the existing additional-practice groups without using more hiding to meet the target. Keep main explanations visible. Avoid blanket summary-box templates.

## Work graph and ownership

Baseline/metric/plan → three disjoint editing lanes → independent full-baseline/current reviews → targeted repairs → controller integration/preservation gates → full root/prefix builds and browser verification → scoped commit/main push → exact Actions and live verification.

Each editor works one locale triple at a time. Only the controller edits scripts, coverage ledgers and shared documentation.

1. **Lane A, lessons 1–7:** number systems/equality/order, statements/definitions, connectives, tables, negation, implication and equivalence. Preserve all distinct examples and introductory distinctions while making the recap prose much tighter.
2. **Lane B, lessons 8–12:** domains/scope, existence/uniqueness/counting, quantifier dependence/order/translation and nested negation. Shorten the large exercise banks' wording and answers without removing any task or inference.
3. **Lane C, lessons 13–20 and three overview reviews:** proofs, sequences/convergence, Boolean derivations, circuits and course review. Keep complete meaningful proof chains and graphical information; use smaller cuts where a proof-dense or already brief section needs them.

## Required receipts and independent review

Each editor reads complete baseline/current content, including solutions, and records before/after hashes, prose counts, full-read coverage and a per-lesson learning-material map. For every exercise, record original ordinal and preserved task/solution objective; note where repeated prose was synthesized. A target percentage never overrides a missing qualification.

Independent reviewers compare the actual entire frozen originals and edited files, not only receipts or heading counts. Review each learning objective, example, exercise and proof; check native wording and corresponding locale meaning. Return exact prioritized omissions, ambiguous shorthand, overcompression or unnecessary retained repetition. Repair important findings, verify the precise repaired version and bind acceptance to final hashes.

## Preservation checks without pretending wording is immutable

Preserve exact public baseline copies outside the content loader for verification. The prior organization/recap literal-preservation ledgers remain frozen and continue to validate their historical baseline; clearly label their historical input rather than falsely claiming a rewritten answer is byte-identical. Add a mandatory current-summary verifier that checks all sixty-three current reviewed hashes, metadata, anchors, graphical markup, table inventories, distinct displays, exercise ordinals/counts and reviewed learning-material maps. Keep the existing finite mathematical and generated-output/link checks against the current site.

This is a versioned semantic editorial contract, not a blanket exemption from preservation. Explicitly document that exact wording may change only because this request authorizes meaning-preserving summarization of explanations and practice. No unrelated historical source hashes or archived teaching are modified.

## Acceptance and delivery

- All sixty-three content files and all twenty topics have verified dispositions; each language achieves approximately the target or a specific justified limitation is reported.
- No distinct learning material, visual, mathematical table, exercise or stable route is lost. Prose is accessible and complete, not cryptic.
- Independent review findings are resolved; reviewStatus remains honest and does not imply human mathematical certification.
- Node 24 npm ci and full root and /MyNotes builds pass. Exercise/graphic controls, closed/expanded practice, desktop/mobile/both themes, localized search and legacy routes/fragments are tested. Restore normal root output.
- Stage only the authorized Analysis content, preservation support and documentation; inspect privacy/scope; create a focused gitmoji commit, push main and verify the exact GitHub Pages build/deploy jobs and live article content.

## Pre-dispatch respect check

The plan preserves the established site and its learning scope, explicitly protects graphics and mathematics, and does not confuse fewer visible paragraphs with less text. It changes the earlier literal-practice freeze only as required by the new explicit summarization request, replacing it with per-task semantic review plus structural and hash-bound current checks. There is no authority to delete a task or proof to hit a percentage. Publishing is now explicitly authorized by the same request.
