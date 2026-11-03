/** Navigation identity follows global course order, independently of locale/area. */
export const navigationPalette = [
  {foreground: 'blue', background: 'blue-tint'},
  {foreground: 'accent', background: 'tint'},
  {foreground: 'purple', background: 'purple-tint'},
  {foreground: 'coral', background: 'coral-tint'},
] as const;

export function navigationColorAt(index: number) {
  if (!Number.isSafeInteger(index) || index < 0) throw new Error('Course color index must be a nonnegative integer');
  return navigationPalette[index % navigationPalette.length];
}
