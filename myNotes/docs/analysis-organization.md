# Analysis I course organization

Analysis I has six sections and twenty lesson pages in EN/DE/ES. Its current material develops mathematical language, logic, quantifiers, proof and a first sequence-convergence application. It is not a complete Analysis I syllabus. Boolean algebra and circuits are optional applications after the core route, not prerequisites for convergence.

## Reader route

1. **Mathematical foundations** — number systems/equality/order; statements/predicates/definitions.
2. **Logic fundamentals** — combined conditions; truth-table construction; negation; implication/contraposition; equivalence and reversible transformations.
3. **Quantifiers** — universal/existential meaning and scope; witnesses/uniqueness; order/dependence/translation; quantified negation; nested worked derivations.
4. **Proof fundamentals** — methods/counterexamples/parity; contradiction and irrationality.
5. **Sequences and convergence** — sequences/distance; the definition and proofs; failure at a target versus no real limit.
6. **Boolean algebra and circuits · Optional** — starting laws and elementary derivations; complement uniqueness and algebraic negation laws; NAND networks.

Analysis I is primarily a recap reference for previously studied material. Explain each foundation once, use short reminders at its applications, and retain the reasoning needed to reconstruct a result. Keep graphics and distinct worked arguments; do not turn the course into formula-only notes. The [recap editing plan](analysis-recap-plan.md) and [preservation contract](analysis-recap-coverage.json) record the authorized editorial pass.

The course overview includes the former recall map, review questions, dependency chain and combined problem. It is not a twenty-first lesson. Subtopics use article headings and the existing contents rail. The Analysis sidebar renders course → section → lesson directly; it does not render a single intermediate subgroup. Other courses keep their existing group structure.

## Content and provenance

`my_notes_web/src/lib/analysis-organization.json` owns section labels, ordered canonical keys and localized compatibility destinations. `navigation.ts` consumes its six modules; the usual schema and outline validation still apply. The course review is MDX in `src/content/course-guides/{locale}/analysis.mdx`, loaded through the provenance-validated `courseGuides` collection and rendered inside the overview.

The [organization coverage ledger](analysis-organization-coverage.json) records every section of the former 53-page edition, preserved-original hashes and explicit paragraph-level consolidation dispositions. Exact EN/DE/ES copies of all 53 originals remain under [history/analysis-before-consolidation](history/analysis-before-consolidation/README.md), outside the content loader and the Pages artifact. The separate [52-lesson/28-concept ledger](analysis-zero-coverage.json) now points to the consolidated teaching destinations; original input hashes remain unchanged.

Consolidation does not mean discarding worked reasoning or practice. All 130 Exercise question/solution blocks per language, native hints/reference answers and original mathematical tables remain. Notation readings use only the page language, without EN/DE/ES prefixes or parallel-language columns. Additional practice may use labelled native disclosures, but the task, answer and anchors remain available. Repeated definition-role vocabulary, the reduced-fraction irrationality proof, the arbitrary-real addition proof, parity calculations and the repeated red/blue setup have one full treatment with appropriate reminders. The ledger names the retained homes and records navigation-only wording changes. Future changes must continue to preserve distinct examples, domains, boundary cases and proof obligations.

Early semantic proofs and the numbered-law Boolean derivations remain distinct. A truth-table argument must not replace a worksheet derivation from the permitted laws. The reciprocal convergence example retains its optional status and accepted additional foundations. Failure at one target does not establish absence of every real limit.

## Stable links and search

Twenty existing keys are canonical. The other thirty-three former keys per locale are static compatibility documents, excluded from Pagefind and learner navigation, with canonical links and a visible no-JavaScript continuation link. JavaScript navigates directly to the mapped section; these are static Pages aliases, not server-side HTTP301 responses.

`AnalysisCompatibility.astro` also resolves historical heading fragments on retained routes, including sections transferred to another page. Stable `from-...` anchors identify their destinations independently of regenerated heading slugs. Old course-section fragments remain at their corresponding new sections. Use `lessonUrl`/`courseUrl` helpers so normal links and compatibility targets honor BASE_PATH and locale.

The physical build still has 287 HTML documents because old URLs remain available: 162 canonical localized lesson pages, 99 Analysis compatibility documents, fifteen localized archive/course/search pages, nine earlier redirects, a 404 and the library. Pagefind indexes 162 lesson articles plus three Analysis overview reviews, not the compatibility documents. Do not mistake static-document count for the number of teaching pages.

## Maintenance and checks

Run Node24 `npm ci` and `npm run build` from `my_notes_web/`. The organization check verifies the twenty-key/six-module route, all original hashes, section dispositions, paragraph preservation with explicit duplicate allowances, and question/answer/hint/table inventories. Generated-output checks validate compatibility targets and anchors alongside ordinary links, math and localized equations. Never weaken these checks to hide a lost example.

After route or navigation changes, test both root and `/MyNotes` prefix builds, localized search, old URLs and moved heading fragments. Inspect all canonical lessons in both themes and compact/desktop layouts; verify disclosures, horizontal math/table scrolling and the active navigation path. Restore ordinary root output afterward. Mathematical/translation status remains unreviewed; preservation tests and browser checks are not human expert certification. Commit, push and publication remain separately authorized actions.
