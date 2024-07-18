/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 595:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const { Queue } = __webpack_require__(757);

exports.o = Queue;


/***/ }),

/***/ 757:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 *
 * @class
 */
class Queue {
  /**
   * Creates a queue.
   * @param {array} [elements]
   */
  constructor(elements) {
    this._elements = Array.isArray(elements) ? elements : [];
    this._offset = 0;
  }

  /**
   * Adds an element to the back of the queue.
   * @public
   * @param {number|string|object} element
   */
  enqueue(element) {
    this._elements.push(element);
    return this;
  }

  /**
   * Adds an element to the back of the queue.
   * @public
   * @param {number|string|object} element
   */
  push(element) {
    return this.enqueue(element);
  }

  /**
   * Dequeues the front element in the queue.
   * @public
   * @returns {number|string|object}
   */
  dequeue() {
    if (this.size() === 0) return null;

    const first = this.front();
    this._offset += 1;

    if (this._offset * 2 < this._elements.length) return first;

    // only remove dequeued elements when reaching half size
    // to decrease latency of shifting elements.
    this._elements = this._elements.slice(this._offset);
    this._offset = 0;
    return first;
  }

  /**
   * Dequeues the front element in the queue.
   * @public
   * @returns {number|string|object}
   */
  pop() {
    return this.dequeue();
  }

  /**
   * Returns the front element of the queue.
   * @public
   * @returns {number|string|object}
   */
  front() {
    return this.size() > 0 ? this._elements[this._offset] : null;
  }

  /**
   * Returns the back element of the queue.
   * @public
   * @returns {number|string|object}
   */
  back() {
    return this.size() > 0 ? this._elements[this._elements.length - 1] : null;
  }

  /**
   * Returns the number of elements in the queue.
   * @public
   * @returns {number}
   */
  size() {
    return this._elements.length - this._offset;
  }

  /**
   * Checks if the queue is empty.
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Returns the remaining elements in the queue as an array.
   * @public
   * @returns {array}
   */
  toArray() {
    return this._elements.slice(this._offset);
  }

  /**
   * Clears the queue.
   * @public
   */
  clear() {
    this._elements = [];
    this._offset = 0;
  }

  /**
   * Creates a shallow copy of the queue.
   * @public
   * @return {Queue}
   */
  clone() {
    return new Queue(this._elements.slice(this._offset));
  }

  /**
   * Creates a queue from an existing array.
   * @public
   * @static
   * @param {array} elements
   * @return {Queue}
   */
  static fromArray(elements) {
    return new Queue(elements);
  }
}

exports.Queue = Queue;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./node_modules/@kago_m/linked_list/src/node.js
class Node {
    constructor() {
        this.value = null;
        this.next = null;
    }
}

/* harmony default export */ const node = (Node);
;// CONCATENATED MODULE: ./node_modules/@kago_m/linked_list/src/linked_list.js


class LinkedList {
    constructor() {
        this._size = 0;
        this._head = null;
    }

    at(index) {
        let curr = this._head; 
        let i = 0;

        while (curr !== null && i < index) {
            curr = curr.next;
            i++;
        }
        
        return curr;
    }

    append(value) {
        let lastNode = this.at(this._size - 1);
        let newNode = new node();
        newNode.value = value;

        if (lastNode === null) {
            lastNode = newNode;
            this._head = lastNode;
        } else {
            lastNode.next = newNode;
        }

        this._size++;

        return this;
    }

    prepend(value) {
        let newHead = new node();
        newHead.value = value;

        if (this._head === null) {
            this._head = newHead;
        } else {
            // swop existing nodes
            let oldHead = this._head;
            this._head = newHead;
            newHead.next = oldHead;
        }

        this._size++;

        return this;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }

    get head() {
        return this._head;
    }

    set head(value) {
        this._head = value;
    }

    tail() {
        return this.at(this._size - 1);
    }

    pop() {
        let curr = this._head;

        while(curr.next !== null) {
            curr = curr.next;
        }

        let lastNode = curr.next;
        curr.next = null;

        this._size--;

        return lastNode;
    }

    popFront() {
        let curr = this._head;
        this.head = curr.next;
        curr.next = null;
    }

    contains(value) {
        let found = false;
        let curr = this._head;

        while(found !== true && curr !== null) {
            if (curr.value === value) {
                return true;                
            }
            curr = curr.next;
        }

        return false;
    }

    find(value) {
        let found = false;
        let curr = this._head;
        let counter = 0;

        while(found !== true && curr !== null) {
            if (curr.value === value) return counter;                
 
            curr = curr.next;
            counter++;
        }

        return -1;
    }

