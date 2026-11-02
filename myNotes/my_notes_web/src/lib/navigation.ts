import type { Locale } from "./i18n";
type Label = Record<Locale, string>;
export type CourseId="linear-algebra"|"analysis"|"learning";
interface Chapter {
  course:CourseId;
  id: string;
  title: Label;
  description: Label;
  groups: { key: string; title: Label; orders: number[] }[];
}
export const chapters: Chapter[] = [
  {
    course:"linear-algebra",
    id: "sheet-1-1",
    title: {
      en: "Exercise sheet 1.1",
      de: "Übungsblatt 1.1",
      es: "Hoja de ejercicios 1.1",
    },
    description: {
      en: "Linear maps, matrix products, and their geometric meaning.",
      de: "Lineare Abbildungen, Matrixprodukte und ihre geometrische Bedeutung.",
      es: "Transformaciones lineales, productos de matrices y su significado geométrico.",
    },
    groups: [
      {
        key: "foundations",
        title: { en: "Foundations", de: "Grundlagen", es: "Fundamentos" },
        orders: [1, 2, 3],
      },
      {
        key: "connections",
        title: { en: "Connections", de: "Zusammenhänge", es: "Conexiones" },
        orders: [4, 5],
      },
      {
        key: "applications",
        title: { en: "Applications", de: "Anwendungen", es: "Aplicaciones" },
        orders: [6, 7],
      },
      {
        key: "revision",
        title: { en: "Revision", de: "Wiederholen", es: "Repaso" },
        orders: [8],
      },
    ],
  },
  {
    course:"linear-algebra",
    id: "sheet-2-1",
    title: {
      en: "Exercise sheet 2.1",
      de: "Übungsblatt 2.1",
      es: "Hoja de ejercicios 2.1",
    },
    description: {
      en: "Shears, determinants, and how matrix products reveal their structure.",
      de: "Kippungen, Determinanten und die Struktur von Matrixprodukten.",
      es: "Cizallamientos, determinantes y la estructura de los productos de matrices.",
    },
    groups: [
      {
        key: "shears-area",
        title: {
          en: "Shears and geometry",
          de: "Kippungen und Geometrie",
          es: "Cizallamientos y geometría",
        },
        orders: [9, 10, 11],
      },
      {
        key: "structure",
        title: {
          en: "Products and proofs",
          de: "Produkte und Beweise",
          es: "Productos y demostraciones",
        },
        orders: [12, 13],
      },
      {
        key: "worked",
        title: {
          en: "Worked exercises",
          de: "Ausgearbeitete Aufgaben",
          es: "Ejercicios resueltos",
        },
        orders: [14, 15, 16],
      },
      {
        key: "recap",
        title: { en: "Revision", de: "Wiederholen", es: "Repaso" },
        orders: [17],
      },
    ],
  },
];
export type AreaId='mathematics'|'learning-teaching';
export const areas:{id:AreaId;title:Label;icon:'math'|'learning'}[]=[
 {id:'mathematics',title:{en:'Mathematics',de:'Mathematik',es:'Matemáticas'},icon:'math'},
 {id:'learning-teaching',title:{en:'Learning & Teaching',de:'Lernen & Lehren',es:'Aprendizaje y enseñanza'},icon:'learning'},
];
export const areaFor=(id:AreaId)=>areas.find(a=>a.id===id)!;
export const courses:{id:CourseId;area:AreaId;title:Label;description:Label}[]=[
 {id:'linear-algebra',area:'mathematics',title:{en:'Linear Algebra I',de:'Lineare Algebra I',es:'Álgebra lineal I'},description:{en:'Linear maps, matrices, and the geometry and structure of their products.',de:'Lineare Abbildungen, Matrizen sowie Geometrie und Struktur ihrer Produkte.',es:'Transformaciones lineales, matrices y la geometría y estructura de sus productos.'}},
 {id:'analysis',area:'mathematics',title:{en:'Analysis I',de:'Analysis I',es:'Análisis I'},description:{en:'Mathematical language, logic, and the foundations of rigorous proof.',de:'Mathematische Sprache, Logik und die Grundlagen präziser Beweise.',es:'Lenguaje matemático, lógica y fundamentos de la demostración rigurosa.'}},
];
courses.push({id:'learning',area:'learning-teaching',title:{en:'Learning methodology',de:'Lernmethodik',es:'Metodología del aprendizaje'},description:{en:'Study methods, worked examples, and records of independent practice.',de:'Lernmethoden, ausgearbeitete Beispiele und Nachweise selbstständiger Praxis.',es:'Métodos de estudio, ejemplos resueltos y registros de práctica autónoma.'}});
const learningChapters:Chapter[]=[
 {id:'learning-methods',course:'learning',title:{en:'Principles and methods',de:'Prinzipien und Methoden',es:'Principios y métodos'},description:{en:'Give each method a clear job: organize, explain, choose, and recall.',de:'Jeder Methode eine klare Aufgabe geben: ordnen, erklären, auswählen und abrufen.',es:'Da a cada método una función: organizar, explicar, elegir y recordar.'},groups:[{key:'orientation',title:{en:'Start with a purpose',de:'Mit einem Ziel beginnen',es:'Empieza con un propósito'},orders:[1,2]},{key:'methods',title:{en:'The four methods',de:'Die vier Methoden',es:'Los cuatro métodos'},orders:[3,4,5,6]}]},
 {id:'learning-practice',course:'learning',title:{en:'The study workflow',de:'Der Lernablauf',es:'El proceso de estudio'},description:{en:'Turn the methods into attempts, feedback, and evidence you can revisit.',de:'Aus Methoden werden Versuche, Rückmeldungen und überprüfbare Ergebnisse.',es:'Convierte los métodos en intentos, comentarios y pruebas que puedas revisar.'},groups:[{key:'practice',title:{en:'Practise and repair',de:'Üben und verbessern',es:'Practicar y corregir'},orders:[7,8,9]},{key:'continuity',title:{en:'Evidence and continuity',de:'Nachweise und Kontinuität',es:'Evidencias y continuidad'},orders:[10,11,12,13]}]},
 {id:'learning-transcripts',course:'learning',title:{en:'Transcript reading guides',de:'Lesehilfen zu den Transkripten',es:'Guías de lectura de las transcripciones'},description:{en:'Understand the four sources, their useful ideas, and what their claims leave open.',de:'Die vier Quellen, ihre brauchbaren Ideen und offenen Behauptungen verstehen.',es:'Entiende las cuatro fuentes, sus ideas útiles y las limitaciones de sus afirmaciones.'},groups:[{key:'readings',title:{en:'Read critically',de:'Kritisch lesen',es:'Leer con criterio'},orders:[14,15,16,17]}]},
];
chapters.push(...learningChapters);
const analysisChapters:Chapter[]=[
 {id:'analysis-language',course:'analysis',title:{en:'Language and logic',de:'Sprache und Logik',es:'Lenguaje y lógica'},description:{en:'Read statements precisely, bind variables, and distinguish valid implications from their converses.',de:'Aussagen präzise lesen, Variablen binden und Implikationen von ihren Umkehrungen unterscheiden.',es:'Leer enunciados con precisión, ligar variables y distinguir implicaciones de sus recíprocas.'},groups:[
  {key:'language',title:{en:'Mathematical language',de:'Mathematische Sprache',es:'Lenguaje matemático'},orders:[1,2,3]},
  {key:'logic',title:{en:'Logical relationships',de:'Logische Beziehungen',es:'Relaciones lógicas'},orders:[4,5,6]},
 ]},
 {id:'analysis-proof',course:'analysis',title:{en:'Building proofs',de:'Beweise aufbauen',es:'Construir demostraciones'},description:{en:'From definitions and assumptions to a justified conclusion.',de:'Von Definitionen und Voraussetzungen zu einer begründeten Schlussfolgerung.',es:'De definiciones e hipótesis a una conclusión justificada.'},groups:[{key:'proofs',title:{en:'Proof tools',de:'Beweiswerkzeuge',es:'Herramientas de demostración'},orders:[7,8]}]},
 {id:'analysis-boolean',course:'analysis',title:{en:'Boolean algebra · sheets 1.1–1.2',de:'Boolesche Algebra · Blätter 1.1–1.2',es:'Álgebra de Boole · hojas 1.1–1.2'},description:{en:'Derive the extra laws from the five allowed starting laws, without truth tables.',de:'Die weiteren Gesetze aus den fünf erlaubten Grundgesetzen ohne Wahrheitstafeln herleiten.',es:'Deducir las leyes adicionales a partir de las cinco iniciales, sin tablas de verdad.'},groups:[
 {key:'given',title:{en:'Starting laws',de:'Grundgesetze',es:'Leyes iniciales'},orders:[9]},
 {key:'sheet11',title:{en:'Exercise sheet 1.1',de:'Übungsblatt 1.1',es:'Hoja de ejercicios 1.1'},orders:[10,11]},
 {key:'sheet12',title:{en:'Exercise sheet 1.2',de:'Übungsblatt 1.2',es:'Hoja de ejercicios 1.2'},orders:[12,13]},
 ]},
 {id:'analysis-circuits',course:'analysis',title:{en:'Circuits and recap',de:'Schaltungen und Überblick',es:'Circuitos y repaso'},description:{en:'Turn logical formulas into NAND networks, then revisit the main proof dependencies.',de:'Logische Formeln in NAND-Schaltungen umsetzen und die Beweisabhängigkeiten wiederholen.',es:'Convertir fórmulas lógicas en redes NAND y repasar las dependencias entre demostraciones.'},groups:[{key:'apply',title:{en:'Apply and recall',de:'Anwenden und wiederholen',es:'Aplicar y recordar'},orders:[14,15]}]},
];
chapters.push(...analysisChapters);
export function courseFor(id:CourseId){const c=courses.find(c=>c.id===id);if(!c)throw new Error(`Unknown course ${id}`);return c;}
export function chapterFor(id:string){const c=chapters.find(c=>c.id===id);if(!c)throw new Error(`Unknown chapter ${id}`);return c;}
export const chaptersFor=(course:CourseId)=>chapters.filter(c=>c.course===course);
export function validateOutline(lessons:{order:number;chapter:string;course:CourseId}[]) {
 const listed=chapters.flatMap(c=>c.groups.flatMap(g=>g.orders.map(order=>({order,chapter:c.id,course:c.course}))));
 if(new Set(listed.map(x=>x.course+':'+x.order)).size!==listed.length)throw new Error('Duplicate navigation order in a course');
 const same=(x:typeof listed[number],l:typeof lessons[number])=>x.order===l.order&&x.chapter===l.chapter&&x.course===l.course;
 if(lessons.some(l=>!listed.some(x=>same(x,l)))||listed.some(x=>!lessons.some(l=>same(x,l))))throw new Error('Every published lesson must appear in its own course/chapter exactly once');
}
