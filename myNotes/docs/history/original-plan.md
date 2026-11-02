# Historical plan (noncanonical)

Retained for context. Follow [the current documentation](../../README.md) and [design system](../../DESIGN-SYSTEM.md). Old path diagrams and phase descriptions below do not override current implementation.

# myNotes website implementation plan

myNotes is a personal learning archive for university subjects, explanations, worked problems, and study notes. It will turn material Jean has studied into a growing collection of clear, connected pages that support both first understanding and later revision.

The website will use Astro to generate static HTML, Markdown and MDX for content, KaTeX for mathematics, and small native SVG/TypeScript components for interaction. React remains optional when a concrete component requires it. GitHub will hold the shared source, and GitHub Actions will build and publish the website to GitHub Pages. Jean and agents on his computer or VPS will use the same repository and commands.

Status: approved design baseline, 2 November 2026. The working static application is in [test](../../my_notes_web/README.md). Its historical folder name is retained to keep one implementation. The [canonical design system](../../DESIGN-SYSTEM.md) records the approved shell, tokens, component contracts, localization, and interaction rules. [Contributor instructions](../../AGENTS.md) apply across myNotes.

Implemented: custom Astro shell, near-black and light themes, English/German/Spanish versions, expandable navigation, visual lesson previews, centered tables, colored KaTeX, static search, eight linear-algebra lessons per language, and browser-only exercises. The [interaction analysis](../../docs/interactive-learning-analysis.md) explains the new vector activities and their production tradeoffs.

Remaining: a validated multi-subject/chapter collection, additional university material, human editorial and mathematical review, and authorized GitHub Pages setup. The sections below describe the architecture and roadmap; deployment is not active. Where an early suggestion differs from the approved visual specification, DESIGN-SYSTEM.md takes precedence.

## Product goals

The main task is to make adding and correcting lessons substantially easier than building individual web pages. Most additions should require a content file, its supporting assets, and an entry in the relevant chapter order. Shared layouts handle presentation and navigation.

The website must:

- Explain concepts clearly using concrete language, precise definitions, and inspectable reasoning.
- Provide a searchable archive organized by subject, chapter, and concept.
- Support short notes, full concept explanations, worked problems, and recaps without forcing them into one length or structure.
- Render mathematics consistently across explanations, examples, exercises, and figures.
- Offer optional browser interactions such as moving vectors, changing parameters, and exploring graphs.
- Keep reading and navigation useful without JavaScript.
- Work on desktop and mobile with keyboard access and readable light and dark themes.
- Allow different agents to contribute without inventing a new visual style or architecture for each lesson.

The initial website needs no accounts, database, visitor submissions, grading service, runtime AI integration, or application server. Notes are authored in the repository. Editing notes through the public website is outside the initial scope.

## Technical decisions

| Responsibility | Planned choice | Reason |
| --- | --- | --- |
| Website generation | Astro with static output | Generate the complete archive as deployable files. |
| Writing | Markdown by default and MDX when needed | Keep prose readable in Git while allowing reusable embedded components. |
| Content structure | Astro content collections and schemas | Validate metadata and query lessons consistently. |
| Layout | A small custom Astro layout | Control visual density and the learning experience. |
| Interaction | Native SVG, TypeScript, Pointer Events, and custom elements | Reuse a pure mathematical model across small activities; load code only on relevant pages. React or a plotting library requires a concrete need. |
| Mathematics | remark-math, rehype-katex, and KaTeX | Render authored equations during the build. |
| Search | Pagefind | Search the generated archive without a server. |
| Styling | Shared CSS and semantic design tokens | Keep the interface small and consistent. |
| Hosting | GitHub Pages | Publish the generated static website. |
| Automation | GitHub Actions | Run checks and deploy successful changes on the publishing branch. |
| Dependency management | npm with a committed lockfile | Reproduce dependency installation across machines. |

Astro is the framework. The approved custom shell and small teaching component library are implemented in my_notes_web/. Use these as the reference rather than starting another documentation shell or component system.

Node 24 is pinned in my_notes_web/.node-version. Exact package versions and the lockfile live in my_notes_web/. Use `npm ci` in clean environments; recheck compatibility when upgrading.

## Information architecture

Organize material by subject, then chapter, then individual page. Learning methods are one subject within the archive; they do not define the entire website.