    toString() {
        let curr = this._head;
        let stringFormat = ``;
        
        while (curr !== null) {
            if (curr.next === null) {
                stringFormat += `(  ${curr.value} )`; 
            } else {
                stringFormat += `(  ${curr.value} ) -> `; 
            }
            curr = curr.next;
        }

        return stringFormat; 
    }

    insertAt(index, value) {
        if (index === 0) {
            this.prepend(value);
            return;
        } else if (index === this.size - 1) {
            this.append(value);
            return;
        }

        let prevNode = this.at(index - 1);
        let oldNode = prevNode.next;
        let newNode = new node();
        newNode.value = value;

        prevNode.next = newNode;
        newNode.next = oldNode;
    }

    removeAt(index) {
        if (index === 0) {
            this.popFront();
            return;
        }
        let prevNode = this.at(index - 1);
        let oldNode = prevNode.next;

        prevNode.next = oldNode.next;
    }

    editAt(index, value) {
        let node = this.at(index);
        node.value = value;
    }
}

/* harmony default export */ const linked_list = (LinkedList);
;// CONCATENATED MODULE: ./node_modules/@kago_m/linked_list/src/index.js


/* harmony default export */ const src = (linked_list);



;// CONCATENATED MODULE: ./src/node/cell.js
class Cell {
    constructor(x, y) {
        this._parent = undefined;
        this._x = x;
        this._y = y;
        this._visited = false;
    }

    set x(value) {
        this._x = value;
    }

    set y(value) {
        this._y = value;
    }

    set parent(value) {
        this._parent = value;
    }

    visit() {
        this._visited = true;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    } 

    get parent() {
        return this._parent;
    }

    get visited() {
        return this._visited;
    }
}

/* harmony default export */ const cell = (Cell);
;// CONCATENATED MODULE: ./src/graph/graph.js
// Representation of graph for the problem



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
                this._connectionsGrid[i].push(new src());
                let connectionsList = this._connectionsGrid[i][j];
                // Prepend connections to be in constant time
                // Keep j constant while decrementing to desired alternating constants of 2 and 1
                connectionsList.prepend(new cell(i+1, j+2));
                connectionsList.prepend(new cell(i-1, j+2));
                
                connectionsList.prepend(new cell(i+2, j+1));
                connectionsList.prepend(new cell(i-2, j+1));

                connectionsList.prepend(new cell(i+2, j-1));
                connectionsList.prepend(new cell(i-2, j-1));                
                
                connectionsList.prepend(new cell(i-1, j-2));
                connectionsList.prepend(new cell(i+1, j-2));
                
                // Prepend the node itself so we may have access to its parent later and other properties in this index
                connectionsList.prepend(new cell(i, j));
            }
        }
    }

    get grid() {
        return this._connectionsGrid;
    }

    isOutOfBounds(node) {
        return node.x >= this._size || node.x < 0 || node.y >= this._size || node.y < 0; 
    }
}

/* harmony default export */ const graph = (Graph);
// EXTERNAL MODULE: ./node_modules/@datastructures-js/queue/index.js
var _datastructures_js_queue = __webpack_require__(595);
;// CONCATENATED MODULE: ./src/knights_travails.js



function traceParents(pathEndCell, pathStartCell) {
    let curr = pathEndCell;
    let counter = 0;
// Trace from node with end indices to one with start indices through the parent property each of them has set
    console.log("From", [pathStartCell.x, pathStartCell.y].toString(), "to", [pathEndCell.x, pathEndCell.y].toString(),"path is:");
    while (!(curr.x === pathStartCell.x && curr.y === pathStartCell.y)) {
        console.log([curr.x, curr.y].toString());
        curr = curr.parent;
        counter++;
    }

    counter++;
    console.log([curr.x, curr.y].toString());
    console.log(`${counter} moves taken`);
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
    let queue = new _datastructures_js_queue/* Queue */.o();

    // Convert start and end into nodes for ease of not having to work with arrays only objects
    // Throw away arrays to work in my preferred data representation form
    let startCell = new cell(start[0], start[1]);
    let endCell = new cell(end[0], end[1]);
    queue.enqueue(startCell);

    if (graph.isOutOfBounds(startCell)) {
        console.log("Start is out of bounds");
        return;
    } else if (graph.isOutOfBounds(endCell)) {
        console.log("End is out of bounds")
        return;
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




;// CONCATENATED MODULE: ./src/index.js



// TODO: Add input mechanism to specify graph size and enter inputs
let src_graph = new graph(8);

knightMoves([3,3], [4,3], src_graph); 
})();

/******/ })()
;