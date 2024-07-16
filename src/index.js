import Graph from "./graph/graph.js";
import { knightMoves } from "./knights_travails.js";

// TODO: Add input mechanism to specify graph size and enter inputs
// TODO: Add error handling if input out of bounds of graph or too big, in start and end (there is no error msg currently).
// TODO: Add moves count at end. 
let graph = new Graph(8);

console.log(graph.grid);

knightMoves([0,0], [7,7], graph); // answer is [0,0] -> [1,2] -> [3,3]