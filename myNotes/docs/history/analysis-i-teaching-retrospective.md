# Analysis I teaching improvement: history and reusable method

Recorded 4 November 2026. This retrospective explains the Analysis I improvements, the decisions behind them, and what future course work can reuse. It records completed work; the [active teaching contract](../analysis-teaching.md), [authoring guide](../authoring.md) and [design system](../../DESIGN-SYSTEM.md) govern subsequent changes.

The result is a more deliberate route from mathematical language to quantifiers and sequence convergence, with shorter reference prose, useful visual explanations, and selected entry points adapted to a first-semester learner. Source comparison, independent AI reviews and technical checks establish specific improvements in composition, preservation and behavior. They do **not** establish faster learning or better retention: no student trial was conducted.

## 1. Starting point and intended reader

The website already contained substantial mathematics, worked arguments, practice, reference answers and graphical tools. Its problem was not simply missing content. Related explanations were spread across many pages; some prose repeated a definition without adding another reasoning step; some early explanations or figures introduced concepts the reader had not yet met.

Jean clarified the intended learner: a student in the first year, first semester of a university mathematics and physics degree. This made the entry sequence important. A student may manipulate an equation while still struggling with domains, witnesses, the order of choices in a proof, or the distinction between a displayed sample and an infinite claim.

The available material develops foundations, logic, quantifiers, proof and an initial convergence application. It is not a complete university Analysis I syllabus. No institution-specific syllabus or exam requirements were supplied. Boolean algebra and circuits remain an optional application branch.

Two uses therefore needed to coexist: a compact reference for previously studied material, and clearer support when a student first encounters selected foundations. The response was selective clarification and sequencing, rather than expanding every page into a long lecture.

## 2. The work happened in distinct passes

| Pass | Completed change | Why it mattered |
| --- | --- | --- |
| Organization | Consolidated the former 53-page public edition into twenty lessons across six sections; retained historical destinations and moved-section anchors. | Related reasoning could be read together with fewer navigation interruptions. Existing links and distinct teaching material remained available. |
| Substantial summary | Reduced authored prose across EN/DE/ES by 36.52% overall, with full-source semantic review and preservation records. | Removed repetition while retaining conditions, examples, proofs and practice. A uniform further cut was rejected because some arguments needed their remaining detail. |
| Visual teaching | Audited all twenty lessons; added sixteen interactive instances, four static diagrams and twenty-three connecting explanations per language, retaining useful existing graphics. | Made relationships inspectable: domains, truth assignments, witnesses, endpoints, proof dependencies and sequence tails. Each addition had a named mathematical purpose. |
| First-semester refinement with EGM | Revised the overview and six lesson identities in all three languages; introduced four focused presentations and new independent practice. | Matched selected explanations and activities to the learner's current knowledge, with more explicit links from examples to formal reasoning. |

These were successive layers, not one EGM operation. The latest refinement reused the prior organization, reviewed summary and visual engines. It did not rewrite all twenty lessons. The prose-reduction percentage measures text, not learning time; moving an answer into a disclosure did not earn a reduction.

The [organization guide](../analysis-organization.md), [summary plan](../analysis-summary-plan.md), [visual audit](../analysis-visuals.md) and [verification record](../../my_notes_web/VERIFICATION.md) contain the detailed stage records.

## 3. What changed in the first-semester refinement

