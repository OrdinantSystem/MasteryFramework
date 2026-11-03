import type { Vec2 } from "./plane.ts";
import type { Locale } from "../i18n";
export interface Bounds {
  min: number;
  max: number;
  step: number;
}
export interface VectorScenario {
  id: string;
  kind: "combination" | "rank";
  initial: { u: Vec2; v: Vec2; a: number; b: number };
  dependent: { u: Vec2; v: Vec2 };
  target: Vec2;
  coefficients: Bounds;
  column: Bounds;
  extent: number;
  text?: Record<
    Locale,
    { title?: string; prompt?: string; explanation?: string; caption?: string }
  >;
}
const base = {
  coefficients: { min: -2, max: 2, step: 0.05 },
  column: { min: -4, max: 4, step: 0.25 },
  extent: 6,
  target: [3, 4] as Vec2,
};
export const vectorPresets = {
  "linear-combination": {
    ...base,
    id: "linear-combination",
    kind: "combination",
    initial: { u: [2, 1], v: [-1, 2], a: 1, b: 1 },
    dependent: { u: [1, 1], v: [2, 2] },
  },
  "rank-collapse": {
    ...base,
    id: "rank-collapse",
    kind: "rank",
    initial: { u: [2, 1], v: [-1, 2], a: 1, b: 1 },
    dependent: { u: [2, 1], v: [4, 2] },
  },
  "area-and-orientation": {
    ...base,
    id: "area-and-orientation",
    kind: "rank",
    extent: 4,
    target: [1, 1],
    initial: { u: [1, 0], v: [1, 1], a: 1, b: 1 },
    dependent: { u: [1, 0], v: [2, 0] },
    column: { min: -2, max: 2, step: 0.25 },
    text: {
      en: {
        title: "Area, collapse, and orientation",
        prompt:
          "Keep u fixed and move v. Compare positive, negative, and zero determinants. Can you collapse the area without making v zero?",
        explanation:
          "The columns are $u = (1,0)$ and $v = (x,y)$, so $\\det A = y$. Horizontal movement changes the shear, not the area. Moving v below the x-axis reverses orientation; $y = 0$ collapses the image to a line.",
        caption:
          "The filled parallelogram is the image of the unit square. Its area is $|\\det A|$; the sign records orientation.",
      },
      de: {
        title: "Fläche, Zusammenfallen und Orientierung",
        prompt:
          "Halte u fest und bewege v. Vergleiche positive, negative und verschwindende Determinanten. Kannst du die Fläche auf null bringen, ohne v zum Nullvektor zu machen?",
        explanation:
          "Die Spalten sind $u = (1,0)$ und $v = (x,y)$, also $\\det A = y$. Eine horizontale Bewegung verändert die Scherung, nicht die Fläche. Unterhalb der x-Achse kehrt sich die Orientierung um; bei $y = 0$ fällt das Bild auf eine Gerade zusammen.",
        caption:
          "Das ausgefüllte Parallelogramm ist das Bild des Einheitsquadrats. Seine Fläche ist $|\\det A|$; das Vorzeichen beschreibt die Orientierung.",
      },
      es: {
        title: "Área, colapso y orientación",
        prompt:
          "Mantén u fijo y mueve v. Compara determinantes positivos, negativos y nulos. ¿Puedes anular el área sin convertir v en cero?",
        explanation:
          "Las columnas son $u = (1,0)$ y $v = (x,y)$, así que $\\det A = y$. El movimiento horizontal cambia el cizallamiento, pero no el área. Al bajar v del eje x se invierte la orientación; con $y = 0$ la imagen se reduce a una recta.",
        caption:
          "El paralelogramo coloreado es la imagen del cuadrado unidad. Su área es $|\\det A|$; el signo indica la orientación.",
      },
    },
  },
  "coordinate-basis": {
    ...base,
    id: "coordinate-basis",
    kind: "combination",
    initial: { u: [1, 0], v: [0, 1], a: 1, b: 1 },
    dependent: { u: [1, 0], v: [2, 0] },
    target: [1, 2],
  },
} satisfies Record<string, VectorScenario>;
export type VectorPreset = keyof typeof vectorPresets;
