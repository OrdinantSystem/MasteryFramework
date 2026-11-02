/** @type {import('katex').KatexOptions} */
export const mathOptions = {
  throwOnError: true,
  strict: (code) => (code === "htmlExtension" ? "ignore" : "error"),
  output: "htmlAndMathml",
  macros: {
    "\\colA": "\\htmlClass{math-a}{#1}",
    "\\colB": "\\htmlClass{math-b}{#1}",
    "\\colC": "\\htmlClass{math-c}{#1}",
    "\\colResult": "\\htmlClass{math-result}{#1}",
  },
  trust: (context) => context.command === "\\htmlClass",
};
