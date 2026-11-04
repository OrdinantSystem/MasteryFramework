# Goldfish Review Report

**Target:** `/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/docs/analysis-teaching-proposal.md`, lines 1–225. **Mode:** BRAINSTORM, 4 November 2026.

The exact reviewed text is [proposal-reviewed-input.md](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/docs/egm/analysis-teaching/proposal-reviewed-input.md), SHA-256 `39b22177c94b243532d4747aa3595fcbaf81b3972b0e63c6ad62a90d6c10e3ed`. Proposal references below point to that snapshot. This synthesizer did not revise the target. The earlier `proposal-before-goldfish.md` is historical and was not the reviewed input.

## Reviewer status

| Reviewer / actual task ID | Status | Mandatory reads | Raw findings |
| --- | --- | --- | --- |
| `/root/egm_synthesizer/egm_design` | completed | 11/11 attested | 0 Blocker, 3 Major, 0 Nit |
| `/root/egm_synthesizer/egm_codebase_details` | completed | 16/16 attested | 0 Blocker, 2 Major, 1 Nit |
| `/root/egm_synthesizer/egm_zoom_out` | completed | 12/12 attested | 0 Blocker, 3 Major, 1 Nit |
| `/root/egm_synthesizer/egm_comprehension` | completed | 13/13 attested | 0 Blocker, 2 Major, 1 Nit |
| `/root/egm_synthesizer/egm_implementation_readiness` | completed | 14/14 attested | 0 Blocker, 2 Major, 1 Nit |
| `/root/egm_synthesizer/egm_structural` | completed | 15/15 attested | 0 Blocker, 2 Major, 2 Nit |

All six returned final responses; native agent status also reported completion. No retries, failures or missing mandatory reads. Raw total: **0 Blocker, 14 Major, 6 Nit**. Deduplicated triage: **0 Blocker, 7 Major, 4 Nit**. Major denotes a material concepts or next-design requirement, not a mathematical error or a veto on accepting the direction. Several requirements explicitly belong to pilot design rather than this brief.

Each reviewer used `fork_turns: "none"`, no model override, a bounded absolute reading list, and read-only instructions. No parent transcript, memory or sibling findings were supplied. This does not verify exclusion of automatically injected instruction files or shared filesystem access. Exact reading lists, role titles, attestations and complete verbatim responses are in [reviewer-receipts.md](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/docs/egm/analysis-teaching/reviewer-receipts.md).

## Prioritized findings

### M1. Separate guided predictions from independent evidence — Major

**Lens:** codebase-details. **Scope:** [Pilot A](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/docs/egm/analysis-teaching/proposal-reviewed-input.md:137), [Pilot C](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/docs/egm/analysis-teaching/proposal-reviewed-input.md:147). **Classification:** confirmed answer exposure in the baseline; future task-placement choice.

Input 4 is already declared false in the [predicate lesson](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/my_notes_web/src/content/lessons/en/analysis/aussagen-und-aussageformen.mdx:39), and [candidate rendering](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/my_notes_web/src/lib/interactive/analysis-scenes.ts:19) reveals outcomes across the displayed domain. The [convergence lesson](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/my_notes_web/src/content/lessons/en/analysis/reading-sequence-convergence.mdx:263) already gives the proposed 10-versus-11 answer. Correct repetition cannot demonstrate independent reasoning.

**Strongest counterargument:** These can be useful guided teaching prompts; the proposal separately promises changed tasks. No revised placement exists yet.

**Recommended disposition:** Revise the concept to distinguish prediction, explanation and independent check. Put a prediction before its relevant answer/readout; use unfamiliar cases for the independent task and record prior answer exposure. Preserve useful static content and optional solutions. No compulsory interaction gate is needed. Exact task construction belongs to pilot design.

### M2. Give Pilot C separate core and optional-extension questions — Major

**Lenses:** design, zoom-out, comprehension; codebase-details corroboration. **Scope:** [convergence outcome](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/docs/egm/analysis-teaching/proposal-reviewed-input.md:97), [Pilot C](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/docs/egm/analysis-teaching/proposal-reviewed-input.md:145). **Classification:** assessment interpretation risk and future outcome decision.

The pilot concentrates on reciprocal convergence, whose [additional accepted background](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/my_notes_web/src/content/lessons/en/analysis/reading-sequence-convergence.mdx:225) is explicitly optional. The core already has a [constant proof and dependence explanation](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/my_notes_web/src/content/lessons/en/analysis/reading-sequence-convergence.mdx:108). Reciprocal errors may concern algebra rather than quantifiers; constant examples do not test construction of a threshold that must adapt to tolerance.

**Strongest counterargument:** Reciprocal convergence usefully reveals tolerance dependence and strict-boundary errors; removing it would weaken that investigation.

**Recommended disposition:** Retain both levels, report them separately. Use a core attempt with arbitrary tolerance, a legal threshold chosen before the test index, and whole-tail justification. Supply/check the extra arithmetic facts for the optional reciprocal task. Decide explicitly whether construction of a necessarily tolerance-dependent threshold is a core requirement; retaining the present boundary is the smallest change. A written `2/n` task, if selected, needs no new model. This is a decision for the root, not an accepted syllabus change.

