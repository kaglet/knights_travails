// Representation of graph for the problem
import LinkedList from "@kago_m/linked_list";
import Cell from "../node/cell.js";

// It is essentially the board but the indices for the board have a list to the rest of the connections for the cell in that index, making it a graph-like representation
class Graph {
    constructor(size) {
        this._size = size;
        this._connectionsGrid = [];
        this.initializeGrid();
    }

    initializeGrid() {
        // Create cells and connections ready to be indexed into when main algo runs
        for (let i = 0; i < this._size; i++) {
            this._connectionsGrid[i] = [];
            for (let j = 0; j < this._size; j++) {                
                this._connectionsGrid[i].push(new LinkedList());
                let connectionsList = this._connectionsGrid[i][j];
                // Prepend connections to be in constant time
                // Keep j constant while decrementing to desired alternating constants of 2 and 1
                connectionsList.prepend(new Cell(i+1, j+2));
                connectionsList.prepend(new Cell(i-1, j+2));
                
                connectionsList.prepend(new Cell(i+2, j+1));
                connectionsList.prepend(new Cell(i-2, j+1));

                connectionsList.prepend(new Cell(i+2, j-1));
                connectionsList.prepend(new Cell(i-2, j-1));                
                
                connectionsList.prepend(new Cell(i-1, j-2));
                connectionsList.prepend(new Cell(i+1, j-2));
                
                // Prepend the node itself so we may have access to its parent later and other properties in this index
                connectionsList.prepend(new Cell(i, j));
            }
        }
    }

    get grid() {
        return this._connectionsGrid;
    }

    isOutOfBounds(node) {
        return node.x > this._size || node.x < 0 || node.y > this._size || node.y < 0; 
    }
}

export default Graph;