# Interactive learning in myNotes

Research and initial implementation decision, 2 November 2026. The subsequent reusable library and folder migration are specified in [representation-library.md](representation-library.md); historical measurements below describe the first pair of activities. The approved reading interface is canonical in [DESIGN-SYSTEM.md](../DESIGN-SYSTEM.md). Two new activities extend it without changing the static hosting model.

## What Brilliant publicly documents

Brilliant organizes learning around short, focused lessons, visual manipulation, and feedback. Its help page describes dragging objects, entering expressions, and resetting a configuration. These are useful interaction patterns, not evidence that every topic needs a game. Sources: [Brilliant's approach](https://brilliant.org/about/) and [using its interactives](https://brilliant.org/help/features/how-do-i-use-interactives-on-brilliant/).

Its engineering recruitment page describes reusable interactive building blocks and APIs that learning designers can combine, with Elm, JavaScript, TypeScript, HTML, CSS, and SVG among the technologies. This documents a public engineering direction; it does not reveal the complete proprietary architecture or provide a public Brilliant SDK. Source: [Senior/Staff Engineer, Interactives](https://jobs.lever.co/brilliant/abe6c8d6-d0f5-47d6-9d6e-f7b762b64ba2).

Brilliant's authoring article explains that people design the learning objectives and progression, while reusable game-engine APIs support configurable variations and AI-assisted production. The embedded authoring demonstration shows configuration alongside a learner-facing preview. The transferable idea is to author a question using an existing interaction family instead of programming every exercise from scratch. Source: [Hand-crafted, machine-made](https://blog.brilliant.org/hand-crafted-machine-made/).

Its evaluation article highlights the difficulty of detecting mathematical, visual, and state-consistency errors, including impossible situations. That supports testing the relationship behind the drawing, not just whether a button responds. Source: [Evals for AI learning games](https://blog.brilliant.org/when-almost-right-is-catastrophically-wrong-evals-for-ai-learning-games/).

These findings describe public materials. The choices below are myNotes design decisions, not a reconstruction of Brilliant's source code. No proprietary assets, lessons, or code were copied.

## The reusable pattern

A useful activity combines a question, permitted actions, a mathematically consistent representation, and explanatory feedback. A freely moving picture alone can leave the learner unsure what to notice.

For myNotes, use this sequence:

1. Ask one concrete question before the controls.
2. Allow the relevant quantity to change through direct manipulation and an equivalent input.
3. Keep geometry, notation, numeric values, and feedback derived from one state.
4. Offer comparison views or contexts when they expose a relationship.
5. Let the learner check an attempt, then explain why it works or what prevents it.
6. Keep the article readable before, during, and after the activity.

There is no score, compulsory completion, account, remote answer submission, or progress system. The exercise helps someone inspect a concept; it does not claim to assess mastery.

## Technology decision

Retain Astro static generation and MDX. Implement these two-dimensional activities with native SVG, TypeScript, custom elements, Pointer Events, and the existing KaTeX dependency. All behavior runs on the visitor's device. GitHub Pages needs no additional service.

| Option | Suitable use | Decision |
| --- | --- | --- |
| Native SVG + TypeScript | Small, constrained diagrams with a few handles | Use now. Precise theme control, informative server-rendered figure, no new package or framework runtime. |
| [JSXGraph](https://jsxgraph.org/home/) | Many geometry constructions, constraints, plots, or coordinate systems | Consider when several lessons need those features. It is a standalone browser library and can work without React. Evaluate accessibility, styling, licensing, and bundle cost for that use. |
| [Mafs](https://mafs.dev/) | A larger collection of declarative interactive mathematical scenes | Consider if React becomes justified for that collection. Current activities do not warrant adding React solely for this. |
| Elm or a bespoke game engine | A large interactive curriculum with many shared game types | Avoid introducing another language/runtime for two activities. Reuse the architectural idea rather than Brilliant's implementation choices. |

[Pointer Events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events) give a common input model for mouse, pen, and touch. Pointer capture keeps an active drag connected when it leaves its initial target. The implementation supplements this with stable focusable handles and numeric controls. Touch behavior still deserves physical-device testing.

## The two implemented activities

### Reach a target with a linear combination

Location: the Matrices and vectors lesson, `#vector-lab-combination`.

The initial independent vectors are u = (2, 1) and v = (−1, 2). The task is to reach T = (3, 4). The learner can drag either scaled contribution along its fixed direction, drag the output and let the inverse map determine coefficients, or enter a and b numerically. The correct configuration is a = 2, b = 1.

Parallelogram and head-to-tail buttons change the representation without changing the sum. Independent and same-direction buttons change the mathematical context and reset coefficients. In the dependent context u = (1, 1), v = (2, 2), so every result lies on y = x. Feedback explains why T is unreachable rather than calling the attempt a generic mistake.

Coefficients are bounded to −2…2, in 0.05 increments, to keep the view readable. These are display/input constraints, not the definition of span over the reals. The optional explanation makes this distinction. In the head-to-tail view, the second contribution's control remains at its origin-relative location, with a dashed guide; the translated arrow shows the actual addition.

### Collapse a plane to a line

Location: the Span and rank lesson, `#vector-lab-rank`.

Keep u = (2, 1) fixed and move the second column v. The task is to find a nonzero parallel column. Dragging or coordinate inputs update the matrix, determinant, parallelogram, shaded image, and rank together. With v = (−1, 2), the determinant is 5 and rank is 2; with v = (4, 2), determinant is 0 and rank is 1.

The zero column also gives rank 1 because u remains nonzero. Feedback recognizes it as mathematically valid while asking for the requested nonzero example. The component makes no claim to demonstrate rank 0 or all matrices. Coordinates are bounded to −4…4 in quarter-unit increments, allowing exact singular configurations. Preset context buttons make the comparison available without precise dragging.

These are explicitly additional 2D examples. The original PDF examples retain their own values and calculations in the surrounding lessons.

## Code and authoring contract

| Layer | Source | Responsibility |
| --- | --- | --- |
| Mathematical state and renderer | [vector-lab.ts](../my_notes_web/src/lib/interactive/vector-model.ts) | Vectors, determinant, inverse/projected movement, bounds, coordinate transforms, SVG scene, equation |
| Localized teaching copy | [vector-lab-copy.ts](../my_notes_web/src/lib/interactive/vector-copy.ts) | EN/DE/ES tasks, feedback, explanations, control names |
| Component controller | [VectorLab.astro](../my_notes_web/src/components/interactive/VectorLab.astro) | Initial HTML/SVG, pointer/keyboard/input events, reset, view/context controls |
| Theme and layout | [vector-lab.css](../my_notes_web/src/styles/vector-lab.css) | Shared tokens, focus, touch targets, responsive controls |
| Lesson interface | [Explorer.astro](../my_notes_web/src/components/Explorer.astro) | Existing MDX `kind` contract, delegating to the appropriate activity family |
| Numerical checks | [verify.mjs](../my_notes_web/scripts/verify.mjs) | Independent expected results and invariants, including singular and zero cases |

Existing lesson usage remains `<Explorer kind="vectors" />` or `<Explorer kind="rank" />`. A direct VectorLab embed accepts `kind="combination"` or `kind="rank"` and an optional id. Assign distinct ids for repeated instances of the same mode.

This is a reusable family with two scenarios, not a general lesson-game authoring engine. The subsequent library work extracted vectors, targets, bounds, extent, and localized teaching copy into validated typed scenarios. Reuse now follows representation-library.md; arbitrary executable task predicates remain outside the MDX contract.

Keep the pure model free of DOM dependencies. Keep dynamic SVG strings restricted to trusted internal templates, finite numeric state, and fixed labels; do not insert untrusted lesson HTML. Browser code should be included only on pages using the component. The initial figure and equation are rendered during the build; manipulation requires JavaScript, while the surrounding lesson remains readable.

## Production cost and value

No dependency was added. The cost is in authoring a sound task, implementing constraints, reviewing translations, handling input/focus, and testing mathematical edge cases. Supporting mouse, keyboard, mobile layout, and singular states takes substantially more work than adding a static figure. Reusing the model across these two activities makes that work worthwhile; inventing a unique engine for each lesson would undermine the archive's fast-authoring goal.

Bundle measurements are recorded after the final build below. These are gzip file sizes, not measured network transfer or runtime performance; compression and caching vary by host. Shared KaTeX was already present for dynamic mathematics. Search assets are separate and unchanged.

| Built JavaScript | Gzip bytes | Notes |
| --- | ---: | --- |
| Previous combined explorer | 5,941 | Before this iteration; all explorer types shared one controller |
| New shared vector activity family | 6,160 | Both combination and rank, including three-language prompts/feedback |
| Rotation/shear controller + shared geometry | 6,835 | Loaded on their own lesson pages |
| Existing KaTeX/shared math module | 77,094 | Already needed for dynamic equations; previous build was 77,465 |

The vector lesson totals 83,254 gzip bytes (about 81.3 KiB) for its activity and shared math module, versus 83,406 before. That near-equality is an observed bundler result, not a general performance claim. File sizes exclude CSS, fonts, inline shell code, and search. Noninteractive lessons include no VectorLab or ParameterExplorer module. A first visit to an interactive page still carries the substantial existing KaTeX cost; caching helps later visits. Measurements use the locked Node 24 production build and Node gzip defaults.

The practical value here is inspectable: one action changes the geometry and notation together; equivalent drawings can be compared; a singular case has different feedback from an incorrect but reachable attempt. Learning gains and authoring-time savings have not been measured. Retain these activities for relationships where that comparison matters, and prefer a static visual for straightforward exposition.

Before creating another family, require at least one real lesson need, a clear learner question, and a plausible second use. Choose a full geometry library when repeated constraints, axes, plotting, or construction tools become more expensive to maintain than the library integration. Reserve custom scenes for concepts the current families cannot express.

## Verification and limits

The build checks inverse coefficients, screen-coordinate round trips, reachable-target movement, dependent movement without division by zero, bounds, nonfinite input rejection, and determinants over 1,089 column positions. Browser verification covers actual tip dragging, input/keyboard alternatives, context/view changes, reset, feedback, localized controls, and theme/responsive layout; completed checks are recorded in [VERIFICATION.md](../my_notes_web/VERIFICATION.md).

The finite-grid model deliberately favors reliable explanation over continuous, unconstrained simulation. Floating-point tolerance classifies singular states, and displayed values are rounded consistently. The rank activity fixes a nonzero first column; it is not a general matrix rank calculator. No automated check certifies every sentence of a lesson, full accessibility compliance, touch hardware behavior, or pedagogical effectiveness. Those need their own review.