```text
myNotes
  Learning methods
    Understanding and explanation
      Feynman technique
      Concept mapping
    Practice and retention
      Retrieval practice
      Interleaving
      Spaced practice
    Learning frameworks
      Bloom taxonomy
  Mathematics
    Linear algebra
      Vectors
      Linear combinations
      Span
      Linear independence
    Analysis
      Sequences
      Limits
  Physics
    Mechanics
      Chapters added as material is studied
```

This is an initial organization, not a claim that these courses already exist. Publish sections when they contain useful material. Do not fill navigation with empty courses or placeholder lessons.

A lesson has one canonical location and stable identity. Other subjects can link to it without duplicating its explanation. Suggested learning order belongs to the subject or chapter index. Prerequisite relationships are separate from menu position: the previous page is not necessarily a prerequisite.

Use these page families:

| Page family | Content |
| --- | --- |
| Home | Subject directory, search, and a compact list of recent additions. |
| Subject index | Scope, chapters, starting points, and recommended sequence. |
| Chapter index | Ordered pages and a short explanation of how they connect. |
| Learning page | A note, concept explanation, worked problem, or recap. |
| Search results | Relevant pages and sections with optional subject filters. |
| About | Purpose, authoring conventions, and how source material is handled. |
| Not found | Clear recovery links and access to search. |

## Navigation and addresses

The header contains the myNotes name, search, a themed language menu (English, German, Spanish), and theme control. On desktop, a sidebar offers subject selection and the chapters of the current subject. It should not expand the entire archive at once. On mobile, the same navigation is available through a clearly labeled menu.

Place breadcrumbs above the article. Show a local contents list for long pages; omit it for short notes. At the end, show relevant prerequisites, related concepts, and previous or next links when a sequence exists. Keep these compact.

Build navigation from published content and explicit chapter ordering. The build must reject unknown IDs, duplicate ordering entries, and published pages missing from their chapter listing. Drafts may remain outside public navigation and search.

The current localized reference uses `/lessons/<stable-key>/`, `/de/lessons/<stable-key>/`, and `/es/lessons/<stable-key>/`. English is unprefixed. Keep stable keys across translations and use centralized base-aware helpers. When implementing multi-subject collections, plan route changes and redirects together. Future subject routes may take forms such as:

```text
/learning-methods/practice/retrieval-practice/
/mathematics/linear-algebra/linear-combinations/
/mathematics/analysis/sequence-limits/
```

Configure Astro's `site` and `base` for the actual GitHub Pages address. A project site usually includes the repository name in its URL. Centralize base-path handling for navigation, images, scripts, and search assets. Verify the production build under that prefix before publishing.

Keep stable content IDs independent of titles and filenames. Resolve internal lesson links through those IDs, or validate explicitly authored routes against the generated route registry. When a public route must change, provide a static redirect page and update internal links.

## Content model

Each learning page is a separate file. Use a small metadata schema; keep explanatory prose in the document body.

| Field | Purpose |
| --- | --- |
| `id` | Unique permanent content identity. |
| `title` | Clear page title. |
| `description` | One sentence describing the concept or question. |
| `kind` | `note`, `concept`, `worked-problem`, or `recap`. |
| `subject` | Reference to a defined subject. |
| `chapter` | Reference to a chapter in that subject. |
| `slug` | Explicit public route segment, independent of title changes. |
| `status` | `draft` or `published`; only published pages enter public output. |
| `reviewStatus` | `unreviewed`, `needs-correction`, or `reviewed`. |
| `prerequisites` | Optional list of content IDs required for understanding. |
| `related` | Optional list of useful related content IDs. |
| `sources` | Structured source references, including page or section locators where possible. |
| `updated` | Date of a substantive content revision. |
| `tags` | Optional secondary search labels. |

Publication and review are different states. A published personal note may still be unreviewed; show that status quietly. Do not describe an AI-generated page as verified merely because it builds. A review record should identify the scope and supporting sources when the page is marked reviewed.

Define subject and chapter metadata separately from learning pages. Chapter metadata owns the deliberate page order. Validate relationships, including subject membership, route uniqueness, prerequisite cycles, and references from published pages to unavailable drafts.

Proposed frontmatter example:

```yaml
---
id: linear-combinations
title: Linear combinations
description: How scaled vectors combine to produce another vector.
kind: concept
subject: mathematics
chapter: linear-algebra
slug: linear-combinations
status: draft
reviewStatus: unreviewed
prerequisites:
  - vectors
related: []
sources: []
updated: 2026-11-02
tags:
  - vectors
---
```

