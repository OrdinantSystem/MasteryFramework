import katex from 'katex';
import { mathOptions } from './math-options.mjs';

/** Explicit inline $TeX$ in component copy; ordinary text is always escaped. */
export function renderMathText(text: string): string {
  return text.split(/(\$[^$\n]+\$)/g).map((part, index) => index % 2
    ? `<span data-pagefind-ignore="all">${katex.renderToString(part.slice(1, -1), { ...mathOptions, displayMode: false })}</span>`
    : part.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!)
  ).join('');
}
