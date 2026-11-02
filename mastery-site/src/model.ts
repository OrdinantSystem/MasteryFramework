/** Content describes teaching intent. Components own markup, interaction, and styling. */
export type Concept = "connect" | "explain" | "compare" | "recall";
export type DiagramKind =
  | "retrieval-cycle"
  | "concept-map"
  | "practice-pattern"
  | "learning-cycle"
  | "hint-ladder"
  | "bloom"
  | "feynman-loop"
  | "spacing-timeline"
  | "mastery-profile"
  | "framework-overview";
export type Block =
  | { type: "prose"; paragraphs: string[] }
  | { type: "definition"; term: string; meaning: string; concept?: Concept }
  | {
      type: "example";
      title: string;
      situation: string;
      steps: string[];
      conclusion: string;
    }
  | {
      type: "exercise";
      id: string;
      question: string;
      answer: string;
      criteria: string[];
    }
  | {
      type: "comparison";
      title: string;
      columns: [string, string];
      rows: [string, string][];
    }
  | { type: "diagram"; kind: DiagramKind; caption: string }
  | { type: "callout"; title: string; body: string; tone: "note" | "caution" };
export interface LessonSection {
  id: string;
  title: string;
  blocks: Block[];
}
export interface Lesson {
  id: string;
  courseId: string;
  navTitle: string;
  title: string;
  summary: string;
  question: string;
  concept?: Concept;
  objectives: string[];
  sections: LessonSection[];
  takeaway: string;
  next?: string;
  sourceNote: string;
}
export interface Course {
  id: string;
  title: string;
  description: string;
  groups: { title: string; lessons: string[] }[];
}
export interface SourceDocument {
  title: string;
  path: string;
  text: string;
}
export type PageData = {
  courses: Course[];
  navigation: Pick<
    Lesson,
    "id" | "navTitle" | "title" | "summary" | "concept" | "courseId"
  >[];
} & (
  | { kind: "home"; id: string; title: string }
  | { kind: "lesson"; id: string; title: string; lesson: Lesson }
  | { kind: "revision"; id: string; title: string; lessons: Lesson[] }
  | { kind: "system"; id: string; title: string }
  | { kind: "library"; id: string; title: string; documents: SourceDocument[] }
  | { kind: "origins"; id: string; title: string }
);
