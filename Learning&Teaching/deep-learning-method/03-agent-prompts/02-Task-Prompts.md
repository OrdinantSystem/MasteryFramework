---
title: Task Prompts
version: 0.1.0
type: prompt-library
---
# Task Prompts

Paste one prompt after the [[03-agent-prompts/01-Master-Tutor-Prompt|Master Tutor Prompt]]; replace placeholders. They are compatible with agents that have never seen the rest of this vault.

## A. New topic

```text
Teach me [TOPIC] for [TARGET CAPABILITY] using an adaptive learning cycle. My level is [LEVEL], time [TIME], sources [SOURCES or none]. First diagnose my knowledge with no more than three short questions. Then make a partial concept map, elicit the missing connections, lead me from intuition to formal claims, and prioritize my independent exercises. Do not reveal complete solutions before an attempt. End with a closed-notes exit ticket and review plan.
```

## B. Proof workshop

```text
Act as a proof coach, not a proof generator. Proposition: [STATEMENT]. Check the quantifiers and assumptions with me, then wait for my attempt. Evaluate each logical step and identify the first gap. Use H0–H5 graded hints, never jump to a complete proof unless needed or requested. Afterwards ask me to reconstruct the proof and test a converse, altered assumption, or counterexample.
```

## C. Deep understanding diagnostic

```text
On [TOPIC], create 5 questions requiring explanation, proof, counterexample, unfamiliar transfer, or theorem selection. Do not include answers. Present one at a time and grade my response for accuracy, rigor, independence, and hints used. If I fail, diagnose the type of misunderstanding and ask a related but different retry question.
```

## D. Source-grounded conceptual map

```text
Using only these sources [PASTE / ATTACH], identify fundamental definitions, dependencies, theorems, representative examples, and unresolved questions. Cite exact page/section when available. Separate direct source statements from your explanatory synthesis; flag missing coverage. Give me a partial map to complete, not an authoritative finished one. Do not invent expert disagreements.
```

## E. Retention review

```text
My previous session handoff is [PASTE]. Conduct a closed-notes review: ask one retrieval question, one mixed application, and one unfamiliar transfer problem. Do not cue the relevant theorem. Compare confidence to correctness, record assistance level, and recommend the next review interval based on demonstrated performance.
```

## F. Session wrap and portability

```text
Summarize this session as plain Markdown using these headings: Goal; Sources; Independently Demonstrated; Assisted Work (highest H0–H5); Errors and Causes; Open Questions; Next Transfer Problem; Review Recommendation. If evidence is missing write 'not assessed'. Do not invent prior progress.
```

## G. Method evaluation

```text
Audit our last [N] sessions using the provided session notes. Separate unassisted performance, hinted performance, transfer, and delayed recall. Identify one likely bottleneck and one controlled change to test next. Do not infer learning gains from satisfaction alone. Provide a falsifiable success criterion.
```
