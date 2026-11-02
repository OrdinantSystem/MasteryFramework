import { BloomPyramid } from "./BloomPyramid";
import {
  ConceptMap,
  ExplanationLoop,
  FrameworkMap,
  HintLadder,
  MasteryProfile,
  SpacingTimeline,
  StudyCycle,
} from "./Visuals";
import type { Concept, DiagramKind } from "../model";
const names: Record<Concept, string> = {
  connect: "Connect",
  explain: "Explain",
  compare: "Compare",
  recall: "Recall",
};
function Steps({ items }: { items: [string, string, Concept?][] }) {
  return (
    <ol className="diagram-steps">
      {items.map(([title, text, concept], i) => (
        <li key={title} data-concept={concept}>
          <span className="step-index">0{i + 1}</span>
          <div>
            <strong>{title}</strong>
            <p>{text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
function Pattern() {
  return (
    <div className="practice-pattern">
      {[
        ["One type at a time", "AAABBBCCC"],
        ["Related types mixed", "ABCACBBAC"],
      ].map(([label, pattern]) => (
        <div key={label}>
          <h3>{label}</h3>
          <div
            className="pattern-row"
            aria-label={pattern.split("").join(", ")}
          >
            {[...pattern].map((letter, i) => (
              <span
                key={i}
                data-concept={
                  letter === "A"
                    ? "connect"
                    : letter === "B"
                      ? "explain"
                      : "compare"
                }
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      ))}
      <p className="pattern-legend">
        A · connect ideas &nbsp; B · explain an idea &nbsp; C · choose a method
      </p>
    </div>
  );
}
const visualTitles: Record<DiagramKind, string> = {
  "concept-map": "From associated words to explained relationships",
  "retrieval-cycle": "Try, check, repair, return",
  "learning-cycle": "A study session, with a feedback loop",
  "hint-ladder": "How much help has been supplied?",
  "practice-pattern": "Blocked practice and mixed practice",
  bloom: "Six ways to work with the same idea",
  "feynman-loop": "Turn an explanation into checked understanding",
  "spacing-timeline": "What returning to an idea can look like",
  "mastery-profile": "Six dimensions of learning",
  "framework-overview": "How the methods work together",
};
export function Diagram({
  kind,
  caption,
}: {
  kind: DiagramKind;
  caption: string;
}) {
  let visual;
  switch (kind) {
    case "concept-map":
      visual = <ConceptMap />;
      break;
    case "retrieval-cycle":
      visual = (
        <Steps
          items={[
            [
              "Try without notes",
              "Produce an answer before looking.",
              "recall",
            ],
            [
              "Check the attempt",
              "Compare meaning and reasoning with a reliable source.",
              "explain",
            ],
            [
              "Repair a gap",
              "Study what was missing, then try a fresh question.",
              "connect",
            ],
            [
              "Return after a gap",
              "Check what you can still produce independently.",
              "recall",
            ],
          ]}
        />
      );
      break;
    case "learning-cycle":
      visual = <StudyCycle />;
      break;
    case "hint-ladder":
      visual = <HintLadder />;
      break;
    case "feynman-loop":
      visual = <ExplanationLoop />;
      break;
    case "spacing-timeline":
      visual = <SpacingTimeline />;
      break;
    case "mastery-profile":
      visual = <MasteryProfile />;
      break;
    case "framework-overview":
      visual = <FrameworkMap />;
      break;
    case "practice-pattern":
      visual = <Pattern />;
      break;
    case "bloom":
      visual = <BloomPyramid />;
      break;
    default: {
      const unhandled: never = kind;
      throw new Error(`Unhandled visual: ${unhandled}`);
    }
  }
  return (
    <figure className={`teaching-figure figure-${kind}`}>
      <div className="visual-heading">
        <p className="eyebrow">Visual explanation</p>
        <h3>{visualTitles[kind]}</h3>
      </div>
      {visual}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
export function MethodOverview() {
  return (
    <div className="method-overview">
      {(["connect", "explain", "compare", "recall"] as Concept[]).map(
        (c, i) => (
          <div data-concept={c} key={c}>
            <span>0{i + 1}</span>
            <strong>{names[c]}</strong>
            <p>
              {c === "connect"
                ? "How do the ideas fit?"
                : c === "explain"
                  ? "Can I make the meaning clear?"
                  : c === "compare"
                    ? "Which approach fits here?"
                    : "What can I produce later?"}
            </p>
          </div>
        ),
      )}
    </div>
  );
}
