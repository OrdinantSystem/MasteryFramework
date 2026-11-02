import { useState } from "react";
import type { Lesson, SourceDocument } from "../model";
import { MethodOverview, Diagram } from "./Diagrams";
import { MethodIcon } from "./Visuals";
import {
  Callout,
  Comparison,
  ConceptLabel,
  Definition,
  PageHeading,
  RecallExercise,
  WorkedExample,
} from "./Primitives";
const methods = [
  {
    id: "mapping",
    concept: "connect" as const,
    label: "Connect",
    title: "See how the ideas fit.",
    body: "Make the relationships explicit with a small, labeled map.",
  },
  {
    id: "feynman",
    concept: "explain" as const,
    label: "Explain",
    title: "Find the meaning behind the words.",
    body: "Teach an idea simply, check the reasoning, and repair a gap.",
  },
  {
    id: "interleaving",
    concept: "compare" as const,
    label: "Compare",
    title: "Decide which approach fits.",
    body: "Mix related questions and explain why you chose a method.",
  },
  {
    id: "retrieval",
    concept: "recall" as const,
    label: "Recall",
    title: "Find out what stays with you.",
    body: "Try without notes, check the attempt, and return after a gap.",
  },
];
export function Home() {
  return (
    <>
      <header className="home-heading">
        <p className="eyebrow">Learning how to learn</p>
        <h1>
          Make knowledge
          <br />
          <em>your own.</em>
        </h1>
        <p className="page-summary">
          A field guide to understanding ideas, using them independently, and
          remembering them later.
        </p>
        <div className="hero-actions">
          <a className="button" href="learning.html">
            Begin with the foundations <span aria-hidden="true">→</span>
          </a>
          <a className="text-link" href="methods.html">
            Explore the techniques
          </a>
        </div>
        <p className="home-orientation">
          Read an explanation. Work through an example. Pause and try.
        </p>
      </header>
      <section className="home-section" aria-labelledby="how-learning-works">
        <div className="home-section-title">
          <p className="eyebrow">The approach</p>
          <h2 id="how-learning-works">
            Different kinds of thinking.
            <br />A connected learning process.
          </h2>
        </div>
        <p className="section-intro">
          Understanding a page is a beginning. These four activities help you
          work with the ideas until you can explain and use them yourself.
        </p>
        <Diagram
          kind="framework-overview"
          caption="Choose a capability, build the understanding it needs, and inspect an independent attempt. The result helps you decide what to practise or revisit."
        />
        <div className="method-cards">
          {methods.map((m, i) => (
            <a
              href={`${m.id}.html`}
              className="method-card"
              data-concept={m.concept}
              key={m.id}
            >
              <div>
                <ConceptLabel concept={m.concept}>{m.label}</ConceptLabel>
                <MethodIcon concept={m.concept} />
              </div>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
              <span className="card-link">
                Open the lesson <span aria-hidden="true">↗</span>
              </span>
            </a>
          ))}
        </div>
      </section>
      <section className="home-section learning-path" aria-labelledby="path">
        <div>
          <p className="eyebrow">A manageable place to start</p>
          <h2 id="path">One idea. One honest attempt.</h2>
          <p>
            You do not need to adopt every technique at once. Start with a
            question, learn what you need, and check what you can do without the
            explanation in front of you.
          </p>
          <a href="cycle.html" className="text-link">
            Walk through a study session →
          </a>
        </div>
        <ol>
          <li>
            <span>01</span>
            <div>
              <strong>Understand the idea</strong>
              <p>Use an explanation and a worked example.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <strong>Try it independently</strong>
              <p>Produce an answer before checking it.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <strong>Use what you notice</strong>
              <p>Repair a gap, then return after a delay.</p>
            </div>
          </li>
        </ol>
      </section>
      <section className="home-section" aria-labelledby="subject-examples">
        <div className="home-section-title">
          <p className="eyebrow">Beyond learning techniques</p>
          <h2 id="subject-examples">
            The same approach.
            <br />A different subject.
          </h2>
        </div>
        <p className="section-intro">
          These two mini-lessons demonstrate how explanations, worked examples,
          and independent questions carry into mathematics. They are examples of
          the format, not complete courses.
        </p>
        <div className="subject-cards">
          <a href="linear-combinations.html">
            <span className="eyebrow">Linear algebra · worked example</span>
            <h3>
              What can you build
              <br />
              from two vectors?
            </h3>
            <p>
              Connect a linear combination to scaling, addition, and
              reachability.
            </p>
            <span className="text-link">Explore the mini-lesson →</span>
          </a>
          <a href="limits.html">
            <span className="eyebrow">Analysis · worked example</span>
            <h3>
              What does it mean
              <br />
              to approach a limit?
            </h3>
            <p>
              Make “gets close” precise, then justify the promise with an
              inequality.
            </p>
            <span className="text-link">Explore the mini-lesson →</span>
          </a>
        </div>
      </section>
    </>
  );
}
export function Revision({ lessons }: { lessons: Lesson[] }) {
  return (
    <>
      <PageHeading
        eyebrow="Return to the essentials"
        title="A revision sheet for active practice."
        summary="Try answering the questions before opening the reminders. Use the result to choose what to revisit."
      />
      <div className="revision-actions">
        <button
          className="quiet-button"
          type="button"
          onClick={() => window.print()}
        >
          Print / save as PDF ↗
        </button>
        <a href="cycle.html" className="text-link">
          Plan a study session
        </a>
      </div>
      <details className="visual-revision">
        <summary>Open the visual revision guide</summary>
        <p className="small">
          Recall what each shape represents, then follow the labels. Open the
          linked lesson when a relationship is unclear.
        </p>
        <Diagram
          kind="framework-overview"
          caption="Use the goal and the result of an attempt to decide what to practise next."
        />
        <Diagram
          kind="bloom"
          caption="Use a different thinking task to check a different kind of capability."
        />
        <Diagram
          kind="feynman-loop"
          caption="Repair a gap, or try a fresh situation and return later."
        />
      </details>
      <div className="revision-grid">
        {lessons
          .filter((l) => l.courseId === "learning")
          .map((l) => (
            <section
              className="revision-card"
              data-concept={l.concept}
              key={l.id}
            >
              <p className="eyebrow">
                {l.id === "methods"
                  ? "Choose a method"
                  : l.id === "learning"
                    ? "The foundations"
                    : l.id === "bloom"
                      ? "Question design"
                      : l.id === "ai"
                        ? "AI tutoring"
                        : l.id === "cycle"
                          ? "A study session"
                          : l.id === "mastery"
                            ? "Evidence"
                            : l.id === "study-habits"
                              ? "Study habits"
                              : methods.find((m) => m.id === l.id)?.label}
              </p>
              <h2>{l.question}</h2>
              <details>
                <summary>Recall first, then check</summary>
                <p>{l.takeaway}</p>
                <ul>
                  {l.objectives.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </details>
              <a className="text-link" href={`${l.id}.html`}>
                Revisit the lesson →
              </a>
            </section>
          ))}
      </div>
      <Callout title="Use the answer to make a decision">
        <p>
          If a relationship is unclear, connect and explain it. If selection is
          difficult, compare cases. If it disappears after a gap, practise
          retrieving it later. Record the help you used when interpreting a
          successful answer.
        </p>
      </Callout>
    </>
  );
}
export function Library({ documents }: { documents: SourceDocument[] }) {
  const [selected, setSelected] = useState(0);
  const doc = documents[selected];
  return (
    <>
      <PageHeading
        eyebrow="Sources, in full"
        title="Read the original material."
        summary="The 19 project documents and four supplied transcripts remain available here. Lessons interpret these sources; they do not replace them."
      />
      <div className="source-library">
        <nav aria-label="Choose a source document">
          {documents.map((d, i) => (
            <button
              type="button"
              key={`${d.path}-${i}`}
              aria-pressed={selected === i}
              aria-controls="document-reader"
              onClick={() => setSelected(i)}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              {d.title}
            </button>
          ))}
        </nav>
        <article id="document-reader" className="document-reader">
          <p className="eyebrow">
            Original source · {selected + 1} of {documents.length}
          </p>
          <h2 aria-live="polite">{doc.title}</h2>
          <p className="source-path">{doc.path}</p>
          <pre>{doc.text}</pre>
        </article>
      </div>
      <noscript>
        <p>
          The interactive document selector needs JavaScript. All originals are
          also included in sources.json and transcripts.json in this bundle.
        </p>
      </noscript>
    </>
  );
}
export function Origins() {
  return (
    <>
      <PageHeading
        eyebrow="Origins & evidence"
        title="Keep the source and the claim in view."
        summary="A practical framework assembled from project notes and supplied transcripts, with a distinction between an idea, a claim, and evidence of learning."
      />
      <article className="standalone-prose">
        <h2>What this guide draws on</h2>
        <p>
          The project combines retrieval, spacing, explanation, relationship
          mapping, comparison, and controlled AI assistance. The lessons
          paraphrase four supplied transcripts in English and use examples about
          learning itself.
        </p>
        <h2>How to read technique ratings</h2>
        <p>
          “S-tier” is a speaker’s ranking, not a scientific grade. The useful
          instructional question is what thinking a technique requires, when it
          fits the learner’s difficulty, and what the learner can subsequently
          demonstrate.
        </p>
        <h2>What the framework does not establish</h2>
        <p>
          The supplied MIT-inspired story is an origin of some of the project’s
          ideas. It does not establish institutional endorsement or verify the
          claims about replacing months of learning with a short session. This
          exact combination of techniques and timings remains a practical
          synthesis to evaluate.
        </p>
        <h2>Follow the references</h2>
        <p>
          The project documents cite work on learning techniques, retrieval,
          spacing, interleaving, explanation, and AI tutoring risks. Read the
          original references and their qualifications in the source library
          before drawing a stronger research conclusion.
        </p>
        <Callout title="Evidence belongs to the attempt">
          <p>
            Record the task, the reasoning, the support used, and whether the
            performance holds after a delay. A persuasive explanation or an
            attractive diagram is useful material to test.
          </p>
        </Callout>
        <a href="library.html" className="button">
          Open the source library →
        </a>
        <p className="small archive-link">
          The earlier website is preserved in{" "}
          <a href="archive/index.html">the archived edition</a>.
        </p>
      </article>
    </>
  );
}
export function DesignSystem() {
  return (
    <>
      <PageHeading
        eyebrow="The teaching design system"
        title="A consistent language for learning."
        summary="Content owns the idea. Components own its presentation. Use a small set of reliable patterns, with room for a visual that the concept actually needs."
      />
      <article className="system-page">
        <section>
          <h2>01 · The reading contract</h2>
          <div className="rules-grid">
            <Callout title="Explain before compressing">
              <p>
                Introduce unfamiliar terms in plain language. Use a worked
                example before reducing the idea to a diagram or a checklist.
              </p>
            </Callout>
            <Callout title="One component, one job">
              <p>
                A definition names the idea. An example shows the reasoning. A
                question asks the learner to produce something. Keep those jobs
                visible.
              </p>
            </Callout>
            <Callout title="Keep the thread readable">
              <p>
                Use a continuous page, descriptive headings, and a comfortable
                reading width. The learner controls when to pause.
              </p>
            </Callout>
            <Callout title="Give visuals a reason">
              <p>
                Use a map for relationships, a sequence for a process, and a
                comparison for distinctions. Label every important connection.
              </p>
            </Callout>
          </div>
        </section>
        <section>
          <h2>02 · Color supports meaning</h2>
          <p>
            Use teal, blue, and purple as short conceptual cues. Recall uses a
            second shade of blue. Long explanations remain in the default text
            color; labels always carry the meaning too.
          </p>
          <MethodOverview />
          <p className="small">
            Yellow and amber are excluded. Caution is purple; success and
            correction use explicit feedback labels. Theme changes preserve
            these meanings.
          </p>
        </section>
        <section>
          <h2>03 · Reusable teaching components</h2>
          <Definition
            term="A definition"
            meaning="Name one concept and explain its meaning without assuming the reader already knows it."
            concept="explain"
          />
          <WorkedExample
            title="Show the reasoning, not only the result"
            situation="Begin with a concrete situation and a clear task."
            steps={[
              "State the relevant information.",
              "Explain why each step follows.",
              "Check the result against the original question.",
            ]}
            conclusion="End by connecting the example back to the idea."
          />
          <RecallExercise
            id="system:example"
            question="What should an independent question reveal?"
            answer="It should reveal what the learner can produce or use before seeing the answer, with criteria that make the attempt checkable."
            criteria={[
              "The task requires an observable attempt.",
              "The example answer stays closed until requested.",
              "The criteria focus on meaning and reasoning.",
            ]}
          />
          <Comparison
            title="Choose the structure that fits"
            columns={["What the content needs", "Use this pattern"]}
            rows={[
              ["A term and its meaning", "Definition"],
              ["A situation with inspectable reasoning", "WorkedExample"],
              ["A distinction between related ideas", "Comparison"],
              ["An attempt before a reference answer", "RecallExercise"],
              [
                "A relationship, sequence, or subject-specific visual",
                "Diagram or a purpose-built React component",
              ],
            ]}
          />
        </section>
        <section>
          <h2>04 · Room for a concept-specific visual</h2>
          <p>
            The common shell and teaching patterns stay stable. A diagram can
            use its own layout when the relationship requires it. Register a new
            diagram type and provide a caption, accessible labels, and a useful
            explanation around it.
          </p>
          <Diagram
            kind="concept-map"
            caption="This component uses labeled connections. The visual can change without changing what a definition or exercise looks like."
          />
        </section>
        <section>
          <h2>05 · The quality gate</h2>
          <ul className="quality-list">
            <li>
              Every lesson states a guiding question and observable learning
              objectives.
            </li>
            <li>
              Every technique includes explanation, an example, an independent
              question, and criteria for checking.
            </li>
            <li>
              Use only shared tokens for colors, spacing, typography, borders,
              and focus states.
            </li>
            <li>
              Check both themes, compact layouts, keyboard access, and the built
              offline pages.
            </li>
            <li>
              Preserve source notes and distinguish demonstrated ability from
              assisted performance.
            </li>
          </ul>
          <Callout title="A course is content, not another website">
            <p>
              The linear algebra and analysis mini-lessons use the same lesson
              schema and components. A new course supplies its sequence,
              explanations, tasks, and subject-specific visuals.
            </p>
          </Callout>
          <a className="text-link" href="linear-combinations.html">
            See the format in linear algebra →
          </a>
        </section>
      </article>
    </>
  );
}