| Area | Implemented change | Teaching reason |
| --- | --- | --- |
| Course overview | Put scope and the core route before the lesson index; label optional applications; retain recall questions and the Boolean dependency chain; disclose the existing parity answer; add a linked sequence synthesis. | Help the learner choose a route and attempt a problem before reading its solution. |
| Number systems | Add brief first-use readings of membership, nonmembership, set difference and set-builder notation. | Close a prerequisite gap at the point of use without creating a separate notation course. |
| Predicates | Begin with a rule, allowed input and evaluated statement; place the quantifier/proof connection later; use a focused figure and a new numerical task, including a condition true at every allowed input. | Separate evaluation from quantification and avoid implying that a predicate's truth must change when its input changes. |
| Quantifier order | Start with the complete Ana/Ben and red/blue key relation, then retain the general reading procedure; compare separate witnesses with one shared witness; add an unfamiliar numerical relation. | Give the symbols a concrete meaning before the abstract procedure, then require reasoning beyond the illustrated example. |
| Sequences | Show index, value, repetition and the tail before introducing tolerance or a convergence verdict. | Prevent a first sequence picture from silently requiring knowledge of limits. |
| Convergence | Connect an eventual-constant picture to the existing definition and complete proof; add a changed eventual-constant task and a separate optional reciprocal transfer. | Examine the order of choices without first requiring optional reciprocal algebra. |
| No real limit | Add an arbitrary-target proof for the alternating sequence, with a suitable odd or even index at or beyond any threshold. | Explain why rejecting one target is insufficient and why the obstruction works for every real target. |

Central explanations and new core questions remain visible. Reference solutions use native disclosures. Optional practice is explicitly named and discoverable. Existing formal work and distinct practice were preserved; repeated examples were retained when they served different obligations, such as verifying a witness, constructing one, proving uniqueness or excluding alternatives.

For example, the new core convergence task has two initial terms equal to 7 and all later terms equal to −2. For arbitrary positive tolerance, choosing threshold 3 makes every later distance from −2 equal to zero. This exposes the essential choice order: tolerance, threshold, then arbitrary tail index. A threshold need not be smallest or vary with tolerance. Choosing `N = n + 1` improperly depends on the later test index.

The optional `2/n` task has a different purpose: construct a threshold greater than `2/epsilon` and justify the whole tail using the accepted arithmetic background. Keeping these tasks separate makes a future learner's difficulty easier to interpret.

### Graphics were narrowed without duplicating the mathematics

The existing explorers could show more than an introductory explanation needed. Four closed presentation variants now select a coherent teaching view:

| Presentation | What the learner sees |
| --- | --- |
| `input` | Input, domain membership and predicate evaluation, without quantified counts or verdicts. |
| `witnesses` | A complete finite relation and the two positive quantifier orders. |
| `terms` | Sequence positions, values and a movable tail, without a tolerance band or convergence verdict. |
| `tail` | A fixed reciprocal sequence and target zero, with tolerance and threshold controls. |

The original `full` presentation remains the default. These views share the existing mathematical model. Their headings, instructions, controls, readouts, initial rendering, updates and reset agree with the selected purpose. Merely hiding a control would have been insufficient if the caption or feedback still introduced the later concept.

The visual explanation and the proof have different jobs. A complete finite relation supports exhaustive checking of that finite relation. A plot of 32 terms cannot prove an infinite-tail claim. The sequence verdict uses the mathematical rule beyond the visible sample, and the written proof supplies the general argument.

## 4. How Elephant–Goldfish changed the decisions

The first audit was performed by the main agent alone. EGM did not provide a pre-existing personal memory or automatically verify the course. The Elephant role retained project context, proposed changes and reconciled evidence. Goldfish roles supplied fresh conversational perspectives with bounded source lists and explicit review questions.

After Jean approved Goldfish reviews and clarified the learner, one synthesizer launched six fresh-context reviewers covering design/resources, source accuracy, scope, beginner comprehension, preservation and maintenance. They completed twenty raw findings, grouped into seven Major and four Nit findings, with no reported Blocker. These labels describe proposal issues, not a course grade.

The Elephant checked important claims against the actual files before accepting, narrowing or deferring recommendations. Disagreement and counterarguments remained in the record; findings were not decided by voting. Two further reviewers examined the concrete implementation plan. During implementation, three language reviewers compared all seven affected old/current content files per language, including answers, and a fourth reviewed shared presentation and preservation code. Relevant reviewers checked repairs and final versions.

