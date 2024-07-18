# Project Name

## About

This is a solution to the Knight's Travails path finding problem as part of The Odin Project. Details are below. There is no GUI for this project. It works via the browser console.
Find link to live [here](https://kaglet.github.io/knights_travails/).

### [Assignment](https://www.theodinproject.com/lessons/javascript-knights-travails#assignment)

"For this project, you’ll need to use a graph, a data structure that’s similar (but not identical) to a binary tree. For a good introduction on what graphs are, reference [Khan Academy’s “Describing Graphs”](https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/describing-graphs). Don’t forget to look at the [section on representing graphs](https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs), as it should give you some good ideas on how to actually implement graphs in your code.

Given enough turns, [a knight on a standard 8x8 chess board can move from any square to any other square](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/ruby_programming/computer_science/project_knights_travails/imgs/00.png). Its basic move is two steps forward and one step to the side or one step forward and two steps to the side. It can face any direction."

"Your task is to build a function `knightMoves` that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

You can think of the board as having 2-dimensional coordinates. Your function would therefore look like:
- `knightMoves([0,0],[1,2]) == [[0,0],[1,2]]`"

## Execution Concept

### Data structures
I adapted the concept of adjacency lists to create a data structure similar to them to solve this problem. I created a 2D array where each space had a linked list. At the head of the linked list was a node with a value that represented the actual cell mapping to that grid space. For example (0,0) in the grid mapped to this cell at the head of the linked list. Connected to the head of the linked list were adjacent nodes. These contained cells that the knight would land in if it moved from the head cell position. These cells represent the result of the 8 possible moves a knight can make from the original parent cell. These cells with a relationships to the parent cell can be pre-calculated for each cell in the grid. 

In this way the nodes connected to the head node of the linked list are like children, which will later conceptualize how a BFS will work on it. 

### BFS approach
I originally came up with this shortest pathfinding algorithm in recursive DFS form, but didn't realize BFS was simply better because of the way it behaves. 

A BFS works by visiting all a node's children before it visits it's children's children. This is very important. A BFS traverses from a central starting node in a radiating pattern where before it moves to the next level of traversal it first finishes with the previous level. 

The BFS therefore has a unique property in that the first solution to the end will always be the shortest one. It visits all possible branching levels at an equal speed until the first, shortest one wins! A DFS in traversing depth first not children first, can go down one entire rabbit hole, and it won't happen to be the correct shortest one even if it gets to the goal. This means theoretically a DFS has to find all paths to the goal, and then store them somewhere, then pick the shortest one. The DFS can therefore be good to quickly find a path, any path to the goal, but not the shortest one in this instance. The BFS in it's radial generalized search works best. 

Another problem with the DFS is the step of actually storing the entire path to a goal when you get to the base case of the DFS recursion, while being unable to fully backtrack to the start as other path possibilities still have to be stored. I wanted to challenge myself to do both implementations but this major roadblock made me set aside the DFS method for now. 

### Trace path once goal cell is reached
After that it's a matter of keeping track of the parent nodes where one node came from to string together a path to the goal. Once a node gains a parent. It can never be overwritten. So if from one node we traverse to another node and find it already has a parent given to it from being gotten to by another node in the BFS, it will not be overwritten. This is because unless the new parent is at the same level (same distance) as the existing parent of a node it wants to move to, then the next parent trying to get to the node will represent a longer distance from the starting node.

### Summary of approach

The BFS uses a while loop and a queue (FIFO principle). The start node is added, if it is the goal, exit and return with trivial path solution. Else continue. Get the nodes children. Add to their parent property the current node. Dequeue the front node. Enqueue the children. Continue for each node like this, enqueueing its own children. Due to the nature of the queue grandchildren will be added to the queue while children who came first will be considered first.

## Credits

- I used [datastructures-js/queue: ➡️ A performant queue implementation in javascript.](https://github.com/datastructures-js/queue) npm library for the queue implementation.
- I used my own npm library for my own previously made [implementation](https://github.com/kaglet/linked_list) of the linked list. 