The example is a metadata illustration, not a publishable completed lesson. The implementation will define exact schemas and component APIs before creating templates.

## Writing and lesson structure

A concept explanation usually starts with a concrete question, develops intuition, introduces the formal meaning, and shows a worked example. Add an independent question where useful. End with the few ideas worth recalling and a useful next connection.

This is editorial guidance, not a requirement to display every item as a heading or panel. Avoid repeating the title, description, guiding question, and objectives when they say the same thing.

Different page types need different contracts:

| Type | Expected content |
| --- | --- |
| Note | A focused observation, explanation, or unresolved question with enough context to interpret it. |
| Concept | Meaning, assumptions, explanatory reasoning, and a concrete example where appropriate. |
| Worked problem | Problem statement, relevant conditions, justified steps, result, and a way to check it. |
| Recap | Compact definitions, relationships, conditions, and links to fuller explanations. |

Keep one coherent learning purpose per page. Split a topic when it contains separately useful concepts, not merely because it exceeds an arbitrary word count. Keep a proof or worked argument together when splitting would obscure its logic.

Write in direct, natural language. Explain notation before using it heavily. For mathematics, state domains, assumptions, and quantifiers precisely. For physics, state units, conventions, and idealizations. Explain why a step follows, not just which operation was performed. Identify where an analogy stops being accurate.

Use comparison tables when distinctions matter and diagrams when relationships are easier to see spatially. Avoid decorative diagrams, generic motivational introductions, repeated summaries, and assertions about mastery unsupported by independent work.

Preserve the distinction between a source's claims, established results, the learner's interpretation, and proposed study techniques. The existing learning-method documents already make useful distinctions of this kind; retain them during migration.

## Teaching component library

Build a small initial library. Components own markup, accessibility, and behavior. Content files select components and supply content; they do not define new global styles.

| Component | Contract |
| --- | --- |
| Definition | Term, precise meaning, and optional plain-language interpretation. |
| WorkedExample | Problem or situation, reasoned steps, and conclusion. |
| Exercise | Question and separately revealed answer or solution; supports an attempt before disclosure. |
| Figure | Visual, meaningful caption, and accessible equivalent. |
| Qualification | A specific assumption, limitation, or common mistake worth emphasizing. |
| MathDerivation | Aligned mathematical steps with explanations when ordinary display math is insufficient. |
| InteractiveExplorer | Labeled controls, initial state, reset behavior, and a useful static explanation. |

Use normal Markdown headings, paragraphs, lists, and tables for ordinary writing. A teaching purpose does not automatically require a border, colored surface, icon, or badge. Use native `details` for answer disclosure where it meets the need.

Document each component with one representative example and its required properties. Register reusable components centrally for MDX where supported, so authors do not repeat boilerplate imports. Keep arbitrary scripts and styling out of lesson files.

Add a component only when an actual lesson needs it. A concept-specific geometric diagram is justified when generic components cannot express the relationship clearly; it must still use shared tokens and accessibility conventions.

## Minimal visual design

The visual reference is a readable study resource: modest headings, comfortable spacing, a restrained navigation shell, and explanatory figures placed beside their relevant text.

- Center a moderately wide article in the available reading space; constrain paragraph measure while giving figures room. Follow the implemented responsive widths in DESIGN-SYSTEM.md.
- Use the approved 16 px body size with 1.85 line height and shared typography scales.
- Use neutral near-black/light surfaces and teal, blue, coral, violet, and cyan semantic roles. Keep mathematical roles consistent across notation, figures, and controls.
- Respect the existing preference to exclude yellow and amber.
- Use font size, spacing, and weight to express hierarchy before adding surfaces or decoration.
- Keep headings descriptive and avoid large promotional hero sections.
- Reserve callouts for information that benefits from emphasis.
- Keep equations and wide comparisons usable through local horizontal scrolling rather than shrinking text.
- Respect reduced-motion preferences and avoid automatic distracting animation.

The default reading view should show the concept promptly. It should not require dismissing overlays, navigating a step wizard, or opening multiple panels to read the explanation. Solutions may be concealed; the central explanation remains visible.

## Mathematics and interactions

Support inline `$...$` and display `$$...$$` mathematics through the Markdown pipeline. Render authored mathematics during the build and bundle KaTeX CSS and fonts with the website. Use an explicit shared macro configuration and surface unsupported or malformed expressions as build errors where possible.

