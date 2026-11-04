import type { Locale } from "../i18n";
const en = {
  combinationTitle: "Build a vector. Change the context.",
  rankTitle: "Make two directions become one.",
  combinationPrompt:
    "Can you reach $T = {target}$? Move the vector tips or change a and b. Then try the same target with dependent directions.",
  rankPrompt:
    "Make the columns dependent without setting v to zero. Predict what happens to the image, then move the blue vector.",
  independent: "Independent directions",
  dependent: "Same line",
  parallelogram: "Parallelogram",
  chain: "Head to tail",
  context: "Context",
  view: "View",
  drag: "Drag the highlighted tips. Arrow keys move a focused tip; Shift makes a larger step. The numeric inputs provide the same controls.",
  output: "Move the sum w",
  first: "Scale the first vector a·u",
  second: "Scale the second vector b·v",
  column: "Move the second column v",
  check: "Check this configuration",
  reset: "Reset",
  explain: "Why does this happen?",
  coefficientA: "Coefficient a",
  coefficientB: "Coefficient b",
  columnX: "Second column x",
  columnY: "Second column y",
  sum: "Sum w",
  rank: "Rank",
  determinant: "Determinant",
  reached:
    "You reached the target: $a = {a}$, $b = {b}$. The scaled vectors add to T.",
  tryTarget:
    "The sum is not at T yet. Compare its coordinates with {target}, or drag the violet tip to the target.",
  unreachable:
    "T is unreachable in this context: both columns lie on one line through the origin, but {target} does not. Changing coefficients cannot add a new direction.",
  rankSuccess:
    "The columns are nonzero and parallel: determinant 0, rank 1. All outputs lie on the same line.",
  rankZero:
    "The zero column gives rank 1 too. Now find a nonzero parallel vector to meet the challenge.",
  rankTry:
    "The determinant is nonzero, so the columns still span the plane. Try $v = {parallel}$, or another nonzero multiple of u.",
  combinationExplanation:
    "With independent columns, each target in the plane has unique coefficients. Here they are restricted to {min}…{max} for a readable view. With dependent columns, the image collapses to a line; some targets cannot be reached at all. The two drawing styles show the same vector addition.",
  rankExplanation:
    "The parallelogram area is the absolute value of the determinant. When the columns become parallel, its area becomes zero. Since u remains nonzero, the image has dimension 1. A nonzero determinant gives rank 2.",
  caption:
    "Match the colored arrows to the coordinates in the equation. Change one quantity at a time and compare the result.",
  noScript:
    "This is the initial configuration. Enable JavaScript to manipulate it; the surrounding explanation remains available.",
};
export type Copy = typeof en;
const de: Copy = {
  combinationTitle: "Baue einen Vektor. Wechsle den Kontext.",
  rankTitle: "Aus zwei Richtungen wird eine.",
  combinationPrompt:
    "Kannst du $T = {target}$ erreichen? Bewege die Vektorspitzen oder ändere a und b. Versuche dasselbe Ziel anschließend mit abhängigen Richtungen.",
  rankPrompt:
    "Mache die Spalten abhängig, ohne v auf null zu setzen. Vermute zuerst, was mit dem Bildraum passiert, und bewege dann den blauen Vektor.",
  independent: "Unabhängige Richtungen",
  dependent: "Auf einer Geraden",
  parallelogram: "Parallelogramm",
  chain: "Spitze an Anfang",
  context: "Kontext",
  view: "Darstellung",
  drag: "Ziehe die markierten Spitzen. Pfeiltasten bewegen eine fokussierte Spitze; mit Shift wird der Schritt größer. Die Zahlenfelder bieten dieselben Eingaben.",
  output: "Bewege die Summe w",
  first: "Skaliere den ersten Vektor a·u",
  second: "Skaliere den zweiten Vektor b·v",
  column: "Bewege die zweite Spalte v",
  check: "Diese Einstellung prüfen",
  reset: "Zurücksetzen",
  explain: "Warum passiert das?",
  coefficientA: "Koeffizient a",
  coefficientB: "Koeffizient b",
  columnX: "Zweite Spalte x",
  columnY: "Zweite Spalte y",
  sum: "Summe w",
  rank: "Rang",
  determinant: "Determinante",
  reached:
    "Du hast das Ziel erreicht: $a = {a}$, $b = {b}$. Die skalierten Vektoren ergeben zusammen T.",
  tryTarget:
    "Die Summe liegt noch nicht bei T. Vergleiche ihre Koordinaten mit {target} oder ziehe die violette Spitze zum Ziel.",
  unreachable:
    "T ist hier unerreichbar: Beide Spalten liegen auf einer Ursprungsgeraden, aber {target} liegt nicht darauf. Andere Koeffizienten erzeugen keine neue Richtung.",
  rankSuccess:
    "Die Spalten sind ungleich null und parallel: Determinante 0, Rang 1. Alle Ausgaben liegen auf derselben Geraden.",
  rankZero:
    "Auch die Nullspalte ergibt Rang 1. Finde nun einen von null verschiedenen parallelen Vektor für die Aufgabe.",
  rankTry:
    "Die Determinante ist ungleich null; die Spalten spannen weiterhin die Ebene auf. Versuche $v = {parallel}$ oder ein anderes nicht verschwindendes Vielfaches von u.",
  combinationExplanation:
    "Bei unabhängigen Spalten hat jedes Ziel in der Ebene eindeutige Koeffizienten. Hier sind sie für eine lesbare Darstellung auf {min}…{max} begrenzt. Bei abhängigen Spalten fällt der Bildraum auf eine Gerade zusammen; manche Ziele sind unerreichbar. Beide Darstellungsarten zeigen dieselbe Vektoraddition.",
  rankExplanation:
    "Die Fläche des Parallelogramms ist der Betrag der Determinante. Werden die Spalten parallel, wird die Fläche null. Weil u ungleich null bleibt, hat der Bildraum Dimension 1. Eine Determinante ungleich null ergibt Rang 2.",
  caption:
    "Ordne die farbigen Pfeile den Koordinaten in der Gleichung zu. Ändere jeweils eine Größe und vergleiche das Ergebnis.",
  noScript:
    "Das ist die Ausgangseinstellung. Zum Verändern wird JavaScript benötigt; die Erklärung bleibt lesbar.",
};
import { number } from "./plane.ts";
import type { LabState } from "./vector-model.ts";
export function labCopy(locale: Locale = "en", state?: LabState): Copy {
  const original = { en, de }[locale];
  if (!state) return { ...original };
  const values: Record<string, string> = {
    target: `(${state.scenario.target.map(number).join(", ")})`,
    a: number(state.a),
    b: number(state.b),
    parallel: `(${state.scenario.dependent.v.map(number).join(", ")})`,
    min: number(state.scenario.coefficients.min),
    max: number(state.scenario.coefficients.max),
  };
  return Object.fromEntries(
    Object.entries(original).map(([key, value]) => [
      key,
      value.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? name),
    ]),
  ) as Copy;
}
