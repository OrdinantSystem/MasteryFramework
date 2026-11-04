import type {Locale} from '../i18n';
import {algebraBounds,algebraState,type AlgebraPreset,partition} from '../interactive/algebra-model.ts';
export const algebraCopy={
 en:{
  tablesTitle:'One rule, many arrangements',groupingTitle:'Two chairs or two tables?',
  count:'Number of tables',number:'Tables — numeric input',reset:'Reset',
  help:'The control illustrates {min}–{max} tables. The rule applies to every nonnegative whole number of tables.',
  invalid:'Enter a whole number from {min} to {max}. The last valid arrangement is retained.',
  tableFeedback:'Tables: {n}. Chairs in table groups: {around}. Fixed extra chairs: {extras}. Total: {total}.',
  groupFeedback:'With {n} original tables, adding two chairs gives {total}; adding two complete tables gives {groupedTotal}. Difference: {difference} chairs.',
  tableAlt:'{n} tables with {perTable} chairs per table, plus {extras} separate chairs; {total} chairs altogether.',
  changedAlt:'{n} original tables and {extras} additional tables, each with {perTable} chairs; {groupedTotal} chairs altogether.',
  addChairs:'Add two chairs',addTables:'Add two tables',totalChairs:'Total chairs',
  roomTitle:'A room with an unknown number of tables',roomCaption:'A partial view: each complete table has three chairs, with two more chairs near the entrance.',
  roomAlt:'Three example table groups and a question mark hide the full table count; two separate chairs are fixed.',more:'More tables?',fourteen:'14 chairs?',fifteen:'15 chairs?',
  patternTitle:'What changes, and what stays fixed?',tables:'Tables',arrangement:'Chairs around tables + fixed extras',total:'Total',patternCaption:'Every new table contributes three chairs. The two extra chairs stay fixed.',
  impossibleTitle:'Testing the claim of fifteen chairs',impossibleCaption:'Complete groups satisfy the rule. An unmatched chair does not.',
  groupingSummary:'{grouped} in complete groups + {leftover} unmatched + {extras} fixed extras',
  groupingAlt:'{groups} complete groups of {size}, {leftover} unmatched object, and {extras} fixed extras.',
  noSolution:'No whole-number solution under this rule.',
  rolesTitle:'One letter, three roles',roles:['Variable','Unknown','Arbitrary number'],roleDetails:['Change the input','Find a solution','Reason for all allowed values'],rolesCaption:'The letter stays the same; the mathematical question changes.',
  domainsTitle:'The permitted inputs depend on what the symbol represents',whole:'Complete tables',time:'Elapsed time',domainsCaption:'The same numerical scale shows discrete counts above and continuous time values below. Fractional hours are meaningful; fractional complete tables are outside this model.',domainsAlt:'Whole counts zero through five are shown as separate dots; 2.5 is excluded. A continuous time interval on the same scale includes 1.5 hours.',
  feesTitle:'A fixed fee or a fee on every ticket?',booking:'One booking fee',perTicket:'A fee on every ticket',feesCaption:'Both purchases use three tickets. The scope of the fee changes the expression and the total.',bookingAlt:'Three tickets at five euros each and one separate one-euro booking fee.',ticketAlt:'Three tickets, each with a five-euro price and a one-euro fee.',
  heatingTitle:'A constant-rate heating model',heatingAlt:'A straight-line prediction from 18 degrees Celsius at time zero to 30 at six hours, with a dashed continuation. A point at 1.5 hours lies halfway between one and two hours.',heatingCaption:'Every point is a prediction from the assumed constant heating rate, not an experimental measurement. The dashed continuation asks whether that assumption still applies.',hours:'Time (h)',temperature:'Temperature (°C)',continuation:'Still valid?',
  candleTitle:'Could the warehouse contain exactly 24 candles?',candleCaption:'Five complete boxes and three loose candles would give 23. The claim of 24 leaves one candle outside the permitted complete groups.',
  domainTable:'Tables',domainTime:'Hours',
 },
 de:{
  tablesTitle:'Eine Regel, viele Anordnungen',groupingTitle:'Zwei Stühle oder zwei Tische?',
  count:'Anzahl der Tische',number:'Tische — Zahleneingabe',reset:'Zurücksetzen',
  help:'Die Steuerung zeigt {min}–{max} Tische. Die Regel gilt für jede nichtnegative ganze Anzahl von Tischen.',
  invalid:'Gib eine ganze Zahl von {min} bis {max} ein. Die letzte gültige Anordnung bleibt erhalten.',
  tableFeedback:'Tische: {n}. Stühle in Tischgruppen: {around}. Feste zusätzliche Stühle: {extras}. Insgesamt: {total}.',
  groupFeedback:'Bei {n} ursprünglichen Tischen ergeben zwei zusätzliche Stühle {total}, zwei vollständige zusätzliche Tische dagegen {groupedTotal}. Unterschied: {difference} Stühle.',
  tableAlt:'{n} Tische mit jeweils {perTable} Stühlen sowie {extras} getrennte Stühle; insgesamt {total} Stühle.',
  changedAlt:'{n} ursprüngliche und {extras} zusätzliche Tische mit jeweils {perTable} Stühlen; insgesamt {groupedTotal} Stühle.',
  addChairs:'Zwei Stühle hinzufügen',addTables:'Zwei Tische hinzufügen',totalChairs:'Stühle insgesamt',
  roomTitle:'Ein Raum mit unbekannter Tischanzahl',roomCaption:'Ein Ausschnitt: Zu jedem vollständigen Tisch gehören drei Stühle, am Eingang stehen zwei weitere.',
  roomAlt:'Drei beispielhafte Tischgruppen und ein Fragezeichen verbergen die vollständige Anzahl; zwei getrennte Stühle bleiben fest.',more:'Weitere Tische?',fourteen:'14 Stühle?',fifteen:'15 Stühle?',
  patternTitle:'Was ändert sich, was bleibt fest?',tables:'Tische',arrangement:'Stühle an Tischen + feste zusätzliche Stühle',total:'Insgesamt',patternCaption:'Jeder weitere Tisch bringt drei Stühle hinzu. Die zwei zusätzlichen Stühle bleiben fest.',
  impossibleTitle:'Die Behauptung von fünfzehn Stühlen prüfen',impossibleCaption:'Vollständige Gruppen erfüllen die Regel. Ein übrig gebliebener Stuhl nicht.',
  groupingSummary:'{grouped} in vollständigen Gruppen + {leftover} übrig + {extras} feste zusätzliche',
  groupingAlt:'{groups} vollständige Gruppen zu {size}, {leftover} einzelner Gegenstand und {extras} feste zusätzliche.',
  noSolution:'Unter dieser Regel gibt es keine ganzzahlige Lösung.',
  rolesTitle:'Ein Buchstabe, drei Rollen',roles:['Variable','Unbekannte','Beliebige Zahl'],roleDetails:['Die Eingabe verändern','Eine Lösung finden','Für alle zulässigen Werte argumentieren'],rolesCaption:'Der Buchstabe bleibt gleich; die mathematische Frage ändert sich.',
  domainsTitle:'Die zulässigen Eingaben hängen davon ab, was das Zeichen beschreibt',whole:'Vollständige Tische',time:'Vergangene Zeit',domainsCaption:'Dieselbe Zahlenskala zeigt oben einzelne Anzahlen und unten kontinuierliche Zeitwerte. Bruchteile von Stunden sind sinnvoll; Bruchteile vollständiger Tische liegen außerhalb dieses Modells.',domainsAlt:'Die ganzen Anzahlen null bis fünf sind einzelne Punkte; 2,5 ist ausgeschlossen. Ein kontinuierliches Zeitintervall auf derselben Skala enthält 1,5 Stunden.',
  feesTitle:'Eine feste Gebühr oder eine Gebühr pro Ticket?',booking:'Eine Buchungsgebühr',perTicket:'Eine Gebühr pro Ticket',feesCaption:'Bei beiden Käufen sind es drei Tickets. Der Geltungsbereich der Gebühr verändert den Ausdruck und den Gesamtpreis.',bookingAlt:'Drei Tickets zu je fünf Euro und eine getrennte Buchungsgebühr von einem Euro.',ticketAlt:'Drei Tickets mit jeweils fünf Euro Preis und einem Euro Gebühr.',
  heatingTitle:'Ein Heizmodell mit konstanter Rate',heatingAlt:'Eine geradlinige Vorhersage von 18 Grad Celsius zum Zeitpunkt null auf 30 nach sechs Stunden, mit gestrichelter Fortsetzung. Der Punkt bei 1,5 Stunden liegt mittig zwischen einer und zwei Stunden.',heatingCaption:'Jeder Punkt ist eine Vorhersage aus der angenommenen konstanten Heizrate, keine experimentelle Messung. Die gestrichelte Fortsetzung fragt, ob diese Annahme weiterhin gilt.',hours:'Zeit (h)',temperature:'Temperatur (°C)',continuation:'Weiterhin gültig?',
  candleTitle:'Können im Lager genau 24 Kerzen sein?',candleCaption:'Fünf vollständige Schachteln und drei lose Kerzen ergäben 23. Bei der Behauptung von 24 bleibt eine Kerze außerhalb der zulässigen vollständigen Gruppen übrig.',
  domainTable:'Tische',domainTime:'Stunden',
 },
} satisfies Record<Locale,unknown>;
export function interpolate(text:string,values:Record<string,unknown>){return text.replace(/\{(\w+)\}/g,(_,key)=>{if(!(key in values))throw new Error(`Missing algebra copy value ${key}`);return String(values[key]);});}
export function algebraLabCopy(locale:Locale,preset:AlgebraPreset,n:number){
 const c=algebraCopy[locale],s=algebraState(preset,n);
 return {...c,title:preset==='tables'?c.tablesTitle:c.groupingTitle,helpText:interpolate(c.help,algebraBounds),invalidText:interpolate(c.invalid,algebraBounds),feedback:interpolate(preset==='tables'?c.tableFeedback:c.groupFeedback,s),originalDescription:interpolate(c.tableAlt,s),changedDescription:interpolate(c.changedAlt,s)};
}
export function groupingCopy(locale:Locale,puzzle:ReturnType<typeof partition>){
 const c=algebraCopy[locale],values={...puzzle,grouped:puzzle.groups*puzzle.size};
 return {summary:interpolate(c.groupingSummary,values),description:interpolate(c.groupingAlt,values)};
}
