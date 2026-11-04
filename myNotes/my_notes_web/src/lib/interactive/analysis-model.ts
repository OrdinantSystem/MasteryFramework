/** Small, pure models for finite logic examples and exact sequence tails. */
export type CandidatePreset = 'equation' | 'positive' | 'witnesses';
export type LinePreset = 'bounds' | 'complement' | 'counterexample' | 'distance';
export type SequencePreset = 'reciprocal' | 'device' | 'alternating' | 'zero';
export type ConditionPreset = 'connectives' | 'construction' | 'demorgan';
export const domains = {mixed: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], positive: [1, 2, 3, 4, 5, 6, 7, 8, 9], empty: []} as const;
export function candidatePass(preset: CandidatePreset, x: number): boolean {
  return preset === 'equation' ? x + 3 === 10 : preset === 'positive' ? x > 0 : 4 < x && x < 8;
}
export function quantify(values: readonly boolean[]) {
  const count = values.filter(Boolean).length;
  return {count, all: values.every(Boolean), some: values.some(Boolean), unique: count === 1};
}
export function relationSummary(cells: readonly (readonly boolean[])[], columns: number) {
  if (!Number.isInteger(columns) || columns < 0 || cells.some(row => row.length !== columns)) throw new Error('Invalid finite relation');
  const rows = cells.map(row => quantify(row));
  const shared = Array.from({length: columns}, (_, c) => cells.every(row => row[c]));
  return {rows, shared, separate: rows.every(row => row.some), common: shared.some(Boolean), failingRows: rows.map((row, i) => row.some ? -1 : i).filter(i => i >= 0)};
}
export function lineResult(preset: LinePreset, x: number, epsilon = .5) {
  if (!Number.isFinite(x) || !Number.isFinite(epsilon) || epsilon <= 0) throw new Error('Finite point and positive tolerance required');
  if (preset === 'bounds') return {left: x > 0, right: x <= 2, pass: x > 0 && x <= 2, low: 0, high: 2, closedLow: false, closedHigh: true};
  if (preset === 'complement') return {left: x < 1, right: x >= 1, pass: x >= 1, low: 1, high: 8, closedLow: true, closedHigh: false};
  if (preset === 'counterexample') return {left: x > 2, right: x > 5, pass: x > 2 && x <= 5, low: 2, high: 5, closedLow: false, closedHigh: true};
  return {left: x > 3 - epsilon, right: x < 3 + epsilon, pass: Math.abs(x - 3) < epsilon, low: 3 - epsilon, high: 3 + epsilon, closedLow: false, closedHigh: false};
}
export const sequenceValue = (preset: SequencePreset, n: number): number => {
  if (!Number.isInteger(n) || n < 1) throw new Error('Positive natural index required');
  return preset === 'reciprocal' ? 1 / n : preset === 'device' ? (n < 3 ? 9 : 3) : preset === 'alternating' ? (n % 2 ? -1 : 1) : 0;
};
/** A finite plot never proves an infinite tail. This returns an exact witness or certifies the rule's whole tail. */
export function sequenceTail(preset: SequencePreset, target: number, epsilon: number, threshold: number): {all: boolean; bad: number | null} {
  if (!Number.isFinite(target) || !Number.isFinite(epsilon) || epsilon <= 0 || !Number.isInteger(threshold) || threshold < 1) throw new Error('Invalid sequence parameters');
  const passes = (n: number) => Math.abs(sequenceValue(preset, n) - target) < epsilon;
  if (preset === 'reciprocal') {
    if (!passes(threshold)) return {all: false, bad: threshold};
    if (target - epsilon > 0) return {all: false, bad: Math.max(threshold, Math.ceil(1 / (target - epsilon)))};
    return {all: true, bad: null};
  }
  const candidates = preset === 'device' ? [threshold, Math.max(3, threshold)] : preset === 'alternating' ? [threshold, threshold + 1] : [threshold];
  const bad = candidates.find(n => !passes(n)) ?? null;
  return {all: bad === null, bad};
}
export function conditionState(preset: ConditionPreset, p: boolean, q: boolean) {
  if (preset === 'construction') return {a: p || q, b: !q, result: (p || q) && !q, other: p && !q};
  if (preset === 'demorgan') return {a: !(p && q), b: !p || !q, result: !(p && q), other: !p || !q};
  return {a: p && q, b: p || q, result: p && q, other: p || q};
}
