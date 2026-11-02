# Mastery teaching design system

The design system governs teaching structure, reading, interactions, visuals, and implementation. The living examples are at `dist/design-system.html`.

## Teaching before decoration

A lesson answers one guiding question. It states observable learning objectives, develops the explanation in a continuous reading flow, walks through reasoning, and asks for an attempt before a reference answer. It ends with a takeaway, a source/scope note, and a useful next destination.

Use concrete language before abbreviations or compressed diagrams. Explain the relationship a diagram represents in nearby prose. Preserve mathematical conditions and quantifier order when using plain language. Treat a learner's confidence, assisted success, and independent performance as different observations.

## Component contracts

| Component | Purpose | Required content |
| --- | --- | --- |
| PageHeading | Orient the reader | Topic, summary, guiding question |
| Definition | Establish meaning | Term, plain-language meaning; optional concept role |
| WorkedExample | Show inspectable reasoning | Situation, ordered reasoning, conclusion |
| Comparison | Separate nearby ideas | Meaningful column headings and comparable cases |
| RecallExercise | Support an independent attempt | Question, closed reference answer, checking criteria |
| Callout | Preserve a qualification or decision | Short title and a specific useful point |
| Diagram | Represent a relationship or process | Meaningful labels, a caption, accessible content |
| TutorPrompt | Carry work to an external tutor | Honest scope; no implied connection or grading |
| LessonPage | Sustain the reading flow | The shared lesson schema, section anchors, next step |

`Block` is a discriminated TypeScript union. Content selects a teaching purpose rather than writing markup. Keep prose in the content layer and interaction/state in the component layer. Avoid raw HTML strings, injected HTML, and ad hoc styles in lesson data.

## Freedom for concept-specific content

The stable rules concern orientation, readability, examples, attempts, navigation, and accessibility. They do not require every concept to use the same diagram. Build a purpose-specific React component when a graph, geometric construction, coordinate plot, or symbolic derivation needs its own visual grammar. Register it as a typed block variant, use shared tokens, and supply a meaningful nonvisual explanation. Do not force a relationship into a decorative flow chart.

Linear combinations and sequence limits are worked mini-lessons that exercise the same schema in two subjects. A future course supplies its own prerequisites, sequence, tasks, sources, and subject visuals while sharing the teaching patterns.

## Reading and layout rules

- Continuous reading; do not hide explanations behind compulsory step menus.
- One page title, descriptive section headings, and correct heading order.
- Body text uses `--text-base`, `--leading-body`, and a maximum `--measure` of 68ch.
- Use the shared spacing scale. Separate sections more strongly than paragraphs within a section.
- Keep long explanations neutral. Use surfaces and borders to identify a component's job, not a rainbow of cards.
- On wide screens, course navigation and optional section navigation support the article. On compact screens, navigation collapses and reading remains one column.
- Compare tables in a scrollable region if necessary. Avoid clipped equations, unlabeled arrows, and text shrunk to fit a diagram.

## Color rules

`design-tokens.json` is the only color source of truth. It contains primitive colors, semantic mappings for light/dark, and the common typography/spacing/layout scales. Generated CSS belongs in `dist/assets/tokens.css`; do not edit it.

| Role | Hue | Meaning |
| --- | --- | --- |
| connect | Teal | Relationships and connections |
| explain | Blue | Meaning and explanation |
| compare | Purple | Distinctions and selecting a method |
| recall | Alternate blue | Retrieval and later independent attempts |

Yellow and amber are excluded by user preference. Caution uses purple with an explicit title. Error and success tokens remain available for labeled feedback, never as an automatic assessment of a learner's answer. Blue is also the shared interaction color. Theme changes must preserve meaning. Use role names in components and label every conceptual color in words.

The blue/teal ramps, dark purple, and neutral colors draw on Daniel Wodziczka's [light palette](https://dribbble.com/shots/21283572-Design-System-Color-Palette-Light-Mode) and [dark palette](https://dribbble.com/shots/21284305-Design-System-Color-Palette-Dark-Mode) for Software Mansion. Some text and surface shades are adapted for the site's supported contrast pairs.

## Interaction rules

Use native links and buttons, visible focus states, explicit control labels, and appropriate `aria-pressed`/`aria-expanded` states. Reference answers use native `details` so they work without hydration. Optional practice drafts save locally; explain that the site does not submit or grade them. A full solution is instruction; a fresh unassisted task provides different evidence.

Prerender the same React tree that the browser hydrates. Do not put browser-only state into the initial render. Read optional storage in effects and catch storage failures. Do not bundle all course/source content into the shared client JavaScript. Use stable content IDs and scoped draft keys.

## Sustained quality gate

`npm run build` typechecks and validates:

- Every lesson has objectives, at least three sections, a worked example, an independent exercise, and a takeaway/source note.
- Lesson/section/exercise IDs are unique; next destinations and local asset links exist.
- Theme tokens resolve without cycles; layout CSS contains no raw colors.
- Supported foreground/background pairs meet 4.5:1 contrast in both themes.
- Every static page contains one main heading and real prerendered content with local assets.

Before delivering a visual or interaction change, inspect representative desktop/mobile pages in both themes. Check keyboard access, theme persistence, draft persistence, native answers, source selection, and at least one standalone `file://` page. Passing structural checks is not a substitute for reading the explanation or trying the interaction.


## Visual explanation library

The React visual library restores the earlier edition’s useful graphical models inside the current lesson shell:

| Typed diagram | Teaching purpose | Interaction |
| --- | --- | --- |
| `bloom` | Six kinds of thinking, arranged as a labeled pyramid | Select a process to see a task and its evidence |
| `concept-map` | Distinguish associations from explicit claims | Compare related words with explained relationships |
| `feynman-loop` | Follow feedback toward repair or transfer | Labeled branches, with explicit return paths |
| `learning-cycle` | Relate a session’s activities to its outcome | Goal, practice, independent attempt, and two next steps |
| `spacing-timeline` | Show an illustrative sequence of later checks | Labeled review points; responsive vertical layout |
| `hint-ladder` | Make the amount of supplied help visible | Select H0–H5 to inspect a concrete tutor response |
| `mastery-profile` | Inspect six dimensions without inventing a score | Select a dimension to see an evidence question |
| `framework-overview` | Relate the four methods to a learning goal | Linked concept nodes lead to relevant lessons |
| `retrieval-cycle` | Connect attempt, feedback, repair, and later recall | Numbered clockwise loop, stacked on mobile |
| `practice-pattern` | Compare blocked and mixed question sequences | Types have letter labels as well as colors |

Use `src/components/Visuals.tsx`, `BloomPyramid.tsx`, and the `Diagram` wrapper; do not paste legacy HTML into a lesson. `src/styles/visuals.css` owns the shared node, connector, decision, and explorer presentation. The build checks both style files against the token registry.

A visual belongs beside the explanation it supports, before the relevant independent question. Keep meaningful relationship labels and a caption. Native controls preserve focus states and expose selection with `aria-pressed`; details panels use unique React IDs. Text and no-JavaScript fallbacks retain the instructional meaning. A pyramid is not a mandatory progression, timeline points are illustrative, and a profile is not an assessed score.
