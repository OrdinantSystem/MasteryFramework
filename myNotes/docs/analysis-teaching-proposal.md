# Analysis I: teaching audit and improvement proposal

**Author:** JMCourtois  
**Prepared:** 4 November 2026  
**Status:** Initial audit and superseded working proposal. Six independent-context Goldfish reviews and Elephant reconciliation completed on 4 November 2026. Use the [revised concepts proposal](egm/analysis-teaching/concepts_brief.md) for the current recommended plan and [decision record](egm/analysis-teaching/elephant-decisions.md) for what changed. The detailed audit and original proposal below are retained as supporting history, not implementation instructions. Website source remains unchanged.

## Overview

The main teaching problem is the gap between the section's current purpose and the proposed learning experience. The active authoring guides describe Analysis I as a recap for previously studied material. A student learning proof and quantifiers for the first time needs more help deciding what to attend to, what to try, and whether their reasoning is sufficient.

The section already contains substantial teaching material. Rewriting everything or adding a diagram to every subsection would create work without establishing better learning. My proposal is to refine the existing twenty lessons into a clearer learning route, retain their usefulness for revision, and test the approach on three representative lessons before applying it throughout.

**Confirmed learner setting:** a first-year student in the first semester of a university mathematics and physics degree. Jean supplied this profile and approved the working proposal and Goldfish reviews on 4 November 2026. Elementary algebra and inequality skills are working prerequisite assumptions to check briefly; prior mastery of university proof, quantifiers and convergence is not assumed. This is the existing foundations section within a first-semester subject, not a claim to cover the university's complete Analysis I syllabus. No institution-specific syllabus or examination specification has been supplied.

**Working hypothesis:** students will learn these foundations more effectively when each important idea connects a concrete case, a formal statement, an explained argument, and an independent changed case. Concision should remove repeated work for the reader while retaining the reasoning they need to reconstruct a result.

## What I inspected

- Read all twenty current English Analysis lessons and the course review, including reference answers and interaction instructions.
- Inspected representative German convergence and Spanish quantifier passages. This was not a full translation audit.
- Read the active design, authoring, organization and visual teaching contracts; inspected the shared exercise view and mathematical interaction models/copy.
- Inspected the freshly built local overview, the predicate activity, and the quantifier-order explanation at desktop size; inspected reciprocal convergence and its controls at 390 px width.
- Ran the full production build with Node 24.22.1. It passed, including content preservation, library models, links, generated mathematics and contrast checks. The output contained 287 static documents; these include compatibility documents, not 287 teaching pages.

The review includes the existing uncommitted visual teaching work. I changed no application content, components, review flags or preservation records. This proposal is the only new deliverable from this audit.

The English lessons contain **130 Exercise components and 18 Interactive invocations**. There are additional plain-text tasks, tables and static graphics. Exercise count measures inventory, not task quality or demonstrated learning. The existing prose counter reports 17,957 words across those lessons, including disclosed practice and answers but excluding mathematics and some graphical configuration. It is not a measure of reading time or cognitive difficulty.

## Analysis: what needs attention first

### 1. The opening lessons require knowledge taught later

In [lesson 1](../my_notes_web/src/content/lessons/en/analysis/zahlenmengen.mdx), the equality discussion introduces open formulas, binding and universal quantifiers. Its transitivity exercise requests a three-quantifier formal statement. Quantifiers and scope receive their main treatment in lesson 8.

[Lesson 2](../my_notes_web/src/content/lessons/en/analysis/aussagen-und-aussageformen.mdx) says the domain “restricts without binding” before explaining binding. Its predicate activity displays universal, existential and unique-existence verdicts simultaneously. These are useful later, but they compete with the beginner's immediate question: what changes when an input changes?

**Proposed change:** first teach input, fixed rule and true/false output. Introduce the words “every” and “some” when needed, then develop their notation and scope in the quantifier section. Relocate advanced binding tasks to their full teaching home, preserving their tasks, solutions and old destinations. A brief preview can remain if explicitly explained; it should not be required to solve the early core tasks.

