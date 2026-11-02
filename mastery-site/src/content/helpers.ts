import type { Block, DiagramKind, LessonSection, Concept } from "../model";
export const prose = (...paragraphs: string[]): Block => ({
  type: "prose",
  paragraphs,
});
export const definition = (
  term: string,
  meaning: string,
  concept?: Concept,
): Block => ({ type: "definition", term, meaning, concept });
export const example = (
  title: string,
  situation: string,
  steps: string[],
  conclusion: string,
): Block => ({ type: "example", title, situation, steps, conclusion });
export const exercise = (
  id: string,
  question: string,
  answer: string,
  criteria: string[],
): Block => ({ type: "exercise", id, question, answer, criteria });
export const diagram = (kind: DiagramKind, caption: string): Block => ({
  type: "diagram",
  kind,
  caption,
});
export const comparison = (
  title: string,
  columns: [string, string],
  rows: [string, string][],
): Block => ({ type: "comparison", title, columns, rows });
export const note = (title: string, body: string): Block => ({
  type: "callout",
  title,
  body,
  tone: "note",
});
export const caution = (title: string, body: string): Block => ({
  type: "callout",
  title,
  body,
  tone: "caution",
});
export const section = (
  id: string,
  title: string,
  ...blocks: Block[]
): LessonSection => ({ id, title, blocks });
