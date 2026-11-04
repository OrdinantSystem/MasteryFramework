import {text as t,type MindMapData} from './mind-map.ts';
/** Illustrative study workflow, not a validated causal model of memory. */
export const studyMap:MindMapData={
 title:t('A study session: different methods, connected roles','Eine Lernsitzung: Methoden mit verbundenen Aufgaben'),
 question:t('How can I find and repair gaps in what I am learning?','Wie kann ich Lücken beim Lernen erkennen und bearbeiten?'),
 caption:t('An illustrative concept map. Solid arrows group methods by purpose; dashed arrows connect their roles. Arrow labels state the relationship, not a guaranteed outcome.','Ein beispielhaftes Begriffsnetz. Durchgezogene Pfeile ordnen Methoden nach Aufgaben; gestrichelte Pfeile verbinden ihre Rollen. Die Beschriftung benennt eine Beziehung, kein garantiertes Ergebnis.'),
 nodes:[
 {id:'session',x:360,y:20,label:t('Study session','Lernsitzung'),detail:t('Choose a method for the gap you need to investigate. These roles can overlap.','Wähle eine Methode passend zur vermuteten Lücke. Die Aufgaben können sich überschneiden.')},
 {id:'organize',x:30,y:230,label:t('Organization','Ordnen'),detail:t('Make the structure visible: which ideas belong together and how are they related?','Mache die Struktur sichtbar: Welche Ideen gehören zusammen und wie hängen sie zusammen?')},
 {id:'retrieve',x:360,y:230,label:t('Retrieval','Abrufen'),detail:t('Attempt an explanation or answer without looking. Record omissions instead of quietly filling them from your notes.','Versuche eine Erklärung oder Antwort ohne Nachschlagen. Halte Auslassungen fest, statt sie unbemerkt aus Notizen zu ergänzen.')},
 {id:'feedback',x:690,y:230,label:t('Feedback','Rückmeldung'),detail:t('Compare an actual attempt with a reliable source. Identify the specific relationship that needs correction.','Vergleiche einen eigenen Versuch mit einer verlässlichen Quelle. Benenne die Beziehung, die korrigiert werden muss.')},
 {id:'map',x:30,y:470,label:t('Concept map','Begriffsnetz'),detail:t('Name and justify the links. Copying a finished drawing does not show that you can explain them.','Benenne und begründe Verbindungen. Eine fertige Zeichnung zu kopieren zeigt noch nicht, dass du sie erklären kannst.')},
 {id:'recall',x:360,y:470,label:t('Delayed explanation','Späteres Erklären'),detail:t('Return after a delay and explain without the map. The interval depends on your goal and previous performance.','Erkläre nach einer Pause ohne das Netz. Der Abstand hängt vom Ziel und vom bisherigen Ergebnis ab.')},
 {id:'repair',x:690,y:470,label:t('Targeted correction','Gezieltes Korrigieren'),detail:t('Repair the claim and explain why it changed. A corrected note still needs a fresh independent attempt.','Korrigiere die Aussage und begründe die Änderung. Auf eine korrigierte Notiz sollte ein neuer eigenständiger Versuch folgen.')}
 ],
 edges:[
 {from:'session',to:'organize',kind:'branch',path:'M360 58 L120 192 L120 230',x:196,y:145,label:t('can include','kann umfassen'),reason:t('Organization is one role within a session; it need not come first every time.','Ordnen ist eine mögliche Aufgabe; es muss nicht jedes Mal am Anfang stehen.')},
 {from:'session',to:'retrieve',kind:'branch',path:'M450 96 L450 230',x:450,y:163,label:t('can include','kann umfassen'),reason:t('You can begin with a recall attempt to find out what needs attention.','Du kannst mit einem Abrufversuch beginnen, um den Lernbedarf zu erkennen.')},
 {from:'session',to:'feedback',kind:'branch',path:'M540 58 L780 192 L780 230',x:704,y:145,label:t('can include','kann umfassen'),reason:t('Feedback is useful when there is an attempt to examine and a trustworthy basis for comparison.','Rückmeldung braucht einen Versuch zum Prüfen und eine verlässliche Vergleichsgrundlage.')},
 {from:'organize',to:'map',kind:'branch',path:'M120 306 L120 470',x:120,y:393,label:t('can use','kann nutzen'),reason:t('Mapping asks you to choose groups and justify relationships, rather than merely collect terms.','Beim Zeichnen wählst du Gruppen und begründest Beziehungen, statt nur Begriffe zu sammeln.')},
 {from:'retrieve',to:'recall',kind:'branch',path:'M450 306 L450 470',x:450,y:425,label:t('can be revisited through','lässt sich wiederholen durch'),reason:t('A later explanation checks what you can reconstruct after the immediate example is less available. It is not proof of permanent retention.','Eine spätere Erklärung prüft, was du nachbauen kannst, wenn das Beispiel weniger präsent ist. Sie beweist kein dauerhaftes Behalten.')},
 {from:'feedback',to:'repair',kind:'branch',path:'M780 306 L780 470',x:780,y:393,label:t('guides','leitet an'),reason:t('A specific discrepancy tells you what to revise; a general score does not explain the error.','Eine konkrete Abweichung zeigt, was zu ändern ist; eine allgemeine Punktzahl erklärt den Fehler nicht.')},
 {from:'retrieve',to:'feedback',kind:'cross',path:'M540 268 Q615 145 690 268',x:615,y:190,label:t('provides an attempt for','liefert einen Versuch für'),reason:t('An unaided answer makes omissions inspectable. Feedback still needs to be checked against a reliable source.','Eine Antwort ohne Hilfe macht Lücken erkennbar. Auch Rückmeldungen müssen an einer verlässlichen Quelle geprüft werden.')},
 {from:'map',to:'retrieve',kind:'cross',path:'M210 508 Q290 508 290 350 L360 288',x:280,y:370,label:t('can be rebuilt through','lässt sich aufbauen durch'),reason:t('Rebuilding the map from memory combines organization with retrieval. Tracing a visible map does not make the same demand.','Das Netz aus dem Gedächtnis aufzubauen verbindet Ordnen mit Abrufen. Eine sichtbare Vorlage nachzuzeichnen verlangt etwas anderes.')}
 ]
};
export const mindMapPresets={'study-session':studyMap};
export type MindMapPreset=keyof typeof mindMapPresets;

