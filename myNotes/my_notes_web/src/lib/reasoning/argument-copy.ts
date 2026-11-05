import type {Locale} from '../i18n';
export const argumentCopy={
 "en": {
  "titles": {
   "appeals": "Judge the inference before revealing",
   "xray": "The argument under an X-ray",
   "countermodel": "Can the conclusion fail?",
   "only": "What changes when we say “only”?",
   "practice": "Can you separate truth from validity?"
  },
  "reset": "Reset",
  "reveal": "Reveal explanation",
  "hide": "Hide explanation",
  "yes": "Yes",
  "no": "No",
  "valid": "Valid",
  "invalid": "Invalid",
  "question": "Does it logically follow?",
  "argument": "Argument",
  "modes": [
   "Words",
   "Structure",
   "Trace an element"
  ],
  "appeals": [
   [
    "All late appeals are rejected.",
    "Maya’s appeal is late.",
    "Maya’s appeal is rejected."
   ],
   [
    "All on-time appeals are reviewed.",
    "Daniel’s appeal is on time.",
    "Daniel’s appeal is reviewed."
   ]
  ],
  "practice": [
   [
    "All penguins are robots.",
    "All robots are machines.",
    "Therefore, all penguins are machines."
   ],
   [
    "All squares are rectangles.",
    "All squares have four sides.",
    "Therefore, all rectangles have four sides."
   ]
  ],
  "appealTitle": "Both inferences are valid.",
  "appealExplanation": "If each stated rule is true and the corresponding student satisfies its condition, the stated consequence follows. That does not establish that the rules are real or fair.",
  "matches": "Your choices match these logical forms.",
  "compare": "Compare your choices with the explanation below.",
  "unanswered": "You can compare both logical forms even if you have not selected both answers.",
  "practiceTitles": [
   "A is valid but unsound.",
   "B has an invalid form, although its conclusion is true."
  ],
  "practiceExplanations": [
   "The first premise is false, but the inference is a valid chain of set inclusions. If all penguins were robots and all robots were machines, all penguins would necessarily be machines.",
   "The premises place squares inside both the rectangle and four-sided-shape collections. By themselves, they don’t establish that all rectangles belong to the latter collection. The conclusion is true because of what rectangles are, but the stated inferential pattern doesn’t prove it."
  ],
  "categories": [
   [
    "Cats",
    "Mammals",
    "Animals"
   ],
   [
    "Cats",
    "Bicycles",
    "Vehicles"
   ]
  ],
  "conditionalCaption": "The relationships shown are the ones required if the premises are true.",
  "trace": "Choose any element x in A. The same element must be in B and then C. This is an arbitrary element, not a sample of several cases.",
  "nestedCaption": "Every element of A belongs to B, and every element of B belongs to C. Therefore every element of A belongs to C.",
  "counterAction": "Find counterexample",
  "counterInitial": "The premises place A inside the overlap of B and C. They do not force the entire set B to be inside C. Can you find an arrangement that makes the conclusion false?",
  "counterFound": "Counterexample found.",
  "counterExplanation": "In this abstract arrangement, some member of B is outside C, even though A remains entirely inside both. Both premises hold, but B ⊆ C is false.",
  "counterLabels": [
   "A: Poodles",
   "B: Dogs",
   "C: Mammals"
  ],
  "counterAria": "Two overlapping sets B and C contain A in their intersection. A possible element x lies in B outside C.",
  "all": "All",
  "only": "Only",
  "onTime": "On time",
  "reviewed": "Reviewed",
  "policies": [
   "All on-time appeals are reviewed.",
   "Only on-time appeals are reviewed."
  ],
  "policyRoles": [
   "A is sufficient for B",
   "A is necessary for B"
  ],
  "policyExplanations": [
   "Submitting on time guarantees review, but late appeals might also be reviewed.",
   "Any reviewed appeal must have been on time, but not every on-time appeal is necessarily reviewed."
  ],
  "structureTitle": "Two stories become one structure",
  "stories": [
   [
    "Maya",
    "If late, rejected",
    "Late",
    "Rejected"
   ],
   [
    "Daniel",
    "If on time, reviewed",
    "On time",
    "Reviewed"
   ]
  ],
  "modus": "A valid inference pattern: modus ponens",
  "dimensionsTitle": "Two independent dimensions",
  "dimensionsNote": "The four combinations are logical possibilities, not experimental performance data.",
  "dimensions": [
   [
    "Valid",
    "Believable conclusion",
    "Cats are animals."
   ],
   [
    "Valid",
    "Unbelievable conclusion",
    "Cats are vehicles."
   ],
   [
    "Invalid",
    "Believable conclusion",
    "Dogs are mammals."
   ],
   [
    "Invalid",
    "Unbelievable conclusion",
    "All triangles have equal sides, inferred merely from facts about equilateral triangles."
   ]
  ],
  "twoPass": "A two-pass method",
  "passes": [
   "Pass 1 — Test the inference",
   "Pass 2 — Test the premises"
  ],
  "passCopy": [
   "Temporarily suppose that all the stated premises are true. Can you find a situation in which the conclusion would nevertheless be false?",
   "Now return to reality. Is the university’s rule genuine? Was Maya actually late? Have the relevant exceptions or qualifications been represented accurately?"
  ],
  "inferenceValid": "The inference is valid.",
  "sound": "Sound argument",
  "soundFormula": "Validity + True premises",
  "soundCaption": "If both conditions hold, the conclusion must be true."
 },
 "de": {
  "titles": {
   "appeals": "Beurteile den Schluss vor dem Aufdecken",
   "xray": "Das Argument unter dem Röntgenblick",
   "countermodel": "Kann die Konklusion falsch sein?",
   "only": "Was ändert sich durch das Wort „nur“?",
   "practice": "Kannst du Wahrheit und Gültigkeit trennen?"
  },
  "reset": "Zurücksetzen",
  "reveal": "Erklärung aufdecken",
  "hide": "Erklärung ausblenden",
  "yes": "Ja",
  "no": "Nein",
  "valid": "Gültig",
  "invalid": "Ungültig",
  "question": "Folgt das logisch daraus?",
  "argument": "Argument",
  "modes": [
   "Wörter",
   "Struktur",
   "Ein Element verfolgen"
  ],
  "appeals": [
   [
    "Alle verspäteten Einsprüche werden abgelehnt.",
    "Mayas Einspruch ist verspätet.",
    "Mayas Einspruch wird abgelehnt."
   ],
   [
    "Alle fristgerechten Einsprüche werden geprüft.",
    "Daniels Einspruch ist fristgerecht.",
    "Daniels Einspruch wird geprüft."
   ]
  ],
  "practice": [
   [
    "Alle Pinguine sind Roboter.",
    "Alle Roboter sind Maschinen.",
    "Also sind alle Pinguine Maschinen."
   ],
   [
    "Alle Quadrate sind Rechtecke.",
    "Alle Quadrate haben vier Seiten.",
    "Also haben alle Rechtecke vier Seiten."
   ]
  ],
  "appealTitle": "Beide Schlüsse sind gültig.",
  "appealExplanation": "Wenn die jeweilige Regel wahr ist und der betreffende Student ihre Bedingung erfüllt, folgt die genannte Konsequenz. Das zeigt nicht, dass die Regeln tatsächlich gelten oder fair sind.",
  "matches": "Deine Antworten stimmen mit diesen logischen Formen überein.",
  "compare": "Vergleiche deine Antworten mit der folgenden Erklärung.",
  "unanswered": "Du kannst beide logischen Formen auch vergleichen, ohne beide Antworten ausgewählt zu haben.",
  "practiceTitles": [
   "A ist gültig, aber nicht schlüssig.",
   "B hat eine ungültige Form, obwohl seine Konklusion wahr ist."
  ],
  "practiceExplanations": [
   "Die erste Prämisse ist falsch, aber der Schluss ist eine gültige Kette von Mengeninklusionen. Wären alle Pinguine Roboter und alle Roboter Maschinen, dann wären notwendigerweise alle Pinguine Maschinen.",
   "Die Prämissen ordnen Quadrate sowohl der Menge der Rechtecke als auch der Menge der vierseitigen Figuren zu. Für sich genommen zeigen sie nicht, dass alle Rechtecke zur zweiten Menge gehören. Die Konklusion ist aufgrund der Eigenschaften von Rechtecken wahr, aber das angegebene Schlussmuster beweist sie nicht."
  ],
  "categories": [
   [
    "Katzen",
    "Säugetiere",
    "Tiere"
   ],
   [
    "Katzen",
    "Fahrräder",
    "Fahrzeuge"
   ]
  ],
  "conditionalCaption": "Gezeigt werden die Beziehungen, die gelten müssen, wenn die Prämissen wahr sind.",
  "trace": "Wähle ein beliebiges Element x aus A. Dasselbe Element muss zu B und dann zu C gehören. Es ist ein beliebiges Element, keine Stichprobe mehrerer Fälle.",
  "nestedCaption": "Jedes Element von A gehört zu B, und jedes Element von B gehört zu C. Also gehört jedes Element von A zu C.",
  "counterAction": "Gegenbeispiel finden",
  "counterInitial": "Die Prämissen legen A in den Schnitt von B und C. Sie erzwingen nicht, dass ganz B in C liegt. Findest du eine Anordnung, in der die Konklusion falsch ist?",
  "counterFound": "Gegenbeispiel gefunden.",
  "counterExplanation": "In dieser abstrakten Anordnung liegt ein Element von B außerhalb von C, obwohl A vollständig in beiden Mengen bleibt. Beide Prämissen gelten, aber B ⊆ C ist falsch.",
  "counterLabels": [
   "A: Pudel",
   "B: Hunde",
   "C: Säugetiere"
  ],
  "counterAria": "Zwei überlappende Mengen B und C enthalten A in ihrem Schnitt. Ein mögliches Element x liegt in B außerhalb von C.",
  "all": "Alle",
  "only": "Nur",
  "onTime": "Fristgerecht",
  "reviewed": "Geprüft",
  "policies": [
   "Alle fristgerechten Einsprüche werden geprüft.",
   "Nur fristgerechte Einsprüche werden geprüft."
  ],
  "policyRoles": [
   "A ist hinreichend für B",
   "A ist notwendig für B"
  ],
  "policyExplanations": [
   "Fristgerechtes Einreichen garantiert die Prüfung; verspätete Einsprüche könnten aber ebenfalls geprüft werden.",
   "Jeder geprüfte Einspruch muss fristgerecht sein; nicht jeder fristgerechte Einspruch wird jedoch notwendigerweise geprüft."
  ],
  "structureTitle": "Zwei Geschichten werden zu einer Struktur",
  "stories": [
   [
    "Maya",
    "Wenn verspätet, dann abgelehnt",
    "Verspätet",
    "Abgelehnt"
   ],
   [
    "Daniel",
    "Wenn fristgerecht, dann geprüft",
    "Fristgerecht",
    "Geprüft"
   ]
  ],
  "modus": "Ein gültiges Schlussmuster: Modus ponens",
  "dimensionsTitle": "Zwei unabhängige Dimensionen",
  "dimensionsNote": "Die vier Kombinationen sind logische Möglichkeiten, keine experimentellen Leistungsdaten.",
  "dimensions": [
   [
    "Gültig",
    "Glaubhafte Konklusion",
    "Katzen sind Tiere."
   ],
   [
    "Gültig",
    "Unglaubhafte Konklusion",
    "Katzen sind Fahrzeuge."
   ],
   [
    "Ungültig",
    "Glaubhafte Konklusion",
    "Hunde sind Säugetiere."
   ],
   [
    "Ungültig",
    "Unglaubhafte Konklusion",
    "Alle Dreiecke haben gleich lange Seiten, geschlossen allein aus Aussagen über gleichseitige Dreiecke."
   ]
  ],
  "twoPass": "Eine Methode in zwei Durchgängen",
  "passes": [
   "Durchgang 1 — Den Schluss prüfen",
   "Durchgang 2 — Die Prämissen prüfen"
  ],
  "passCopy": [
   "Nimm vorübergehend an, dass alle angegebenen Prämissen wahr sind. Findest du eine Situation, in der die Konklusion dennoch falsch wäre?",
   "Kehre nun zur Wirklichkeit zurück. Gilt die Regel der Universität tatsächlich? War Maya wirklich zu spät? Wurden die relevanten Ausnahmen oder Einschränkungen korrekt berücksichtigt?"
  ],
  "inferenceValid": "Der Schluss ist gültig.",
  "sound": "Schlüssiges Argument",
  "soundFormula": "Gültigkeit + Wahre Prämissen",
  "soundCaption": "Sind beide Bedingungen erfüllt, muss die Konklusion wahr sein."
 }
} as const;
export const argumentText=(locale:Locale)=>argumentCopy[locale];
