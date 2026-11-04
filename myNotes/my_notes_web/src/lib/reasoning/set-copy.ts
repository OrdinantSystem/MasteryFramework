import type {Locale} from '../i18n';
export const setCopy={
 en:{
  objects:{description:'Two distinct counters named a and b; the letters label the objects.',caption:'Letters name the objects; they do not turn them into numbers.'},
  singleton:{description:'A large boundary labeled A contains one counter labeled a.',caption:'The boundary represents set A. The counter a is its only element.'},
  singletons:{description:'Set A contains only a, and set B contains only the distinct object b.',caption:'Each boundary encloses one element.'},
  union:{description:'The two disjoint singleton sets A and B combine into a union containing a and b.',caption:'The union contains both distinct elements.'},
  matching:{description:'Three round elements of A are paired with three square elements of B. Each element has exactly one partner.',caption:'Every element has exactly one partner, and nothing remains unmatched.'},
  overlap:{description:'Alex belongs only to A, Sam belongs to both A and B, and Jo belongs only to B.',caption:'Sam belongs to both groups and appears once in the union.'},
  pairs:{description:'An outer set P contains two inner sets. Each inner set contains a left shoe and its matching right shoe.',caption:'Two inner sets are the two elements of P; together they contain four shoes.'},
  function:{description:'Addition maps the ordered pairs (1,1), (2,3), and (4,0) to 2, 5, and 4 respectively.',caption:'Each input pair has exactly one sum.'},
  first:'First object',second:'Second object',setA:'Set A',setB:'Set B',firstPair:'First pair',secondPair:'Second pair',input:'Input pairs',output:'Output numbers',people:'{count} distinct people',
 },
 de:{
  objects:{description:'Zwei verschiedene Zählsteine heißen a und b; die Buchstaben bezeichnen die Gegenstände.',caption:'Buchstaben benennen die Gegenstände; sie machen daraus keine Zahlen.'},
  singleton:{description:'Eine große Grenze mit der Bezeichnung A umschließt einen Zählstein a.',caption:'Die Grenze stellt die Menge A dar. Der Zählstein a ist ihr einziges Element.'},
  singletons:{description:'Die Menge A enthält nur a und die Menge B nur den anderen Gegenstand b.',caption:'Jede Grenze umschließt ein Element.'},
  union:{description:'Die beiden disjunkten einelementigen Mengen A und B werden zur Vereinigung mit a und b zusammengefasst.',caption:'Die Vereinigung enthält beide verschiedenen Elemente.'},
  matching:{description:'Drei runde Elemente von A werden drei quadratischen Elementen von B zugeordnet. Jedes Element hat genau einen Partner.',caption:'Jedes Element hat genau einen Partner, und keines bleibt übrig.'},
  overlap:{description:'Alex gehört nur zu A, Sam zu A und B und Jo nur zu B.',caption:'Sam gehört zu beiden Gruppen und erscheint in der Vereinigung einmal.'},
  pairs:{description:'Die äußere Menge P enthält zwei innere Mengen. Jede enthält einen linken Schuh und den passenden rechten Schuh.',caption:'Die beiden inneren Mengen sind die zwei Elemente von P; zusammen enthalten sie vier Schuhe.'},
  function:{description:'Die Addition ordnet den geordneten Paaren (1,1), (2,3) und (4,0) die Zahlen 2, 5 und 4 zu.',caption:'Jedes Eingabepaar hat genau eine Summe.'},
  first:'Erster Gegenstand',second:'Zweiter Gegenstand',setA:'Menge A',setB:'Menge B',firstPair:'Erstes Paar',secondPair:'Zweites Paar',input:'Eingabepaare',output:'Ausgabezahlen',people:'{count} verschiedene Personen',
 },
} satisfies Record<Locale,unknown>;
export type SetFigureKind='objects'|'singleton'|'singletons'|'union'|'matching'|'overlap'|'pairs'|'function';
