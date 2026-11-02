import type { Block, Lesson } from "../model";
import {
  Callout,
  Comparison,
  Definition,
  PageHeading,
  RecallExercise,
  TutorPrompt,
  WorkedExample,
} from "./Primitives";
import { Diagram } from "./Diagrams";
export function TeachingBlock({
  block,
  lessonId,
}: {
  block: Block;
  lessonId: string;
}) {
  switch (block.type) {
    case "prose":
      return (
        <div className="prose">
          {block.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      );
    case "definition":
      return <Definition {...block} />;
    case "example":
      return <WorkedExample {...block} />;
    case "exercise":
      return <RecallExercise {...block} id={`${lessonId}:${block.id}`} />;
    case "comparison":
      return <Comparison {...block} />;
    case "diagram":
      return <Diagram {...block} />;
    case "callout":
      return (
        <Callout title={block.title} tone={block.tone}>
          <p>{block.body}</p>
        </Callout>
      );
  }
}
export function LessonPage({
  lesson,
  nextTitle,
}: {
  lesson: Lesson;
  nextTitle?: string;
}) {
  return (
    <>
      <PageHeading
        eyebrow={
          lesson.courseId === "subject-examples"
            ? `Worked subject example · ${lesson.navTitle}`
            : lesson.navTitle
        }
        title={lesson.title}
        summary={lesson.summary}
      >
        <p className="guiding-question">
          <span>The question</span>
          {lesson.question}
        </p>
      </PageHeading>
      <div className="lesson-layout">
        <article className="lesson-body">
          <section className="learning-objectives" aria-labelledby="objectives">
            <h2 id="objectives">By the end, you should be able to…</h2>
            <ul>
              {lesson.objectives.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </section>
          {lesson.sections.map((s, i) => (
            <section
              className="lesson-section"
              id={s.id}
              key={s.id}
              aria-labelledby={`section-${s.id}`}
            >
              <div className="section-heading">
                <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h2 id={`section-${s.id}`}>{s.title}</h2>
              </div>
              {s.blocks.map((b, j) => (
                <TeachingBlock
                  key={`${s.id}-${j}`}
                  block={b}
                  lessonId={lesson.id}
                />
              ))}
            </section>
          ))}
          <Callout title="Keep this idea">
            <p>{lesson.takeaway}</p>
          </Callout>
          {lesson.id === "ai" ? <TutorPrompt /> : null}
          <details className="source-note">
            <summary>Sources and scope</summary>
            <p>{lesson.sourceNote}</p>
            <a href="library.html">Read the source library ↗</a>
          </details>
          {lesson.next ? (
            <a className="next-lesson" href={`${lesson.next}.html`}>
              <span>Continue learning</span>
              <strong>{nextTitle || "Review the main ideas"}</strong>
              <b aria-hidden="true">→</b>
            </a>
          ) : null}
        </article>
        <aside className="lesson-toc">
          <p className="eyebrow">In this lesson</p>
          <nav aria-label="On this page">
            {lesson.sections.map((s, i) => (
              <a key={s.id} href={`#${s.id}`}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </a>
            ))}
          </nav>
          <p>
            Read at your pace.
            <br />
            Pause when you see a question.
          </p>
          <a className="text-link" href="revision.html">
            Open the revision sheet ↗
          </a>
        </aside>
      </div>
    </>
  );
}
