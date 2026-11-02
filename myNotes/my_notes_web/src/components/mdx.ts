/** One registration point for components available to every lesson. */
import MatrixComparison from "./MatrixComparison.astro";
import Math from "./Math.astro";
import Note from "./Note.astro";
import Exercise from "./Exercise.astro";
import Explorer from "./Explorer.astro";
import MatrixProduct from "./interactive/MatrixProduct.astro";
import Flow from "./Flow.astro";
import Interactive from "./interactive/Interactive.astro";
import VectorFigure from "./VectorFigure.astro";
import NumberDomains from './NumberDomains.astro';
import ExpressionTrees from './ExpressionTrees.astro';
export const learningComponents = {
  Math,
  NumberDomains,
  ExpressionTrees,
  MatrixComparison,
  Note,
  Exercise,
  Flow,
  Interactive,
  VectorFigure,
  Explorer,
  MatrixProduct,
};
