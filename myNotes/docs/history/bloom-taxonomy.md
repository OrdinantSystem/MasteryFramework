# Bloom taxonomy presentation history

## 3 November 2026 · first interactive pyramid

Recorded before revising the presentation in response to Jean's feedback.

QuestionLens originally displayed six horizontal category buttons. The first graphical revision replaced them with a teal pyramid: a triangular Create apex and five clipped trapezoids, with Remember at the base. Hover, focus, click, and arrow/Home/End keys selected the existing localized sequence-convergence example and evidence. Details appeared beside the pyramid on desktop and below it on compact screens. All six examples remained server-rendered for reading without JavaScript and print.

The production build passed and desktop/compact layouts were checked across EN/DE/ES and both themes. See the dated verification entry in ../../my_notes_web/VERIFICATION.md and the preserved [first-version screenshot](../../my_notes_web/previews/bloom-pyramid-desktop.jpg).

## Requested next revision

Jean preferred the sibling mastery-site representation: centered rectangular tiers, multiple colors, and no triangular apex. The reference implementation is mastery-site/src/components/BloomPyramid.tsx with tier styling in mastery-site/src/styles/visuals.css. Adapt its rectangular silhouette and short action descriptions to myNotes' existing semantic color tokens, localized question data, and native controls. Preserve the classification/effectiveness qualification and input alternatives.

This is a written change-history record; it does not create a Git commit.

## 3 November 2026 · rectangular tiers implemented

Replaced the clipped silhouette with six centered rectangles using the reference's 60%–100% width progression. Added a localized action phrase to every tier, semantic theme colors, selected-border emphasis, and a matching detail heading/border. Hover, click, focus, and keyboard behavior remain available. Example prompts and evidence retain their original meaning. Production build and browser checks passed; details are in the latest verification entry. New screenshots are bloom-rectangles-desktop.jpg and bloom-rectangles-compact.jpg in previews/.

## 3 November 2026 · minimal presentation

At Jean's request, removed the left-edge accent stripes from both the category rectangles and the example panel. Removed the two introductory lines above the tiers (topic label and interaction instructions). Retained colors, tier action descriptions, selected/focus states, example content and keyboard/pointer behavior.
