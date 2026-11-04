import type {Locale} from '../i18n';
import {parityState} from '../interactive/parity-model.ts';
export const proofCopy={
 en:{
  even:'Even',observation:'OBSERVATION',claim:'GENERAL CLAIM',checked:'Every case I checked worked.',evidence:'Evidence from individual examples.',every:'Every possible case works.',infinite:'A claim about an infinite collection.',
  eight:'8 COUNTERS',seven:'7 COUNTERS',fourPairs:'4 complete pairs',threeLeft:'3 pairs + 1 left over',generalPairs:'a pairs, with 2 counters in each pair',
  explore:'EXPLORE THE PICTURE',separate:'Two collections',combine:'Combine them',blue:'Blue pairs',gold:'Gold pairs',reset:'Reset',number:'Numeric entry',empty:'0 pairs',
  help:"Change either number of pairs or combine the collections. The individual counters don't change; only how we group them does.",bounds:'The drawing allows 0–6 pairs in each collection. The general proof is not limited to this range.',invalid:'Enter a whole number from 0 to 6. The previous collection is retained.',
  aPairs:'a complete pairs',bPairs:'b complete pairs',abPairs:'a + b complete pairs',first:'First number',second:'Second number',follow:'FOLLOW THE PROOF',twoGroups:'Two groups of pairs',twice:'Two times the total number of pairs',integer:'Because a + b is an integer',
  line:'EVEN INTEGERS EXTEND IN BOTH DIRECTIONS',lineCaption:'The highlighted integers are all multiples of 2',lineDescription:'Number line from −6 to 6; −6, −4, −2, 0, 2, 4 and 6 are highlighted as multiples of two. Arrows extend in both directions.',
  five:'5 = 2 pairs + 1',sevenOdd:'7 = 3 pairs + 1',leftovers:'Combine the leftovers',sixPairs:'6 complete pairs',newPair:'The two leftovers form one additional pair',
  key:'THE KEY DISTINCTION',particular:'Particular cases',arbitrary:'Arbitrary cases',more:'More checks, more evidence',rule:'One justified general rule',
  examples:'Examples',pattern:'Visual pattern',relationship:'General relationship',proof:'A justified proof',assumptions:'The relationship applies to every object satisfying the assumptions.',
  evidenceDescription:'Five checked examples followed by untested cases, compared with a claim about every possible case.',pairDescription:'Eight counters form four complete pairs. Seven counters form three pairs with one left over.',templateDescription:'The first collection has a pairs, the second b pairs. Combining them gives a + b complete pairs, or 2(a + b) counters.',oddDescription:'Five counters and seven counters each have one leftover. Those two leftovers form a new pair, giving six complete pairs.',
 },
 de:{
  even:'Gerade',observation:'BEOBACHTUNG',claim:'ALLGEMEINE BEHAUPTUNG',checked:'Jeder überprüfte Fall hat funktioniert.',evidence:'Belege aus einzelnen Beispielen.',every:'Jeder mögliche Fall funktioniert.',infinite:'Eine Behauptung über unendlich viele Fälle.',
  eight:'8 ZÄHLSTEINE',seven:'7 ZÄHLSTEINE',fourPairs:'4 vollständige Paare',threeLeft:'3 Paare + 1 übrig',generalPairs:'a Paare mit je 2 Zählsteinen',
  explore:'DAS BILD ERKUNDEN',separate:'Zwei Sammlungen',combine:'Zusammenführen',blue:'Blaue Paare',gold:'Goldene Paare',reset:'Zurücksetzen',number:'Zahleneingabe',empty:'0 Paare',
  help:'Ändere die Anzahl der Paare oder führe die Sammlungen zusammen. Die einzelnen Zählsteine bleiben gleich; nur ihre Gruppierung ändert sich.',bounds:'Die Zeichnung erlaubt jeweils 0–6 Paare. Der allgemeine Beweis ist nicht auf diesen Bereich beschränkt.',invalid:'Gib eine ganze Zahl von 0 bis 6 ein. Die bisherige Sammlung bleibt erhalten.',
  aPairs:'a vollständige Paare',bPairs:'b vollständige Paare',abPairs:'a + b vollständige Paare',first:'Erste Zahl',second:'Zweite Zahl',follow:'DEN BEWEIS NACHVOLLZIEHEN',twoGroups:'Zwei Gruppen von Paaren',twice:'Zweimal die Gesamtzahl der Paare',integer:'Weil a + b eine ganze Zahl ist',
  line:'GERADE GANZE ZAHLEN IN BEIDEN RICHTUNGEN',lineCaption:'Die hervorgehobenen ganzen Zahlen sind alle Vielfache von 2',lineDescription:'Zahlengerade von −6 bis 6; −6, −4, −2, 0, 2, 4 und 6 sind als Vielfache von zwei hervorgehoben. Pfeile weisen in beide Richtungen weiter.',
  five:'5 = 2 Paare + 1',sevenOdd:'7 = 3 Paare + 1',leftovers:'Die übrigen Zählsteine zusammenführen',sixPairs:'6 vollständige Paare',newPair:'Die beiden übrigen Zählsteine bilden ein zusätzliches Paar',
  key:'DER ENTSCHEIDENDE UNTERSCHIED',particular:'Einzelne Fälle',arbitrary:'Beliebige Fälle',more:'Mehr Prüfungen, mehr Belege',rule:'Eine begründete allgemeine Regel',
  examples:'Beispiele',pattern:'Visuelles Muster',relationship:'Allgemeiner Zusammenhang',proof:'Ein begründeter Beweis',assumptions:'Der Zusammenhang gilt für jedes Objekt, das die Voraussetzungen erfüllt.',
  evidenceDescription:'Fünf überprüfte Beispiele und weitere ungeprüfte Fälle im Vergleich zu einer Behauptung über jeden möglichen Fall.',pairDescription:'Acht Zählsteine bilden vier vollständige Paare. Sieben Zählsteine bilden drei Paare, einer bleibt übrig.',templateDescription:'Die erste Sammlung hat a Paare, die zweite b Paare. Zusammen ergeben sie a + b vollständige Paare, also 2(a + b) Zählsteine.',oddDescription:'Bei fünf und bei sieben Zählsteinen bleibt jeweils einer übrig. Die beiden übrigen bilden ein neues Paar; insgesamt entstehen sechs vollständige Paare.',
 }
} as const;
export function parityReadout(locale:Locale,blue:number,gold:number,combined:boolean){
 const s=parityState(blue,gold,combined),de=locale==='de';
 return {
  blue:de?`${blue} blaue Paare`:`${blue} blue pairs`,gold:de?`${gold} goldene Paare`:`${gold} gold pairs`,
  pairs:de?`${blue} + ${gold} = ${s.pairs} Paare`:`${blue} + ${gold} = ${s.pairs} pairs`,
  description:de?`${s.x} blaue und ${s.y} goldene Zählsteine in ${s.pairs} vollständigen Paaren. ${combined?'Zusammengeführt.':'Zwei getrennte Sammlungen.'}`:`${s.x} blue counters and ${s.y} golden counters in ${s.pairs} complete pairs. ${combined?'Combined.':'Two separate collections.'}`,
  feedback:de?`${s.x} + ${s.y} = ${s.sum}: ${s.pairs} vollständige Paare, kein Zählstein bleibt übrig. ${combined?'Die Sammlungen sind zusammengeführt.':'Die Sammlungen sind getrennt.'}`:`${s.x} + ${s.y} = ${s.sum}: ${s.pairs} complete pairs, no counter left over. ${combined?'The collections are combined.':'The collections are separate.'}`,
  tex:String.raw`\colA{${s.x}}+\colC{${s.y}}=\colResult{${s.sum}}`,
 };
}
