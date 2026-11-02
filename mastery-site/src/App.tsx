import type { PageData } from "./model";
import { Shell } from "./components/Shell";
import { LessonPage } from "./components/LessonPage";
import {
  DesignSystem,
  Home,
  Library,
  Origins,
  Revision,
} from "./components/Pages";
export function App({ page }: { page: PageData }) {
  let body;
  switch (page.kind) {
    case "home":
      body = <Home />;
      break;
    case "lesson":
      body = (
        <LessonPage
          lesson={page.lesson}
          nextTitle={
            page.navigation.find((l) => l.id === page.lesson.next)?.title
          }
        />
      );
      break;
    case "revision":
      body = <Revision lessons={page.lessons} />;
      break;
    case "library":
      body = <Library documents={page.documents} />;
      break;
    case "system":
      body = <DesignSystem />;
      break;
    case "origins":
      body = <Origins />;
      break;
  }
  return <Shell page={page}>{body}</Shell>;
}
