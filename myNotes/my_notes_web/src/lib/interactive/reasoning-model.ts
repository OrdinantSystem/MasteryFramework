/** Finite conceptual comparisons; volumes are stored in hundredths of a mL. */
export const reasoningChoices = {
  appearance: ['identical', 'colors', 'sizes'],
  units: ['shoes', 'pairs'],
  water: ['separate', 'merged'],
} as const;
export type ReasoningPreset = keyof typeof reasoningChoices;
export function reasoningState(preset: ReasoningPreset, choice: string) {
  if (!(reasoningChoices[preset] as readonly string[]).includes(choice)) throw new Error(`Invalid ${preset} choice: ${choice}`);
  if (preset === 'appearance') return { count: 2, unit: 'counters', volumeHundredths: null } as const;
  if (preset === 'units') return { count: choice === 'shoes' ? 2 : 1, unit: choice, volumeHundredths: null } as const;
  return { count: choice === 'separate' ? 2 : 1, unit: 'drops', volumeHundredths: 5 + 5 } as const;
}
