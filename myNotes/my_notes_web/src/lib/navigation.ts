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
 {"id":"analysis-zero-propositions","course":"analysis","title":{"en":"Analysis 0 · Statements and notation","de":"Analysis 0 · Aussagen und Notation","es":"Análisis 0 · Enunciados y notación"},"description":{"en":"Read mathematical sentences, definitions, equations and order comparisons.","de":"Mathematische Sätze, Definitionen, Gleichungen und Vergleiche lesen.","es":"Leer enunciados matemáticos, definiciones, ecuaciones y comparaciones."},"groups":[{"key":"zero-propositions","title":{"en":"Meaning and structure","de":"Bedeutung und Struktur","es":"Significado y estructura"},"orders":[1,2]}]},
 {"id":"analysis-zero-connectives","course":"analysis","title":{"en":"Analysis 0 · Combined conditions","de":"Analysis 0 · Verknüpfte Bedingungen","es":"Análisis 0 · Condiciones compuestas"},"description":{"en":"Unpack definitions and construct truth tables.","de":"Definitionen aufschlüsseln und Wahrheitstafeln aufbauen.","es":"Desglosar definiciones y construir tablas de verdad."},"groups":[{"key":"zero-connectives","title":{"en":"Conditions and tables","de":"Bedingungen und Tabellen","es":"Condiciones y tablas"},"orders":[3,4,5]}]},
 {"id":"analysis-zero-reading","course":"analysis","title":{"en":"Analysis 0 · Equality, order and structure","de":"Analysis 0 · Gleichheit, Ordnung und Struktur","es":"Análisis 0 · Igualdad, orden y estructura"},"description":{"en":"Read equations, comparison boundaries and the structure of a claim.","de":"Gleichungen, Vergleichsgrenzen und die Struktur einer Aussage lesen.","es":"Leer ecuaciones, límites de comparaciones y la estructura de una afirmación."},"groups":[{"key":"zero-reading","title":{"en":"Lessons","de":"Lektionen","es":"Lecciones"},"orders":[6,7,8]}]},
 {"id":"analysis-zero-negation","course":"analysis","title":{"en":"Analysis 0 · Negation","de":"Analysis 0 · Negation","es":"Análisis 0 · Negación"},"description":{"en":"Negate exactly the claim, including its grouping and endpoints.","de":"Genau die Aussage mit ihren Klammern und Randfällen negieren.","es":"Negar la afirmación exacta, incluidos la agrupación y los extremos."},"groups":[{"key":"zero-negation","title":{"en":"Negation and its laws","de":"Negation und ihre Gesetze","es":"Negación y sus leyes"},"orders":[9,10,11,12]}]},
 {"id":"analysis-zero-conditionals","course":"analysis","title":{"en":"Analysis 0 · Implication","de":"Analysis 0 · Implikation","es":"Análisis 0 · Implicación"},"description":{"en":"Read hypotheses and conclusions without reversing the claim.","de":"Voraussetzungen und Folgerungen lesen, ohne die Aussage umzukehren.","es":"Leer hipótesis y conclusiones sin invertir la afirmación."},"groups":[{"key":"zero-conditionals","title":{"en":"Meaning and assumptions","de":"Bedeutung und Annahmen","es":"Significado y supuestos"},"orders":[13,14,15,16]}]},
 {"id":"analysis-zero-equivalence","course":"analysis","title":{"en":"Analysis 0 · Equivalence","de":"Analysis 0 · Äquivalenz","es":"Análisis 0 · Equivalencia"},"description":{"en":"Prove both directions and check every reversible step.","de":"Beide Richtungen beweisen und jeden umkehrbaren Schritt prüfen.","es":"Demostrar ambas direcciones y comprobar cada paso reversible."},"groups":[{"key":"zero-equivalence","title":{"en":"Equivalent conditions","de":"Äquivalente Bedingungen","es":"Condiciones equivalentes"},"orders":[17,18,19]}]},
 {"id":"analysis-zero-universal","course":"analysis","title":{"en":"Analysis 0 · Universal claims","de":"Analysis 0 · Allaussagen","es":"Análisis 0 · Enunciados universales"},"description":{"en":"Specify domains, bind variables and test counterexamples.","de":"Bereiche festlegen, Variablen binden und Gegenbeispiele prüfen.","es":"Precisar dominios, ligar variables y comprobar contraejemplos."},"groups":[{"key":"zero-universal","title":{"en":"Domains and scope","de":"Bereiche und Geltungsbereiche","es":"Dominios y alcance"},"orders":[20,21,22]}]},
 {"id":"analysis-zero-existence","course":"analysis","title":{"en":"Analysis 0 · Existence","de":"Analysis 0 · Existenz","es":"Análisis 0 · Existencia"},"description":{"en":"Construct witnesses and distinguish existence from uniqueness.","de":"Zeugen konstruieren und Existenz von Eindeutigkeit unterscheiden.","es":"Construir testigos y distinguir existencia de unicidad."},"groups":[{"key":"zero-existence","title":{"en":"Witnesses and uniqueness","de":"Zeugen und Eindeutigkeit","es":"Testigos y unicidad"},"orders":[23,24,25,26]}]},
 {"id":"analysis-zero-nested","course":"analysis","title":{"en":"Analysis 0 · Nested quantifiers","de":"Analysis 0 · Verschachtelte Quantoren","es":"Análisis 0 · Cuantificadores anidados"},"description":{"en":"Keep track of scope, order and which choices may depend on others.","de":"Geltungsbereich, Reihenfolge und erlaubte Abhängigkeiten verfolgen.","es":"Seguir el alcance, el orden y las dependencias permitidas."},"groups":[{"key":"zero-nested","title":{"en":"Order and dependence","de":"Reihenfolge und Abhängigkeit","es":"Orden y dependencia"},"orders":[27,28,29,30]}]},
 {"id":"analysis-zero-quantified-negation","course":"analysis","title":{"en":"Analysis 0 · Negating quantified claims","de":"Analysis 0 · Quantifizierte Aussagen negieren","es":"Análisis 0 · Negar enunciados cuantificados"},"description":{"en":"Derive negations one scope at a time and retain the boundary cases.","de":"Negationen schrittweise herleiten und Randfälle beibehalten.","es":"Deducir negaciones por alcance y conservar los casos límite."},"groups":[{"key":"zero-quantified-negation","title":{"en":"Rules and worked derivations","de":"Regeln und Herleitungen","es":"Reglas y deducciones"},"orders":[31,32,33,34,35]}]},
 {"id":"analysis-language","course":"analysis","title":{"en":"Logic and number domains · Reference","de":"Logik und Zahlbereiche · Übersicht","es":"Lógica y dominios numéricos · Referencia"},"description":{"en":"Short quantifier reference and the number domains used in the course.","de":"Kurze Quantorenübersicht und die im Kurs verwendeten Zahlbereiche.","es":"Referencia breve de cuantificadores y dominios numéricos del curso."},"groups":[{"key":"language","title":{"en":"Mathematical language","de":"Mathematische Sprache","es":"Lenguaje matemático"},"orders":[36,37]}]},
 {"id":"analysis-proof","course":"analysis","title":{"en":"Building proofs","de":"Beweise aufbauen","es":"Construir demostraciones"},"description":{"en":"From definitions and assumptions to a justified conclusion.","de":"Von Definitionen und Voraussetzungen zu einer begründeten Schlussfolgerung.","es":"De definiciones e hipótesis a una conclusión justificada."},"groups":[{"key":"proof","title":{"en":"Proof tools","de":"Beweiswerkzeuge","es":"Herramientas de demostración"},"orders":[38,39]}]},
 {"id":"analysis-boolean","course":"analysis","title":{"en":"Boolean algebra · sheets 1.1–1.2","de":"Boolesche Algebra · Blätter 1.1–1.2","es":"Álgebra de Boole · hojas 1.1–1.2"},"description":{"en":"Derive the extra laws from the five allowed starting laws, without truth tables.","de":"Die weiteren Gesetze aus den fünf erlaubten Grundgesetzen ohne Wahrheitstafeln herleiten.","es":"Deducir las leyes adicionales a partir de las cinco iniciales, sin tablas de verdad."},"groups":[{"key":"given","title":{"en":"Starting laws","de":"Grundgesetze","es":"Leyes iniciales"},"orders":[40]},{"key":"sheet11","title":{"en":"Exercise sheet 1.1","de":"Übungsblatt 1.1","es":"Hoja de ejercicios 1.1"},"orders":[41,42]},{"key":"sheet12","title":{"en":"Exercise sheet 1.2","de":"Übungsblatt 1.2","es":"Hoja de ejercicios 1.2"},"orders":[43,44]}]},
 {"id":"analysis-circuits","course":"analysis","title":{"en":"Logic circuits","de":"Logische Schaltungen","es":"Circuitos lógicos"},"description":{"en":"Turn logical formulas into NAND networks.","de":"Logische Formeln in NAND-Schaltungen umsetzen.","es":"Convertir fórmulas lógicas en redes NAND."},"groups":[{"key":"circuits","title":{"en":"Apply and recall","de":"Anwenden und wiederholen","es":"Aplicar y recordar"},"orders":[45]}]},
 {"id":"analysis-zero-sequences","course":"analysis","title":{"en":"Analysis 0 · A first convergence application","de":"Analysis 0 · Erste Anwendung auf Konvergenz","es":"Análisis 0 · Primera aplicación a la convergencia"},"description":{"en":"Read a sequence limit and derive what it means for the claim to fail.","de":"Einen Folgengrenzwert lesen und das Scheitern der Aussage herleiten.","es":"Leer un límite de sucesión y deducir qué significa que falle."},"groups":[{"key":"sequence-foundations","title":{"en":"Sequences and distance","de":"Folgen und Abstand","es":"Sucesiones y distancia"},"orders":[46,47]},{"key":"convergence","title":{"en":"Definition and proofs","de":"Definition und Beweise","es":"Definición y demostraciones"},"orders":[48,49,50]},{"key":"failure","title":{"en":"Negating convergence","de":"Konvergenz negieren","es":"Negar la convergencia"},"orders":[51,52]}]},
 {"id":"analysis-recap","course":"analysis","title":{"en":"Analysis foundations · Recall map","de":"Analysis-Grundlagen · Überblick","es":"Fundamentos de análisis · Repaso"},"description":{"en":"Reconnect the logic, proofs and first convergence application.","de":"Logik, Beweise und die erste Konvergenzanwendung verbinden.","es":"Relacionar la lógica, las demostraciones y la primera aplicación a la convergencia."},"groups":[{"key":"recap","title":{"en":"Lessons","de":"Lektionen","es":"Lecciones"},"orders":[53]}]}
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