### M3. Bound pilot prerequisites and the route each pilot actually tests — Major

**Lenses:** comprehension, zoom-out. **Scope:** [learner assumptions](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/docs/egm/analysis-teaching/proposal-reviewed-input.md:13), [lesson 1 timing](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/docs/egm/analysis-teaching/proposal-reviewed-input.md:106). **Classification:** untested prerequisite assumption and explanation risk.

The [opening number lesson](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/my_notes_web/src/content/lessons/en/analysis/zahlenmengen.mdx:40) uses membership, set difference and set-builder notation before all are explained. Removing binding terminology alone does not define the entry boundary. Lesson 1's identified dependency repair is scheduled after Pilot A; B and C also depend on intervening material. An isolated page test is not evidence about the continuous beginner route.

**Strongest counterargument:** Common school notation may be familiar, and revising every prerequisite before piloting would defeat the bounded experiment.

**Recommended disposition:** State each pilot's assumed notation, small entry check, local reminder/remediation and indispensable adjacent corrections. Include the minimal lesson-1 dependency disposition or label Pilot A a local test that excludes it. Keep B/C local results distinct from end-to-end route evidence. No new introductory course or institution-specific syllabus is required.

### M4. Define qualitative evidence and an explicit expansion decision — Major

**Lenses:** design, zoom-out, codebase-details. **Scope:** [learner checks](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/docs/egm/analysis-teaching/proposal-reviewed-input.md:175), [stages 4–5](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/docs/egm/analysis-teaching/proposal-reviewed-input.md:213). **Classification:** evidence-design and staging gap.

“Quality of independent reasoning” lacks a shared interpretation, while stage 4 permits learner testing to be unavailable and then leads toward wider revision. A disclosure cannot establish independence. The twenty-row table risks becoming an obligation to revise every page, although source-observed defects and untested teaching hypotheses warrant different decisions.

**Strongest counterargument:** The proposal already names substantial outcomes and honestly separates build success from learning evidence. Editorial judgment can justify clear corrections without a learner study.

**Recommended disposition:** Before implementation, define a short observation/self-check rubric covering domains, witnesses, exclusions, legal dependence, whole-tail reasoning, boundary conditions and assistance required. Record unaided/hinted/solution-seen attempts without mastery scores. After pilots choose retain, revise, expand only the supported pattern, or broader revision. Without learners, permit bounded source-supported corrections and label effects unvalidated. Optional Boolean polish remains candidate work. No statistical efficacy threshold or remote collection is required.

### M5. Expose the resource envelope without invented calendar promises — Major

**Lenses:** design, structural; zoom-out rated this Nit. **Scope:** [staged work](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/docs/egm/analysis-teaching/proposal-reviewed-input.md:206). **Classification:** proposal omission under Heilmeier cost/timeline questions.

Three multilingual pilots imply nine nominal lesson files, plus donor/recipient lessons, shared copy/presentation work and preservation review. No effort band, review availability or approximate duration is supplied. This prevents comparing implementation with a smaller draft-first experiment.

**Strongest counterargument and severity dissent:** Estimates depend on drafts and reviewer/learner availability; zoom-out judged the omission Nit. Exact staffing and dates are premature. The synthesis retains Major because the resource envelope controls scope, without treating it as a blocker to the concept.

**Recommended disposition:** Describe bounded work packages for English drafts, affected-locale work, preservation migration, semantic/mathematical review and learner checks. State known quantities and unknown review scheduling explicitly; attach provisional effort bands only with assumptions. Prefer draft comparison before shared-code work. Do not invent availability, measured productivity or promised dates. Wider estimates follow actual pilot costs.

### M6. Treat a narrowed presentation as one coherent teaching question — Major

**Lens:** structural; zoom-out reuse check. **Scope:** [activity proposal](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/docs/egm/analysis-teaching/proposal-reviewed-input.md:47). **Classification:** later-design ownership requirement.

The [public API](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/my_notes_web/src/components/interactive/Interactive.astro:12) does not currently distinguish teaching presentations. [Shared copy](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/my_notes_web/src/lib/interactive/analysis-copy.ts:5) includes uniqueness and, at line 14, a green-permission instruction competing with Pilot B's proposed red change. Hiding controls alone can leave incompatible prompts or outputs.

**Strongest counterargument:** Reuse and narrow variants are already promised; API decisions belong in design.

**Recommended disposition:** Carry forward one concept rule: question, initial state, actions, readouts, feedback, static view and reset agree across EN/DE/ES while mathematics stays shared. A bounded set of justified presentations is preferable to component copies or arbitrary switches. Do not specify type signatures or build a configuration framework in this brief.

### M7. Preserve and restore the whole affected edition together — Major

