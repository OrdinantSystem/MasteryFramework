import type {Locale} from '../i18n';
type Copy=Record<Locale,string>;
export const text=(en:string,de:string):Copy=>({en,de});
export interface ProcessNode {id:string;label:Copy;detail:Copy;x:number;y:number;role?:'accent'|'blue'|'purple';decision?:boolean}
export interface ProcessEdge {from:string;to:string;label?:Copy;route?:[number,number][]}
export interface Process {title:Copy;caption:Copy;nodes:ProcessNode[];edges:ProcessEdge[];height:number}
const node=(id:string,label:Copy,detail:Copy,x:number,y:number,role?:ProcessNode['role'],decision=false):ProcessNode=>({id,label,detail,x,y,role,decision});
const yes=text('Yes','Ja'),no=text('Not yet','Noch nicht');
export const processes:Record<'cycle'|'feynman'|'repair',Process>={
 cycle:{title:text('The learning cycle','Der Lernkreislauf'),caption:text('Our integrated workflow. Return to the specific gap; advance after independent success, then check again after a delay.','Unser integrierter Ablauf. Zur konkreten Lücke zurückkehren; nach selbstständigem Erfolg weitergehen und später erneut prüfen.'),height:670,nodes:[
 node('goal',text('Choose a meaningful goal','Ein sinnvolles Ziel wählen'),text('What should I be able to do?','Was soll ich selbst können?'),35,20,'blue'),
 node('map',text('Map the relationships','Beziehungen ordnen'),text('Name and justify the links.','Verbindungen benennen und begründen.'),35,145),
 node('explain',text('Explain from memory','Aus dem Gedächtnis erklären'),text('Check accuracy and repair gaps.','Richtigkeit prüfen und Lücken schließen.'),35,270),
 node('practice',text('Choose and apply a method','Eine Methode wählen und anwenden'),text('Try a new, unlabeled problem.','Eine neue Aufgabe ohne Methodenhinweis.'),35,395),
 node('review',text('Retrieve after a delay','Nach einer Pause abrufen'),text('Revisit with a different task.','Mit einer anderen Aufgabe wiederholen.'),35,520),
 node('check',text('Can I explain and use it?','Kann ich es erklären und nutzen?'),text('Without notes or hints.','Ohne Notizen oder Hinweise.'),465,520,'purple',true),
 node('gap',text('Diagnose the specific gap','Die konkrete Lücke erkennen'),text('Recall, meaning, strategy, or reasoning?','Abruf, Bedeutung, Strategie oder Logik?'),465,270),
 node('advance',text('Transfer to a harder context','In einem schwierigeren Kontext anwenden'),text('Success remains provisional.','Der Erfolg bleibt vorläufig.'),465,20,'accent'),
 ],edges:[{from:'goal',to:'map'},{from:'map',to:'explain'},{from:'explain',to:'practice'},{from:'practice',to:'review'},{from:'review',to:'check'},{from:'check',to:'gap',label:no},{from:'gap',to:'map',route:[[430,315],[430,190]]},{from:'check',to:'advance',label:yes,route:[[875,565],[875,65]]},{from:'advance',to:'review',route:[[910,65],[910,650],[210,650]]}]},
 feynman:{title:text('Explain, check, repair','Erklären, prüfen, verbessern'),caption:text('Reliable feedback checks the reasoning, not how convincing the explanation sounds. AI feedback also needs source checks.','Verlässliche Rückmeldung prüft die Begründung, nicht nur den überzeugenden Klang. Auch KI-Feedback muss an Quellen geprüft werden.'),height:545,nodes:[
 node('select',text('Select one concept','Einen Begriff auswählen'),text('Keep the claim bounded.','Die Behauptung eingrenzen.'),35,20,'blue'),
 node('explain',text('Explain from memory','Aus dem Gedächtnis erklären'),text('Meaning → conditions → example.','Bedeutung → Bedingungen → Beispiel.'),35,145),
 node('feedback',text('Check the reasoning','Die Begründung prüfen'),text('Compare with a trusted source.','Mit einer verlässlichen Quelle abgleichen.'),35,270),
 node('check',text('Accurate and justified?','Richtig und begründet?'),text('Could I defend each step?','Kann ich jeden Schritt begründen?'),465,270,'purple',true),
 node('repair',text('Study the missing piece','Die fehlende Stelle erarbeiten'),text('Repair only the diagnosed gap.','Nur die konkrete Lücke schließen.'),465,20),
 node('transfer',text('Explain again, then apply','Erneut erklären, dann anwenden'),text('Use a fresh situation without help.','Eine neue Situation ohne Hilfe lösen.'),465,420,'accent'),
 ],edges:[{from:'select',to:'explain'},{from:'explain',to:'feedback'},{from:'feedback',to:'check'},{from:'check',to:'repair',label:no},{from:'repair',to:'explain',route:[[430,65],[430,190]]},{from:'check',to:'transfer',label:yes}]},
 repair:{title:text('Repair an error','Einen Fehler beheben'),caption:text('Understanding a correction is a starting point. A different independent attempt checks whether the repair holds.','Eine Korrektur zu verstehen ist der Anfang. Ein anderer selbstständiger Versuch prüft, ob die Verbesserung trägt.'),height:300,nodes:[
 node('attempt',text('Keep the exact attempt','Den genauen Versuch festhalten'),text('Find the first unjustified step.','Den ersten unbegründeten Schritt finden.'),35,20,'blue'),
 node('diagnose',text('Name the obstacle','Das Hindernis benennen'),text('Choose the smallest useful repair.','Die kleinste hilfreiche Korrektur wählen.'),465,20),
 node('retry',text('Try a different problem','Eine andere Aufgabe versuchen'),text('Start without hints.','Ohne Hinweise beginnen.'),465,165,'accent'),
 node('later',text('Check again later','Später erneut prüfen'),text('Record what was independent.','Selbstständige Leistung dokumentieren.'),35,165,'purple')],edges:[{from:'attempt',to:'diagnose'},{from:'diagnose',to:'retry'},{from:'retry',to:'later'}]},
};
export type ProcessPreset=keyof typeof processes;
