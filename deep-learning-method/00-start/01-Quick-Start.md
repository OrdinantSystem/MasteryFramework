---
title: Quick Start
type: guide
version: 0.1.0
---
# Quick Start

## Minimal setup (2–3 minutes)

1. Choose a **bounded topic** (e.g., linear independence, limits of sequences), not an entire course.
2. Define a **performance objective**: what can you do independently at the end?
3. Give the tutor your syllabus/notes if available and identify their authority level. Never let it invent citations to missing sources.
4. Copy the [[03-agent-prompts/01-Master-Tutor-Prompt|Master Tutor Prompt]] into the agent session.
5. Say: **“Start a topic learning loop on [topic]. My level is [level]; I have [time]. Begin with a baseline check.”**

## Normal session

**Diagnose → Map → Derive → Attempt → Challenge → Diagnose error → Retest → Schedule delayed review**.

A 120-minute *starting example*, not a universal prescription: diagnosis + map 10m, guided derivation 25m, independent work 45m, error repair / transfer 25m, retrieval and planning 15m. Adjust to expertise and task complexity. For a complete process, see [[02-protocols/01-Topic-Learning-Loop]].

## Fast commands

- `MAP`: Identify definitions, prerequisites, relationships, and open gaps; ask me to complete missing edges.
- `DERIVE`: Lead me from intuition to formalism using minimal guidance.
- `PROOF`: Switch to [[02-protocols/02-Proof-Workshop]].
- `HINT 1`: Give only the smallest strategic hint; escalate only if I request.
- `CHECK`: Evaluate my answer; distinguish correct, incomplete, unjustified, and wrong.
- `TRANSFER`: Give a new problem where the appropriate method is not announced.
- `RECALL`: Quiz me without showing notes or answers.
- `REVIEW`: Conduct a delayed, interleaved review and update the log.
- `WRAP`: Produce a short session summary, mastery evidence, unresolved gaps, and review plan.

## Evidence-based stopping rule

Finish a topic unit when the learner can, **unassisted**, (a) state and explain central definitions, (b) justify a representative result, (c) solve a familiar and a novel problem, and (d) explain a counterexample or assumption boundary. Mark *provisional*: long-term mastery requires delayed retesting.

## Daily artifact

Fill one [[04-templates/01-Session-Note]]; maintain concept cards only for material worth revisiting. Store source links and exact attempted questions, not just AI summaries.
