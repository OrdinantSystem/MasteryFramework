import type { Lesson } from "../model";
import {
  prose,
  definition,
  example,
  exercise,
  comparison,
  note,
  section,
} from "./helpers";
export const subjectExamples: Lesson[] = [
  {
    id: "linear-combinations",
    navTitle: "Linear combinations",
    courseId: "subject-examples",
    title: "What does a linear combination mean?",
    summary:
      "A worked mini-lesson: connect the definition, a calculation, and the question of what vectors can reach.",
    question: "What can I build by scaling and adding these vectors?",
    concept: "connect",
    objectives: [
      "Read a linear combination as an operation.",
      "Construct a target vector from two given vectors.",
      "Explain why some targets cannot be reached.",
    ],
    sections: [
      section(
        "meaning",
        "Start with two operations.",
        definition(
          "Linear combination",
          "A sum of scalar multiples of given vectors. For vectors u and v, a linear combination has the form a·u + b·v, where a and b are scalars.",
          "connect",
        ),
        prose(
          "In the real plane, a scalar is a real number. Multiplying by a scalar scales the length by the scalar’s absolute value. A negative scalar reverses a nonzero vector’s direction; zero gives the zero vector. Adding vectors combines their contributions.",
          "The coefficients a and b are choices. The vectors u and v are the ingredients you are given. Asking whether a target is a linear combination means asking whether some choices of coefficients produce it.",
        ),
      ),
      section(
        "work-through",
        "Build a target from the ingredients.",
        example(
          "Reach (3, 2)",
          "Let u = (1, 0) and v = (0, 1). We want a·u + b·v = (3, 2).",
          [
            "Scaling gives a·u = (a, 0) and b·v = (0, b).",
            "Adding gives a·u + b·v = (a, b).",
            "Choose a = 3 and b = 2. Then 3·u + 2·v = (3, 2).",
          ],
          "The algebra describes a construction: three horizontal units and two vertical units.",
        ),
        comparison(
          "Change the ingredients",
          ["Given vectors", "What combinations can reach"],
          [
            ["(1, 0) and (0, 1)", "Any vector (a, b) in the real plane."],
            ["(1, 0) and (2, 0)", "Only vectors with second coordinate zero."],
          ],
        ),
      ),
      section(
        "attempt",
        "Remove the example and test the meaning.",
        exercise(
          "linear-target",
          "Let u = (1, 1) and v = (1, −1). Express (4, 2) as a linear combination of u and v. Explain your coefficients.",
          "We need a + b = 4 and a − b = 2. Adding the equations gives 2a = 6, so a = 3 and b = 1. Check: 3(1, 1) + 1(1, −1) = (4, 2).",
          [
            "Translate each coordinate into an equation.",
            "Solve for the coefficients.",
            "Substitute to check the target.",
          ],
        ),
        exercise(
          "linear-boundary",
          "Why can no linear combination of (1, 0) and (2, 0) equal (0, 1)?",
          "Every combination is a(1, 0) + b(2, 0) = (a + 2b, 0). Its second coordinate is always zero, so it cannot equal a vector whose second coordinate is one.",
          [
            "Describe every possible combination.",
            "Identify the coordinate that cannot change.",
            "Use that constraint to rule out the target.",
          ],
        ),
      ),
      section(
        "transfer",
        "Use the learning methods on the mathematics.",
        note(
          "The same components, a different subject",
          "Map the relationship between scaling, addition, and reachability. Explain the definition without symbols first, then restore the symbols precisely. Compare a reachable target with an unreachable one. Tomorrow, solve a fresh target without the worked example.",
        ),
      ),
    ],
    takeaway:
      "A linear combination is a construction with chosen coefficients. Check what the given vectors allow you to build.",
    next: "limits",
    sourceNote:
      "Original illustrative mini-lesson for the component system. This demonstrates a reusable course format; it is not a complete linear algebra course.",
  },
  {
    id: "limits",
    navTitle: "Sequence limits",
    courseId: "subject-examples",
    title: "Make “gets close” precise.",
    summary:
      "A worked mini-lesson: read the definition of a sequence limit as a promise you must justify.",
    question: "What does it mean for a sequence to approach a limit?",
    concept: "explain",
    objectives: [
      "Explain the roles of ε and N.",
      "Read the order of the quantifiers.",
      "Verify a simple limit using an explicit bound.",
    ],
    sections: [
      section(
        "promise",
        "Any requested tolerance, eventually.",
        definition(
          "Convergence of a real sequence",
          "A sequence aₙ converges to L if, for every ε > 0, there exists an integer N such that every n ≥ N satisfies |aₙ − L| < ε.",
          "explain",
        ),
        prose(
          "Think of ε as a requested error tolerance around L. You must find a point N after which every term stays within that tolerance. The word “every” matters: one close term does not establish convergence.",
          "The order matters too. A tolerance is chosen first. You may then choose N depending on that tolerance. The same N does not have to work for every tolerance.",
        ),
      ),
      section(
        "proof",
        "Turn the promise into an inequality.",
        example(
          "Show that aₙ = 1/n approaches 0",
          "Given any ε > 0, we need 1/n < ε for all sufficiently large n.",
          [
            "Choose an integer N > 1/ε. Such an integer exists.",
            "For every n ≥ N, we have 1/n ≤ 1/N.",
            "Since N > 1/ε, we have 1/N < ε.",
            "Therefore |1/n − 0| = 1/n < ε for all n ≥ N.",
          ],
          "We supplied a choice of N for an arbitrary tolerance and checked every later term.",
        ),
      ),
      section(
        "contrast",
        "Find the missing condition.",
        comparison(
          "Closeness versus convergence",
          ["Observation", "What it establishes"],
          [
            ["A single term is close to L.", "That term meets one tolerance."],
            [
              "Some later terms are close to L.",
              "A subsequence may approach L; the full sequence may still fail.",
            ],
            [
              "For any tolerance, all sufficiently late terms stay close.",
              "This is the condition the convergence definition requires.",
            ],
          ],
        ),
        exercise(
          "limit-counterexample",
          "The sequence aₙ = (−1)ⁿ equals 1 infinitely often. Why does that not show convergence to 1?",
          "The terms also equal −1 infinitely often. Choose ε = 1. For any proposed N there is an odd n ≥ N with |aₙ − 1| = 2, so not every later term lies within the tolerance.",
          [
            "Choose a specific positive tolerance.",
            "Explain why every proposed cutoff fails.",
            "Use the requirement on all sufficiently late terms.",
          ],
        ),
      ),
      section(
        "later",
        "Reconstruct before consulting the proof.",
        exercise(
          "limit-transfer",
          "Show that aₙ = 2/n approaches 0. Choose an explicit condition on N and justify it.",
          "Given ε > 0, choose an integer N > 2/ε. For all n ≥ N, |2/n| ≤ 2/N < ε. The cutoff depends on the requested tolerance.",
          [
            "Begin with arbitrary ε > 0.",
            "Choose N using that tolerance.",
            "Check the inequality for every n ≥ N.",
          ],
        ),
        note(
          "A later check",
          "Tomorrow, state the definition without notes, then verify 3/n → 0. Ask a tutor to inspect the order of your quantifiers before asking for a complete rewritten proof.",
        ),
      ),
    ],
    takeaway:
      "Convergence requires a guarantee for every later term at every requested tolerance.",
    next: "revision",
    sourceNote:
      "Original illustrative mini-lesson for the component system. This demonstrates a reusable course format; it is not a complete analysis course.",
  },
];
