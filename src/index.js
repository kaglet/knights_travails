import Graph from "./graph/graph.js";
import { knightMoves } from "./knights_travails.js";

let graph = new Graph(4);

console.log(graph.grid);

knightMoves([0,0], [3,3], graph); // answer is [0,0] -> [1,2] -> [3,3]