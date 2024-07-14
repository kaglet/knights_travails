import Graph from "./graph/graph.js";
import { Queue } from '@datastructures-js/queue';

function traceParents(pathEndNode, pathStartNode) {
// Trace from node with end indices to one with start indices through the parent property each of them has set

}

function extractNodeAsArray(node) {
    return [node.x, node.y];
}

function knightMoves(start, end, graph) {
    let queue = new Queue();
    // Convert start and end into nodes for ease of not having to work with arrays only objects
    // Throw away arrays to work in my preferred data representation form
    let startNode = new Node(start[0], start[1]);
    let endNode = new Node(end[0], end[1]);
    queue.enqueue(startNode);

    // TODO: Check if start and end is out of bounds of grid and immediately exit

    while(!queue.isEmpty()) {
        let frontNode = queue.dequeue();
        
        if (frontNode.x === endNode.x && frontNode.y === endNode.y) {
            // Return path by indexing into node, it's parent property that is set
            // Print parent, itself from end and its parent until it hits the base case which is equal to the start node in coordinates, so could be a recursive algo or a while loop
            traceParents(frontNode, startNode);
            return;
        }
        // Get node coordinates in order to find next move connections in grid
        let i = frontNode.x;
        let j = frontNode.y;

        let move1 = graph.grid[i][j].head.next;
        let move2 = graph.grid[i][j].head.next.next;
        let move3 = graph.grid[i][j].head.next.next.next;
        let move4 = graph.grid[i][j].head.next.next.next.next;
        let move5 = graph.grid[i][j].head.next.next.next.next.next;
        let move6 = graph.grid[i][j].head.next.next.next.next.next.next;
        let move7 = graph.grid[i][j].head.next.next.next.next.next.next.next;
        let move8 = graph.grid[i][j].head.next.next.next.next.next.next.next.next;

        queue.enqueue(move1).enqueue(move2).enqueue(move3).enqueue(move4).enqueue(move5).enqueue(move6).enqueue(move7).enqueue(move8);
    }
}

let graph = new Graph(3);

console.log(graph.grid);