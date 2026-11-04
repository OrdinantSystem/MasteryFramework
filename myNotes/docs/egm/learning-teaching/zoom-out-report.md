# Initial zoom-out Goldfish report

Agent: `/root/learning_initial_zoom`; `fork_turns: none`; completed. Controller transcription of returned report, not a native tool transcript. Reviewed input: `audit-reviewed-input.md`, SHA-256 `869b6e2341ace3bfbc38c70a0d4ada539cd4c71d01968bc8bd839713d0846ba2`.

Review complete. No Blocker. Five lessons is a defensible first batch: the missing reference solutions are real, and the existing components support the proposed changes. One audience/scope issue needs resolution; two smaller changes would sharpen the brief.

**Z1 — Major — Broad novice promise lacks a concrete minimum route**

Affected scope: audit lines 7, 21–29, 39, 43. The brief promises usefulness without a particular mathematics curriculum, then retains specialist examples while leaving the proposed starting route unspecified. The distinction between general study workflow and optional mathematical illustration remains implicit. Study Sessions still declares Bloom as a prerequisite and directs its example entirely through parity proofs.

Evidence: topic-session.mdx:15 (Bloom prerequisite), :44 (parity example/follow-up); feynman-and-feedback.mdx:36 and diagnose-and-repair.mdx:43 (specialist illustrations), all under application `src/content/lessons/en/learning/`.

Counterargument: general instructions already let learners bring their own material; fully adapting every mathematical example would unnecessarily expand this batch.

Proposed fix: retain the five-lesson boundary, but specify the short route and destination. State learners can use a familiar task from their subject, identify minimum general instructions, and label proof practice as a subject-specific example. This needs links and prose, not another lesson, component, or curriculum reorder.

**Z2 — Nit — Retrieval additions partly duplicate an existing general worked example**

Affected scope: audit line 26. The compact retrieval/spacing/interleaving distinction addresses a plausible clarity gap. A second complete attempt/check/retry demonstration and new primary experimental support are less clearly necessary.

Evidence: retrieval-and-spacing.mdx:22 (attempt/check/study/retry), :30 (adaptive reviews), :38 (review/scope); relational-mapping.mdx:40–46 has a complete non-mathematical correction/new-example/delayed-return illustration.

Counterargument: a standalone retrieval lesson benefits from a local worked example, and a study-decision exercise can assess something current cards do not.

Proposed fix: distinguish essential clarification from optional expansion. Reuse or link the worked case unless the new case teaches a different decision. Keep a new decision exercise if it tests that distinction. Tie additional research to a specific added empirical claim rather than making another citation a completion requirement.

**Z3 — Nit — The audited follow-up is a contrapositive, not a converse**

Affected scope: audit line 27. topic-session.mdx:44 studies odd integer → odd square, then asks even square → even integer. Over integers the latter is its contrapositive. Calling it the converse could direct implementation toward a different task.

Counterargument: both related claims are true, so the error does not undermine supplying reference reasoning.

Proposed fix: change solve its converse to prove the contrapositive statement. Preserve the actual task unless a deliberate change is documented.

The main audit findings otherwise hold: opening linearity example lacks its local definition; Bloom begins with sequence mathematics; Study Sessions refers to an absent worked proof; Proof Practice supplies partial hints without complete two-odd/three-odd reference arguments. Retaining the other twelve lessons is reasonable as an editorial boundary, without certifying learning effectiveness.

Reuse check: LearningFigure supplies methods, spacing, hints, evidence, handoff; StudyTemplate uses native disclosures; QuestionLens contains six rendered panels and category/ranking caution. The brief appropriately rejects new interfaces and hint infrastructure.

## Actual reads and limits

Complete installed zoom_out persona and zoom-out standard; audit target; active learning-teaching guide; all 17 complete English lessons including every Exercise answer; QuestionLens, ProcessDiagram, LearningFigure, StudyTemplate components. No requested bounded file missed. Imported data modules, InterleavingPractice, German lessons, originals, snapshots and course-index implementation were outside supplied context and not read. Claims about those audits, download parity, provenance and initial working-tree state were not independently verified. No files written, builds run, history retrieved or agents spawned. No learning outcomes certified.

This report preserves the returned findings and qualifications with repository-relative evidence shorthand; it is not a verbatim native-message export.
