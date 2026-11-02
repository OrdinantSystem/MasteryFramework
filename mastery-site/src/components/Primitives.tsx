import { useEffect, useId, useState, type ReactNode } from "react";
import type { Concept } from "../model";
export function ConceptLabel({
  concept,
  children,
}: {
  concept: Concept;
  children: ReactNode;
}) {
  return (
    <span className="concept-label" data-concept={concept}>
      {children}
    </span>
  );
}
export function PageHeading({
  eyebrow,
  title,
  summary,
  children,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-summary">{summary}</p>
      {children}
    </header>
  );
}
export function Callout({
  title,
  children,
  tone = "note",
}: {
  title: string;
  children: ReactNode;
  tone?: "note" | "caution";
}) {
  return (
    <aside className={`callout callout-${tone}`}>
      <strong>{title}</strong>
      <div>{children}</div>
    </aside>
  );
}
export function Definition({
  term,
  meaning,
  concept,
}: {
  term: string;
  meaning: string;
  concept?: Concept;
}) {
  return (
    <div className="definition" data-concept={concept}>
      <p className="eyebrow">The idea</p>
      <h3>{term}</h3>
      <p>{meaning}</p>
    </div>
  );
}
export function WorkedExample({
  title,
  situation,
  steps,
  conclusion,
}: {
  title: string;
  situation: string;
  steps: string[];
  conclusion: string;
}) {
  return (
    <aside className="worked-example">
      <p className="eyebrow">A worked example</p>
      <h3>{title}</h3>
      <p>{situation}</p>
      <ol>
        {steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
      <p className="example-conclusion">{conclusion}</p>
    </aside>
  );
}
export function Comparison({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: [string, string];
  rows: [string, string][];
}) {
  return (
    <div className="comparison">
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b]) => (
            <tr key={a}>
              <th scope="row">{a}</th>
              <td>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export function RecallExercise({
  id,
  question,
  answer,
  criteria,
}: {
  id: string;
  question: string;
  answer: string;
  criteria: string[];
}) {
  const inputId = useId();
  const [draft, setDraft] = useState("");
  const [saved, setSaved] = useState(false);
  const storageKey = `mastery:attempt:v1:${id}`;
  useEffect(() => {
    try {
      setDraft(localStorage.getItem(storageKey) || "");
    } catch {
      /* Storage is optional. */
    }
  }, [storageKey]);
  function update(value: string) {
    setDraft(value);
    try {
      localStorage.setItem(storageKey, value);
      setSaved(true);
    } catch {
      setSaved(false);
    }
  }
  return (
    <section className="recall-exercise" aria-labelledby={`${inputId}-title`}>
      <div className="exercise-label">
        <span className="exercise-mark" aria-hidden="true">
          ↗
        </span>
        <span className="eyebrow">Pause & try</span>
      </div>
      <h3 id={`${inputId}-title`}>{question}</h3>
      <p>
        Make an attempt before opening the example. Say it aloud, write on
        paper, or use the space below.
      </p>
      <label htmlFor={inputId}>
        Your attempt <span>(optional)</span>
      </label>
      <textarea
        id={inputId}
        value={draft}
        onChange={(e) => update(e.target.value)}
        rows={4}
        placeholder="Put the idea in your own words…"
      />
      <p className="draft-note" aria-live="polite">
        {saved
          ? "Draft saved in this browser."
          : "This field does not send your answer to a tutor."}
      </p>
      <details>
        <summary>Compare with an example answer</summary>
        <div className="answer">
          <p>{answer}</p>
          <h4>Check your reasoning</h4>
          <ul>
            {criteria.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="small">
            Matching the wording is not the goal. Check the meaning, then try
            again without the example.
          </p>
        </div>
      </details>
    </section>
  );
}
export function TutorPrompt() {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const text =
    "Act as a tutor for [TOPIC]. My goal is [CAPABILITY]. Ask me one question at a time. Let me attempt it before giving a solution. Teach missing prerequisites when needed. When I ask for help, begin with a strategic question. Check the first unsupported claim in my reasoning and help me repair it. Verify important claims against my source. Finish with a fresh independent question and a later recall task. State uncertainty and do not invent progress.";
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setFailed(false);
    } catch {
      setFailed(true);
    }
  }
  return (
    <section className="tutor-prompt">
      <div>
        <p className="eyebrow">Take it to your AI tutor</p>
        <button type="button" className="quiet-button" onClick={copy}>
          {copied ? "Copied ✓" : "Copy prompt"}
        </button>
      </div>
      <p>{text}</p>
      {failed ? (
        <p role="status">
          Copy is unavailable here. Select the prompt text and copy it manually.
        </p>
      ) : null}
      <p className="small">
        This site does not connect to an AI service. Paste the prompt into the
        tutor you use.
      </p>
    </section>
  );
}