### 2. Short prose sometimes carries too many distinctions

The negation, implication and quantifier-order lessons combine several former topics. They retain substantial reasoning, but a sentence may ask a novice to track domain, definedness, binding, truth, proof and a boundary case together. For example, the opening reading procedure in [quantifier order](../my_notes_web/src/content/lessons/en/analysis/quantifier-order.mdx) is a compressed expert checklist before the central person/key example.

**Proposed change:** put the main relationship first. Develop one representative argument in connected sentences; attach nearby cautions only when that argument needs them. Preserve secondary cases in clearly named sections and linked practice. Use headings that identify the mathematical question. Avoid imposing a new section template on every page.

Do not set another blanket percentage reduction. A 238-word lesson with many symbolic proof chains can demand more from a learner than a longer explanation. Judge concision by unnecessary repetition and the amount of inference the reader must supply.

### 3. Some shared activities teach too much at once

The predicate activity includes counting and uniqueness; the first sequence activity includes target, tolerance, threshold, whole-tail tests and a choice of sequence. The models are mathematically useful. Their shared default presentation sometimes exposes ideas beyond the surrounding lesson's immediate purpose.

**Proposed change:** use a lesson-specific presentation of the existing models. The predicate introduction emphasizes a selected input and its output; counting belongs in the witnesses lesson. The sequence introduction emphasizes position, term and repetition; the convergence lesson uses the tolerance and tail controls. Retain a useful initial diagram and visible mathematical explanation without requiring JavaScript or a completed interaction.

The compact convergence inspection showed that introductory copy and several controls occupy substantial space before the plot. In a pilot, test bringing the initial plot closer to its question and grouping controls by the current task. This is an observation about reading order, not evidence that the responsive layout is broken.

### 4. Practice exists, but its role is not always clear

The witnesses lesson has 25 Exercise components; quantifier order has 21. Many sit inside repeated “Optional additional practice” disclosures, with a hint and a further solution disclosure for each item. Useful tasks are preserved, but the student must choose among them without much indication of which one establishes readiness for the next idea.

Several lessons also end sections with “Later, reconstruct …”. These invite retrieval but do not consistently point to a specific later return or changed problem.

**Proposed change:** select a small visible attempt at the main reasoning transition. Identify remaining practice by purpose, such as “Check domain membership” or “Distinguish a shared witness”. Preserve the existing bank. Add a partially completed argument where the jump from reading to independent proof is too large. Use later section checks to revisit earlier ideas rather than adding more same-pattern drills everywhere.

### 5. The overview review does not match the current course route

The [course review](../my_notes_web/src/content/course-guides/en/analysis.mdx) includes a chain of numbered Boolean laws under “The dependency chain”, even though Boolean algebra is now optional. Two of its five recall questions concern Boolean algebra or circuits, and none directly checks a convergence proof. It also says the six source documents “do not cover limits or differentiation”, which does not clearly describe the current section containing sequence limits.

The combined parity problem gives its answer immediately, so it functions as another example rather than an independent final attempt.

**Proposed change:** explain the current scope near the beginning of the overview: mathematical language and proof leading to a first sequence-convergence application. Present the core learning chain in words. Keep the numbered Boolean dependency chain under the optional application review. Make the combined task visible with its answer in a disclosure; add a core synthesis task involving convergence and quantifier dependence. Preserve existing anchors and examples.

### 6. The strongest explanations need to become the editorial reference

Several methods already work well as instructional design:

