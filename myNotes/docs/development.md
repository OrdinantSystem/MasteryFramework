# Development and verification

Run commands in ../my_notes_web/ with Node 24 and the committed lockfile. No private API, external service, or machine-specific path is required to build.

## Standard change workflow

1. Read AGENTS.md, the design system, and the relevant guide/source.
2. Make the smallest coherent source change. Reuse tokens, layouts, MDX components, models, and presets.
3. Recalculate affected mathematics independently and check conditions/source meaning.
4. Run npm run build. For fast iteration on model work, npm run verify:library is available, but does not replace the production build.
5. Inspect changed flows using the production preview. Check pointer and keyboard/numeric controls, reset, feedback, overflow, affected languages, and themes proportionate to the change.
6. If routes/localization changed, build with SITE_URL and BASE_PATH as shown in the application README; serve using the same prefix. Check a localized lesson, language switching, and search-result links. Restore a root build/preview for normal use.
7. Update documentation/contracts and VERIFICATION.md. Report actual checks and remaining limits. Commit/push/publish only when requested.

## Build contract

npm run build runs Astro diagnostics, verify:library, static generation, Pagefind, worksheet arithmetic/word checks (verify:content), and scripts/verify.mjs. Presets are validated both in the library check and when initialized by the Astro view. Equation parity treats digit-surrounded TeX decimal commas and decimal points as equivalent, so EN/DE/ES numerical notation may be localized without weakening comparison of values.

Generated-output checks derive published lesson counts, enforce localized counterparts, verify links/assets/anchors, check private source exclusion, and explicitly count text-contrast pairs so formatting cannot silently disable checks.

Use relevant tests for actual risks: target reachability on a finite grid, singular/zero states, input bounds, inverse mappings, state isolation between instances, matrix dimensions, dynamic equation validity, and unsafe SVG labels. Do not add tests that merely reproduce prose or implementation structure.

## Navigation, routes, and search

- Publish matching EN/DE/ES filenames together. Titles can differ; filenames are stable translation keys.
- Extend chapters/groups in src/lib/navigation.ts when adding a published order. Membership is checked exactly once per published lesson; a new lesson cannot disappear silently from the menu.
- Use url(), localeUrl(), and lessonUrl() from src/lib/content.ts. Never concatenate /myNotes or a locale directly into an application link.
- Search uses separate Pagefind language indexes. It does not translate query text. Test German and Spanish terms in the built preview.
- /library/ is an authoring reference, noindex, outside Pagefind lesson bodies and learner navigation. It is English-only; its language control opens localized archive overviews.

Course navigation color is automatic: `src/lib/navigation-colors.ts` cycles blue, teal, purple and coral by global course-registry position, before grouping into knowledge areas. Chapters, groups and active lessons inherit the course color. Append new courses to preserve existing assignments; do not add course-id color selectors or lesson color fields. Reordering courses deliberately reassigns their colors. This cycle does not alter the semantic colors used inside teaching figures.

## Dependencies and source hygiene

Keep package.json and package-lock.json synchronized. npm ci reproduces the locked versions. The package is private; the interactive library is internal source, not a separately published npm package. Prefer no new dependency for an existing asset family. Keep Node/version upgrades deliberate and documented.

Do not track dist/, node_modules/, .astro/, .sites-runtime/, or private references/source/. Do not duplicate the source PDF in public/. Never delete source material to make a build pass. When moving the package, stop its preview first and update documentation, workflow paths, package metadata, and verification together.

## GitHub Pages

The active workflow is repository-root .github/workflows/mynotes-pages.yml, authorized on 3 November 2026. It builds pull requests and relevant main pushes with Node 24 and npm ci, runs the complete production checks, and deploys successful main builds to https://ordinantsystem.github.io/MasteryFramework/. GitHub Pages must use GitHub Actions as its source. The artifact contains only myNotes/my_notes_web/dist. The older my_notes_web/deployment/github-pages.yml remains a reference template; edit the active workflow for hosting changes.

The intended flow remains: edit → validate/build → authorized commit/push → CI build → successful publishing-branch deployment. A local commit does not itself publish. Generated files are artifacts, not source commits. Confirm current hosting/action details when activating the template; a folder rename does not authorize deployment.
