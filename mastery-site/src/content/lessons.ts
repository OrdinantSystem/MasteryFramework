import type { Lesson } from "../model";
import {
  prose,
  definition,
  example,
  exercise,
  diagram,
  comparison,
  note,
  caution,
  section,
} from "./helpers";
const sourceNote =
  "Adapted from the project documents and the four supplied video transcripts. Technique rankings and personal anecdotes are not treated as evidence that a method always works. Read the originals in the source library.";
export const lessons: Lesson[] = [
  {
    id: "learning",
    navTitle: "Start here",
    courseId: "learning",
    title: "Understanding is a starting point.",
    summary:
      "Following an explanation, producing one, and using an idea are different things to practise.",
    question: "How can I tell whether I understand something?",
    concept: "explain",
    objectives: [
      "Distinguish recognition from recall.",
      "Try a small attempt before checking.",
      "Use a gap to choose what to study next.",
    ],
    sections: [
      section(
        "recognition",
        "It makes sense. Can you explain it?",
        prose(
          "You read a clear explanation. Each sentence seems reasonable. Later, someone asks you to explain the idea, and you cannot find the words. This is a familiar difference between following someone else’s thinking and producing the thinking yourself.",
          "Reading gives you material to work with. To find out what you can do with it, give yourself a task that requires an answer, a reason, or a decision.",
        ),
        comparison(
          "Three checks, three kinds of evidence",
          ["What you do", "What it shows"],
          [
            [
              "Follow an explanation with notes open",
              "You can follow this explanation with support.",
            ],
            [
              "Explain the idea with notes closed",
              "You can reconstruct at least part of the idea.",
            ],
            [
              "Use the idea in a new situation",
              "You can recognize a relevant use and carry it out.",
            ],
          ],
        ),
      ),
      section(
        "recall",
        "Make a small attempt visible.",
        definition(
          "Active recall",
          "Trying to bring information to mind before looking at the answer. Also called retrieval practice.",
          "recall",
        ),
        prose(
          "Close the explanation and answer a specific question. Then compare your attempt with a reliable answer. The comparison matters: an unanswered gap and an incorrect explanation need attention, even if the attempt felt fluent.",
        ),
        example(
          "Learning the word “spacing”",
          "You have just read that practice can be spread across time.",
          [
            "Close the paragraph and explain spacing in one sentence.",
            "Check whether your sentence mentions a gap between attempts.",
            "If you only wrote “repeat it,” add the missing timing distinction.",
          ],
          "The attempt identifies exactly what needs repairing.",
        ),
      ),
      section(
        "first-attempt",
        "Try it before you move on.",
        exercise(
          "recognition",
          "What is the difference between recognizing an answer and recalling it?",
          "Recognition is identifying an answer when it is available. Recall is producing it before seeing it. An answer that looks familiar does not show that you could have produced it independently.",
          [
            "Mention whether the answer is visible.",
            "Describe what the learner must produce.",
            "Give a concrete study example.",
          ],
        ),
        note(
          "One change is enough",
          "After your next short reading, close it and explain one idea. Check the explanation, then revisit it on another day. You can add other techniques when a specific difficulty calls for them.",
        ),
      ),
    ],
    takeaway:
      "Understanding grows through attempts you can inspect: explain, check, repair, and try again.",
    next: "methods",
    sourceNote,
  },
  {
    id: "methods",
    navTitle: "The four methods",
    courseId: "learning",
    title: "Choose a method for the job.",
    summary:
      "Connect, explain, compare, and recall address different parts of learning.",
    question: "Which activity would address the difficulty I have?",
    objectives: [
      "Describe the job of each technique.",
      "Match an activity to an observed difficulty.",
      "Combine methods without turning them into a ritual.",
    ],
    sections: [
      section(
        "jobs",
        "Start with the difficulty.",
        prose(
          "A study technique is useful because of the thinking it asks you to do. Copying a map, reading an explanation, and looking at a flashcard can all feel productive without requiring you to produce much. Ask what you are trying to improve, then choose an activity that makes that work visible.",
        ),
        comparison(
          "Match the activity to the need",
          ["If you notice…", "Try…"],
          [
            [
              "I know the terms but not how they fit.",
              "Mind mapping: write and explain relationships.",
            ],
            [
              "I can repeat a phrase but cannot explain why.",
              "Feynman technique: teach it in plain language, then check.",
            ],
            [
              "I can do a named problem type but cannot choose a method.",
              "Interleaving: mix related questions and justify the choice.",
            ],
            [
              "It made sense yesterday, but I cannot recall it today.",
              "Retrieval and spacing: attempt without notes, check, and return later.",
            ],
          ],
        ),
      ),
      section(
        "combine",
        "Use the same material in different ways.",
        example(
          "Learning recall, feedback, and spacing",
          "You want to understand how these ideas belong together.",
          [
            "Map: recall can expose a gap; feedback can help correct it.",
            "Explain: teach someone why looking first changes the task.",
            "Compare: decide whether a problem concerns the activity or its timing.",
            "Recall later: explain the distinction tomorrow before checking.",
          ],
          "Each activity contributes a different kind of evidence. You do not need to perform every activity in every session.",
        ),
        diagram(
          "framework-overview",
          "The same goal can require connecting, explaining, comparing, and later recall. Choose the activity that addresses the difficulty you observe.",
        ),
      ),
      section(
        "choose",
        "Make a choice you can justify.",
        exercise(
          "choose-method",
          "You can explain a definition today, but forget it a week later. What would you change first, and why?",
          "Add attempts after a delay. Try explaining the definition without notes on separate days and check the result. A more elaborate map might help relationships, but the observed difficulty here is later recall.",
          [
            "Name the observed difficulty.",
            "Choose an activity that addresses it.",
            "State what result would tell you whether it helped.",
          ],
        ),
      ),
    ],
    takeaway:
      "Choose the thinking you need to practise, then choose the technique.",
    next: "mapping",
    sourceNote,
  },
  {
    id: "mapping",
    navTitle: "Mind mapping",
    courseId: "learning",
    title: "Make the relationships explicit.",
    summary:
      "A mind map becomes useful when its connections say something you can explain and check.",
    question: "How do these ideas fit together?",
    concept: "connect",
    objectives: [
      "Write a relationship as a sentence.",
      "Distinguish a list of associations from an explanation.",
      "Rebuild a small map without copying.",
    ],
    sections: [
      section(
        "meaning",
        "A line should make a claim.",
        definition(
          "Mind mapping",
          "Arranging ideas and making their relationships visible so you can examine, explain, and revise them.",
          "connect",
        ),
        prose(
          "Write a few important ideas. Before joining two of them, finish this sentence: “This idea relates to that one because…” The answer tells you what the line should mean.",
          "A map of “recall → feedback” leaves the relation unstated. “Recall can reveal a gap; feedback helps correct it” gives you a claim to test. The map is a tool for your thinking, not a drawing to perfect.",
        ),
      ),
      section(
        "relationship",
        "Read the map as an explanation.",
        diagram(
          "concept-map",
          "Each connection contains a claim. Read the path as a sentence, then explain why the claim holds.",
        ),
        example(
          "Adding spacing",
          "Your map already connects recall and feedback.",
          [
            "Ask what happens after today’s correction.",
            "Add “spacing” with the relationship “repeat the attempt after a gap.”",
            "Keep the timing separate from the action of recalling.",
          ],
          "A new node earns its place by explaining something the map did not yet show.",
        ),
      ),
      section(
        "make-it",
        "Build, hide, and explain.",
        exercise(
          "map-links",
          "Write two labeled relationships connecting recall, feedback, and spacing. Then explain them without looking.",
          "One possible pair is: “Recall can reveal what I could not remember. Feedback helps correct that gap.” A second is: “Spacing schedules another recall attempt after a gap.” Different wording is fine if the relationships are accurate.",
          [
            "Each link can be read as a meaningful sentence.",
            "The explanation distinguishes action, correction, and timing.",
            "You can explain a link without pointing at the map.",
          ],
        ),
        caution(
          "A neat copy is a reference",
          "Copying can help you inspect someone else’s structure. It does not by itself show that you can explain why the relationships belong there.",
        ),
      ),
    ],
    takeaway: "The learning is in deciding and explaining how ideas connect.",
    next: "feynman",
    sourceNote,
  },
  {
    id: "feynman",
    navTitle: "Feynman technique",
    courseId: "learning",
    title: "Explain the idea in your own words.",
    summary:
      "Teaching a beginner makes missing meanings, reasons, and examples easier to notice.",
    question: "Can I make this idea clear without hiding behind its name?",
    concept: "explain",
    objectives: [
      "Give a plain-language explanation.",
      "Locate the specific part that breaks down.",
      "Check accuracy before simplifying further.",
    ],
    sections: [
      section(
        "explain",
        "Give the words a meaning.",
        definition(
          "The Feynman technique",
          "Explain a small idea simply, identify what you cannot explain, study that part, and try the explanation again.",
          "explain",
        ),
        prose(
          "Imagine a listener who does not know the vocabulary. If you say “use spaced retrieval,” they can reasonably ask what they should actually do. Answering that question forces you to turn the label into an action and a reason.",
          "Put the source aside for your first explanation. Otherwise it is difficult to distinguish your reconstruction from the wording in front of you.",
        ),
      ),
      section(
        "worked-example",
        "Improve one explanation.",
        example(
          "What does spacing mean?",
          "A first attempt says: “Repeat things until they stick.”",
          [
            "Identify what is missing: repetition alone says nothing about a gap.",
            "Try: “After practising an idea, leave a gap before trying again.”",
            "Add an example: “Explain it today, then try tomorrow before opening your notes.”",
            "Check that the explanation separates timing from recall itself.",
          ],
          "Simple language is useful when it preserves the distinction that matters.",
        ),
      ),
      section(
        "repair",
        "Treat hesitation as a question.",
        prose(
          "You might lose a reason, struggle to produce an example, or notice that your example contradicts the definition. Locate that point. Return to the relevant source or ask a specific question, rather than automatically restarting the whole topic.",
          "A fluent explanation can still be wrong. Compare it with a trusted source or knowledgeable feedback. If you use AI, ask it to identify a precise gap and verify important corrections.",
        ),
        diagram(
          "feynman-loop",
          "A gap leads back to the explanation. A reliable explanation leads to a fresh task and a later check; neither branch ends with the tutor doing the attempt for you.",
        ),
        exercise(
          "teach-retrieval",
          "Explain retrieval practice to a beginner. Include an action, an example, and a common mistake.",
          "Try to answer before looking, then check. For example, close the lesson and explain spacing. Looking at the answer first and finding it familiar skips the attempt to retrieve.",
          [
            "Make the action observable.",
            "Use an example that fits the definition.",
            "Explain why the mistake changes the task.",
          ],
        ),
      ),
    ],
    takeaway:
      "Explain, locate the gap, check the missing part, and explain again.",
    next: "interleaving",
    sourceNote,
  },
  {
    id: "interleaving",
    navTitle: "Interleaving",
    courseId: "learning",
    title: "Practise choosing, not only repeating.",
    summary:
      "Mix related question types so you have to decide which idea or method fits.",
    question: "Can I recognize when this method is useful?",
    concept: "compare",
    objectives: [
      "Distinguish blocked practice from mixed practice.",
      "Explain a choice before applying a method.",
      "Use contrasting examples after learning the basics.",
    ],
    sections: [
      section(
        "selection",
        "Remove the label that gives the method away.",
        definition(
          "Interleaving",
          "Mixing related topics or question types during practice, so you practise distinguishing them and selecting an approach.",
          "compare",
        ),
        prose(
          "If every question says “make a mind map,” you practise making maps. You do not have to decide whether a map is what the situation needs. Mixed questions add that decision.",
          "First learn enough about each type to make a reasonable attempt. Randomly switching between unfamiliar subjects can make practice confusing without testing a useful distinction.",
        ),
      ),
      section(
        "patterns",
        "What changes when the questions are mixed?",
        diagram(
          "practice-pattern",
          "A, B, and C are labeled question types. In mixed practice, identify the type and justify the method before answering.",
        ),
        example(
          "Choose a study response",
          "Compare three difficulties rather than repeating the same advice.",
          [
            "Unclear relationships: map and explain the connections.",
            "An explanation with missing reasons: teach it simply and check the gap.",
            "Failure to remember next week: try recall after a delay.",
          ],
          "The choice depends on the difficulty, even though all three situations concern learning.",
        ),
      ),
      section(
        "distinguish",
        "State why the alternative fits less well.",
        exercise(
          "mixed-choice",
          "You can explain an idea today but forget it after a week. Would you begin with a larger map or delayed recall? Explain your choice.",
          "Delayed recall directly checks the observed problem: remembering after time has passed. A larger map could help if relationships were unclear, but that is not the difficulty described.",
          [
            "Name the feature that determines your choice.",
            "Connect the feature to the chosen method.",
            "Say when the alternative would be useful.",
          ],
        ),
      ),
    ],
    takeaway:
      "A successful solution includes selecting an appropriate method without a label naming it.",
    next: "retrieval",
    sourceNote,
  },
  {
    id: "retrieval",
    navTitle: "Retrieval & spacing",
    courseId: "learning",
    title: "Recall it. Check it. Return later.",
    summary:
      "Retrieval is what you do; spacing is when you do it. Combine them deliberately.",
    question: "What can I bring to mind after the explanation is gone?",
    concept: "recall",
    objectives: [
      "Separate retrieval from spacing.",
      "Write a question that requires a specific answer.",
      "Use feedback and a later attempt.",
    ],
    sections: [
      section(
        "two-ideas",
        "Separate the action from its timing.",
        definition(
          "Retrieval practice",
          "Trying to produce an answer before seeing it.",
          "recall",
        ),
        definition(
          "Spaced practice",
          "Returning to practice after a gap instead of concentrating all attempts in one sitting.",
          "recall",
        ),
        prose(
          "You can retrieve repeatedly in one sitting, or reread on separate days. The first includes retrieval; the second includes spacing. To combine both, try answering without notes on separate days.",
          "A flashcard is one way to prompt retrieval. Explaining a concept, reconstructing a proof, or solving a problem without notes can also require retrieval.",
        ),
      ),
      section(
        "loop",
        "The attempt and the check belong together.",
        diagram(
          "retrieval-cycle",
          "Make an attempt before checking. Use what was missing to choose the next practice task, then revisit after a gap.",
        ),
        example(
          "A useful card about spacing",
          "A vague card says “Spacing?” and leaves you unsure what counts as an answer.",
          [
            "Ask: “How does spacing differ from retrieval?”",
            "Answer without looking.",
            "Check that your answer distinguishes timing from activity.",
            "Try again on another day. Adjust the gap based on how reliably you can answer.",
          ],
          "A precise question and a clear criterion make the feedback useful.",
        ),
      ),
      section(
        "limits",
        "A recalled definition is one piece of evidence.",
        prose(
          "Knowing a definition does not automatically show that you can use it in an unfamiliar problem. Combine recall of important knowledge with explanation and application. Review intervals are starting choices, not a universal formula.",
        ),
        diagram(
          "spacing-timeline",
          "Illustrative review points, not fixed optimal intervals. Adjust the next gap using your results, workload, and deadlines.",
        ),
        exercise(
          "retrieval-spacing",
          "Someone rereads notes every evening. Which part of spaced retrieval is present, and which part is missing?",
          "The practice is spread over time, so spacing is present. Rereading does not require producing the information before seeing it, so retrieval has not yet been demonstrated. Add a closed-notes attempt before checking.",
          [
            "Identify the timing.",
            "Identify whether an answer must be produced.",
            "Suggest one concrete change.",
          ],
        ),
      ),
    ],
    takeaway:
      "Try before looking, correct what is missing, and check again after a gap.",
    next: "cycle",
    sourceNote,
  },
  {
    id: "bloom",
    navTitle: "Bloom’s taxonomy",
    courseId: "learning",
    title: "Ask different things of the same idea.",
    summary:
      "Bloom’s taxonomy is a vocabulary for thinking tasks, from recalling a definition to designing something new.",
    question: "What kind of thinking does this question require?",
    objectives: [
      "Recognize six kinds of cognitive task.",
      "Write more than one kind of question about a concept.",
      "Keep basic knowledge available while asking richer questions.",
    ],
    sections: [
      section(
        "lens",
        "Use the taxonomy as a question-design lens.",
        prose(
          "A taxonomy groups things. Bloom’s revised taxonomy groups types of cognitive task. It helps you notice the difference between recalling a definition, using it, and evaluating a decision made with it.",
          "These categories are not fixed kinds of learner, mandatory stages, or a score for how intelligent a task is. A complicated question can still depend on an exact definition.",
        ),
        diagram(
          "bloom",
          "Each task uses the same idea—spacing—so you can compare what the question asks you to do.",
        ),
      ),
      section(
        "questions",
        "Change the question, keep the concept.",
        example(
          "From a definition to a decision",
          "Your topic is spaced practice.",
          [
            "Recall: define spacing without looking.",
            "Apply: schedule two later attempts for a concept you are studying.",
            "Evaluate: a learner forgets after a week; justify one change to the review routine.",
          ],
          "The questions require different evidence, even though their topic is the same.",
        ),
      ),
      section(
        "design",
        "Write a pair of questions.",
        exercise(
          "bloom-pair",
          "Write one recall question and one comparison or evaluation question about retrieval practice.",
          "Recall: “What is retrieval practice?” Comparison: “How does retrieval differ from rereading?” Evaluation: “Which activity would you choose to check independent recall, and why?”",
          [
            "Keep the concept the same.",
            "Make the requested action different.",
            "Say what an adequate answer must contain.",
          ],
        ),
      ),
    ],
    takeaway: "Use the task you want to assess to choose the question.",
    next: "cycle",
    sourceNote,
  },
  {
    id: "cycle",
    navTitle: "A study session",
    courseId: "learning",
    title: "Give a study session a clear purpose.",
    summary:
      "Move from a small goal to an independent attempt, then use the result to decide what comes next.",
    question: "What should I do in my next study session?",
    objectives: [
      "Set a capability rather than a reading quota.",
      "Choose a task that can show that capability.",
      "Use feedback to plan a repair or later check.",
    ],
    sections: [
      section(
        "goal",
        "Describe something you want to do.",
        prose(
          "“Study learning techniques” is a topic. “Explain the difference between retrieval and spacing, and choose an activity for a case” is a capability you can check. Keep the goal small enough to attempt in the time available.",
          "Try a short question first if you have enough prior knowledge. If the basics are missing, learn them or study a worked example. An initial attempt is a diagnosis, not a demand to discover everything unaided.",
        ),
        diagram(
          "learning-cycle",
          "The result of an attempt determines the next step. Correct a gap and retry; after reliable success, return later with a fresh task.",
        ),
      ),
      section(
        "session",
        "Work through a small session.",
        example(
          "Twenty minutes on retrieval and spacing",
          "You want to explain the distinction and apply it.",
          [
            "Try explaining both terms without notes.",
            "Read the part that addresses what was missing.",
            "Explain the distinction and apply it to two study routines.",
            "Check the reasoning, then try a different routine without hints.",
            "Record the remaining gap and choose a later check.",
          ],
          "Time spent reading is part of the session; the independent task provides evidence about the goal.",
        ),
      ),
      section(
        "plan",
        "Write a plan with an observable end.",
        exercise(
          "session-plan",
          "Choose one learning idea. Write a goal, an independent task, and a later check.",
          "For spacing: goal—distinguish timing from activity; task—classify two routines and justify the classification without notes; later check—explain the distinction tomorrow using a different example.",
          [
            "The goal describes a capability.",
            "The task requires producing or using knowledge.",
            "The later check can reveal forgetting or a fragile distinction.",
          ],
        ),
      ),
    ],
    takeaway:
      "A session ends with evidence and a next decision, not only a finished reading.",
    next: "ai",
    sourceNote,
  },
  {
    id: "ai",
    navTitle: "Learning with AI",
    courseId: "learning",
    title: "Use a tutor to support your thinking.",
    summary:
      "Ask AI for appropriate teaching, specific feedback, and controlled hints while keeping independent attempts visible.",
    question: "How can AI help without doing the learning for me?",
    objectives: [
      "Separate teaching from assessment.",
      "Ask for a smaller hint when appropriate.",
      "Verify corrections and retry independently.",
    ],
    sections: [
      section(
        "roles",
        "Let the tutor teach. Keep your attempt yours.",
        prose(
          "AI can explain a prerequisite, generate a practice question, compare an argument with a source, or ask a useful follow-up. These roles can support learning. If the tutor supplies the reasoning before you try, however, the resulting answer does not show what you can do independently.",
          "Decide what the next interaction is for. If you need instruction, ask for it. If you want evidence of independent ability, make the attempt before receiving a solution.",
        ),
        comparison(
          "Ask for the kind of help you need",
          ["Purpose", "A useful request"],
          [
            [
              "Learn a missing prerequisite",
              "“Explain this term with one example, then ask me a question.”",
            ],
            [
              "Unstick an attempt",
              "“Give me one strategic question without revealing the next step.”",
            ],
            [
              "Check reasoning",
              "“Identify the first unsupported claim and explain why it needs work.”",
            ],
            [
              "Test the repair",
              "“Give me a different question to try without hints.”",
            ],
          ],
        ),
      ),
      section(
        "support",
        "Make the amount of help visible.",
        diagram(
          "hint-ladder",
          "These labels describe assistance, not a learner’s worth. More help is appropriate when it enables learning; record it when interpreting performance.",
        ),
        caution(
          "Check the tutor’s correction",
          "An AI response can be confident and incorrect. Compare important claims with your source, work through the steps, and ask for clarification when a correction is unsupported.",
        ),
      ),
      section(
        "retry",
        "Turn feedback into another attempt.",
        example(
          "A tutor points out a missing distinction",
          "You wrote that retrieval and spacing mean the same thing.",
          [
            "Ask which claim is wrong and why.",
            "Compare the correction with the definitions.",
            "Close the tutor’s answer and explain the distinction yourself.",
            "Try classifying a different routine without help.",
          ],
          "Agreeing with the correction is followed by a task that tests whether you can use it.",
        ),
        exercise(
          "tutor-request",
          "Write a request for feedback on your explanation that does not ask the tutor to rewrite everything.",
          "“Check my explanation for accuracy. Identify the first missing or incorrect distinction, give a reason, and ask me to repair it before showing a complete model answer.”",
          [
            "Ask for a specific diagnosis.",
            "Preserve an opportunity to repair your own work.",
            "Include a fresh independent check.",
          ],
        ),
      ),
    ],
    takeaway:
      "Use assistance to build capability, then test that capability with the assistance removed.",
    next: "mastery",
    sourceNote,
  },
  {
    id: "mastery",
    navTitle: "Evidence of learning",
    courseId: "learning",
    title: "Look for evidence of learning.",
    summary:
      "Separate what you can explain, use, and remember from how fluent or familiar the session felt.",
    question: "What can I demonstrate, with how much help, and after how long?",
    objectives: [
      "Describe evidence instead of giving a vague score.",
      "Record assistance when interpreting an answer.",
      "Check transfer and later recall.",
    ],
    sections: [
      section(
        "profile",
        "Mastery has several dimensions.",
        prose(
          "You may state a definition accurately but struggle to explain its meaning. You may solve a familiar task but fail to choose a method for a new one. Keep these observations separate so the next practice task addresses the actual gap.",
        ),
        comparison(
          "Ask for the evidence you need",
          ["Dimension", "A task that can reveal it"],
          [
            ["Definition", "State the idea precisely without cues."],
            [
              "Meaning and reasoning",
              "Explain why it works and give an example.",
            ],
            ["Limits", "Explain a situation in which it does not apply."],
            ["Transfer", "Choose and use it in an unfamiliar task."],
            ["Retention", "Demonstrate it again after a delay."],
          ],
        ),
        diagram(
          "mastery-profile",
          "Select a dimension to see a task that could reveal it. The shape is a map of questions to ask, not a score or a claim that every dimension has been demonstrated.",
        ),
      ),
      section(
        "record",
        "Describe the performance honestly.",
        example(
          "A small evidence note",
          "You correctly explained spacing after a tutor named the missing distinction.",
          [
            "Record the task: explain spacing versus retrieval.",
            "Record assistance: the tutor named the distinction.",
            "Record the next check: explain a new example without that cue tomorrow.",
          ],
          "This is useful progress, with a clear boundary on what has been demonstrated.",
        ),
        caution(
          "Confidence is another observation",
          "How certain you feel can help you notice surprises, but it does not replace checking whether the answer and reasoning are correct.",
        ),
      ),
      section(
        "check",
        "Choose the next test.",
        exercise(
          "evidence",
          "You completed three nearly identical problems with a worked example open. What would provide stronger evidence of independent transfer?",
          "Try a different, unlabeled problem without the worked example, explain why the method fits, and check the reasoning. A later fresh problem would also check whether the capability survives a delay.",
          [
            "Change the surface features or context.",
            "Remove the method cue and worked solution.",
            "Check both the choice and the reasoning.",
          ],
        ),
      ),
    ],
    takeaway:
      "Record what the attempt shows, what support it used, and what remains to check.",
    next: "revision",
    sourceNote,
  },
  {
    id: "study-habits",
    navTitle: "Other study habits",
    courseId: "learning",
    title: "Turn familiar habits into active work.",
    summary:
      "Rereading, highlighting, and notes can support learning when they lead to an answer, a decision, or a checked explanation.",
    question: "What thinking does this study habit actually require?",
    objectives: [
      "Identify a useful purpose for reading and notes.",
      "Add a generative attempt to a familiar habit.",
      "Check the result instead of only tracking completion.",
    ],
    sections: [
      section(
        "purpose",
        "Give the habit a job.",
        prose(
          "Rereading can help you study a missing prerequisite. Highlighting can mark a passage you need to revisit. Notes can preserve a question or useful explanation. The important question is what happens next.",
          "Finishing a page, coloring a paragraph, or filling a notebook does not by itself tell you what you can explain or use. Add a task that makes that capability visible.",
        ),
        comparison(
          "From preparation to practice",
          ["A familiar habit", "An active follow-up"],
          [
            [
              "Highlighting a definition",
              "Close the text and explain why each condition matters.",
            ],
            [
              "Rereading a solution",
              "Hide it and reconstruct the reasoning; then try a fresh problem.",
            ],
            [
              "Writing Cornell notes",
              "Use the cues as questions before uncovering the notes.",
            ],
            [
              "Blurting everything you remember",
              "Compare with a source and repair specific omissions or errors.",
            ],
          ],
        ),
      ),
      section(
        "change",
        "Change one part of the routine.",
        example(
          "After highlighting a paragraph",
          "You highlighted the distinction between retrieval and spacing.",
          [
            "Turn the distinction into a question.",
            "Answer it with the page closed.",
            "Check the answer and write only the missing distinction.",
            "Try a new example later.",
          ],
          "The highlight locates useful material; the attempt checks what you can do with it.",
        ),
      ),
      section(
        "try",
        "Make the change concrete.",
        exercise(
          "habit",
          "Choose a study habit you already use. What will you produce, and how will you check it?",
          "After rereading a short explanation, close it and explain the main claim with an example. Check the claim against the source and verify that the example satisfies the definition.",
          [
            "Specify something observable to produce.",
            "Name a way to check accuracy.",
            "Choose a next action based on the result.",
          ],
        ),
      ),
    ],
    takeaway:
      "Keep the preparation that helps, and add an attempt that reveals learning.",
    next: "cycle",
    sourceNote,
  },
];