Check equation overflow, subscripts, aligned derivations, and accessible mathematical output in both themes. A successful render does not establish that the equation or proof is correct.

Interactive examples run entirely in the browser. Examples include changing coefficients in a linear combination, moving a point on a graph, adjusting a convergence tolerance, and varying a physical parameter.

Each interactive component must:

1. State the relationship it helps explain.
2. Render an informative initial figure or static equivalent.
3. Label controls and support keyboard operation or an equivalent input method.
4. Expose numerical values or a textual interpretation where a visual alone is insufficient.
5. Provide a predictable reset when the interaction changes state.
6. Load browser code only where needed.

Use the implemented SVG/TypeScript activity family first. See the interaction analysis and design system for pointer, numeric, and keyboard contracts. Consider React components only when they justify another runtime. Introduce a plotting or simulation library only when a concrete lesson warrants its added complexity. Dynamic equations inside an explorer may use browser-side KaTeX without requiring it for every page.

No interaction requires visitor identity, submission, or server storage. Initial delivery does not include analytics. Hosting providers may retain operational access logs; this is separate from website features.

## Proposed repository structure

The existing sibling websites remain intact. Current executable source is under myNotes/my_notes_web/, with canonical documentation at myNotes/. The following is a future target structure after a deliberate migration; it is not the current location of the package. Do not create a second implementation to match this diagram.

```text
MasteryFramework/
  .github/workflows/
    mynotes-check.yml
    mynotes-deploy.yml
  myNotes/
    README.md
    DESIGN-SYSTEM.md
    AGENTS.md
    package.json
    package-lock.json
    .node-version
    .gitignore
    astro.config.mjs
    tsconfig.json
    docs/
      architecture.md
      authoring.md
      interactive-learning-analysis.md
      deployment.md
    templates/
      note.md
      concept.mdx
      worked-problem.mdx
      recap.md
    public/
      favicon.svg
    src/
      content.config.ts
      content/
        subjects/
        chapters/
        lessons/
          learning-methods/
          mathematics/
          physics/
      assets/
        figures/
      components/
        navigation/
        teaching/
        interactive/
      layouts/
        SiteLayout.astro
        LearningPageLayout.astro
      pages/
        index.astro
        [...path].astro
        search.astro
        about.astro
        404.astro
      styles/
        tokens.css
        global.css
        content.css
      lib/
        content.ts
        navigation.ts
        routes.ts
        math.ts
    scripts/
      validate-content.mjs
      check-links.mjs
    dist/
```

GitHub discovers workflow files at the repository root, so workflows belong in `MasteryFramework/.github/workflows`, even though the website package lives in `myNotes`. Configure install and build steps with the actual package directory. At present that is `myNotes/my_notes_web`, publishing `myNotes/my_notes_web/dist`. Update the package, workflow, and documentation paths together if it moves.

Keep `dist`, dependency folders, caches, and local environment files out of Git. Commit source files, templates, shared instructions, and the dependency lockfile. Store authored figures beside source content or in the shared asset directory; do not rely on files available only on one machine.

## Authoring and agent workflow

The repository is the shared source of truth. Jean, Codex, and the Hermes agent on the VPS use the same content rules and verification commands. Their access credentials remain in their respective environments.

For a new topic:

1. Read the repository instructions, relevant subject index, and neighboring lessons.
2. Inspect Jean's notes and supplied sources. Determine what is already covered.
3. Identify the smallest coherent additions and their prerequisites.
4. Create new pages as drafts using the relevant template, or improve existing pages when that is the better fit.
5. Reuse teaching components and add diagrams only when they clarify the material.
6. Check reasoning, examples, notation, and source interpretation. Record review status honestly.
7. Update chapter order and links, then run validation and the production build.
8. Inspect representative generated pages and interactions.
9. Report changed pages and unresolved content questions. Commit and push when instructed.

Avoid a workflow where every agent regenerates the whole site design from a prompt. The layout and component contracts remain stable while lesson content evolves.

Use a separate branch or worktree for each concurrent change. Start from current remote state and avoid editing the same large content registry across unrelated tasks. Keep one page per file and small chapter indexes to reduce conflicts. Resolve conflicts by checking meaning and references, then rebuild the combined result.

The canonical `AGENTS.md` and test/AGENTS.md explain canonical paths, commands, metadata, writing standards, component use, math review, navigation, and deployment. It should explicitly distinguish building, committing, pushing, and publishing. It must not imply permission to push or publish beyond the user's instructions.

