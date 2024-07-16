import { Queue } from '@datastructures-js/queue';
import Cell from "./node/cell.js";

function traceParents(pathEndCell, pathStartCell) {
    let curr = pathEndCell;
// Trace from node with end indices to one with start indices through the parent property each of them has set
    while (pathEndCell.x !== pathStartCell.x && pathEndCell.y !== pathStartCell.y) {
        console.log([curr.x, curr.y]);
        curr = curr.parent;
    }

    console.log([curr.x, curr.y]);
}

function getMoves(graph, i, j) {
    // When adding all these next moves some are invalid, they must not be added into the queue
    let move1 = graph.grid[i][j].head.next;
    let move2 = graph.grid[i][j].head.next.next;
    let move3 = graph.grid[i][j].head.next.next.next;
    let move4 = graph.grid[i][j].head.next.next.next.next;
    let move5 = graph.grid[i][j].head.next.next.next.next.next;
    let move6 = graph.grid[i][j].head.next.next.next.next.next.next;
    let move7 = graph.grid[i][j].head.next.next.next.next.next.next.next;
    let move8 = graph.grid[i][j].head.next.next.next.next.next.next.next.next;

    return [move1, move2, move3, move4, move5, move6, move7, move8];
}

function knightMoves(start, end, graph) {
    let queue = new Queue();

    // Convert start and end into nodes for ease of not having to work with arrays only objects
    // Throw away arrays to work in my preferred data representation form
    let startCell = new Cell(start[0], start[1]);
    let endCell = new Cell(end[0], end[1]);
    queue.enqueue(startCell);

    if (graph.isOutOfBounds(startCell)) {
        return "Start is out of bounds";
    } else if (graph.isOutOfBounds(endCell)) {
        return "End is out of bounds";
    }

    while(!queue.isEmpty()) {
        let frontCell = queue.dequeue();
        frontCell.visit();
        
        if (frontCell.x === endCell.x && frontCell.y === endCell.y) {
            // Return path by indexing into node, it's parent property that is set
            // Print parent, itself from end and its parent until it hits the base case which is equal to the start node in coordinates, so could be a recursive algo or a while loop
            traceParents(frontCell, startCell);
            return;
        }

        // Get node coordinates in order to find next connection moves in grid
        let i = frontCell.x;
        let j = frontCell.y;

        // Get moves do not discard yet
        let movesArr = getMoves(graph, i, j);

        for (let k = 0; k < movesArr.length; k++) {
            // If parent is already present keep the original parent at the same level or at a later level as the shortest path
            if (typeof movesArr[k].value.parent === "undefined") {
                movesArr[k].value.parent = frontCell;
            }
            
            // Enqueue to explore its connections only if its a valid move else its not even a valid move in a path anyway
            // This kills connections to search for end path dead ending any paths that got to this invalid move
            if (!graph.isOutOfBounds(movesArr[k].value) && !movesArr[k].value.visited) {
                queue.enqueue(movesArr[k].value);
            }
        }
    }
}

export {knightMoves};

