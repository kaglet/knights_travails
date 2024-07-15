import Graph from "./graph/graph.js";
import { knightMoves } from "./knights_travails.js";

let graph = new Graph(8);

console.log(graph.grid);

knightMoves([3,3], [4,3], graph);