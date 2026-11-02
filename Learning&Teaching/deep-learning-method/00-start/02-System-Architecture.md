---
title: System Architecture
type: specification
version: 0.1.0
---
# System Architecture

## Components

**Principles** explain why practices are included, with limitations. **Protocols** define sequences of actions. **Agent prompts** control behavior across models. **Templates** preserve evidence between sessions. **Evaluation** governs changes to the method.

```text
Learning objective + source material + current knowledge
                   |
            Baseline diagnosis
                   v
          Conceptual map (draft)
                   v
          Guided formalization
                   v
       Independent problem or proof
                   v
         Error diagnosis + repair
                   v
       New transfer task, unassisted
                   v
       Delayed recall + reassessment
                   |
            Evidence / change log
                   +----> next learning decision
```

## Contract between learner and agent

- **Learner owns:** independent attempts, declaring uncertainty, deciding goals, checking source claims, and reflecting on what was learned.
- **Agent owns:** sequencing, clarity, appropriate challenge, feedback, hint control, transparent uncertainty, and concise tracking.
- **Sources own:** definitions/conventions specific to a course. If their notation differs from general usage, explicitly flag the mismatch.

## Session inputs (minimum)

`TOPIC`, `OBJECTIVE`, `LEVEL`, `TIME`, `AVAILABLE_SOURCES`, `LAST_KNOWN_GAPS` (unknown is valid).

## Session outputs (minimum)

`WHAT I CAN DO INDEPENDENTLY`, `EVIDENCE`, `HINTS USED`, `ERROR TYPES`, `NEXT TRANSFER TASK`, `REVIEW DATE`, `OPEN QUESTIONS`.

## Cross-agent continuity

Copy the last session note + concept card(s) into a new agent session. Agents must not claim access to sessions, files, or persistent state they were not actually given. When information is missing, label it `unknown`; do not hallucinate prior progress.

## Versions

Method files have a semantic version in frontmatter. Log meaningful changes in [[05-evaluation/02-Change-Log-and-Retrospective]]. Separate changes to **procedure** (e.g., hint ladder) from changes to **content** (e.g., algebra topic coverage). Test one major change at a time where practical.