**Lens:** implementation-readiness; includes its Nit fragment caution. **Scope:** [relocation](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/docs/egm/analysis-teaching/proposal-reviewed-input.md:37), [migration promise](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/docs/egm/analysis-teaching/proposal-reviewed-input.md:217). **Classification:** confirmed verifier constraints; later-design migration/rollback requirement.

[Summary checks](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/my_notes_web/scripts/verify-analysis-summary.mjs:51) bind tasks to files/ordinals and exact structures; the [visual contract](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/my_notes_web/scripts/analysis-visual-contract.mjs:13) reconstructs a fixed reviewed base. Moves need more than new hashes. [Fragment compatibility](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/my_notes_web/src/components/AnalysisCompatibility.astro:8) uses explicit mappings. Restoring only MDX may leave copy, destination and evidence mismatches.

**Strongest counterargument:** The proposal already acknowledges preservation migration and fresh review; no current lost task or broken link is demonstrated. Static local versioning is sufficient for rollback.

**Recommended disposition:** Require a pilot handoff mapping original task identity, domain, assumptions, hint, solution and old fragments to active destinations. Review donor and recipient lessons in all affected locales. Preserve historical records; validate the new actual edition. Treat changed content, presentation/copy, compatibility and evidence as one reversible set with an exact pre-pilot reference. Ledger schema, anchor arrangement and checks belong to later design; this is no request for deployment machinery.

### N1. Describe existing arguments as retain/reorder/clarify — Nit

**Lens:** codebase-details; design/comprehension/zoom-out dissent from an overly broad diagnosis. The [sequence introduction](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/my_notes_web/src/content/lessons/en/analysis/real-sequences.mdx:29) already explains function notation, and quantifier/convergence reasoning already exists. The proposal acknowledges that material, so no false general claim is established. **Recommendation:** Add explanations only against a named inference gap or observation; distinguish changed order from new reasoning. Counterargument: the current “add only ... needed” wording already allows this interpretation.

### N2. Avoid implying predicates must change truth value — Nit

**Lens:** comprehension. [Pilot A wording](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/docs/egm/analysis-teaching/proposal-reviewed-input.md:135) says truth “depends on” input. It may suggest nonconstant truth, though ordinary functional language permits constant functions. **Recommendation:** Prefer “a condition we evaluate at an allowed input”; later include an always-true/always-false input condition. This is a wording risk, not an established mathematical error.

### N3. Repeated examples may carry different proof obligations — Nit

**Lens:** structural. The [witness example](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/my_notes_web/src/content/lessons/en/analysis/existence-and-uniqueness.mdx:26) serves verification, construction and uniqueness; repeated key stories support different claims. **Recommendation:** In the existing disposition map identify first explanation, reminder, changed obligation and retrieval before deduplicating. Counterargument: distinct proof obligations are already protected; this refines the map rather than adding a new system.

### N4. Test task discovery rather than flattening disclosures — Nit

**Lens:** structural. [Quantifier order already has visible practice](/Users/jean/Documents/OrdinantSystems/MyNotes/myNotes/my_notes_web/src/content/lessons/en/analysis/quantifier-order.mdx:59). Nesting alone does not establish poor discovery. **Recommendation:** Keep the selected question visible, disclose its answer, name optional banks by purpose and keep essential instructions outside them; test the arrangement locally. Counterargument: the proposal already rejects compulsory templates. No global exercise or nesting quota is warranted.

## Disposition and evidence limits

These are **synthesizer recommendations for root reconciliation**, not newly accepted user decisions. Accepted context remains the learner setting, review authorization and preservation/interface/language boundaries. The root alone revises the target and determines final dispositions. Any later target revision is the Elephant reconciliation and was not independently re-reviewed in this run.

The reviewers corroborated the overview's scope/review mismatch, advanced shared outputs, and a useful explicit parity-witness bridge for failure of convergence. They did not establish that current learning is ineffective. Existing function notation, reciprocal reasoning, dependence distinctions and visible exercises constrain the diagnosis: the main hypothesis concerns sequencing, attention and independent use. The overview correction has direct source evidence; broader benefit remains untested.

No reviewer ran builds, changed application files, observed learners, audited all translations or certified the mathematics. The proposal's educational research was not independently verified in this run; synthesis makes no new empirical efficacy claim. Native completion and read receipts establish this workflow's reported execution, not expert mathematical/translation certification or full context isolation.

## Raw-finding trace

| Raw reviewer finding | Synthesis disposition |
| --- | --- |
| design 1 / 2 / 3 | M5 / M2 / M4 |
| codebase-details 1 / 2 / 3 | M1 / M4 / N1 (also supports M2) |
| zoom-out 1 / 2 / 3 / 4 | M2 / M4 / M3 / M5 (Nit severity dissent retained) |
| comprehension 1 / 2 / 3 | M3 / M2 / N2 |
| implementation-readiness 1 / 2 / 3 | M7 / M7 / M7 (Nit fragment caution retained as later design) |
| structural 1 / 2 / 3 / 4 | M6 / M5 / N3 / N4 |
