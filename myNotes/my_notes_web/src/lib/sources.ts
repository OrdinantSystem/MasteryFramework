/** Provenance identities only; private originals are never public links. */
export const sourceCatalog = {
  "sheet-1-1": { title: "Linear Algebra I — Übungsblatt 1.1", pages: 4,course:"linear-algebra" },
  "sheet-2-1": { title: "Linear Algebra I — Übungsblatt 2.1", pages: 6,course:"linear-algebra" },
  "analysis-concepts-1":{title:"Analysis I — Konzepte 01",pages:1,course:"analysis"},
  "analysis-concepts-2":{title:"Analysis I — Konzepte 2",pages:1,course:"analysis"},
  "analysis-concepts-3":{title:"Analysis I — Konzepte 3",pages:1,course:"analysis"},
  "analysis-concepts-4":{title:"Analysis I — Konzepte 4",pages:1,course:"analysis"},
  "analysis-sheet-1-1":{title:"Analysis I — Übungsblatt 1.1",pages:1,course:"analysis"},
  "analysis-sheet-1-2":{title:"Analysis I — Übungsblatt 1.2",pages:1,course:"analysis"},
} as const;
export type SourceId = keyof typeof sourceCatalog;