Concrete consequences show why this review structure was useful:

| Challenge found by review | Resulting decision or repair |
| --- | --- |
| The proposed predicate prediction was already answered in the prose and graphic. | Retain it as guided illustration; use an unfamiliar condition for independent practice. Recognition of a displayed answer is not evidence of independent reasoning. |
| A reciprocal-only convergence task mixes quantifier reasoning with optional arithmetic. | Separate the core eventual-constant proof from the optional reciprocal extension. |
| Simplifying predicate prose still leaves unexplained set notation earlier in the route. | Add small prerequisite bridges where those symbols first appear. |
| A distinct “remove every key” challenge disappeared when activity instructions changed. | Restore it in all three languages, including the explanation of why both claims are false when people remain. |
| Optional practice labels and a Spanish noun were unclear; synthesis links were too remote. | Make optional status explicit, correct “two master keys” wording, and place prerequisite links beside the task. |
| A validator could accept an old optional question moved into a reference-answer disclosure. | Preserve the question's exact disclosure role and add an adversarial fixture that rejects that mutation. |
| New task records used generic objectives. | Replace them with each task's actual question and solution obligations. |

The gain from EGM was the discovery and resolution of specific defects, not the number of agents. Fresh conversation settings reduce inherited assumptions; they do not isolate the shared filesystem. Reviewer receipts are attestations, and the implementation reports are normalized controller transcriptions, not independently audited native tool transcripts. AI review did not change the content's mathematical or translation `reviewStatus` into human certification.

See [how EGM was used](../egm/analysis-teaching/how-egm-was-used.md), [review findings](../egm/analysis-teaching/goldfish-review-report.md), [Elephant decisions](../egm/analysis-teaching/elephant-decisions.md) and [implementation receipts](../egm/analysis-teaching/implementation-review/README.md).

## 5. Preserving the course while improving its teaching

The latest batch changed 21 localized content files and nine shared presentation source files. The exact 21 pre-edit content files were frozen from the working tree, including the earlier visual pass; using Git HEAD would not have represented that actual starting point. These snapshots remain [outside the content loader](analysis-before-teaching/README.md), not as another public course.

The active teaching contract accounts for 2,376 original paragraph/markup units, complete original exercises, tables, displays, graphics and anchors. It also protects questions and hints outside formal Exercise components. It distinguishes article text, optional tasks, hints, references and exercise solutions, including repeated occurrences. Keeping identical words somewhere in a file is insufficient if the student can no longer encounter the question in its intended role.

All 130 original lesson Exercise blocks per language remain. Each language now has 134 lesson exercises and two course-review Exercise disclosures; one of the latter wraps an existing parity problem rather than inventing a new one. New tasks have specific reasoning obligations. Review receipts bind the actual content and shared presentation versions, so changing a renderer cannot silently inherit approval of an earlier one.

The historical summary and visual records remain frozen. The active edition is validated first; only then is its predecessor reconstructed for older checks. Passing historical checks does not constitute a fresh semantic review of current wording. Negative fixtures test attempted losses, stale reviews and inappropriate disclosure changes, including cases with renewed hashes.

This preservation machinery has a maintenance cost. Its detail was justified by an already reviewed multilingual archive and existing preservation obligations. Other courses should reuse appropriate existing checks and protect meaningful tasks, rather than copying a large ledger without a comparable need.

## 6. What the evidence establishes