## Local commands and build contract

Provide a small, documented command set during implementation:

| Command | Intended behavior |
| --- | --- |
| `npm ci` | Install the locked dependency versions. |
| `npm run dev` | Start local development with updates after edits. |
| `npm run check` | Validate types, content metadata, references, and authoring constraints. |
| `npm run build` | Run required checks, generate all public pages, index search, and validate built links and assets. |
| `npm run preview` | Serve the generated production output locally. |

Keep the build independent of machine-specific paths, private services, and AI APIs. A clean clone with the documented Node version must be sufficient.

Development updates happen as files change. A production build happens when the command runs or GitHub Actions receives a configured event. Saving a file or making a local commit does not itself publish the website.

Require a successful local build before an agent commits website changes. Repeat the build in CI so publishing does not rely on local hooks being installed. Git hooks may provide convenience, but they are not the only enforcement mechanism.

The production target is HTTP hosting, including a local preview server and GitHub Pages. Directly double-clicking generated HTML through `file://` is not an initial acceptance requirement; support for a portable offline edition would need separate asset and search verification.

## GitHub Pages deployment

Use `main` as the proposed publishing branch. Confirm the actual repository name, default branch, and Pages URL when connecting the repository.

The intended pipeline is:

```text
Edit on a computer or VPS
  -> validate and build locally
  -> commit and push a branch
  -> CI validates the branch or pull request
  -> merge to main
  -> CI builds the main revision
  -> upload the static Pages artifact
  -> deploy to GitHub Pages
```

A direct push to `main`, when authorized and permitted by repository policy, uses the same deployment pipeline. A commit that remains on a local machine does not reach GitHub Pages. A branch build does not replace production until its changes reach the publishing branch.

Configure GitHub Pages to deploy through GitHub Actions. Install dependencies using the lockfile, run the required build in `myNotes/my_notes_web`, upload the generated artifact, and use the supported Pages deployment action. Grant deployment permissions only to the deployment job. Check current action versions during implementation.

Validate website changes in pull requests without granting them publication privileges. Include changes to shared workflow configuration in relevant triggers. Ensure changes under `myNotes`, including component and configuration changes, trigger a complete build. Path filters may skip unrelated root-document changes until those files become direct build inputs; document any such input relationship.

Serialize deployments and ensure an older run cannot overwrite a newer published revision. A failed check or build must not replace the existing live website. Roll back through a source revert and successful deployment, or the platform's supported artifact workflow when appropriate.

Generated files are deployment artifacts rather than source commits. Optionally offer a downloadable static ZIP later. GitHub Pages is available free for public repositories; private repository eligibility depends on the GitHub plan.

## Verification and content review

Build checks should verify:

- Metadata schemas, unique IDs and routes, subject membership, and chapter order.
- Valid prerequisites and related links, with no unresolved published references.
- Draft exclusion from public routes, navigation, search, and generated metadata.
- Successful MDX compilation and equation rendering.
- Existing internal routes, section anchors, and local assets in the built output.
- Search generation and correct asset paths under the GitHub Pages prefix.
- Meaningful static content and navigation before browser JavaScript runs.

Use targeted tests for navigation logic, route construction, and interactive mathematical behavior where mistakes would materially affect learning. Avoid tests that merely duplicate prose or component markup.

Browser verification should cover desktop and compact widths, both themes, keyboard navigation, visible focus, equation overflow, answer disclosures, search, and representative interactions. Check accessible names and useful figure alternatives. Confirm that the page remains readable when optional scripts fail.

Content review is a separate pass. Recalculate worked examples, check theorem conditions, inspect proof steps, and verify units where relevant. Check that intuitive descriptions agree with the formal statement and that examples support the intended claim. Verify citations against the supplied source and avoid invented references.

Review proportional to the change: a prose correction needs focused reading and a build; a new explorer needs interaction checks; a shell or token change needs representative pages across sizes and themes.

## Existing material and migration

The initial source material includes the root learning-method documents, the `deep-learning-method` collection, and the existing websites in `mastery-site` and `algebra-sheet`.

Keep original documents and existing websites intact during initial development. Use their material as input and preserve source provenance. Reuse suitable visual explanations from the React site after checking their assumptions, accessibility, and presentation within the new layout. Review asset licenses and attribution requirements before copying third-party material.

Do not copy the existing marketing-style homepage or make all future subjects fit a learning-method framework. Move reusable teaching ideas into the shared library, while simplifying the surrounding presentation.