| Existing method | Concrete example | Why retain it |
| --- | --- | --- |
| Contrast a concept with a near miss | Not all cards red versus no cards red | Makes a common false interpretation visible. |
| Connect a concrete model to notation | One key per person versus one key for everyone | Gives quantifier order a relation the learner can inspect. |
| Explain why a proof strategy helps | Odd form for the reverse parity implication | Shows how to find the argument, beyond checking its algebra. |
| Name the exact contradiction | Both fraction entries even versus the lowest-terms assumption | Identifies the incompatible statements rather than treating surprise as proof. |
| Check boundaries | Reciprocal threshold 10 versus 11 at tolerance 0.1 | Explains strict inequalities and inclusion of the threshold. |
| Distinguish illustration from proof | Sequence plot shows 32 terms; tail feedback uses an exact rule | Prevents the picture from claiming more than it establishes. |
| Keep solutions available after an attempt | Native solution disclosures | Supports independent work while keeping reference reasoning accessible. |

These are reasoned judgments about the material. No learner study was conducted, so they do not establish that students currently learn faster.

## Proposed learning route and outcomes

Retain the twenty canonical pages, six sections, language counterparts, stable links and approved visual shell initially. The first five sections form the core route; the sixth remains an optional application. Clarify the promise of the existing section before considering a wider Analysis I syllabus.

| Section | Student should be able to do this independently | Proposed section check |
| --- | --- | --- |
| Mathematical foundations | Interpret an equality, classify a number, test an endpoint, distinguish a claim from an expression | Repair a false equality chain and explain which endpoint an interval includes. |
| Logic fundamentals | Parse a compound condition; negate it; distinguish an implication from its converse | Translate a short rule, find a counterexample to a tempting converse, explain the failed inference. |
| Quantifiers | State domains, construct or reject witnesses, explain dependence, negate nested claims | Produce a complete small relation separating the two quantifier orders, then transfer to a new numerical relation. |
| Proof fundamentals | Choose and justify a direct, contrapositive or contradiction argument | Repair a flawed parity argument and identify the assumptions used. |
| Sequences and convergence | Distinguish index from value, choose a legitimate threshold, prove an entire tail estimate, distinguish failed target from no limit | Write one convergence proof and one failure argument with each choice's allowed information stated. |
| Boolean algebra and circuits, optional | Derive identities from available laws and trace reusable gate outputs | Complete a law-restricted step and explain why a repeated expression need not require a new physical gate. |

## Lesson-by-lesson disposition

“Priority” describes the order of editorial work, not a numerical teaching-quality score.

