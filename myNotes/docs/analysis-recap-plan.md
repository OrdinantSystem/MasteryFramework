# Analysis I: concise recap editing plan

## Purpose and authorization

Make the existing course a reference for recalling previously studied material, not a compulsory restart from first principles. The original editing request authorized planning, a preservation review of the plan, parallel implementation, and local verification. After local completion, the owner separately authorized committing, pushing and verifying GitHub Pages deployment.

The current baseline is commit `acebb30f20ade52e50d055274cf27a7b40a89f46`. Keep six sections, twenty lessons and their English/German/Spanish counterparts. Do not change other courses, original sources, historical archives, lesson identities or the shared design.

## Implementation status

Completed locally: the three editing lanes, independent full-scope reviews, targeted repairs/follow-up, protected-content gates, root/prefixed builds and browser checks all passed. See [the verification record](../my_notes_web/VERIFICATION.md) and [the reviewed preservation contract](analysis-recap-coverage.json). Publication is separately authorized; its exact workflow and live outcome are checked after pushing. The baseline commit above identifies the starting point, not the recap release.

## Editorial contract

- Keep every distinct definition, assumption, boundary case, proof obligation and useful example. Concision means explaining an idea once, not omitting its justification.
- Preserve graphical components, diagrams, expression trees, circuit activities, flow diagrams, controls, mathematical tables and their accompanying interpretation. Do not replace a graphic with prose or hide core explanations in disclosures.
- Preserve all existing exercise questions, hints and solutions. Only parallel-language readings inside one existing exercise may be localized; the mathematical task and answer must remain unchanged. Additional practice may move behind clearly labelled native disclosures without losing its anchors or answers.
- Each page contains only its own language's notation readings. Remove EN/DE/ES labels, parallel-language columns and foreign pronunciation text. Keep a local-language reading near a difficult formula where it adds understanding; do not repeat the same reading after several subsections.
- Keep every distinct displayed mathematical expression. Duplicate displays may be consolidated when the same expression remains in that lesson. Do not remove an algebraic worksheet proof because an earlier truth table proves the same result: permitted proof methods are different obligations.
- Preserve all stable fragment anchors and old-route compatibility, metadata, source provenance, locale parity, accessibility and honest review status.
- Prefer a short reminder/link over another definition. Keep a recurring example moving forward rather than reintroducing it. Do not add a mandatory recap box, paragraph quota or word-reduction target to every lesson.
- Correct inherited standalone-page wording: a combined lesson is not a separate compact-reference page, and the reciprocal subsection is optional rather than the whole convergence lesson.

## Parallel ownership and dependencies

Baseline/inventory and contract review → three disjoint editing lanes → independent cross-lane reviews → controller integration → builds/browser checks.

Each editing lane works sequentially on small vertical batches: one lesson and its three locale files at a time. No two agents edit the same files. Shared scripts, coverage records, guides, components and final integration belong to the controller only.

### Lane A — lessons 1–7: language and connectives

Localize readings and the comparison table; integrate duplicate predicate substitution, simultaneous-condition setup, row-enumeration instructions and implication explanations. Keep number-system proofs, mixed-connective counterexamples, all truth tables, implication/model distinctions and reversible-transformation checks. Apply lighter edits where the explanation is already efficient.

### Lane B — lessons 8–12: quantifiers and witnesses

Unify scope definitions, carry witness examples through their distinct obligations, remove repeated identical readings and the duplicate introductory quantifier recap, and condense generic restarts. Preserve safe renaming/capture, empty-domain cases, dependency restrictions, shared versus separate witnesses, and every step of the nested derivations. Separate additional practice from the primary reading route where useful.

### Lane C — lessons 13–20: proofs, sequences and Boolean applications

Refer back rather than re-derive basic conditional semantics. Keep full parity, contradiction and distinct Boolean-algebra proofs. Define and read convergence once, remove repeated device/threshold explanations, correct optional-subsection wording, and shorten sequence reintroductions. Keep all six convergence-negation stages, fixed-target versus no-limit distinctions and the strict-form nuance. Preserve already concise NAND teaching.

### Controller — integration and preservation

Record baseline hashes and component/table/exercise/math/anchor inventories before editing. Reconcile changed prose with explicit per-lesson agent receipts. Extend the existing preservation ledger with narrowly identified editorial/localization dispositions, never a blanket exemption. Add independent recap checks for protected blocks, native-language presentation and review hashes; retain historical source hashes and the existing semantic checks. Update the relevant authoring/organization guides and verification record, not AGENTS files.

## Review gates

1. **Pre-implementation respect check:** all twenty lessons are assigned; all three locales are included; all known graphical families and all exercise blocks have explicit protection; source archives and sibling courses are outside scope. The baseline snapshot and inventories must exist before dispatch.
2. **Per-lane receipt:** identify every edited lesson/locale, old/new hashes, what was consolidated and where the retained meaning lives, proof/example/graphics preservation, remaining caveats and actual checks. Read complete lesson bodies, including practice and solutions, before editing; do not credit outline-only inspection as full review.
3. **Independent review:** a different agent compares final files against the frozen baseline, checks mathematical qualifications and locale meanings, and reports concrete losses or over-compression. The controller verifies findings and fixes important issues before acceptance.
4. **Executable preservation:** reconcile all sixty locale files; preserve frontmatter, old anchor IDs, graphical component markup, distinct displays, mathematical tables and exercise/hint/answer blocks, with explicit localization-only exceptions. Compare protected siblings and historical sources byte-for-byte. Keep finite semantic checks unchanged.
5. **Build and browser:** use Node 24 and npm ci; run npm run build, then the real /MyNotes prefix build. Inspect all canonical lessons across locales in compact/desktop and light/dark states; test representative graphics, additional-practice disclosures, keyboard operation, math/table scrolling, localized search, and legacy fragments/routes. Restore the normal local build.
6. **Completion:** report observed changes, measured text reduction without equating it to quality, preservation and browser results, limitations, and local-only publication status. Passing tests do not certify mathematical correctness or learner mastery.

## Plan respect review

The plan changes presentation and repeated wording within the approved course, not its content scope or design. It protects visual and interactive information explicitly; keeps distinct reasoning rather than turning lessons into formula-only cheat sheets; retains exercise availability; and uses reviews plus executable inventories instead of accepting an agent's shortening claim. Historical paragraph-preservation rules require explicit editorial dispositions because wording will change, while unchanged mathematical/graphical content receives separate checks. The plan therefore respects the existing website while adapting its reading route to recap use.
