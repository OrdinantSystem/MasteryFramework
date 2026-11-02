import { useId, useState } from "react";
import type { Concept } from "../model";

/** A common, labeled node; diagram layout stays with the concept-specific visual. */
export function VisualNode({
  title,
  detail,
  concept,
  href,
}: {
  title: string;
  detail: string;
  concept?: Concept;
  href?: string;
}) {
  const content = (
    <>
      <strong>{title}</strong>
      <span>{detail}</span>
    </>
  );
  return href ? (
    <a className="visual-node" data-concept={concept} href={href}>
      {content}
    </a>
  ) : (
    <div className="visual-node" data-concept={concept}>
      {content}
    </div>
  );
}
function Connector({ children }: { children: string }) {
  return (
    <div className="visual-connector">
      <span aria-hidden="true">↓</span>
      <span>{children}</span>
    </div>
  );
}
export function FrameworkMap() {
  return (
    <div className="framework-map">
      <div className="framework-root">
        <VisualNode
          title="A learning goal"
          detail="Something you want to explain or do."
        />
      </div>
      <Connector>choose a task that can show it</Connector>
      <div className="framework-branches">
        <div>
          <VisualNode
            title="Build understanding"
            detail="Connect the ideas and explain their meaning."
            concept="connect"
            href="mapping.html"
          />
        </div>
        <div>
          <VisualNode
            title="Try independently"
            detail="Choose an approach and produce an answer."
            concept="compare"
            href="mastery.html"
          />
        </div>
      </div>
      <div className="branch-join" aria-hidden="true">
        ↓
      </div>
      <VisualNode
        title="Check, repair, and return"
        detail="Use the evidence, then try again after a gap."
        concept="recall"
        href="retrieval.html"
      />
    </div>
  );
}
export function ConceptMap() {
  const [explained, setExplained] = useState(true);
  const id = useId();
  return (
    <div className="concept-map-comparison">
      <div
        className="visual-controls"
        role="group"
        aria-label="Compare two mind maps"
      >
        <button
          type="button"
          aria-pressed={!explained}
          aria-controls={id}
          onClick={() => setExplained(false)}
        >
          Related words
        </button>
        <button
          type="button"
          aria-pressed={explained}
          aria-controls={id}
          onClick={() => setExplained(true)}
        >
          Explained relationships
        </button>
      </div>
      <div
        id={id}
        className={`branch-map ${explained ? "explained-map" : "association-map"}`}
      >
        <VisualNode
          title="Retrieval practice"
          detail={
            explained
              ? "Try to produce an answer before looking."
              : "A topic with several related terms."
          }
          concept="recall"
        />
        <Connector>
          {explained ? "means answering without notes" : "is associated with"}
        </Connector>
        <VisualNode
          title={explained ? "An attempt you can check" : "Memory"}
          detail={
            explained
              ? "What can you reconstruct by yourself?"
              : "A related word."
          }
        />
        <div className="map-fork">
          <div>
            <Connector>{explained ? "can expose" : "is linked to"}</Connector>
            <VisualNode
              title={explained ? "A specific gap" : "Questions"}
              detail={
                explained
                  ? "Notice what is missing or confused."
                  : "Another related word."
              }
              concept="compare"
            />
          </div>
          <div>
            <Connector>
              {explained ? "can be checked using" : "is linked to"}
            </Connector>
            <VisualNode
              title="Feedback"
              detail={
                explained
                  ? "Correct the gap, then try a fresh question."
                  : "Another related word."
              }
              concept="explain"
            />
          </div>
        </div>
      </div>
      <p className="visual-explanation" aria-live="polite">
        {explained
          ? "Read the connections as claims: an independent attempt can expose a gap; checked feedback helps you correct it."
          : "The terms may belong together, but the lines do not explain what one has to do with another. Which relationship would you label first?"}
      </p>
      <noscript>
        <p>
          A useful link is a checkable sentence: retrieval can expose a gap;
          checked feedback helps correct it.
        </p>
      </noscript>
    </div>
  );
}
export function ExplanationLoop() {
  return (
    <div className="explanation-loop">
      <div className="three-stage-flow">
        <VisualNode
          title="Explain"
          detail="Put the source aside."
          concept="explain"
        />
        <span className="flow-connector" aria-hidden="true">
          →
        </span>
        <VisualNode
          title="Ask why"
          detail="Make the reasoning explicit."
          concept="connect"
        />
        <span className="flow-connector" aria-hidden="true">
          →
        </span>
        <VisualNode
          title="Check"
          detail="Use reliable feedback."
          concept="compare"
        />
      </div>
      <Connector>compare your explanation with the evidence</Connector>
      <div className="decision-node">Does the explanation hold up?</div>
      <div className="outcome-branches">
        <div className="outcome-branch repair-branch">
          <p className="branch-caption">↙ A gap remains</p>
          <VisualNode
            title="Study the missing part"
            detail="Ask a specific question and check the correction."
            concept="compare"
          />
          <p className="return-connector">
            ↶ Explain again without the source.
          </p>
        </div>
        <div className="outcome-branch transfer-branch">
          <p className="branch-caption">It holds up ↘</p>
          <VisualNode
            title="Try a new situation"
            detail="Use the idea in an example you have not just studied."
            concept="connect"
          />
          <p className="return-connector">↳ Check again after a gap.</p>
        </div>
      </div>
    </div>
  );
}
export function StudyCycle() {
  return (
    <div className="study-cycle">
      <div className="session-route">
        <div className="session-stage">
          <span className="route-number">01</span>
          <VisualNode
            title="Choose a goal"
            detail="Name a capability you can test."
          />
        </div>
        <span className="route-arrow" aria-hidden="true">
          ↓
        </span>
        <div className="session-stage">
          <span className="route-number">02</span>
          <VisualNode
            title="Learn the missing basics"
            detail="Use a source, explanation, or worked example."
            concept="explain"
          />
        </div>
        <span className="route-arrow" aria-hidden="true">
          ↓
        </span>
        <div className="session-practice">
          <div>
            <span className="route-number">03 · Build meaning</span>
            <VisualNode
              title="Map + explain"
              detail="Work out the relationships and reasons."
              concept="connect"
            />
          </div>
          <div>
            <span className="route-number">04 · Choose an approach</span>
            <VisualNode
              title="Practise + compare"
              detail="Mix related tasks and justify the method."
              concept="compare"
            />
          </div>
        </div>
        <span className="route-arrow" aria-hidden="true">
          ↓
        </span>
        <div className="session-stage">
          <span className="route-number">05</span>
          <VisualNode
            title="Try independently"
            detail="Use a fresh task with no solution or method cue."
            concept="recall"
          />
        </div>
      </div>
      <Connector>inspect the result</Connector>
      <div className="decision-node">What did the attempt show?</div>
      <div className="outcome-branches">
        <div className="outcome-branch">
          <p className="branch-caption">↙ Something is missing</p>
          <VisualNode
            title="Find and fix the gap"
            detail="Return to the relevant idea, then retry a new task."
            concept="compare"
          />
          <p className="return-connector">
            ↶ Return to the part that needs work.
          </p>
        </div>
        <div className="outcome-branch">
          <p className="branch-caption">Independent success ↘</p>
          <VisualNode
            title="Revisit later"
            detail="Check recall and transfer after a gap."
            concept="recall"
          />
          <p className="return-connector">
            ↳ Use the later result to adapt the plan.
          </p>
        </div>
      </div>
    </div>
  );
}
const reviews = [
  ["Today", "Learn + attempt", "Explain the idea, then check."],
  ["Tomorrow", "Recall", "Try without notes first."],
  ["Day 3–4", "Compare", "Choose between related cases."],
  ["Around day 7", "Transfer", "Use a new study situation."],
  ["Week 3–4", "Check again", "Explain and use it after a longer gap."],
];
export function SpacingTimeline() {
  return (
    <div className="spacing-timeline">
      <ol>
        {reviews.map(([time, title, task], i) => (
          <li key={time}>
            <span className="timeline-time">{time}</span>
            <span className="timeline-point" aria-hidden="true">
              {i + 1}
            </span>
            <strong>{title}</strong>
            <p>{task}</p>
          </li>
        ))}
      </ol>
      <p className="visual-explanation">
        An example sequence, not a prescription or a time scale. Review sooner
        after difficulty; consider a longer gap after reliable independent
        success.
      </p>
    </div>
  );
}
const hints = [
  {
    name: "Independent",
    description: "No hint or notes.",
    example:
      "Explain how retrieval differs from spacing. Try before asking for support.",
  },
  {
    name: "Question",
    description: "A strategic question redirects attention.",
    example:
      "Could both methods be used in the same study session? What would each contribute?",
  },
  {
    name: "Concept",
    description: "The tutor names a useful distinction.",
    example: "Think about what you do during practice and when you do it.",
  },
  {
    name: "One step",
    description: "Part of the reasoning is supplied.",
    example:
      "Retrieval is the attempt to remember. Now explain what spacing adds.",
  },
  {
    name: "Example",
    description: "A similar worked case offers a model.",
    example:
      "Explaining today is an activity; returning tomorrow is timing. Now classify a different routine.",
  },
  {
    name: "Solution",
    description: "The complete explanation is supplied.",
    example:
      "Retrieval is answering before looking. Spacing is returning after a gap. This is instruction; use a fresh task to check independence.",
  },
];
export function HintLadder() {
  const [selected, setSelected] = useState(0);
  const id = useId();
  return (
    <div className="hint-ladder-visual">
      <p className="visual-axis">More of the answer is supplied →</p>
      <div
        className="hint-staircase"
        role="group"
        aria-label="Explore levels of tutor assistance"
      >
        {hints.map((hint, i) => (
          <button
            type="button"
            className={`hint-step hint-step-${i}`}
            key={hint.name}
            aria-pressed={selected === i}
            aria-controls={id}
            onClick={() => setSelected(i)}
          >
            <strong>H{i}</strong>
            <span>{hint.name}</span>
          </button>
        ))}
      </div>
      <div className="visual-detail" id={id} aria-live="polite">
        <p className="eyebrow">
          H{selected} · {hints[selected].name}
        </p>
        <h3>{hints[selected].description}</h3>
        <p>{hints[selected].example}</p>
      </div>
      <noscript>
        <ol>
          {hints.map((h) => (
            <li key={h.name}>
              {h.name}: {h.description}
            </li>
          ))}
        </ol>
      </noscript>
    </div>
  );
}
const dimensions = [
  {
    name: "Definitions",
    concept: "explain" as const,
    task: "State the idea precisely, including its conditions.",
    evidence:
      "Can you give the definition without notes and explain what each condition does?",
  },
  {
    name: "Meaning",
    concept: "explain" as const,
    task: "Explain the idea in your own words.",
    evidence: "Can you give an accurate example and explain why it fits?",
  },
  {
    name: "Reasoning",
    concept: "explain" as const,
    task: "Justify why a claim or step follows.",
    evidence:
      "Can someone check the argument without supplying a missing step?",
  },
  {
    name: "Limits",
    concept: "compare" as const,
    task: "Know where the idea does not apply.",
    evidence: "Can you give a counterexample or identify a missing assumption?",
  },
  {
    name: "Transfer",
    concept: "compare" as const,
    task: "Choose and use the idea in a new situation.",
    evidence:
      "Can you solve a different, unlabeled task and justify your choice?",
  },
  {
    name: "Retention",
    concept: "recall" as const,
    task: "Demonstrate the capability after a delay.",
    evidence:
      "Can you explain and use it later without the previous solution in view?",
  },
];
export function MasteryProfile() {
  const [selected, setSelected] = useState(0);
  const id = useId();
  return (
    <div className="mastery-profile">
      <div
        className="mastery-petals"
        role="group"
        aria-label="Explore six dimensions of learning"
      >
        <div className="mastery-center">
          <strong>Evidence of learning</strong>
          <span>Six views, not one score</span>
        </div>
        {dimensions.map((d, i) => (
          <button
            type="button"
            className={`mastery-petal petal-${i}`}
            data-concept={d.concept}
            key={d.name}
            aria-pressed={i === selected}
            aria-controls={id}
            onClick={() => setSelected(i)}
          >
            <span>0{i + 1}</span>
            <strong>{d.name}</strong>
          </button>
        ))}
      </div>
      <div className="visual-detail" aria-live="polite" id={id}>
        <p className="eyebrow">{dimensions[selected].name}</p>
        <h3>{dimensions[selected].task}</h3>
        <p>{dimensions[selected].evidence}</p>
      </div>
      <noscript>
        <ul>
          {dimensions.map((d) => (
            <li key={d.name}>
              {d.name}: {d.task}
            </li>
          ))}
        </ul>
      </noscript>
    </div>
  );
}
export function MethodIcon({ concept }: { concept: Concept }) {
  return (
    <svg
      className="method-icon"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {concept === "connect" ? (
        <>
          <circle cx="24" cy="24" r="5" />
          <circle cx="8" cy="8" r="3" />
          <circle cx="40" cy="8" r="3" />
          <circle cx="8" cy="40" r="3" />
          <circle cx="40" cy="40" r="3" />
          <path d="m11 11 9 9m8 0 9-9M11 37l9-9m8 0 9 9" />
        </>
      ) : concept === "explain" ? (
        <>
          <path d="M6 7h28v21H17L7 36V7Z" />
          <path d="M21 33v6h13l8 5V22h-4M13 14h14M13 21h10" />
        </>
      ) : concept === "compare" ? (
        <>
          <path d="M5 10h6c10 0 15 28 26 28h6m-8-7 8 7-8 7M5 38h6c10 0 15-28 26-28h6m-8-7 8 7-8 7" />
        </>
      ) : (
        <>
          <rect x="9" y="7" width="31" height="26" rx="4" />
          <path d="M5 15v23h29M3 23v20h26M18 19h13" />
        </>
      )}
    </svg>
  );
}
