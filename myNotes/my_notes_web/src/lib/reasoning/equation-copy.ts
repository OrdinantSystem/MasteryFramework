import type {Locale} from '../i18n';
import {equationState,equationPresets,type EquationPreset} from '../interactive/equation-model.ts';
export const equationCopy={
 en:{reset:'Reset',number:'x — numeric input',range:'Value of x',true:'True',false:'False',original:'Original equation',after:'After squaring',identity:'Identity',solve:'Equation to solve',divide:'Attempted division by x',
  one:'One possible value',two:'Two possible values',solution:'Solution',excluded:'Excluded by the condition',real:'All examples use real numbers.',math:'Mathematical expression',
  titles:{stones:'Two arrangements of the same seven stones',balance:'Remove the same mass from both sides',identity:'An identity and an equation to solve',square:'Explore the squaring function',restriction:'Can we recover the original value?',division:'Find the hidden restriction',distance:'Explore the distance from 3'},
  choices:{stones:['3 + 4','2 + 5'],balance:['Before removing 3 kg','After removing 3 kg'],restriction:['Allow all real values','Require $x\\geq0$'],division:['Try $x=0$','Try $x=2$']},
  staticTitle:'Squaring changes the permitted solutions',staticCaption:'Over the real numbers, squaring preserves the forward implication and admits an extra solution. The reverse implication needs an additional condition.',
  help:'The controls illustrate {min} to {max}, in steps of {step}. The mathematical relationship is not limited to these samples.',
  invalid:'Enter a value from {min} to {max} in steps of {step}. The last valid state is retained.',
  stonesFeedback:'{firstGroup} + {secondGroup} = 7. The grouping changes; all seven stones remain.',
  balanceFeedback:['Both sides are balanced. The box mass, measured numerically in kilograms, is x; three more kilograms bring the total to eight.','Removing three kilograms from each side leaves $x=5$. Adding three back reverses the step, so the solutions are preserved.'],
  identityFeedback:'At $x={value}$, the identity compares {left} with {right}; the equation $x+3=8$ is {verdict}. The identity holds for every real x by commutativity of addition, not because these samples prove it.',
  squareFeedback:'$x={value}$ and $x={opposite}$ both give {squared}. When x is nonzero, squaring loses the sign; at zero the two marked inputs coincide.',
  restrictionFeedback:['The equation $x^2=4$ permits −2 and 2. It does not imply $x=2$ over all real numbers.','The condition $x\\geq0$ excludes −2. Under this condition, $x^2=4$ is equivalent to $x=2$.'],
  divisionFeedback:['Zero satisfies the original equation. Dividing by x would divide by zero, so that step is undefined and cannot discard this solution.','Two satisfies the original equation, and division by two is defined. This case does not remove the need to check $x=0$ separately.'],
  undefined:'Undefined: division by zero',defined:'Defined because x ≠ 0',originalSatisfied:'The original equation is satisfied.',
  distanceFeedback:'$x={value}$ is {distance} units from 3. The equation $|x-3|=2$ is {verdict}. Both 1 and 5 solve the original distance equation.',
  tryNegative:'Try $x=-2$',tryPositive:'Try $x=2$',tryOne:'Try $x=1$',tryFive:'Try $x=5$',
  squareAlt:'The graph y = x² marks x={value} and its opposite {opposite} at the same output {squared}.',
  distanceAlt:'On a number line, x={value} is marked {distance} units from the fixed point 3.',
  stonesAlt:'Seven stones in two groups: {firstGroup} and {secondGroup}.',balanceAlt:['A balanced scale with x plus 3 kilograms on the left and 8 kilograms on the right.','A balanced scale after subtracting 3 kilograms from both sides: x and 5 kilograms.'],
 },
 de:{reset:'Zurücksetzen',number:'x — Zahleneingabe',range:'Wert von x',true:'Wahr',false:'Falsch',original:'Ursprüngliche Gleichung',after:'Nach dem Quadrieren',identity:'Identität',solve:'Zu lösende Gleichung',divide:'Versuchte Division durch x',
  one:'Ein möglicher Wert',two:'Zwei mögliche Werte',solution:'Lösung',excluded:'Durch die Bedingung ausgeschlossen',real:'Alle Beispiele verwenden reelle Zahlen.',math:'Mathematischer Ausdruck',
  titles:{stones:'Zwei Anordnungen derselben sieben Steine',balance:'Auf beiden Seiten dieselbe Masse entfernen',identity:'Eine Identität und eine zu lösende Gleichung',square:'Die Quadratfunktion erkunden',restriction:'Können wir den ursprünglichen Wert zurückgewinnen?',division:'Die versteckte Einschränkung finden',distance:'Den Abstand von 3 erkunden'},
  choices:{stones:['3 + 4','2 + 5'],balance:['Vor dem Entfernen von 3 kg','Nach dem Entfernen von 3 kg'],restriction:['Alle reellen Werte zulassen','$x\\geq0$ voraussetzen'],division:['$x=0$ ausprobieren','$x=2$ ausprobieren']},
  staticTitle:'Quadrieren verändert die zulässigen Lösungen',staticCaption:'Über den reellen Zahlen bleibt beim Quadrieren die Folgerung nach vorn erhalten, eine zusätzliche Lösung kommt aber hinzu. Für die umgekehrte Folgerung ist eine weitere Bedingung nötig.',
  help:'Die Steuerung zeigt {min} bis {max} in Schritten von {step}. Die mathematische Beziehung ist nicht auf diese Beispiele beschränkt.',
  invalid:'Gib einen Wert von {min} bis {max} in Schritten von {step} ein. Der letzte gültige Zustand bleibt erhalten.',
  stonesFeedback:'{firstGroup} + {secondGroup} = 7. Die Gruppierung ändert sich; alle sieben Steine bleiben erhalten.',
  balanceFeedback:['Beide Seiten sind im Gleichgewicht. Die Masse der Schachtel in Kilogramm wird durch x bezeichnet; drei weitere Kilogramm ergeben insgesamt acht.','Auf beiden Seiten drei Kilogramm zu entfernen ergibt $x=5$. Addieren wir drei zurück, kehren wir den Schritt um: Die Lösungen bleiben erhalten.'],
  identityFeedback:'Bei $x={value}$ vergleicht die Identität {left} mit {right}; die Gleichung $x+3=8$ ist {verdict}. Die Identität gilt wegen der Kommutativität der Addition für jedes reelle x; diese Beispiele allein beweisen das nicht.',
  squareFeedback:'$x={value}$ und $x={opposite}$ ergeben beide {squared}. Für x ungleich null geht beim Quadrieren das Vorzeichen verloren; bei null fallen die beiden markierten Eingaben zusammen.',
  restrictionFeedback:['Die Gleichung $x^2=4$ lässt −2 und 2 zu. Über allen reellen Zahlen folgt daraus nicht $x=2$.','Die Bedingung $x\\geq0$ schließt −2 aus. Unter dieser Bedingung ist $x^2=4$ äquivalent zu $x=2$.'],
  divisionFeedback:['Null erfüllt die ursprüngliche Gleichung. Eine Division durch x wäre eine Division durch null. Dieser Schritt ist undefiniert und darf die Lösung nicht verwerfen.','Zwei erfüllt die ursprüngliche Gleichung, und eine Division durch zwei ist definiert. Trotzdem muss $x=0$ gesondert geprüft werden.'],
  undefined:'Undefiniert: Division durch null',defined:'Definiert, weil x ≠ 0',originalSatisfied:'Die ursprüngliche Gleichung ist erfüllt.',
  distanceFeedback:'$x={value}$ liegt {distance} Einheiten von 3 entfernt. Die Gleichung $|x-3|=2$ ist {verdict}. Sowohl 1 als auch 5 lösen die ursprüngliche Abstandsgleichung.',
  tryNegative:'$x=-2$ ausprobieren',tryPositive:'$x=2$ ausprobieren',tryOne:'$x=1$ ausprobieren',tryFive:'$x=5$ ausprobieren',
  squareAlt:'Der Graph y = x² markiert x={value} und den Gegenwert {opposite} bei derselben Ausgabe {squared}.',
  distanceAlt:'Auf einer Zahlengeraden ist x={value} im Abstand {distance} vom festen Punkt 3 markiert.',
  stonesAlt:'Sieben Steine in zwei Gruppen: {firstGroup} und {secondGroup}.',balanceAlt:['Eine ausgeglichene Waage mit x plus 3 Kilogramm links und 8 Kilogramm rechts.','Eine ausgeglichene Waage nach dem Abziehen von 3 Kilogramm auf beiden Seiten: x und 5 Kilogramm.'],
 },
} as const;
export function equationText(text:string,values:Record<string,unknown>){return text.replace(/\{(\w+)\}/g,(_,key)=>{if(!(key in values))throw new Error('Missing equation copy value '+key);return String(values[key]);});}
export function equationFeedback(locale:Locale,preset:EquationPreset,value:number){
 const c=equationCopy[locale],s=equationState(preset,value),values={...s,verdict:(preset==='identity'?s.balanceTrue:s.distanceTrue)?c.true:c.false};
 const text=preset==='stones'?c.stonesFeedback:preset==='balance'?c.balanceFeedback[value as 0|1]:preset==='identity'?c.identityFeedback:preset==='square'?c.squareFeedback:preset==='restriction'?c.restrictionFeedback[value as 0|1]:preset==='division'?c.divisionFeedback[value===0?0:1]:c.distanceFeedback;
 return equationText(text,Object.fromEntries(Object.entries(values).map(([key,v])=>[key,typeof v==='number'?v.toLocaleString(locale,{maximumFractionDigits:4,useGrouping:false}):v]))).replace(/\$([^$]+)\$/g,(_,tex)=>'$'+tex.replace(/(\d),(\d)/g,'$1{,}$2')+'$');
}
export function equationHelp(locale:Locale,preset:EquationPreset,invalid=false){
 const spec=equationPresets[preset],c=equationCopy[locale];
 return 'min' in spec?equationText(invalid?c.invalid:c.help,Object.fromEntries(Object.entries(spec).map(([k,v])=>[k,v.toLocaleString(locale)]))):'';
}
