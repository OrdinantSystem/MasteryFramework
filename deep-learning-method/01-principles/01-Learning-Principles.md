---
title: Learning Principles
version: 0.1.0
type: rationale
---
# Learning Principles

**Objective:** maximize *durable, transferable, independent* learning per unit of sustainable effort, not merely conversational fluency or exam scores.

| Principle | Why it is included | Implementation | Failure mode / caveat |
|---|---|---|---|
| Retrieval practice | Recalling strengthens accessible knowledge and exposes gaps | Closed-notes recall and problem attempts | Recognizing an answer after seeing it is not retrieval |
| Distributed practice | Revisiting material after delays often aids long-term retention | Same/next day, ~3–4d, ~7d, ~21–30d initially | Exact intervals are heuristic, adapt by results |
| Self-explanation | Articulating causal/logical steps can improve understanding | Ask “why does this follow?” | Parroting an agent's explanation is not self-explanation |
| Worked examples + fading | Support novices without permanently outsourcing reasoning | Demonstration → partial example → independent proof | Too much guidance can obscure actual mastery |
| Interleaving | Mixing problem types can improve strategy discrimination | Mixed exercises after initial grounding | Premature mixing can overload beginners |
| Transfer practice | Deep learning requires recognizing ideas in new settings | Novel exercises and altered assumptions | Hard problems alone are not enough without feedback |
| Feedback and error analysis | Corrects misconceptions and directs effort | Name precise error mechanism, retry variant | Agent can misgrade; verify against sources |
| Metacognitive calibration | Confidence is not the same as competence | Predict success before attempting; compare with results | Self-ratings alone are weak evidence |
| Conceptual organization | Relationships help integrate isolated facts | Learner completes a concept map | AI-generated maps can create illusion of understanding |

## Practical design decisions

1. **First attempt before solution** for tasks the learner could reasonably solve; explicitly teach missing prerequisites when they cannot.
2. **Ask for reasoning** and evaluate every unjustified implication in formal subjects.
3. **Separate assisted from unassisted performance.** Track hint level and whether notes were open.
4. **Repeat with variation.** A corrected answer does not close a gap until a different problem is solved.
5. **Measure later.** A delayed task establishes more than an immediate explanation.
6. **Protect sustainability.** Sleep, rest, and manageable workload matter; no method warrants endless sessions.

## Relationship to the viral “MIT method”

Borrow: early conceptual maps, structure over summaries, diagnostic questions, targeted follow-up. Modify: don't demand arbitrary expert disagreements; for math, investigate assumptions, converses, boundaries, alternative proofs. Add: graduated hints, unassisted tasks, delayed assessment, evidence logs. **The viral MIT anecdote and claimed speedups are not verified educational outcomes.**

## Evidence level

Evidence supports *individual practices*, not the claim that this exact assembled protocol is uniquely optimal. See [[06-references/01-Reading-and-Evidence]].
