# Writing and maintaining lessons

Work in ../my_notes_web/. Read the design system for presentation rules. Prefer editing content to changing the shell.

## One page per purpose

Choose concept, worked-problem, note, or recap. Use the corresponding file in templates/. Keep prose human and concrete, state formal assumptions precisely, show reasons behind steps, and give examples where they clarify. Short notes need no filler sections or compulsory exercise.

Use matching stable filenames under src/content/lessons/en/, de/, and es/. English is default. Titles and headings are translated; filenames identify equivalent concepts. Draft translations may be incomplete; publishing requires all three counterparts.

```yaml
---
locale: en
course: linear-algebra
chapter: sheet-1-1
sourceId: sheet-1-1
title: A clear concept title
navTitle: Short menu label
description: The question this page helps answer.
order: 9
kind: concept
status: draft
reviewStatus: unreviewed
prerequisites: []
sourcePages: []
---
```

The executable schema is src/content.config.ts. chapter and sourceId are required registered identities; source page bounds are checked and translations must retain both identities. locale is en/de/es; kind is concept/worked-problem/recap/note; status is draft/published; reviewStatus is unreviewed/needs-correction/reviewed. Each published order is unique in its language and listed once in src/lib/navigation.ts. Prerequisites use stable filenames, must exist as published counterparts, and must not form cycles.

sourcePages contains positive page numbers from the supplied reference, without the original four-page restriction. Keep [] for original examples with no source page. Record source identity and which material was added in a private source record or a clear authoring comment. Register the document in src/lib/sources.ts and follow source-ingestion.md; page numbers are meaningful only together with sourceId. Never copy private PDFs or source images into public assets automatically.

## Shared content vocabulary

Registered components are in src/components/mdx.ts and need no repeated imports. `Exercise` normally receives its visible task in `question`. When a longer task is already stated immediately above the component (with an optional hint), omit `question` and use the existing solution disclosure rather than repeating a generic instruction. Keep the actual task visible and its answer inside the disclosure; a formula reading that supplies the requested answer belongs inside that answer too.

```mdx
## Meaning

Explain one relationship before introducing its notation.

<Math tex="\colA{a}\,\colA{u}+\colB{b}\,\colB{v}=\colResult{w}" display />

<Note title="An assumption that matters">
State a specific limitation or condition.
</Note>

<Exercise question="What happens when one coefficient is zero?">
Explain the reference solution and how to check it.
</Exercise>

<Interactive kind="vectors" preset="linear-combination" id="my-linear-combination" />
```

Use regular Markdown for headings, paragraphs, lists, and tables. The math pipeline also supports inline/display dollar notation. Math.tex examples use KaTeX syntax with semantic colA/colB/colC/colResult macros. Do not hardcode theme colors into equations. Wide tables receive centered scroll wrappers automatically.

The [representation library](representation-library.md) documents available visual components and data variants. Use a meaningful caption and accessible description for static figures. Arbitrary scripts, inline SVG HTML strings, per-lesson global styles, and a new layout are outside the lesson contract. Typed preset data imported from a shared module is acceptable.

## Publishing a lesson locally

1. Write the draft and its prerequisite links; distinguish source content from added examples.
2. Add German/Spanish counterparts with matching identities and mathematical meaning.
3. Check values, assumptions, proof steps, notation, units, and translations independently.
4. Set all counterparts to published when ready for a visible draft. Keep reviewStatus honest; published and reviewed are different states.
5. Add the published order to the correct chapter group in navigation.ts. Counts are derived automatically. Add or select an appropriate thumbnail in Thumbnail.astro; the thumbnail field selects a semantic diagram for new lessons; the original eight retain their existing previews.
6. Run npm run build and inspect the generated lesson, menu, equations, visual controls, and search. Update the verification record with actual findings.

Publishing status in content controls local/static output; it does not authorize Git commit, push, or hosting deployment. A second subject needs the metadata/navigation work described in architecture/context, not a clone of the current course.