| # | Lesson | Keep | Proposed refinement | Priority |
| --- | --- | --- | --- | --- |
| 1 | Number systems, equality and order | Nested domains, value classifications, equality-chain repairs, endpoint diagram | Move advanced binding and formal transitivity practice to its quantifier home; make foundational arithmetic assumptions readable. | First rollout |
| 2 | Statements, predicates and definitions | Fixed-rule substitution, unknown versus false, definition versus application | Pilot a narrower input/output explanation and activity; defer formal binding and unique-existence output. | Pilot |
| 3 | Logical connectives and combined conditions | Same-object requirement, inclusive OR, grouped alternatives | Develop one main card example; bring its independent changed case closer to the graphic. Keep sufficient-rule distinction with a reminder/link. | First rollout |
| 4 | Constructing and comparing truth tables | Intermediate columns, repeated-input warning, complete assignments | Begin with a construction using taught connectives; place the broad comparison table after its symbols are explained or label/link it as a later reference. | First rollout |
| 5 | Negation, De Morgan and inequalities | Boundary argument, exhaustive Boolean proof, nested example | Separate core denial, boundary complement and compound denial into clear reading stages; retain language nuance later in the article. | First rollout |
| 6 | Implication, contraposition and assumptions | False-row definition, whole-hypothesis examples, complete-column comparison | Lead with one implication and its failure case; separate evaluation, domain-wide proof and physical-model interpretation. Add a method-choice attempt. | First rollout |
| 7 | Equivalence and reversible transformations | Separate directions, squaring and division failure cases | Pair the solution-set diagram with a partially justified chain the learner completes. | Second rollout |
| 8 | For every and there exists: domains and scope | Domain changes, empty collections, capture comparison | Explain every/some before scope mechanics; put capture, reused names and fixed-condition rewrites after the core examples. | First rollout |
| 9 | Witnesses, existence and uniqueness | Membership/property checks, uniqueness obligations, exclusion for complete lists | Make one task per main distinction visible; name the optional banks by purpose and reduce nested disclosure friction. | Second rollout |
| 10 | Quantifier order, dependence and translation | Person/key table, real-domain transfer, empty cases | Pilot prediction before a permission change, a verbal explanation, then an unseen relation; move the long general reading checklist after the motivating example. | Pilot |
| 11 | Negating quantified statements and inequalities | Same-domain denial, some failure versus all failures, endpoint checks | Put paired universal/existential denials near each other; use one complete worked transformation before a changed task. Keep later convergence references as previews. | Second rollout |
| 12 | Nested negations: worked derivations | Outside-in steps, finite relation, applicant/document example | Insert a missing-step task between the worked derivation and fully independent three-layer practice. | Second rollout |
| 13 | Proof methods, counterexamples and parity | Arbitrary-input argument, exact counterexample region, reason for contraposition | Make method selection explicit before displaying the solution; connect the result to the irrationality proof. | Second rollout |
| 14 | Contradiction and irrationality | No-greatest-natural warm-up, complete fraction proof, sqrt(4) comparison | Retain the detailed proof; ask the learner to locate the incompatible pair and transfer the diagnosis to the changed square root. Keep descent as additional material. | Targeted polish |
| 15 | Real sequences and absolute distance | Index/value distinction, repeated terms, open distance band | Limit the first activity to position, rule and tail; introduce tolerance in the distance section. Add only the function-notation explanation needed here. | Second rollout |
| 16 | Convergence: definition and proofs | Constant and eventual-constant examples, dependency flow, optional reciprocal proof | Pilot the order picture → verbal requirement → formal definition → justified proof; guide one control change at a time. Preserve the reciprocal proof's additional assumptions. | Pilot |
| 17 | Failure of convergence and no real limit | Six negation stages, fixed-target countermodel, exact alternating-tail model | Put a full alternating-sequence witness argument in the article, connecting the model's reason to the quantified proof; retain strict-form nuance later. | Second rollout |
| 18 | Boolean laws and elementary derivations | Numbered laws, helper-before-idempotence order, expression trees | Introduce each representative chain's strategy before its equations; give a missing-rule step. | Optional branch |
| 19 | Unique complements and algebraic negation laws | Both complement obligations, shared-expression strategy, noncircular order | Ask why both checks are necessary before applying uniqueness; keep the full restricted derivations visible. | Optional branch |
| 20 | NAND and logic circuits | Working circuits, output reuse and gate counts | Add one independent output-tracing or gate-count explanation with a disclosed answer. Reuse the existing circuit view. | Optional branch |

## Three concrete pilots

### Pilot A: predicates without an early notation burden

Current sentence: “The domain … restricts without binding. … Alternatively, quantify to bind x.”

Proposed first explanation:

> Keep the rule `x + 3 = 10` fixed. At input 7 it gives a true statement; at input 2 it gives a false statement. The input changes, but the rule stays the same. A predicate is a condition whose truth depends on its input. Its domain tells us which inputs are allowed.

The first activity then asks: “Before selecting 4, predict whether it passes. Explain your answer using the fixed rule.” It displays input, membership and output. The later quantifier lessons retain the full every/some/exactly-one comparison. Teach the distinction between assigning a value and binding a variable in that later context; do not silently lose it.

### Pilot B: quantifier order as a reasoning task

Keep Ana/red and Ben/blue. Ask before the change: “If Ben also receives red permission, which of the two statements becomes true?”

After changing that one cell, the learner explains that the red column now works for both, while each person's row still has a witness. Then use a new numerical relation to test whether the learner can transfer the distinction rather than remember the key story. Ask for the relation and domains explicitly; do not infer that a successful interaction proves general quantifier understanding.

