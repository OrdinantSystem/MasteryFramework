# Analysis 0 content and provenance

The Analysis course includes the authored Analysis 0 logic material formerly taught through Obsidian. The scope is **A0.1.1–A0.1.9: 52 authored lessons and their 28 linked concept notes**, not the entire prospective Analysis curriculum.

## Where the teaching lives

The canonical public teaching narrative is the EN/DE/ES MDX under `my_notes_web/src/content/lessons/{locale}/analysis/`. The existing poster-derived lessons, worksheet proofs, circuit lesson and stable routes remain available. The expanded foundations develop their prerequisites rather than replacing the original applications.

Obsidian retains the original teaching drafts, provenance, curriculum and private learning evidence. Its Analysis 0 index links to the corresponding published lessons. Original files are not deleted or automatically synchronized with MDX. New public teaching revisions belong in MyNotes; personal attempts and assessments remain in the private learning workspace.

The machine-readable [coverage ledger](analysis-zero-coverage.json) records a destination for every authored lesson and companion concept. Several sources may inform one focused page, while a long source may need several pages. Duplicate explanations are consolidated; distinct examples, assumptions, boundary cases, proof obligations and practice must not disappear merely to reduce page count. A mapping establishes traceability, not proof certification or evidence of learning.

## Current course structure

The authored material is now organized as six Analysis I sections and twenty canonical lesson pages, not source-oriented Analysis 0 folders. See [analysis-organization.md](analysis-organization.md) for the reading route, preserved 53-page edition, exact section dispositions and compatibility rules. The original migration review describes its baseline; current consolidation checks are recorded separately. Source identity remains analysis-zero for provenance, not as a learner-facing section title.

## Learning route

1. Propositions, definitions, free variables, equality and order notation.
2. Negation, endpoints, double negation and De Morgan laws.
3. Combined conditions and the construction of truth tables.
4. Hypotheses, conclusions, material implication and its transformed forms.
5. Biconditionals, necessary/sufficient conditions and reversible equivalence chains.
6. Universal quantification, domains, binding, scope and counterexamples.
7. Existence, witnesses, construction and uniqueness.
8. Nested quantifiers, permitted dependencies and translation into formulas.
9. Negation of quantified claims, including inequalities.
10. The already-authored application: real sequences and absolute distance, reading and proving convergence, its negation, and specified-target failure versus no real limit.

The reciprocal-sequence proof is an optional extension. State the Archimedean property and positive-reciprocal order it uses; do not silently make that extension a prerequisite for understanding logical negation.

## Mathematical and editorial safeguards

- Distinguish definitions, adopted classical semantics/arithmetic foundations, derived results and proof techniques. An assertion true under one assignment is not the same as a logically valid inference or a theorem for every element of a domain.
- Specify domains and scope. Assigning a value does not syntactically bind a variable. A shared witness need not be the unique possible witness. Retain empty-domain cases where they affect a claim.
- Negating strict closeness includes equality. Keep a literal negation separate from any separately proved reformulation, such as one obtained by halving a tolerance.
- Preserve the three-variable truth table on `logische-verknuepfungen`. Its existing regression check remains active.
- Keep the early semantic proofs separate from the Boolean worksheets' derivations using only their numbered permitted laws. Do not use a later identity circularly or substitute a truth table for a requested algebraic proof.
- Use the existing design system, registered teaching components, mathematical macros and accessible table/disclosure behavior. Core reasoning stays visible; optional hints and reference solutions may be folded.
- Read the full prose, including exercises and answers, for natural language. Prefer worked examples and reasons over slogans, repeated meta-instructions or compulsory section templates. Keep local EN/DE/ES readings of important notation accurate without revealing exercise answers.
- Do not export tutor names, private assessments, server paths, original source files or chat-specific workflow. Preserve mathematical substance, not private lesson-management boilerplate.

## Source identity

`analysis-zero` is a Markdown source in `src/lib/sources.ts`. Use `sourcePages: []` and real `sourceLocations` identifying lesson paths or headings; never invent PDF page numbers. Expanded poster-derived lessons retain their primary original source and add the Analysis 0 identity through `additionalSources`. Counterparts must agree on provenance.

The drafts cite these public references for the relevant background; attribution does not mean that a textbook independently reviewed our added examples:

- Oscar Levin, [Mathematical Statements](https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Discrete_Mathematics_(Levin)/0%3A_Introduction_and_Preliminaries/0.2%3A_Mathematical_Statements).
- Oscar Levin, [Propositional Logic](https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Discrete_Mathematics_(Levin)/3%3A_Symbolic_Logic_and_Proofs/3.1%3A_Propositional_Logic).
- Jiří Lebl, [Sequences and limits](https://www.jirka.org/ra/html/sec_seqsandlims.html), definitions 2.1.1–2.1.2 and the initial examples.
- Jiří Lebl, [Absolute value and bounded functions](https://www.jirka.org/ra/html/sec_absval.html), the absolute-value definition and elementary properties.

The site uses positive natural indices in its sequence application. A reference using naturals beginning at zero does not silently change that local convention.

## Verification and release

`npm run build` includes `scripts/verify-analysis-zero.mjs`. It reconciles the 52/28 ledger, checks localized destinations and retained existing keys, and tests finite Boolean/quantifier models and numerical boundary examples. The normal output checks cover navigation, prerequisites, localized equations, links, private-source exclusion, KaTeX and contrast. These automated checks supplement, rather than replace, mathematical and native-language review.

Inspect affected lessons in all languages, both themes and compact/desktop layouts. Check optional readings and solutions with the keyboard, mobile overflow, language switching and production search. Navigation changes require a `/MyNotes` prefix build and preview; restore root output afterward.

Build before committing. Commit, push and publishing remain distinct authorized operations. Relevant `main` pushes can trigger `.github/workflows/mynotes-pages.yml`; verify the exact run and live content before claiming publication. Actual execution results and limitations belong in `my_notes_web/VERIFICATION.md`.
