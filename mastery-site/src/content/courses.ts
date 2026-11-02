import type { Course } from "../model";
export const courses: Course[] = [
  {
    id: "learning",
    title: "Learning how to learn",
    description:
      "Build understanding, practise independently, and remember later.",
    groups: [
      {
        title: "Begin with the foundations",
        lessons: ["learning", "methods", "bloom"],
      },
      {
        title: "Learn the techniques",
        lessons: [
          "mapping",
          "feynman",
          "interleaving",
          "retrieval",
          "study-habits",
        ],
      },
      { title: "Put them into practice", lessons: ["cycle", "ai", "mastery"] },
    ],
  },
  {
    id: "subject-examples",
    title: "The method in a subject",
    description:
      "Two worked mini-lessons show how the same teaching components support mathematical ideas. These are examples, not complete courses.",
    groups: [
      {
        title: "Worked subject examples",
        lessons: ["linear-combinations", "limits"],
      },
    ],
  },
];
