/** A small directed concept graph, independent of its HTML/SVG renderer. */
export type MapText = Record<'en'|'de'|'es', string>;
export interface MapNode { id:string; label:MapText; detail:MapText; x:number; y:number }
export interface MapEdge { from:string; to:string; label:MapText; reason:MapText; kind:'branch'|'cross'; path:string; x:number; y:number }
export interface MindMapData { height?:number; title:MapText; question:MapText; caption:MapText; nodes:MapNode[]; edges:MapEdge[] }
export const text=(en:string,de:string,es:string):MapText=>({en,de,es});
export function validateMindMap(data:MindMapData) {
 const height=data.height??620;
 if(!Number.isFinite(height)||height<200||height>1000)throw new Error('Invalid mind map height');
 const ids=new Set(data.nodes.map(n=>n.id));
 const localized=(v:MapText)=>{if(!v||['en','de','es'].some(l=>!v[l as keyof MapText]?.trim()))throw new Error('Mind map needs EN/DE/ES text');};
 [data.title,data.question,data.caption].forEach(localized);
 if(!data.nodes.length||ids.size!==data.nodes.length)throw new Error('Mind map needs unique nodes');
 for(const n of data.nodes){if(!/^[a-z][a-z0-9-]*$/.test(n.id)||!Number.isFinite(n.x)||!Number.isFinite(n.y)||n.x<0||n.x+180>900||n.y<0||n.y+76>height)throw new Error('Invalid mind map node');localized(n.label);localized(n.detail);}
 const pairs=new Set<string>();
 for(const e of data.edges){const pair=e.from+'>'+e.to;if(!ids.has(e.from)||!ids.has(e.to)||e.from===e.to||pairs.has(pair))throw new Error('Invalid mind map connection');pairs.add(pair);localized(e.label);localized(e.reason);if(!['branch','cross'].includes(e.kind)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.x<0||e.x>900||e.y<0||e.y>height||!/^M[\d\s.,LQCHV-]+$/.test(e.path))throw new Error('Invalid mind map route');}
 const reached=new Set<string>();const visit=(id:string)=>{if(reached.has(id))return;reached.add(id);data.edges.filter(e=>e.from===id).forEach(e=>visit(e.to));};visit(data.nodes[0].id);
 if(reached.size!==ids.size)throw new Error('Every mind map node must be reachable from its central concept');
 return data;
}
export function connectedEdges(data:MindMapData,id:string) { return data.edges.filter(e=>e.from===id||e.to===id); }
export const mapCopy={
 stages:text('Build the map','Das Netz aufbauen','Construir el mapa'),
 labels:[text('1. Concepts','1. Begriffe','1. Conceptos'),text('2. Branches','2. Zweige','2. Ramas'),text('3. Relationships','3. Beziehungen','3. Relaciones')],
 notes:[text('A collection of terms gives you ingredients, but does not yet explain their connections.','Die Begriffe liefern Material, erklären aber noch keine Verbindungen.','Los términos aportan material, pero todavía no explican sus conexiones.'),text('Branches group ideas by purpose. Position shows organization; it does not establish a cause or a fixed sequence.','Zweige ordnen Ideen nach ihrer Aufgabe. Die Anordnung beweist weder eine Ursache noch eine feste Reihenfolge.','Las ramas agrupan ideas por su función. La posición no demuestra una causa ni una secuencia fija.'),text('Read each arrow as a sentence. Dashed cross-links connect branches; select a concept to inspect the reasons and limits.','Lies jeden Pfeil als Satz. Gestrichelte Querverbindungen verbinden Zweige; wähle einen Begriff für Begründungen und Grenzen.','Lee cada flecha como una frase. Los enlaces discontinuos conectan ramas; selecciona un concepto para ver razones y límites.')],
 reset:text('Reset','Zurücksetzen','Restablecer'),
 instruction:text('Select a concept in the graph or the list. Tab and Enter work too. All relationships are explained below.','Wähle einen Begriff im Netz oder in der Liste. Tab und Enter funktionieren ebenfalls. Alle Beziehungen werden unten erklärt.','Selecciona un concepto en el gráfico o la lista. También puedes usar Tab y Enter. Todas las relaciones se explican debajo.'),
 relations:text('Read the connections','Die Verbindungen lesen','Leer las conexiones'),
 branch:text('Branch','Zweig','Rama'),cross:text('Cross-link','Querverbindung','Enlace cruzado'),
};
