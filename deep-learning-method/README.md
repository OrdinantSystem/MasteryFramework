---
title: Deep Learning Method
type: index
version: 0.1.0
status: experimental
updated: 2026-11-02
---
# Deep Learning Method (DLM)

A modular, agent-agnostic system for **durable, independent, transferable understanding**, initially optimized for university-level mathematics and adaptable to other fields. This is a working method to test and refine, **not** a validated universal optimum or an MIT-endorsed method.

> **North star:** The learner can reconstruct, justify, apply, challenge, and retain knowledge **without AI assistance**.

## Start here

1. Read [[00-start/01-Quick-Start|Quick Start]] (or open the corresponding relative Markdown file).
2. Paste [[03-agent-prompts/01-Master-Tutor-Prompt|Master Tutor Prompt]] into the agent's instructions.
3. Choose a protocol: [[02-protocols/01-Topic-Learning-Loop|Topic Learning Loop]], [[02-protocols/02-Proof-Workshop|Proof Workshop]], or [[02-protocols/03-Review-and-Retention|Review and Retention]].
4. Track results using [[04-templates/01-Session-Note|Session Note]] and [[04-templates/02-Concept-Mastery-Card|Concept Mastery Card]].
5. Periodically inspect [[05-evaluation/01-Measurement-and-Experiments|Measurement and Experiments]] and [[05-evaluation/02-Change-Log-and-Retrospective|Change Log and Retrospective]].

## Complete index

| File | Purpose | When to consult |
|---|---|---|
| [[00-start/01-Quick-Start]] | Fast setup and commands | First session |
| [[00-start/02-System-Architecture]] | Scope, dependencies, and workflow | Customizing system |
| [[01-principles/01-Learning-Principles]] | Scientific rationale and limitations | Evaluating a technique |
| [[01-principles/02-Mastery-Rubric]] | What deep understanding means | Setting goals, grading |
| [[02-protocols/01-Topic-Learning-Loop]] | Default full topic cycle | Learning new topics |
| [[02-protocols/02-Proof-Workshop]] | Mathematical proofs, assumptions, counterexamples | Proof tasks |
| [[02-protocols/03-Review-and-Retention]] | Spacing, interleaving, delayed tests | Subsequent sessions |
| [[02-protocols/04-Error-Diagnosis]] | Classify and repair mistakes | After incorrect work |
| [[03-agent-prompts/01-Master-Tutor-Prompt]] | Main reusable agent skill | Start of any agent session |
| [[03-agent-prompts/02-Task-Prompts]] | Copy-paste commands for modes | Switching activities |
| [[04-templates/01-Session-Note]] | Session goals, attempts, outcomes | Every session |
| [[04-templates/02-Concept-Mastery-Card]] | One concept's understanding and evidence | Ongoing knowledge base |
| [[04-templates/03-Error-and-Review-Log]] | Mistakes and scheduled retests | Reviewing weaknesses |
| [[05-evaluation/01-Measurement-and-Experiments]] | Assess efficiency and validity | Monthly / per unit |
| [[05-evaluation/02-Change-Log-and-Retrospective]] | Controlled iteration and versioning | Whenever method changes |
| [[06-references/01-Reading-and-Evidence]] | Selected research and origin caveats | Evidence review |

## Operating rules

- **Evidence over fluency:** A persuasive explanation is not proof of mastery.
- **Student first:** Give the learner a genuine attempt before substantial hints on problem-solving tasks.
- **Teach when needed:** Do not insist on discovery when prerequisite knowledge is absent.
- **Adapt guidance:** Worked examples for novices; progressively more independent work for experienced learners.
- **No false certainty:** Agents identify uncertainty and verify critical claims against source material.
- **Retention matters:** Evaluate again after a delay and on unfamiliar problems.
- **Low overhead:** Record only observations that change the next instructional decision.

## Portability

All content is plain Markdown with optional Obsidian `[[wikilinks]]`. In non-Obsidian editors, navigate by file paths matching link targets. Prompts are plain text inside Markdown code fences and can be pasted into ChatGPT, Claude, Gemini, Codex, or other agents. No plugins, API integrations, or external automations are required.

## Scope boundary

The original context was mathematics tutoring. Adaptations for other disciplines should change task types and assessment rubrics; do **not** assume proof-based tests fit all fields.
