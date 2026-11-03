/** Provenance identities only; private originals are never public links. */
export const sourceCatalog = {
  "sheet-1-1": { title: "Linear Algebra I — Übungsblatt 1.1", pages: 4,kind:"pdf",course:"linear-algebra" },
  "sheet-2-1": { title: "Linear Algebra I — Übungsblatt 2.1", pages: 6,kind:"pdf",course:"linear-algebra" },
  "analysis-concepts-1":{title:"Analysis I — Konzepte 01",pages:1,kind:"pdf",course:"analysis"},
  "analysis-concepts-2":{title:"Analysis I — Konzepte 2",pages:1,kind:"pdf",course:"analysis"},
  "analysis-concepts-3":{title:"Analysis I — Konzepte 3",pages:1,kind:"pdf",course:"analysis"},
  "analysis-concepts-4":{title:"Analysis I — Konzepte 4",pages:1,kind:"pdf",course:"analysis"},
  "analysis-sheet-1-1":{title:"Analysis I — Übungsblatt 1.1",pages:1,kind:"pdf",course:"analysis"},
  "analysis-sheet-1-2":{title:"Analysis I — Übungsblatt 1.2",pages:1,kind:"pdf",course:"analysis"},
  'analysis-zero':{title:'Analysis 0 · Logic teaching notes',kind:'markdown',pages:0,course:'analysis'},
  'learning-method':{title:'Universal Learning Method v1.0',kind:'markdown',pages:0,course:'learning'},
  'learning-bloom':{title:'Bloom’s Taxonomy and Higher-Order Learning v1.0',kind:'markdown',pages:0,course:'learning'},
  'learning-protocol':{title:'Deep Learning Method v0.1.0',kind:'markdown',pages:0,course:'learning'},
  'transcript-techniques':{title:'Study techniques · 18:18',kind:'transcript',pages:0,course:'learning'},
  'transcript-bloom':{title:'Revised Bloom taxonomy · 17:41',kind:'transcript',pages:0,course:'learning'},
  'transcript-models':{title:'Mental models, disagreements, and diagnostic questions',kind:'transcript',pages:0,course:'learning'},
  'transcript-context':{title:'Context, explanation, and a 90-minute session',kind:'transcript',pages:0,course:'learning'},
} as const;
export type SourceId = keyof typeof sourceCatalog;