/** A second topic demonstrates reuse with a different graph, not copied markup. */
export const teachingMap:MindMapData={
 height:380,
 title:t('A teaching example','Ein Beispiel zum Lehren'),
 question:t('How can I check whether an explanation is useful?','Wie kann ich prüfen, ob eine Erklärung hilfreich ist?'),
 caption:t('A small authoring example: use a question to check what a learner takes from an example.','Kleines Autorenbeispiel: Prüfe mit einer Frage, was Lernende einem Beispiel entnehmen.'),
 nodes:[
 {id:'explanation',x:360,y:20,label:t('Explanation','Erklärung'),detail:t('Choose a concrete idea to explain and a way to check its interpretation.','Wähle eine konkrete Idee und eine Möglichkeit, ihre Deutung zu prüfen.')},
 {id:'example',x:30,y:230,label:t('Example','Beispiel'),detail:t('Show the idea in one situation and state which features matter.','Zeige die Idee in einer Situation und benenne die wichtigen Merkmale.')},
 {id:'question',x:690,y:230,label:t('Diagnostic question','Diagnostische Frage'),detail:t('Ask for a reason or a changed case, then examine the answer.','Frage nach einer Begründung oder einem veränderten Fall und prüfe die Antwort.')}
 ],
 edges:[
 {from:'explanation',to:'example',kind:'branch',path:'M360 58 L120 192 L120 230',x:196,y:145,label:t('can include','kann umfassen'),reason:t('An example gives the idea a concrete setting.','Ein Beispiel gibt der Idee einen konkreten Zusammenhang.')},
 {from:'explanation',to:'question',kind:'branch',path:'M540 58 L780 192 L780 230',x:704,y:145,label:t('can include','kann umfassen'),reason:t('A question invites a response you can examine.','Eine Frage ermöglicht eine Antwort, die sich prüfen lässt.')},
 {from:'example',to:'question',kind:'cross',path:'M210 268 L690 268',x:450,y:268,label:t('can be checked with','lässt sich prüfen durch'),reason:t('Ask which feature explains the example, or whether the idea applies when that feature changes. A response needs interpretation, not just a score.','Frage, welches Merkmal das Beispiel erklärt oder ob die Idee nach einer Änderung noch passt. Die Antwort braucht eine Deutung, nicht nur Punkte.')}
 ]
};
