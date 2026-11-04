import type {Locale} from '../i18n';
import {machineValue,continuationState,testState,type PatternFigureKind,type PatternPreset} from '../interactive/patterns-model.ts';
export const patternsCopy={
 en:{
  titles:{'pattern-history':'Five observed rounds','pattern-machines':'Same history, different next rounds','pattern-rules':'Two rules compatible with the observations','pattern-test':'A test that separates these two rules','pattern-forecasts':'Two possible futures for the same hypothetical history','pattern-challenge':'A new sequence, the same question'},
  labTitle:'Two rules, one observed history',testTitle:'Which round would distinguish the rules?',
  round:'Round',week:'Week',lights:'Lights',views:'Weekly views',start:'Start',observed:'Observed',predicted:'Predicted',ruleA:'Rule A',ruleB:'Rule B',reset:'Reset',values:'View numerical values',through:'Through {n}',observedFive:'Observed 5',
  historyCaption:'Only these five rounds have been observed. The recording ends before the next round.',
  machineA:'Machine A · always doubles',machineB:'Machine B · doubles, then changes mode',roundSix:'Round 6',
  machineCaption:'These are predictions under two specified rules. They are not new observations of the original machine.',
  simple:'A · Simple continuation',change:'B · A rule with a change',simpleDetail:'One short rule describes every round.',changeDetail:'An extra condition specifies a change after round five.',rulesCaption:'The domain is the positive integers: n = 1, 2, 3, … . A simpler description is a guide, not a guarantee of the generating process.',
  observeSix:'Observe round 6',outcome:'{n} lights',ruleBOut:'Rule B is ruled out.',ruleAOut:'Rule A is ruled out.',ruleAPossible:'Rule A remains possible.',ruleBPossible:'Rule B remains possible.',testCaption:'The outcome can rule out one candidate. It does not prove the surviving rule for every future round; another outcome could rule out both.',
  forecastCaption:'Illustrative data, not actual channel performance. Weeks 1–4 are hypothetical observations; weeks 5–6 are two possible forecasts.',continues:'Growth continues',slows:'Growth slows',
  challengeCaption:'Four terms have been supplied. A rule for the next term has not been specified.',
  chartAlt:'Rounds 1–5 have the common observed counts 2, 4, 8, 16, 32. Later bars compare hypothetical predictions through round {n}.',
  forecastAlt:'Both hypothetical histories have weekly views 100, 150, 220, 320. Continuing growth then gives 460 and 660; slowing gives 250 and 220.',
  chartNote:'The first five terms agree exactly. Everything afterward is a hypothetical prediction. The vertical scale stays fixed.',
  same:'So far, the evidence cannot distinguish the two rules.',different:'At round {n}, A predicts {a} and B predicts {b}. This is a comparison of possible futures, not evidence that either occurred.',
  choose:'Choose a round and compare what the two rules predict.',tryRound:'Observe round {n}',testSame:'At round {round}, both rules give {a}. Repeating this observation would not distinguish A from B.',testDifferent:'At round {round}, A gives {a} and B gives {b}. This test distinguishes these two candidates; it cannot prove a rule correct forever.',
  tableCaption:'Rule values: rows 1–5 match the observed record; later rows are hypothetical predictions.',status:'Status',testPrompt:'Choose one round to test the two specified machine rules. Your selection stays on this page.',
 },
 de:{
  titles:{'pattern-history':'Fünf beobachtete Durchläufe','pattern-machines':'Gleiche Vergangenheit, unterschiedliche nächste Werte','pattern-rules':'Zwei Regeln passen zu den Beobachtungen','pattern-test':'Ein Test, der diese beiden Regeln unterscheidet','pattern-forecasts':'Zwei mögliche Zukünfte derselben hypothetischen Vergangenheit','pattern-challenge':'Eine neue Folge, dieselbe Frage'},
  labTitle:'Zwei Regeln, eine beobachtete Vergangenheit',testTitle:'Welcher Durchlauf würde die Regeln unterscheiden?',
  round:'Durchlauf',week:'Woche',lights:'Lichter',views:'Wöchentliche Aufrufe',start:'Start',observed:'Beobachtet',predicted:'Vorhergesagt',ruleA:'Regel A',ruleB:'Regel B',reset:'Zurücksetzen',values:'Zahlenwerte anzeigen',through:'Bis {n}',observedFive:'5 beobachtete',
  historyCaption:'Beobachtet wurden nur diese fünf Durchläufe. Die Aufnahme endet vor dem nächsten.',
  machineA:'Maschine A · verdoppelt immer',machineB:'Maschine B · verdoppelt und wechselt dann den Modus',roundSix:'Durchlauf 6',
  machineCaption:'Dies sind Vorhersagen unter zwei festgelegten Regeln, keine neuen Beobachtungen der ursprünglichen Maschine.',
  simple:'A · Einfache Fortsetzung',change:'B · Eine Regel mit einem Wechsel',simpleDetail:'Eine kurze Regel beschreibt jeden Durchlauf.',changeDetail:'Eine zusätzliche Bedingung legt den Wechsel nach dem fünften Durchlauf fest.',rulesCaption:'Der Definitionsbereich sind die positiven ganzen Zahlen: n = 1, 2, 3, … . Eine einfachere Beschreibung ist eine Orientierungshilfe, keine Garantie für den erzeugenden Prozess.',
  observeSix:'Durchlauf 6 beobachten',outcome:'{n} Lichter',ruleBOut:'Regel B ist ausgeschlossen.',ruleAOut:'Regel A ist ausgeschlossen.',ruleAPossible:'Regel A bleibt möglich.',ruleBPossible:'Regel B bleibt möglich.',testCaption:'Das Ergebnis kann eine der Regeln ausschließen. Es beweist die verbleibende Regel nicht für alle zukünftigen Durchläufe; ein anderes Ergebnis könnte beide ausschließen.',
  forecastCaption:'Illustrative Daten, keine tatsächlichen Kanalergebnisse. Die Wochen 1–4 sind hypothetische Beobachtungen; die Wochen 5–6 zeigen zwei mögliche Prognosen.',continues:'Wachstum setzt sich fort',slows:'Wachstum lässt nach',
  challengeCaption:'Vier Glieder sind gegeben. Eine Regel für das nächste Glied wurde nicht festgelegt.',
  chartAlt:'Die Durchläufe 1–5 haben die gemeinsamen beobachteten Anzahlen 2, 4, 8, 16, 32. Weitere Balken vergleichen hypothetische Vorhersagen bis Durchlauf {n}.',
  forecastAlt:'Beide hypothetischen Verläufe haben wöchentliche Aufrufe von 100, 150, 220, 320. Anhaltendes Wachstum ergibt dann 460 und 660; nachlassendes Wachstum 250 und 220.',
  chartNote:'Die ersten fünf Glieder stimmen genau überein. Alles danach ist eine hypothetische Vorhersage. Die vertikale Skala bleibt fest.',
  same:'Bis hierhin können die Daten die beiden Regeln nicht unterscheiden.',different:'Bei Durchlauf {n} sagt A den Wert {a} und B den Wert {b} voraus. Das vergleicht mögliche Zukünfte und belegt nicht, dass eine davon eingetreten ist.',
  choose:'Wähle einen Durchlauf und vergleiche die Vorhersagen der beiden Regeln.',tryRound:'Durchlauf {n} beobachten',testSame:'Bei Durchlauf {round} liefern beide Regeln {a}. Diese Beobachtung zu wiederholen würde A und B nicht unterscheiden.',testDifferent:'Bei Durchlauf {round} liefert A den Wert {a} und B den Wert {b}. Dieser Test unterscheidet die beiden Kandidaten; er kann keine Regel für immer beweisen.',
  tableCaption:'Regelwerte: Die Zeilen 1–5 passen zur beobachteten Aufzeichnung; spätere Zeilen sind hypothetische Vorhersagen.',status:'Status',testPrompt:'Wähle einen Durchlauf, um die beiden festgelegten Maschinenregeln zu testen. Deine Auswahl bleibt auf dieser Seite.',
 },
} as const;
export function patternText(text:string,values:Record<string,unknown>){return text.replace(/\{(\w+)\}/g,(_,key)=>{if(!(key in values))throw new Error('Missing pattern copy '+key);return String(values[key]);});}
export function patternFeedback(locale:Locale,preset:PatternPreset,value:number){
 const c=patternsCopy[locale];
 if(preset==='next-test'){const state=testState(value);return value===0?c.choose:patternText(state.distinguishes?c.testDifferent:c.testSame,state);}
 continuationState(value);return value===5?c.same:patternText(c.different,{n:value,a:machineValue('A',value),b:machineValue('B',value)});
}
export const patternTitle=(locale:Locale,kind:PatternFigureKind)=>patternsCopy[locale].titles[kind];
