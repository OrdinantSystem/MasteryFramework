# Mastery Framework maintenance

Read README.md and DESIGN-SYSTEM.md before editing the website. This is a React + TypeScript static site. The active source is src/, content/, design-tokens.json, and scripts/. legacy/ is the preserved earlier implementation; do not use it to generate the current site.

Use typed lesson blocks and shared React components. Put explanations in content and state/markup in components. Repeated structures must use Definition, WorkedExample, Comparison, RecallExercise, Callout, and the shared lesson shell. Custom diagrams are encouraged when the concept warrants them; give them a typed variant, accessible labels, a caption, and surrounding explanation. Never inject raw lesson HTML or add a new visual style per lesson.

Preserve continuous reading, comfortable line length, explicit relationships, concrete worked reasoning, and an independent attempt before a model answer. Color supports meaning and must not carry it alone. Do not use yellow or amber. Recall uses alternate blue; caution uses purple. Use semantic tokens for colors and the shared scales for typography and spacing.

Run npm run build after changes. It typechecks, prerenders, bundles, and checks content/navigation/contrast. Never hand-edit generated dist/. Verify representative light/dark and compact layouts and relevant interactions in the browser. Preserve the 19 source documents and four transcripts. Do not claim a complete course or working AI integration when only examples/prompts are present.

The delivery remains a local static website and ZIP. Use npm run package for an updated bundle. Do not publish unless the user requests it. Do not spawn sub-agents unless the user explicitly requests delegation.
