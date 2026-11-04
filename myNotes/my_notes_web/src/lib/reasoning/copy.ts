import type {Locale} from '../i18n';
import {reasoningChoices,reasoningState,type ReasoningPreset} from '../interactive/reasoning-model.ts';
export const reasoningCopy = {
  en: {
    reset: 'Reset',
    appearance: {title:'Change their appearance', options:['Identical','Different colors','Different sizes'], results:['Always {count} counters','Always {count} counters','Always {count} counters'], details:['Appearance changes. Number stays constant.','Appearance changes. Number stays constant.','Appearance changes. Number stays constant.'], descriptions:['Two separate counters with identical appearance.','Two separate counters with different colors.','Two separate counters with different sizes.']},
    units: {title:'What counts as one?', options:['Count shoes','Count pairs'], results:['{count} shoes','{count} pair'], details:['Counting individual objects','Counting a matched pair as one unit'], descriptions:['A left shoe and a matching right shoe, each counted separately.','The same two shoes enclosed together as one matched pair.']},
    water: {title:'Explore both states', options:['Before merging','After merging'], results:['{count} separate drops','{count} larger drop'], details:['Number of drops: {count}','Number of drops: {count}'], descriptions:['Two distinct water drops, each containing 0.05 milliliters.','One larger drop containing the combined 0.10 milliliters.']},
    waterCaption:'Total amount of water: unchanged, assuming no loss.',
    totalVolume:'Total volume: {volume} mL',
    openingDescription:'One counter plus another counter gives a collection of two distinct counters.',
    openingCaption:'Two objects. One equation. Several hidden assumptions.',
    collectionLabels:['2 apples','2 books','2 stars'],
    collectionCaption:'Three collections, each with two elements.',
    collectionDescription:'Apples, books, and stars differ physically; each collection has two elements.',
    additionDescription:'Collection A contains a; collection B contains a different object b. Combining these disjoint collections gives two elements.',
    additionLabels:['A: one','B: one','Combined: two'],
    additionCaption:'Combining two disjoint collections.',
    symbolLabels:['Numeral','Operation','Numeral','Equality','Numeral'],
    symbolCaption:'Numerals, an operation, and an equality relation.',
    symbolDescription:'In 1 + 1 = 2, 1 and 2 are numerals, + is an operation, and = expresses equality.',
    processTitle:'The structure behind a simple equation',
    processCaption:'The conceptual process behind a simple calculation',
    processLabels:['Observe objects','Abstract relevant properties','Apply mathematical operations','Express mathematical relationships'],
    processDetails:['Identify the things in the world','Decide what counts as one','Combine quantities under suitable assumptions','Make precise claims about values'],
  },
  de: {
    reset:'Zurücksetzen',
    appearance:{title:'Ihr Aussehen verändern',options:['Identisch','Verschiedene Farben','Verschiedene Größen'],results:['Immer {count} Zählsteine','Immer {count} Zählsteine','Immer {count} Zählsteine'],details:['Das Aussehen ändert sich. Die Anzahl bleibt gleich.','Das Aussehen ändert sich. Die Anzahl bleibt gleich.','Das Aussehen ändert sich. Die Anzahl bleibt gleich.'],descriptions:['Zwei getrennte Zählsteine mit identischem Aussehen.','Zwei getrennte Zählsteine mit verschiedenen Farben.','Zwei getrennte Zählsteine mit verschiedenen Größen.']},
    units:{title:'Was zählt als eins?',options:['Schuhe zählen','Paare zählen'],results:['{count} Schuhe','{count} Paar'],details:['Einzelne Gegenstände zählen','Ein zusammengehöriges Paar als eine Einheit zählen'],descriptions:['Ein linker Schuh und ein passender rechter Schuh, jeweils einzeln gezählt.','Dieselben zwei Schuhe zusammen als ein passendes Paar umrandet.']},
    water:{title:'Beide Zustände untersuchen',options:['Vor dem Verschmelzen','Nach dem Verschmelzen'],results:['{count} getrennte Tropfen','{count} größerer Tropfen'],details:['Anzahl der Tropfen: {count}','Anzahl der Tropfen: {count}'],descriptions:['Zwei getrennte Wassertropfen mit jeweils 0,05 Millilitern.','Ein größerer Tropfen mit insgesamt 0,10 Millilitern.']},
    waterCaption:'Gesamte Wassermenge: unverändert, sofern nichts verloren geht.',
    totalVolume:'Gesamtvolumen: {volume} mL',
    openingDescription:'Ein Zählstein und ein weiterer Zählstein ergeben eine Sammlung von zwei verschiedenen Zählsteinen.',
    openingCaption:'Zwei Gegenstände. Eine Gleichung. Mehrere verborgene Annahmen.',
    collectionLabels:['2 Äpfel','2 Bücher','2 Sterne'],
    collectionCaption:'Drei Sammlungen mit jeweils zwei Elementen.',
    collectionDescription:'Äpfel, Bücher und Sterne unterscheiden sich physisch; jede Sammlung enthält zwei Elemente.',
    additionDescription:'Sammlung A enthält a; Sammlung B enthält einen anderen Gegenstand b. Die Vereinigung dieser disjunkten Sammlungen enthält zwei Elemente.',
    additionLabels:['A: eins','B: eins','Zusammen: zwei'],
    additionCaption:'Zwei disjunkte Sammlungen zusammenfassen.',
    symbolLabels:['Zahlzeichen','Operation','Zahlzeichen','Gleichheit','Zahlzeichen'],
    symbolCaption:'Zahlzeichen, eine Operation und eine Gleichheitsrelation.',
    symbolDescription:'In 1 + 1 = 2 sind 1 und 2 Zahlzeichen, + bezeichnet eine Operation und = drückt Gleichheit aus.',
    processTitle:'Die Struktur hinter einer einfachen Gleichung',
    processCaption:'Der gedankliche Prozess hinter einer einfachen Rechnung',
    processLabels:['Gegenstände beobachten','Relevante Eigenschaften abstrahieren','Mathematische Operationen anwenden','Mathematische Beziehungen ausdrücken'],
    processDetails:['Die Dinge in der Welt identifizieren','Entscheiden, was als eins zählt','Größen unter geeigneten Annahmen zusammenfassen','Präzise Aussagen über Werte treffen'],
  },
} satisfies Record<Locale, unknown>;
export function comparisonCopy(locale:Locale,preset:ReasoningPreset){
 const copy=reasoningCopy[locale][preset],states=reasoningChoices[preset].map(choice=>reasoningState(preset,choice));
 const fill=(text:string,i:number)=>text.replace('{count}',String(states[i].count));
 return {...copy,results:copy.results.map(fill),details:copy.details.map(fill)};
}
export function volumeCopy(locale:Locale){
 const volume=reasoningState('water','separate').volumeHundredths!/100;
 return reasoningCopy[locale].totalVolume.replace('{volume}',volume.toLocaleString(locale,{minimumFractionDigits:2,maximumFractionDigits:2}));
}
