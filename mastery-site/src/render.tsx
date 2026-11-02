import { renderToString } from "react-dom/server";
import { App } from "./App";
import { lessons } from "./content/lessons";
import { subjectExamples } from "./content/subject-examples";
import { courses } from "./content/courses";
import type { PageData, SourceDocument } from "./model";
export const allLessons = [...lessons, ...subjectExamples];
export function pages(documents: SourceDocument[]): PageData[] {
  const shared = {
    courses,
    navigation: allLessons.map(
      ({ id, navTitle, title, summary, concept, courseId }) => ({
        id,
        navTitle,
        title,
        summary,
        concept,
        courseId,
      }),
    ),
  };
  return [
    { ...shared, kind: "home", id: "index", title: "Make knowledge your own" },
    ...allLessons.map((lesson) => ({
      ...shared,
      kind: "lesson" as const,
      id: lesson.id,
      title: lesson.title,
      lesson,
    })),
    {
      ...shared,
      kind: "revision",
      id: "revision",
      title: "Revision sheet",
      lessons,
    },
    {
      ...shared,
      kind: "library",
      id: "library",
      title: "Source library",
      documents,
    },
    {
      ...shared,
      kind: "system",
      id: "design-system",
      title: "The teaching design system",
    },
    { ...shared, kind: "origins", id: "origins", title: "Origins & evidence" },
  ];
}
export function render(page: PageData) {
  return renderToString(<App page={page} />);
}