### Pilot C: convergence from a picture to a proof

Use the existing reciprocal plot at target zero. Set tolerance 0.1 and ask whether threshold 10 works. The boundary term has distance exactly 0.1, so it fails. Threshold 11 works, but the picture alone does not prove every later term works.

Connect the picture to the argument: for every n at least N, reciprocal order gives `1/n ≤ 1/N`; choosing a natural N greater than `1/ε` makes the latter strictly below ε. State the accepted Archimedean fact supplying such a natural N. The optional proof remains optional on the logic-focused route.

Follow with a partly completed proof, then a changed sequence such as `2/n` if that extension is accepted. Changing only a numerical tolerance checks the same local action; a new sequence also checks the choice of a threshold and its justification.

For lesson 17, make the alternating-sequence proof reconstructible in prose: fix any real L and tolerance 1/2. If L is nonnegative, choose an odd n at least N, giving term −1 and distance at least 1. If L is negative, choose an even n at least N, giving term 1 and distance greater than 1. One of N and N+1 has the required parity. Every threshold therefore has a bad term for that fixed tolerance. This turns the existing graphical explanation into an explicit witness argument without relying on a finite plot or introducing the triangle inequality.

## Graphics: retain, narrow, connect

Use a graphic when it makes a mathematical relationship easier to inspect. Keep the number-domain nesting, number-line boundaries, Boolean assignment tiles, finite relation tables, proof flows and sequence dots. Mathematical graphics should remain native SVG or existing components with labeled values, consistent color roles and text alternatives.

For each substantial activity, write down:

1. The precise distinction it teaches.
2. A prediction the learner can make before manipulating it.
3. The one variable or relation changed first.
4. What the resulting picture establishes, and the limit of that evidence.
5. The explanation or independent task that follows.

Apply this as an authoring check, not five compulsory visible boxes. A static diagram is sufficient where manipulation adds no useful question. A diagram is unnecessary where a short argument already gives the clearest explanation.

## Practice and evidence of learning

Keep worked solutions, but add a bridge where needed: complete example → one missing justification → independent changed case. Ask students to explain errors and choose methods as well as compute truth values. Integrate selected earlier ideas into later tasks.

Make later return prompts specific: after the next section, reconstruct one relevant rule without looking; on a later study day, try a changed problem. This is a proposed study routine, not a claim about an optimal universal schedule. No account system or remote answer collection is needed.

For the pilots, invite a few intended learners to attempt the existing and revised material using comparable unfamiliar tasks. Counterbalance which version/task they see first where practical. Record assistance required, errors, time spent and the quality of independent reasoning; revisit with a delayed changed task. A small pilot can reveal obstacles and guide edits, but cannot establish a reliable percentage improvement.

Inspect these outcomes in particular:

- Can the learner distinguish input, predicate and statement without help?
- Can they produce a complete relation separating the two quantifier orders?
- Can they choose N before n and justify every term of the tail?
- Can they explain the endpoint error and distinguish a failed target from no real limit?
- Can they use the material as a concise reference after learning it?

