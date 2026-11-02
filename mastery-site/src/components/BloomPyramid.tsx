import { useId, useState } from "react";
import type { Concept } from "../model";
const processes: {
  name: string;
  action: string;
  question: string;
  evidence: string;
  concept: Concept;
}[] = [
  {
    name: "Remember",
    action: "Recall the idea",
    question: "State the definition of spacing.",
    evidence:
      "Retrieve the definition before looking. Include the gap between attempts.",
    concept: "recall",
  },
  {
    name: "Understand",
    action: "Explain the meaning",
    question: "Why is spacing different from repetition alone?",
    evidence:
      "Use your own words and an example that makes the time gap clear.",
    concept: "explain",
  },
  {
    name: "Apply",
    action: "Use the idea",
    question: "Plan two later attempts for an idea you are learning.",
    evidence:
      "Turn the timing principle into an actual plan, including a task to attempt.",
    concept: "explain",
  },
  {
    name: "Analyze",
    action: "Examine relationships",
    question:
      "How do retrieval and spacing differ, and how can they work together?",
    evidence:
      "Separate the activity from its timing, then give a routine that includes both.",
    concept: "compare",
  },
  {
    name: "Evaluate",
    action: "Choose and justify",
    question:
      "A learner forgets after a week. Which change would you make, and why?",
    evidence:
      "Choose an adjustment using the observed difficulty and say what would show it helped.",
    concept: "compare",
  },
  {
    name: "Create",
    action: "Build something new",
    question:
      "Design a short review session that combines recall, feedback, and spacing.",
    evidence:
      "Make a coherent plan with an attempt, a check, and a later return.",
    concept: "connect",
  },
];
export function BloomPyramid() {
  const [selected, setSelected] = useState(0);
  const detailId = useId();
  return (
    <div className="bloom-pyramid-explorer">
      <div
        className="bloom-pyramid"
        role="group"
        aria-label="Bloom’s six thinking processes"
      >
        {processes
          .map((process, index) => ({ process, index }))
          .reverse()
          .map(({ process, index }) => (
            <button
              key={process.name}
              type="button"
              className={`bloom-tier bloom-tier-${index}`}
              data-concept={process.concept}
              onClick={() => setSelected(index)}
              aria-pressed={index === selected}
              aria-controls={detailId}
            >
              <strong>
                <span>{index + 1}.</span> {process.name}
              </strong>
              <span>{process.action}</span>
            </button>
          ))}
      </div>
      <div id={detailId} className="bloom-task-detail" aria-live="polite">
        <p className="eyebrow">
          {String(selected + 1).padStart(2, "0")} · {processes[selected].name}
        </p>
        <h3>{processes[selected].question}</h3>
        <p className="detail-label">What would count as evidence?</p>
        <p>{processes[selected].evidence}</p>
      </div>
      <p className="pyramid-qualification">
        The pyramid organizes kinds of task, not people or levels of
        intelligence. It is not a compulsory sequence; useful reasoning still
        depends on accurate knowledge.
      </p>
      <noscript>
        <ol>
          {processes.map((p) => (
            <li key={p.name}>
              <strong>{p.name}:</strong> {p.question} {p.evidence}
            </li>
          ))}
        </ol>
      </noscript>
    </div>
  );
}
