/** Developer catalog. Keep examples executable in pages/library.astro. */
export const assets = [
 {id:'logic',name:'Implication comparison',purpose:'Compare all four assignments and distinguish global equivalence from one matching row.',example:'<Interactive kind="logic" preset="implication" id="logic-example" />'},
 {id:'nand',name:'NAND circuits',purpose:'Inspect shared outputs and build NOT, AND, OR with live Boolean inputs.',example:'<Interactive kind="logic" preset="nand" id="nand-example" />'},
 {id:'number-domains',name:'Number domains',purpose:'Nested number sets with irrational and non-real regions.',example:'<NumberDomains />'},
 {id:'expression-trees',name:'Expression trees',purpose:'Compare associativity and distributivity as operator trees.',example:'<ExpressionTrees variant="distributivity" />'},
  {
    id: "comparison",
    name: "Static determinant comparison",
    purpose:
      "Compare transformed unit squares, collapsed area, and orientation without browser code.",
    example:
      '<MatrixComparison cases={[{matrix:[[1,0],[0,2]],label:"Double area",detail:"The image has area 2."}]} caption="The dashed square is the input." />',
  },

  {
    id: "area",
    name: "Area and orientation",
    purpose:
      "Reuse the column engine to compare signed determinant, shear, and collapsed area.",
    example:
      '<Interactive kind="vectors" preset="area-and-orientation" id="area-example" />',
  },

  {
    id: "combination",
    name: "Linear combination",
    purpose:
      "Reach a target, compare bases, or show two views of vector addition.",
    example:
      '<Interactive kind="vectors" preset="linear-combination" id="example-combination" />',
  },
  {
    id: "coordinate-basis",
    name: "Coordinate basis",
    purpose:
      "The same engine with a different basis and target; no copied controller.",
    example:
      '<Interactive kind="vectors" preset="coordinate-basis" id="example-basis" />',
  },
  {
    id: "rank",
    name: "Column space and rank",
    purpose:
      "Change one column and inspect dependence, determinant, and image dimension.",
    example:
      '<Interactive kind="vectors" preset="rank-collapse" id="example-rank" />',
  },
  {
    id: "matrix",
    name: "Matrix product",
    purpose:
      "Select an output entry and inspect its row-times-column calculation.",
    example:
      '<Interactive kind="matrix-product" left={[[1,2,3],[0,-1,2]]} right={[[1,0],[2,1],[0,3]]} />',
  },
  {
    id: "rotation",
    name: "Quarter-turn powers",
    purpose: "Compare repeated quarter-turns of the fixed example vector.",
    example: '<Interactive kind="rotation" />',
  },
  {
    id: "shear",
    name: "Shear parameter",
    purpose: "Compare a square with its horizontal shear.",
    example: '<Interactive kind="shear" />',
  },
  {
    id: "figure",
    name: "Static vector figure",
    purpose:
      "Show labeled vectors such as displacements, forces, or velocities without browser code.",
    example:
      '<VectorFigure description="Two displacements" caption="The second starts at the first tip." vectors={[{to:[2,1],label:"u"},{from:[2,1],to:[3,3],label:"v",role:"blue"}]} />',
  },
] as const;
