// Representation of graph for the problem

import LinkedList from "@kago_m/linked_list";
import Node from "../node/node.js";

// It is essentially the board but the indices for the board have a list to the rest of the connections for the cell in that index, making it a graph-like representation
class Graph {
    constructor(size) {
        this.size = size;
        this.connectionsGrid = [[]];
        this.initializeGrid();
    }

    initializeGrid() {
        // Create cells and connections ready to be indexed into when main algo runs
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                this.connectionsGrid[i] = [];
                this.connectionsGrid[i][j] = [];
                this.connectionsGrid[i][j] = new LinkedList();
                let connectionsList = this.connectionsGrid[i][j];
                // Prepend connections to be in constant time
                // Keep j constant while decrementing to desired alternating constants of 2 and 1
                connectionsList.prepend(new Node(i+1, j+2));
                connectionsList.prepend(new Node(i-1, j+2));
                
                connectionsList.prepend(new Node(i+2, j+1));
                connectionsList.prepend(new Node(i-2, j+1));

                connectionsList.prepend(new Node(i+2, j-1));
                connectionsList.prepend(new Node(i-2, j-1));                
                
                connectionsList.prepend(new Node(i-1, j-2));
                connectionsList.prepend(new Node(i+1, j-2));
                
                // Prepend the node itself so we may have access to its parent later and other properties in this index
                connectionsList.prepend(new Node(i, j));
            }
        }
    }

    get grid() {
        return this.connectionsGrid;
    }

    isOutOfBounds() {
        
    }
}

export default Graph;