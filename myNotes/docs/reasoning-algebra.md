# Reasoning Episode 02: letters and relationships

`letters-and-relationships` is the second page of Part One in The Art of Reasoning, published locally in English and German. It follows `one-plus-one` and uses the same shell, route helpers, source registry and MDX vocabulary. The owner supplied a revised script and ten visual references. Original text and its checksum remain in private `references/source/reasoning-episode-02/`; they are excluded from public output. Review status remains unreviewed.

The English article retains all ten narration sections, with mathematical delimiters normalized and standalone symbol names marked as math. Contractions remain ordinary text. Production labels, timing, ACT headings, animation cues and promotional branding are omitted. German preserves the same reasoning, examples and equations. Additions make the nonnegative whole-table domain explicit, restrict ticket purchases to at least one ticket, display the distributive expansion, and connect the room and warehouse examples. The candle reference reasoning is inside a native Exercise disclosure, after the visible problem. The central explanations remain visible.

## Source and visual mapping

| Script section | Page representation | Relationship |
| --- | --- | --- |
| 1. Unseen room | `ReasoningFigure kind="room"` | A partial view, three chairs per complete table, two separate extras; fourteen/fifteen question stays open |
| 2. Changing arrangements | `table-pattern` | Semantic table: inputs 1–4 give totals 5, 8, 11, 14 |
| 3. Expression | `Interactive kind="algebra" preset="tables"` | Change table count; diagram, equation and total update together |
| 4. Fifteen impossible | `impossible-chairs` | Thirteen remaining chairs form four complete groups plus one unmatched |
| 5. Parentheses | `Interactive kind="algebra" preset="grouping"` | Compare adding two chairs with adding two complete tables |
| 6. Letter roles | `letter-roles` | Variable, unknown and arbitrary number depend on the question |
| 7. Domain | `domains` | Discrete complete-table counts versus continuous elapsed time on the same numerical scale |
| 8. Ticket language | `ticket-fees` | Three tickets: one booking fee gives €16, a fee per ticket gives €18 |
| 9. Heating model | `heating` | Predictions of T = 18 + 2t, with numerically spaced time values and a dashed continuation |
| 10. Warehouse task | `candles` | The claim of 24 leaves 21 after three extras: five groups of four and one unmatched; 23 is possible |

Use the public dispatcher rather than importing a view into MDX:

```mdx
<Interactive kind="algebra" preset="tables" id="chair-rule" />
<Interactive kind="algebra" preset="grouping" id="chair-grouping" />
<ReasoningFigure kind="heating" />
```

All ids must be unique per page. Both explorers and all eight static variants run in the authoring gallery.

## State and mathematical boundaries

`lib/interactive/algebra-model.ts` owns pure arithmetic, validation and equations. `algebra-scenes.ts` owns escaped SVG geometry; `reasoning/algebra-copy.ts` derives EN/DE labels and feedback from the model. `AlgebraLab.astro` owns native events, and `AlgebraFigure.astro` renders static comparisons. Styling uses shared tokens through `algebra.css`; there is no new dependency or simulation engine.

- Explorers start at three original tables, accept integer n from 0 to 6, and reset to three. This is a drawing range; the rule 3n + 2 applies to every nonnegative integer. Fractional, negative, blank and nonfinite input do not alter the drawing. On commit/blur, invalid numeric entry restores the last valid number and explains the bounds.
- The first total is 3n + 2; the changed case is 3(n + 2) = 3n + 6. Their difference is always four chairs. At n = 0, two extra chairs compare with two extra tables/six chairs. Cases share a drawing scale and height when rows wrap; totals stay aligned. Zero is never treated as an error.
- Complete-group tests subtract fixed extras before division. Fifteen chairs cannot satisfy 3n + 2 for integer n; fourteen can. Twenty-four candles cannot satisfy 4n + 3; twenty-three can. The unmatched object is visibly crossed and described in text, independently of color.
- The fee model describes an actual purchase, so n is a positive integer. One separate fee differs from a fee on each ticket. The illustration fixes n = 3 and shows both corresponding expressions.
- Heating uses nonnegative elapsed time and the assumed constant rate. All points are mathematical predictions, not measurements. The x coordinate is proportional to numerical time: 1.5 is halfway between 1 and 2. The dashed extension questions the physical assumption; it does not claim a tested validity interval or plot 1,000 hours.

## Interaction and accessibility

Initial diagrams, equations and captions render at build time, so the explanation remains available without JavaScript. Each explorer has its own bounded state, a labeled native range and numeric equivalent, a 44px minimum reset/control height and a polite status region. Range keys and numeric input use the same update function. Rendering retains the focused controls and mathematical scroll region. No timed animation, drag gesture, persistence, answer collection or score is added.

Side-by-side cases and the three letter roles stack at compact widths. The semantic pattern table scrolls locally with a labeled keyboard-focusable wrapper; other diagrams fit the article. Meaningful localized SVG descriptions and nearby captions explain the marks; labels and equations carry meaning beyond color. Existing semantic palette replaces screenshot-specific colors.

## Verification and preservation

`scripts/verify-algebra.mjs` is part of `verify:library`. It checks all seven table states, grouped totals, invariant differences, rendered group/object counts, invalid input, independent states, permitted/impossible totals, positive purchase counts, heating values and numeric time spacing, KaTeX and escaped labels. The full build also checks translated routes, prerequisites/navigation, mathematical output, search, source exclusion and theme contrast.

Shared dispatcher/catalog/gallery additions update `reasoning-shared-extension.json` with exact reversible additions. Frozen Analysis review dependencies reconstruct byte for byte before their existing gates run; those receipts are not renewed to claim review of Episode 02. The first Reasoning lesson retains its recorded expanded-source hashes. Browser evidence and concrete limitations belong in `my_notes_web/VERIFICATION.md` and `previews/reasoning-algebra-*`.
