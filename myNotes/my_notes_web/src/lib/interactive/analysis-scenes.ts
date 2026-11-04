import {escapeSvg, number} from './plane.ts';
import {renderMathText} from '../math-text.ts';
import {analysisCopy, analysisTeachingCopy} from './analysis-copy.ts';
import {candidatePass, conditionState, domains, lineResult, quantify, relationSummary, sequenceTail, sequenceValue, type CandidatePreset, type ConditionPreset, type LinePreset, type SequencePreset} from './analysis-model.ts';
export type AnalysisKind = 'candidates' | 'conditions' | 'number-line' | 'quantifiers' | 'sequence';
export type AnalysisPresentation = 'full' | 'input' | 'witnesses' | 'terms' | 'tail';
export function validateAnalysisPresentation(kind: AnalysisKind, preset: string, presentation: AnalysisPresentation) {
  if (presentation === 'full') return;
  const permitted = {input:['candidates','equation'], witnesses:['quantifiers','keys'], terms:['sequence','device'], tail:['sequence','reciprocal']} as const;
  const pair = permitted[presentation];
  if (!pair || pair[0] !== kind || pair[1] !== preset) throw new Error('Invalid Analysis teaching presentation');
}
export type AnalysisState = {x: number; epsilon: number; target: number; threshold: number; domain: keyof typeof domains; p: boolean; q: boolean; people: number; keys: number; cells: boolean[][]; sequence: SequencePreset};
export function initialAnalysisState(kind: AnalysisKind, preset: string): AnalysisState {
  return {x: kind === 'candidates' ? 7 : preset === 'distance' ? 2.5 : preset === 'counterexample' ? 3 : 1, epsilon: .5, target: preset === 'device' ? 3 : 0, threshold: preset === 'reciprocal' ? 2 : 3, domain: preset === 'equation' ? 'positive' : 'mixed', p: true, q: false, people: 2, keys: 2, cells: preset === 'nested' ? [[false, true, false], [false, false, false]] : [[true, false, false], [false, true, false]], sequence: (['device', 'alternating', 'zero'].includes(preset) ? preset : 'reciprocal') as SequencePreset};
}
const math = (tex: string) => renderMathText(`$${tex}$`);
const text = (x: number, y: number, value: string, role = 'text', size = 14) => `<text x="${x}" y="${y}" text-anchor="middle" fill="var(--${role})" font-size="${size}">${escapeSvg(value)}</text>`;
const svg = (title: string, body: string, height = 180) => `<svg viewBox="0 0 640 ${height}" role="img" aria-label="${escapeSvg(title)}">${body}</svg>`;
const result = (label: string, value: boolean, c: typeof analysisCopy.en) => `<span class="analysis-result" data-pass="${value}">${math(label)}: <strong>${value ? c.true : c.false}</strong></span>`;
export function analysisScene(kind: AnalysisKind, preset: string, s: AnalysisState, locale: keyof typeof analysisCopy, presentation: AnalysisPresentation = 'full') {
  validateAnalysisPresentation(kind,preset,presentation);
  if (presentation === 'tail' && (s.sequence !== 'reciprocal' || s.target !== 0)) throw new Error('Reciprocal teaching target must remain zero');
  if (presentation === 'terms' && (s.sequence !== 'device' || !Number.isInteger(s.threshold) || s.threshold < 1)) throw new Error('Term presentation requires the device and a natural threshold');
  const c = analysisCopy[locale];
  const teaching = analysisTeachingCopy[locale];
  let graphic = '', equation = '', feedback = '';
  if (kind === 'candidates') {
    const p = preset as CandidatePreset, domain = domains[s.domain], results = domain.map(x => candidatePass(p, x)), counts = quantify(results);
    const predicate = p === 'equation' ? 'x+3=10' : p === 'positive' ? 'x>0' : '4<x<8';
    const px = (x: number) => 50 + (x + 1) * 54;
    graphic = svg(c.candidates[p], `<path d="M35 65H605" stroke="var(--axis)"/>${domain.map((x, i) => `<circle cx="${px(x)}" cy="65" r="13" fill="var(--${results[i] ? 'tint' : 'blue-tint'})" stroke="var(--${results[i] ? 'accent' : 'blue'})"/>${text(px(x), 70, results[i] ? '1' : '0', results[i] ? 'accent' : 'blue')}${text(px(x), 101, String(x))}`).join('')}<path d="M${px(s.x)} 113l7 9-7 9-7-9Z" fill="var(--purple)"/>${text(px(s.x), 154, `x = ${s.x}`, 'purple')}`);
    equation = `${math(`P(x):\\;${predicate}`)}<div class="analysis-results">${result('x\\in D', (domain as readonly number[]).includes(s.x), c)}${result(`P(${s.x})`, candidatePass(p, s.x), c)}</div><div class="analysis-results">${result('\\forall x\\in D\\;P(x)', counts.all, c)}${result('\\exists x\\in D\\;P(x)', counts.some, c)}${result('\\exists!x\\in D\\;P(x)', counts.unique, c)}</div>`;
    feedback = `${c.count}: ${counts.count}. ${domain.length ? c.finite : c.emptyNote}`;
    if (presentation === 'input') {
      equation = `${math(`P(x):\\;${predicate}`)}<div class="analysis-results">${result('x\\in D', (domain as readonly number[]).includes(s.x), c)}${result(`P(${s.x})`, candidatePass(p, s.x), c)}</div>`;
      feedback = teaching.input.feedback;
    }
  } else if (kind === 'number-line') {
    const p = preset as LinePreset, r = lineResult(p, s.x, s.epsilon), px = (x: number) => 40 + (x + 2) * 56;
    const endpoint = (x: number, closed: boolean) => `<circle cx="${px(x)}" cy="70" r="7" stroke="var(--accent)" stroke-width="2" fill="var(--${closed ? 'accent' : 'panel'})"/>`;
    graphic = svg(c.line[p], `<path d="M30 70H610" stroke="var(--axis)"/>${Array.from({length: 11}, (_, i) => i - 2).map(x => `<path d="M${px(x)} 64v12" stroke="var(--axis)"/>${text(px(x), 99, String(x))}`).join('')}<path d="M${px(r.low)} 70H${px(r.high)}" stroke="var(--accent)" stroke-width="5"/>${endpoint(r.low, r.closedLow)}${p === 'complement' ? '<path d="M592 63l12 7-12 7" stroke="var(--accent)" stroke-width="2" fill="none"/>' : endpoint(r.high, r.closedHigh)}<path d="M${px(s.x)} 29l8 10-8 10-8-10Z" fill="var(--purple)"/><path d="M${px(s.x)} 49V65" stroke="var(--purple)" stroke-dasharray="3 3"/>${text(px(s.x), 20, `x = ${number(s.x)}`, 'purple')}${p === 'distance' ? `<path d="M${px(3)} 115H${px(s.x)}" stroke="var(--purple)" stroke-width="2"/>${text((px(3) + px(s.x)) / 2, 145, `${c.distance} = ${number(Math.abs(s.x - 3))}`, 'purple')}` : ''}`);
    const labels = p === 'bounds' ? ['x>0', 'x\\le2'] : p === 'complement' ? ['x<1', 'x\\ge1'] : p === 'counterexample' ? ['x>2', 'x>5'] : [`x>3-${number(s.epsilon)}`, `x<3+${number(s.epsilon)}`];
    equation = `<div class="analysis-results">${result(labels[0], r.left, c)}${result(labels[1], r.right, c)}</div>`;
    feedback = `${p === 'counterexample' ? c.counterexample : c.inside}: ${r.pass ? c.yes : c.no}.`;
  } else if (kind === 'quantifiers') {
    const cells = s.cells.slice(0, s.people).map(row => row.slice(0, s.keys)), r = relationSummary(cells, s.keys);
    const relationResult = (tex: string, value: boolean, copy: typeof c) => result(preset === 'nested' ? tex.replace(/p/g, 'x').replace(/k/g, 'y').replace(/P/g, 'D').replace(/K/g, 'E').replace(/H/g, 'R') : tex, value, copy);
    equation = `<div class="analysis-results">${relationResult('\\forall p\\in P\\;\\exists k\\in K\\;H(p,k)', r.separate, c)}${relationResult('\\exists k\\in K\\;\\forall p\\in P\\;H(p,k)', r.common, c)}</div><div class="analysis-results">${relationResult('\\exists p\\in P\\;\\forall k\\in K\\;\\neg H(p,k)', !r.separate, c)}${relationResult('\\forall k\\in K\\;\\exists p\\in P\\;\\neg H(p,k)', !r.common, c)}</div>`;
    feedback = `${preset === 'nested' ? '∀x ∃y R(x,y)' : c.separate}: ${r.separate ? c.yes : c.no}. ${preset === 'nested' ? '∃y ∀x R(x,y)' : c.common}: ${r.common ? c.yes : c.no}.`;
    if (presentation === 'witnesses') equation = `<div class="analysis-results">${relationResult('\\forall p\\in P\\;\\exists k\\in K\\;H(p,k)', r.separate, c)}${relationResult('\\exists k\\in K\\;\\forall p\\in P\\;H(p,k)', r.common, c)}</div>`;
  } else if (kind === 'conditions') {
    const p = preset as ConditionPreset, r = conditionState(p, s.p, s.q);
    const expressions = p === 'construction' ? ['P\\lor Q', '\\neg Q', '(P\\lor Q)\\land\\neg Q'] : p === 'demorgan' ? ['\\neg(P\\land Q)', '\\neg P\\lor\\neg Q'] : ['P\\land Q', 'P\\lor Q'];
    graphic = `<div class="assignment-map" role="group" aria-label="${escapeSvg(c.conditions[p])}">${[[false, false], [false, true], [true, false], [true, true]].map(([a, b]) => {const v = conditionState(p, a, b);return `<div class="assignment-tile" data-current="${a === s.p && b === s.q}"><strong>P = ${Number(a)}, Q = ${Number(b)}</strong><span>${math(expressions[0])} = ${Number(v.a)}</span><span>${math(expressions[1])} = ${Number(v.b)}</span></div>`;}).join('')}</div>`;
    equation = `<div class="analysis-path"><span>${math(expressions[0])} = ${Number(r.a)}</span><span aria-hidden="true">${p === 'construction' ? '∧' : p === 'demorgan' ? '≡' : '·'}</span><span>${math(expressions[1])} = ${Number(r.b)}</span>${p === 'construction' ? `<span aria-hidden="true">→</span><strong>${math(expressions[2])} = ${Number(r.result)}</strong>` : ''}</div>`;
    feedback = c.conditionCaption[p];
  } else if (presentation === 'terms') {
    const px = (n: number) => 46 + (n - 1) * 17.7, py = (value: number) => 240 - value / 10 * 215;
    graphic = svg(teaching.terms.title, `${[0,3,9].map(value=>`<path d="M40 ${py(value)}H605" stroke="var(--grid)"/>${text(22,py(value)+4,String(value),'muted',12)}`).join('')}<path d="M40 245H610M40 15V245" stroke="var(--axis)"/><path d="M${px(s.threshold)} 15V245" stroke="var(--purple)" stroke-dasharray="3 3"/>${text(px(s.threshold),12,`N=${s.threshold}`,'purple',12)}${Array.from({length:32},(_,i)=>i+1).map(n=>`<circle cx="${px(n)}" cy="${py(sequenceValue(s.sequence,n))}" r="${n<s.threshold?3:4}" fill="var(--${n<s.threshold?'muted':'accent'})"/>${[1,8,16,24,32].includes(n)?text(px(n),265,String(n),'muted',12):''}`).join('')}${text(620,265,'n','text',12)}${text(20,20,'aₙ','text',12)}`,280);
    equation = `<p>${renderMathText(c.rules.device)}</p>`;
    feedback = teaching.terms.feedback.replace('{N}',String(s.threshold));
  } else {
    const r = sequenceTail(s.sequence, s.target, s.epsilon, s.threshold);
    const min = Math.min(s.sequence === 'alternating' ? -1.5 : -.5, s.target - s.epsilon - .3), max = Math.max(s.sequence === 'device' ? 10 : 1.5, s.target + s.epsilon + .3);
    const px = (n: number) => 46 + (n - 1) * 17.7, py = (v: number) => 240 - (v - min) / (max - min) * 215;
    const bandTop = py(s.target + s.epsilon), bandBottom = py(s.target - s.epsilon);
    graphic = svg(c.sequence, `${[-1,0,1,3,9].filter(value=>value>min&&value<max&&Math.abs(value-s.target)>.05).map(value=>`<path d="M40 ${py(value)}H605" stroke="var(--grid)"/>${text(22,py(value)+4,String(value),'muted',12)}`).join('')}<rect x="40" y="${bandTop}" width="565" height="${bandBottom - bandTop}" fill="var(--tint)"/><path d="M40 ${bandTop}H605M40 ${bandBottom}H605" stroke="var(--accent)" stroke-dasharray="5 4"/><path d="M40 ${py(s.target)}H605" stroke="var(--accent)"/>${text(25, py(s.target) + 4, 'L', 'accent')}<path d="M40 245H610M40 15V245" stroke="var(--axis)"/><path d="M${px(s.threshold)} 15V245" stroke="var(--purple)" stroke-dasharray="3 3"/>${text(px(s.threshold), 12, `N=${s.threshold}`, 'purple', 12)}${Array.from({length: 32}, (_, i) => i + 1).map(n => {const value = sequenceValue(s.sequence, n), pass = Math.abs(value - s.target) < s.epsilon;return `<circle cx="${px(n)}" cy="${py(value)}" r="${n < s.threshold ? 3 : 4}" fill="var(--${n < s.threshold ? 'muted' : pass ? 'accent' : 'blue'})"/>${[1, 8, 16, 24, 32].includes(n) ? text(px(n), 265, String(n), 'muted', 12) : ''}`;}).join('')}${text(620, 265, 'n', 'text', 12)}${text(20, 20, 'aₙ', 'text', 12)}`, 280);
    const badTerm = r.bad === null ? '' : s.sequence === 'reciprocal' ? `\\frac{1}{${r.bad}}` : String(sequenceValue(s.sequence,r.bad));
    equation = `<div class="analysis-results">${math(`L=${number(s.target)},\\quad\\varepsilon=${number(s.epsilon)},\\quad N=${s.threshold}`)}${r.bad !== null ? math(`n=${r.bad}:\\quad |a_n-L|=|${badTerm}-(${number(s.target)})|\\ge\\varepsilon`) : math('\\forall n\\ge N:\\;|a_n-L|<\\varepsilon')}</div><p>${renderMathText(c.rules[s.sequence])}</p>`;
    feedback = r.all ? c.tailPass : `${c.tailFail} n = ${r.bad}.`;
  }
  return {graphic, equation, feedback};
}
