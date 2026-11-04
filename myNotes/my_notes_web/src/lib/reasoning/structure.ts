import type {Locale} from '../i18n';
type Node={label:string;tex:string;detail:string};
const tex=[String.raw`\colA{\bullet}\quad\colB{\bullet}`,String.raw`A=\{a\},\quad B=\{b\}`,String.raw`|A|=1,\quad |B|=1`,String.raw`|A\cup B|=|A|+|B|`,String.raw`\boxed{1+1=2}`];
export const structureNodes:Record<Locale,Node[]>={
 en:[
  {label:'Physical objects',tex:tex[0],detail:'Two distinct counters'},
  {label:'Mathematical representation',tex:tex[1],detail:'Choose elements and define sets'},
  {label:'Cardinality',tex:tex[2],detail:'Count the elements of each set'},
  {label:'Combine disjoint collections',tex:tex[3],detail:'Relate set union to numerical addition'},
  {label:'Mathematical equality',tex:tex[4],detail:'Both expressions represent the same number'},
 ],
 de:[
  {label:'Physische Gegenstände',tex:tex[0],detail:'Zwei verschiedene Zählsteine'},
  {label:'Mathematische Darstellung',tex:tex[1],detail:'Elemente wählen und Mengen definieren'},
  {label:'Mächtigkeit',tex:tex[2],detail:'Die Elemente jeder Menge zählen'},
  {label:'Disjunkte Sammlungen zusammenfassen',tex:tex[3],detail:'Mengenvereinigung mit der Addition von Zahlen verbinden'},
  {label:'Mathematische Gleichheit',tex:tex[4],detail:'Beide Ausdrücke stellen dieselbe Zahl dar'},
 ],
};
