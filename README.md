# MasteryFramework

University learning resources, study methods, and static learning websites.

For commands to start, stop, and preview the website locally, see
[LOCAL-DEVELOPMENT.md](LOCAL-DEVELOPMENT.md).

## Canonical website

The current myNotes application is in [myNotes/my_notes_web](myNotes/my_notes_web/).
It uses Astro, MDX, KaTeX, and Pagefind, with English, German, and Spanish lessons
for Linear Algebra I, Analysis I, and learning methodology. Start with [myNotes/README.md](myNotes/README.md)
for the design system, authoring guides, and agent instructions.

Using Node 24:

```sh
cd myNotes/my_notes_web
nvm install
nvm use
npm ci
npm run build
npm run preview
```

The build generates the static website in `dist/` and verifies the content,
translations, mathematics, navigation, and internal references. Generated output
is excluded from Git. GitHub Pages publication is not enabled automatically;
the inactive workflow template and hosting instructions live with the application.

## Other material

- `Learning&Teaching/`: learning-method documents, four transcripts, and the `deep-learning-method/` protocols, prompts, and note templates.
- `mastery-site/`: the earlier React website and its preserved legacy source.
- `algebra-sheet/`: the earlier static algebra website. Its authored files live
  directly in `dist/`, so this particular directory is intentionally tracked.
- The learning framework and Bloom taxonomy notes are preserved inside `Learning&Teaching/`.

## Repository conventions

All website folders are ordinary directories in this repository, not submodules.
Run Git commands from this root. Do not initialize nested Git repositories.
Dependencies, generated builds, caches, ZIP bundles, local hosting state, and
private PDF originals/renders are ignored. Lockfiles, source, documentation, and
deliberately saved design previews are tracked.

During consolidation, the original Git metadata for `algebra-sheet` and
`mastery-site` was preserved locally under `.git/nested-repository-backups/`.
That recovery backup is local to the original checkout and is not distributed
with clones; the current website files themselves are included in this repository.
