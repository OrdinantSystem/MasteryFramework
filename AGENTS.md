# Repository orientation

This workspace contains source learning documents and several websites. For myNotes work, the canonical application is `myNotes/my_notes_web/`; the former `myNotes/test/` directory was renamed, not duplicated.

Start with `myNotes/AGENTS.md`, `myNotes/README.md`, and `myNotes/DESIGN-SYSTEM.md`. The application has additional scoped instructions. Task-specific Markdown guides in `myNotes/docs/` cover architecture, lesson authoring, reusable representations, development, accepted decisions, and current context. Historical plans do not override those guides.

Run myNotes commands from its application directory using Node 24. A production build is required before delivering website changes. Source documents and the sibling websites (`mastery-site`, `algebra-sheet`, `deep-learning-method`) remain separate; do not redesign or retire them as a side effect of myNotes work.

Keep private source references out of public output. Building, committing, pushing, and publishing are separate operations. Do not infer deployment or Git-write authorization from a request to edit content or maintain the canonical design.
