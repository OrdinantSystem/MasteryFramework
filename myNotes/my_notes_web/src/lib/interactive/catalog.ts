/** Developer catalog. Keep examples executable in pages/library.astro. */
export const assets = [
 {id:'argument-labs',name:'Belief and logical structure',purpose:'Judge two inferences before revealing, inspect nested sets, find a shared-subset countermodel and reverse all versus only.',example:'<Interactive kind="arguments" preset="xray" id="example-argument" />'},
 {id:'argument-figures',name:'Abstraction and two-pass reasoning',purpose:'Two stories become modus ponens, validity and believability stay independent, and inference is tested separately from premises.',example:'<ReasoningFigure kind="argument-structure" />'},
 {id:'inquiry-labs',name:'Tests that distinguish hypotheses',purpose:'Test triples, inspect nested rules, reveal evidence, compare component predictions and choose a diagnostic website test.',example:'<Interactive kind="inquiry" preset="machine" id="example-inquiry" />'},
 {id:'inquiry-figures',name:'Shared evidence and competing explanations',purpose:'The accepted 2,4,6 opening and three successes predicted by every candidate.',example:'<ReasoningFigure kind="inquiry-successes" />'},
 {id:'validity-labs' ,name:'Truth, validity and countermodels',purpose:'Compare two arguments, reveal a rectangle countermodel, and test the warning-light inference.',example:'<Interactive kind="validity" preset="countermodel" id="example-validity" />'},
 {id:'validity-figures',name:'Validity and soundness',purpose:'Shapes, nested sets, argument connections, implication directions, four independent cases and two soundness gates.',example:'<ReasoningFigure kind="validity-grid" />'},
 {id:'counterexample-labs',name:'Counterexamples, conditions and claim types',purpose:'Check two gates, filter a finite number board, vary an exact card threshold and transfer the method to divisibility.',example:'<Interactive kind="counterexamples" preset="prime-detector" id="example-counterexample" />'},
 {id:'counterexample-figures',name:'The scope and force of a counterexample',purpose:'Prime examples and a factor grid, claim boundaries and negation, finite and infinite domains, witnesses, repaired rules and a factor argument.',example:'<ReasoningFigure kind="counter-nine" />'},
 {id:'pattern-explorers',name:'Patterns, predictions and informative tests',purpose:'Reveal conditional continuations after a common five-term history and select a round that separates two rules.',example:'<Interactive kind="patterns" preset="continuations" id="example-patterns" />'},
 {id:'pattern-figures',name:'Observed patterns and possible explanations',purpose:'Five observed counts, two machines, piecewise rules, a discriminating test, hypothetical channel forecasts and a new sequence challenge.',example:'<ReasoningFigure kind="pattern-forecasts" />'},
 {id:'proof-pairs',name:'Complete pairs and even sums',purpose:'Change two nonnegative pair counts, including zero, and combine the same counters without creating a leftover.',example:'<Interactive kind="parity" preset="even-sum" id="example-pairs" />'},
 {id:'proof-figures',name:'From examples to a general proof',purpose:'Examples, evidence versus a universal claim, pairs, arbitrary witnesses, direct proof, signed integers, odd sums and justified generality.',example:'<ReasoningFigure kind="proof-template" />'},
 {id:'equation-transformations',name:'Equality and solution sets',purpose:'Regroup seven stones, balance masses, compare an identity, square inputs, restore a sign condition, test division restrictions and explore absolute distance.',example:'<Interactive kind="equations" preset="square" id="example-square" />'},
 {id:'equation-solutions',name:'Solutions before and after squaring',purpose:'Compare the original singleton solution set with the two solutions of the squared equation over the reals.',example:'<ReasoningFigure kind="squared-solutions" />'},
 {id:'algebra-models',name:'Algebra: repeated groups and parentheses',purpose:'Change a whole-number input and compare a fixed extra count with two additional complete groups.',example:'<Interactive kind="algebra" preset="grouping" id="example-grouping" />'},
 {id:'algebra-figures',name:'Algebra: structure and interpretation',purpose:'Room puzzle, table pattern, incomplete groups, letter roles, domains, fee scope, constant-rate graph and candle transfer.',example:'<ReasoningFigure kind="heating" />'},
 {id:'reasoning-comparisons',name:'Counting, units, and physical change',purpose:'Compare invariant counts, a changed counting unit, and merging drops with conserved water volume.',example:'<Interactive kind="reasoning" preset="appearance" id="example-appearance" />'},
 {id:'reasoning-figures',name:'From objects to mathematical language',purpose:'Show named elements, singleton sets, cardinality and matching, union and overlap, nested pairs, the addition function, symbol roles, and a reasoning process using shared Flow.',example:'<ReasoningFigure kind="addition" />'},
 {id:'analysis-candidates',name:'Finite candidates and witnesses',purpose:'Keep a predicate fixed, change its finite domain, and distinguish membership, truth, existence and uniqueness. The input presentation introduces membership and evaluation without quantified verdicts.',example:'<Interactive kind="candidates" preset="equation" presentation="input" id="example-candidates" />'},
 {id:'analysis-conditions',name:'Logical assignment map',purpose:'Follow complete assignments through AND/OR, intermediate truth-table columns and De Morgan paths.',example:'<Interactive kind="conditions" preset="construction" id="example-conditions" />'},
 {id:'analysis-number-line',name:'Number-line regions',purpose:'Inspect open/closed boundaries, complements, counterexample regions and absolute distance.',example:'<Interactive kind="number-line" preset="distance" id="example-distance" />'},
 {id:'analysis-quantifiers',name:'Separate and shared witnesses',purpose:'Toggle a complete finite relation and inspect row witnesses, shared columns and exact negations, including empty domains. The witnesses presentation focuses on the two positive claims.',example:'<Interactive kind="quantifiers" preset="keys" presentation="witnesses" id="example-keys" />'},
 {id:'analysis-sequence',name:'Exact sequence tails',purpose:'Compare a sampled dot plot with an exact infinite-tail verdict and a verified bad index. The terms presentation teaches positions and repetition; tail fixes reciprocal/zero and exposes only tolerance and threshold.',example:'<Interactive kind="sequence" preset="reciprocal" presentation="tail" id="example-tail" />'},
 {id:'analysis-proof',name:'Analysis proof structure',purpose:'Reuse the Flow view for solution sets, scope, contradiction and complement obligations.',example:'<AnalysisProof preset="contradiction" />'},
 {id:'mind-map',name:'Interactive mind map',purpose:'Compare concepts, branches, and named cross-links; inspect the reasons and limits of each relationship.',example:'<Interactive kind="mind-map" preset="study-session" id="example-study-map" />'},
 {id:'relation-map',name:'Labeled concept relationships',purpose:'Distinguish definition, consequence, and a failed converse in a source-checked map.',example:'<RelationMap />'},
 {id:'learning-cycle',name:'Learning process graph',purpose:'Localized branching process with explicit repair and delayed-review loops; compact screens use the same node/edge data as a readable list.',example:'<ProcessDiagram preset="cycle" id="example-cycle" />'},
 {id:'learning-mapping',name:'Relational map comparison',purpose:'Compare study-method terms with an explicit relationship.',example:'<LearningFigure kind="mapping" />'},
 {id:'learning-methods',name:'Four method roles',purpose:'Give each method a job without presenting opinion tiers as scientific scores.',example:'<LearningFigure kind="methods" />'},
 {id:'learning-practice',name:'Blocked and mixed practice',purpose:'Define three integer-reasoning methods, compare blocked/mixed schedules, and reveal justified strategy choices.',example:'<LearningFigure kind="interleaving" />'},
 {id:'learning-spacing',name:'Review timeline',purpose:'Illustrative day labels with explicit adaptive-timing caveat.',example:'<LearningFigure kind="spacing" />'},
 {id:'learning-bloom',name:'Question lens',purpose:'Change the cognitive demand for one topic; readable complete initial content without JavaScript.',example:'<QuestionLens />'},
 {id:'learning-template',name:'Study template',purpose:'Show and download a blank localized Markdown template; no learner data is saved.',example:'<StudyTemplate kind="session" />'},
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
    purpose: "Drag a rotation, inspect its matrix, and snap to quarter-turn powers of J.",
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