The research supports testing this direction, not promising that this particular website will accelerate learning. The [IES practice guide](https://ies.ed.gov/ncee/wwc/PracticeGuide/1) recommends alternating worked examples with independent attempts, connecting verbal and graphical explanations, linking concrete and abstract representations, spaced review and explanatory questions. Its evidence ratings differ by recommendation. [Roediger and Karpicke's 2006 experiments](https://journals.sagepub.com/doi/10.1111/j.1467-9280.2006.01693.x) found advantages for retrieval on delayed retention tests of prose passages; that finding does not by itself establish transfer to mathematical proof. The proposed local learner checks address that limitation.

## Goals and boundaries

**In scope:** explain the current material more clearly; repair premature dependencies; strengthen visual interpretation, worked reasoning and selected independent practice; align overview review with the current route; preserve concise reference use and all three languages.

**Outside this proposal:** expanding into a full Analysis I syllabus, changing the approved site shell, adding accounts or scoring, replacing the existing mathematical engines, or publishing changes. Broader material such as completeness, continuity or differentiation would require a separate syllabus decision and source plan.

## Alternatives weighed

| Alternative | Assessment |
| --- | --- |
| Rewrite every page immediately | Defer. It risks losing useful distinctions and repeats work before the learner profile and pilot are settled. |
| Add more text and graphics everywhere | Do not use as the default. Several problems arise from premature detail and competing controls. |
| Compress to a uniform length | Reject as an editorial rule. Proof obligations and mathematical density vary. |
| Split back into dozens of small pages | Defer. First test better internal sequencing and named practice within the current stable route. |
| Build separate beginner and revision editions | Defer. Maintaining parallel explanations across three languages would multiply drift. Use one coherent article with links to relevant parts. |
| Add a course platform with scores and progress | Unnecessary for the identified issues. Existing pages, figures and disclosures can support the proposed learning sequence. |

These are proposal judgments, not previously accepted decisions by Jean.

## Staged work and completion checks

| Stage | Concrete deliverable | Ready to move on when |
| --- | --- | --- |
| 1. Set the teaching target | Agreed learner prerequisites, role of recap versus first learning, scope and outcomes; corrected overview/review plan | Jean has reviewed the learner assumption and working hypothesis. EGM reviewers may be dispatched only after the required explicit readiness confirmation. |
| 2. Draft three pilots | Before/after content and activity specifications for lessons 2, 10 and 16; mapped disposition for relocated tasks | Core explanations are visible, no unstated prerequisite is needed for the selected attempts, and preserved reasoning/tasks have named homes. |
| 3. Implement and inspect pilots | Matching EN/DE/ES lessons using existing models with any narrowly required presentation variants | Mathematical arguments and translations are checked, production gates pass, and relevant desktop/compact, theme and keyboard/numeric flows work. |
| 4. Test the teaching and revise | Learner attempts and delayed changed tasks, or an explicit record that such testing is still unavailable | Findings identify concrete reading or reasoning failures and the drafts address them. Build success is recorded separately from learning evidence. |
| 5. Roll through the course | Foundations/logic/quantifier entry pages first; remaining proof and convergence work next; optional Boolean branch last | Each lesson has an agreed role, coherent prerequisites, interpreted graphics where useful, and selected tasks tied to outcomes. |
| 6. Complete course review | Core synthesis tasks, targeted return links and separate optional-application review | Students can attempt the current route's main outcomes; references, old destinations and translations remain consistent. |

Changing a lesson's teaching narrative will affect the current summary/visual preservation contracts. Plan a reviewed migration of those records for the actual new version: identify moved or reworded tasks, preserve distinct examples and proof obligations, and obtain the required fresh semantic review. Do not merely replace hashes or disable checks. Update active guides only when the teaching direction is accepted, keeping this proposal separate from canonical instructions meanwhile.

Implementation uses Node 24 and the existing production build. Route or localization changes also require the repository-prefix check; changed interactions require proportionate browser inspection. Mathematical and translation review flags must describe actual review, separately from editorial or EGM review. Commit, push and publishing remain separately authorized operations.

## Decisions to resolve next

The first-year, first-semester mathematics and physics setting is confirmed. Independent review should test how much prerequisite checking and proof scaffolding this learner needs while retaining concise revision use. The institution's syllabus, exam demands and the learner's actual algebra fluency remain unknown; do not invent them or expand the syllabus to fill that uncertainty.

Jean has approved the working hypothesis and explicitly authorized Goldfish reviewers. The next step is parallel, fresh-context review and synthesis before any website implementation. English is the working draft language because it is the existing audit language; matching German and Spanish content remains required for future published lesson changes.
