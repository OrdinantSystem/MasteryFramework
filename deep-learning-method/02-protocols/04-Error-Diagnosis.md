---
title: Error Diagnosis
version: 0.1.0
type: protocol
---
# Error Diagnosis

## Classify before correcting

| Error type | Diagnostic question | Targeted intervention |
|---|---|---|
| Conceptual | Does the learner misunderstand what an object/property means? | Precise definition + contrasting examples |
| Logical | Are quantifiers, implication directions, or assumptions mishandled? | Counterexample or proof skeleton audit |
| Procedural | Is a valid algorithm executed incorrectly? | Isolate faulty step, practice new instance |
| Strategic | Could learner solve it if told which theorem to use? | Mixed theorem-selection exercises |
| Representational | Can learner translate between algebraic, geometric, verbal forms? | Explicit translation tasks |
| Communication | Is the reasoning sound but missing necessary written justification? | Rewrite as checkable proof |
| Prerequisite | Is required earlier knowledge absent? | Short prerequisite lesson, then return |

## Correction sequence

1. Preserve learner's exact attempt and identify the **first unjustified or invalid step**.
2. Explain what is correct before identifying what fails; avoid praise disconnected from evidence.
3. Ask learner to identify the missing condition or reasoning gap.
4. Give the smallest needed hint; verify against trusted sources if uncertain.
5. Retry the original reasoning and then solve a *new* problem independently.
6. Log type, cause, correction, hint level, and delayed retest.

## Feedback format (agent)

- **Valid:** which parts stand as written.
- **First issue:** exact step and why it fails.
- **Likely cause:** diagnosis, marked as tentative if uncertain.
- **Minimal repair:** question/hint, not automatically full answer.
- **Verification:** one new test problem.
- **Source:** precise reference when provided; otherwise say source not supplied.

## Anti-patterns

Do not give a polished solution immediately, attribute every failure to “not enough practice,” claim knowledge of the learner's cognition from one error, or confuse a partially correct idea with a proved result.
