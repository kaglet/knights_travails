import Graph from "./graph/graph.js";
import { knightMoves } from "./knights_travails.js";

let inputValid = true;

let size = +prompt("Enter graph size", 8); // [3,3]

if (typeof size !== "number") {
    alert("Enter number size. Refresh page to start over.");
    inputValid = false;
} 


let start = JSON.parse(prompt("Enter start coordinates in array form", "[0,0]")); // [3,3]

if (!Array.isArray(start)) {
    alert("Enter start in correct array form. Refresh page to start over.");
    inputValid = false;
} else if (typeof start[0] !== "number" || typeof start[1] !== "number") {
    alert("Enter number values for coordinates. Refresh page to start over.");
    inputValid = false;
} 

let end = JSON.parse(prompt("Enter end coordinates in array form", "[3,3]")); // [4,3]

if (!Array.isArray(end)) {
    alert("Enter start in correct array form. Refresh page to start over.");
    inputValid = false;
} else if (typeof end[0] !== "number" || typeof end[1] !== "number") {
    alert("Enter number values for coordinates. Refresh page to start over.");
    inputValid = false;
} 

if (inputValid) {
    let graph = new Graph(size);
    knightMoves(start, end, graph); 
} else {
    alert("Refresh page due to input errors.")
}