## Consolidating Analysis lessons

Read [analysis-organization.md](analysis-organization.md). Its twenty canonical pages and six sections are course units, not a mirror of original note folders. Keep distinct content and the historical archive; update section/paragraph dispositions and compatibility anchors when a topic moves. Use course-guides for overview review content rather than creating another recap lesson. Do not reintroduce retired source files into the content loader or index compatibility routes in search.

## Correcting an existing lesson

Preserve its stable key. Update all affected languages and linked examples. A source correction may require correcting a preset, explanation, feedback, or recap as well. Review equivalent equations, then build and inspect the affected flow. Do not mark reviewed solely because generated equations or arithmetic tests pass.

Analysis and later subjects must set course explicitly. Add new courses through the registries described in source-ingestion.md; keep existing routes stable. A lesson combining several PDFs uses one primary sourceId/sourcePages plus additionalSources: [{sourceId: registered-id, pages: [1]}]. Do not invent unrelated calculus content simply because the course is named Analysis: these six sources currently teach foundational logic and proof.

Learning methodology lives in {locale}/learning/ with course: learning. Text sources need sourceLocations with real sections/timestamps and sourcePages: []; never invent PDF page numbers. additionalSources text entries use {sourceId, locations}. The source kind and course are validated; counterparts must match. Learning & Teaching content follows docs/learning-teaching.md, including attribution and distinctions between source claims, our protocol, and evidence.

## Explanatory depth and titles

Use plain subject titles such as Bloom’s Taxonomy, Mind Maps, and Error Analysis. Headings identify the content rather than make promises to the reader. Develop a representative example: identify the question, show the intermediate reasoning, explain why the selected step helps, and test a boundary or changed case where useful. For learning methods show an actual attempt, diagnosis, correction, and independent follow-up. Formal proof chains need strategy and justification in prose, even when every equality is correct. A diagram should be introduced and interpreted. Do not add length, section counts, or exercises merely to meet a quota.

Mind-map lessons must distinguish the speaker’s relational-thinking argument from our proposed procedure. Teach a bounded question, hierarchy, named directed links, conditions, source checking, reconstruction, and application. A map’s appearance is not evidence that its relationships are understood.

For learning-method prose, explain why the next action helps before compressing it into a procedure. Carry a concrete attempt through diagnosis, correction, and a changed independent task where appropriate; label hypothetical examples as such. Read every section, table, exercise, and reference answer for natural phrasing in each language. Remove repeated slogans and mirrored sentence patterns without weakening source caveats or changing terms of art. Preserve the distinction between a proposed workflow, an attributed transcript claim, and research evidence.

## Inline mathematical typography

Write mathematical expressions and their variable references as `$...$` inside paragraphs, lists, table cells, and exercise questions. Use TeX commands (`\Rightarrow`, `\neg`, `\mathbb{R}`, subscripts and exponents) instead of plain Unicode approximations. Keep a complete expression inside one math run, including its signs and parentheses; leave sentence punctuation outside. Do not put dollar delimiters around ordinary articles, letter grades, or prose labels. Markdown table separators remain outside math.

String-valued teaching copy (exercise questions, Flow labels/details/captions, comparison details, and interactive feedback) supports explicit `$TeX$` through the shared `MathText` component and `renderMathText` helper. Ordinary text is escaped; only explicit math is rendered with the shared KaTeX options. JavaScript/JSON strings require doubled backslashes; plain MDX attributes use literal backslashes. For a question with TeX, prefer `question="... $\sqrt{2}$ ..."` with a single literal backslash in the authored MDX. Use `Math` for a whole formula and native SVG text for coordinate/diagram labels. Preserve plain metadata titles for navigation and search.

Inline KaTeX is 1.16 times its surrounding font size; display formulas retain 1.1. This scale applies to both Markdown math and component math in both themes.
