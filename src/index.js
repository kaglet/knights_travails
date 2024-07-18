import Graph from "./graph/graph.js";
import { knightMoves } from "./knights_travails.js";

// TODO: Add input mechanism to specify graph size and enter inputs
let graph = new Graph(8);

knightMoves([3,3], [4,3], graph); 