| Evidence | Supported conclusion | Limit |
| --- | --- | --- |
| Paired source review and exact-version receipts | Specific reasoning, tasks and answers survived the changes; identified defects were repaired. | Independent AI review can still miss mathematical or linguistic errors. |
| Thirteen teaching-contract fixtures and ten historical-summary fixtures passed | The tested preservation failures are rejected, including lost material and question-to-answer role changes. | Structural checks do not establish that an explanation teaches effectively. |
| Node 24 production builds at root and `/MyNotes`, followed by restoration of root output | The changed site builds with its content, library, link, asset, math, search and contrast checks. | A local prefix build is not a deployment result. |
| 84 browser states: seven page types × three languages × two themes × two widths | Tested pages initialized without page-wide overflow or KaTeX errors; representative layouts were visually inspected. | This was not a human usability study or exhaustive accessibility audit. |
| Functional checks of domain changes, witnesses, empty cases, thresholds, keyboard input, focus, reset, disclosures, search and language navigation | The tested interaction and navigation flows behaved as intended. | Physical touch/pen and screen-reader use were not audited. |

The final implementation build produced 287 static documents, checked 21,377 local links/assets and 6,899 TeX annotations, and indexed 165 canonical lesson/review entries across three languages. The document count includes compatibility pages; it is not the number of lessons. These are historical run totals, not targets for future changes. The [implementation checks](../egm/analysis-teaching/implementation-checks.json) and [verification record](../../my_notes_web/VERIFICATION.md) preserve the details.

The supported improvement is therefore concrete: a clearer route, fewer premature demands in selected figures, visible independent tasks with complete answers, explicit proof obligations, and preserved reference material in a working multilingual site. Lower initial cognitive burden and better transfer are plausible teaching reasons for these choices. Their effect on actual learning speed, retention and exam performance remains unmeasured. No commit, push or publication formed part of this refinement.

## 7. Reusing the method for another course

1. **Define the learner and the course's job.** Record degree stage, prerequisites, first learning versus revision, and syllabus boundaries. Identify unknowns rather than inventing an institutional curriculum.
2. **Audit actual content before prescribing additions.** Read solutions, optional practice, captions and live graphics. Classify material as retain, reorder, clarify or add. Do not call a proof missing because it appears later on the page.
3. **Freeze the real starting edition.** Include current working changes, task identities, anchors and shared dependencies. Keep private source references out of learner output.
4. **State a small teaching hypothesis.** For example: “separate input evaluation from quantification.” Choose a few representative lessons and their minimum prerequisite bridges. Do not treat a whole-course audit as authorization to rewrite every page.
5. **Invite bounded fresh criticism when authorized.** Give reviewers a learner profile, source list, preservation rules and distinct questions. Require concrete evidence and preserve counterarguments. Have the context keeper verify and reconcile findings.
6. **Design the reasoning before the interface.** Specify the example, learner action, reference argument and observable obligations. Separate guided examples from unfamiliar attempts and core reasoning from optional background.
7. **Reuse existing representations.** Change a presentation only when its question requires it. Keep prose, controls, readouts and feedback coherent; explain what a finite picture can and cannot establish.
8. **Implement and review complete localized editions.** Check questions, hints, answers and graphics in every affected language. Review actual final content and shared rendering versions, not just a plan or a file count.
9. **Test preservation and the usable site.** Include meaningful failure fixtures, a production build and relevant browser flows. Check desktop/compact layouts, themes, languages and hosting prefixes when affected. Record concrete limitations.
10. **Make expansion depend on evidence.** Retain a source-supported correction; revise a failed explanation; expand a pattern only when its evidence supports doing so. Avoid mandatory word-reduction percentages, section counts or graphics quotas.

When learners are available, use unfamiliar tasks and record whether each attempt was unaided, hinted or made after seeing the solution. Ask for explanations, not just correct final values. A later changed task can examine transfer beyond immediate recognition. Keep optional-extension outcomes separate from core outcomes and define the retain/revise/expand decision before collecting attempts. No visitor account, remote answer collection or mastery score is required to improve the editorial process.

For a future course, retain a compact evidence package: learner/scope brief, before/after sources, change-and-reason table, task obligations and reference solutions, review findings and decisions, checks with limitations, and the next scope decision. The reusable lesson from Analysis I is to improve the sequence of reasoning while preserving its substance, and to keep editorial confidence separate from demonstrated student learning.