Do not impose the existing requirement for three sections, objectives, an example, and an exercise on every page. The new contracts depend on the type and purpose of the page.

Initially retain the root documents as reference sources rather than importing them as public pages automatically. Keep source records with migrated lessons so later changes can be traced. If automatic ingestion is introduced later, add those source paths to CI triggers and define how generated drafts are distinguished from edited lessons.

Retire or redirect earlier sites only after the new archive has passed review and Jean requests that transition. A migration does not authorize deletion or publication of unrelated material.

## Implementation sequence and remaining work

The static foundation, approved reading shell, KaTeX, three-language search, and several reusable interactions are complete in my_notes_web/. Phase 3 still needs examples from additional subjects and validated multi-subject metadata; Phases 5 and 6 remain future work. These milestones are acceptance criteria, not instructions to rebuild completed features.

### Phase 1 Establish the static foundation

Create the Astro package, static configuration, content schemas, route generation, shared commands, and initial repository instructions. Add a minimal home page and one subject index.

Completion criterion: a clean installation generates valid static pages under the intended Pages URL prefix, without a runtime server.

### Phase 2 Establish the reading layout

Implement typography, tokens, themes, subject navigation, breadcrumbs, mobile menu, article layout, and conditional page contents. Use actual prose and mathematics to assess density.

Completion criterion: representative desktop and mobile pages are readable, navigable, and usable with a keyboard in both themes.

### Phase 3 Prove the authoring model

Create templates and the initial teaching components. Write one learning-method concept, one linear-algebra concept, one worked analysis problem, and a short recap or note. Reuse published concepts through links rather than duplicate explanations.

Completion criterion: these page types share the layout without filler sections, and a new page can be added without editing layout code.

### Phase 4 Add mathematics search and one explorer

Integrate KaTeX, search, and one meaningful interaction such as a linear-combination explorer. Verify static fallbacks and production asset paths.

Completion criterion: equations render consistently, search finds published material, and the explorer supports pointer and keyboard use without any backend.

### Phase 5 Connect GitHub publishing

Add root-level workflows, CI checks, and Pages deployment configuration after the repository details are available. Configure publication when authorized.

Completion criterion: a successful authorized change reaching the publishing branch updates the live site; a failed build leaves the existing deployment available.

### Phase 6 Migrate and refine

Migrate useful existing lessons in small groups. Remove repeated introductions, verify source distinctions, and improve explanations based on actual reading. Document how a local agent and a VPS agent reproduce the same build.

Completion criterion: the initial learning-method material is available in the archive, and the documented workflow supports adding a new subject without redesigning the website.

## Initial release acceptance criteria

- The public website is named myNotes and has a restrained subject directory.
- Every published page has a stable address and a useful place in navigation.
- Notes, concept explanations, worked problems, and recaps can have appropriate lengths.
- Shared components and tokens determine presentation across the archive.
- KaTeX supports inline and display mathematics with locally bundled assets.
- At least one useful mathematical interaction runs entirely in the browser.
- Core explanations and navigation remain available without JavaScript.
- Search works on the deployed GitHub Pages site.
- A clean clone builds using documented commands and pinned dependencies.
- Local and server agents follow the same authoring and review instructions.
- CI checks changes and publishes successful authorized updates on the publishing branch.
- Existing source documents and websites remain preserved during the transition.

## Future extensions

Consider printable lesson styles, downloadable bundles, exportable practice questions, local bookmarks, or richer simulations only after the core authoring and reading flow works well. Each extension should solve an observed learning need.

Accounts, synchronized progress, hosted AI tutoring, visitor submissions, and a browser note editor would change the architecture and require a separate decision. They are not prerequisites for the archive described here.

## Implementation references

- [Astro content collections](https://docs.astro.build/en/guides/content-collections/) for structured content and metadata validation.
- [Astro islands architecture](https://docs.astro.build/en/concepts/islands/) for selective browser interaction.
- [Astro Markdown support](https://docs.astro.build/en/guides/markdown-content/) for content processing.
- [Math plugins](https://github.com/remarkjs/remark-math) for remark-math and rehype-katex.
- [Pagefind](https://pagefind.app/) for static search.
- [Astro deployment to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/) for deployment configuration.
- [GitHub Pages availability and hosting model](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).
- [Astro license](https://github.com/withastro/astro/blob/main/LICENSE).
