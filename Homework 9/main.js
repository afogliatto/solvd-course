const {
  Stack,
  Queue,
  BinaryTree,
  Graph,
  LinkedList,
} = require('./DataStructureImplementation.js');
const {
  MinMaxStack,
  BinaryTree2,
  isBST,
  Graph2,
  ListNode,
  hasCycle,
} = require('./AlgorithmicProblems.js');

// Example usage of Stack
console.log('Stack example:');
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); 
console.log(stack.peek()); 

// Example usage of Queue
console.log('\nQueue example:');
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); 
console.log(queue.peek()); 

// Example usage of BinaryTree
console.log('\nBinaryTree example:');
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
console.log(tree.inorder()); 
console.log(tree.search(5)); 

// Example usage of Graph
console.log('\nGraph example:');
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addEdge(1, 2);
console.log(graph.dfs(1)); 
console.log(graph.bfs(1)); 

// Example usage of LinkedList
console.log('\nLinkedList example:');
const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
console.log(linkedList.search(2)); 
linkedList.delete(1);
console.log(linkedList); 

// Example usage of Min/Max Stack
console.log("Min/Max Stack example:");
const minMaxStack = new MinMaxStack();
minMaxStack.push(3);
minMaxStack.push(5);
console.log(minMaxStack.getMin()); // Output: 3
console.log(minMaxStack.getMax()); // Output: 5
minMaxStack.push(2);
minMaxStack.push(1);
console.log(minMaxStack.getMin()); // Output: 1
console.log(minMaxStack.getMax()); // Output: 5
minMaxStack.pop();
console.log(minMaxStack.getMin()); // Output: 2
console.log(minMaxStack.getMax()); // Output: 5

// Example usage of Binary Search Tree validation
console.log("\nBinary Search Tree validation example:");
const tree2 = new BinaryTree2();
tree2.insert(10);
tree2.insert(5);
tree2.insert(15);
console.log(isBST(tree2.root)); // Output: true

// Example usage of Graph algorithms
console.log("\nGraph algorithms example:");
const graph2 = new Graph2();
graph2.addVertex('A');
graph2.addVertex('B');
graph2.addVertex('C');
graph2.addVertex('D');
graph2.addEdge('A', 'B', 1);
graph2.addEdge('A', 'C', 4);
graph2.addEdge('B', 'C', 2);
graph2.addEdge('B', 'D', 5);
graph2.addEdge('C', 'D', 1);
console.log(graph2.dijkstra('A', 'D')); // Output: ['A', 'B', 'C', 'D']
console.log(graph2.bfsShortestPath('A', 'D')); // Output: ['A', 'B', 'C', 'D']

// Example usage of Linked List cycle detection
console.log("\nLinked List cycle detection example:");
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = head.next; // Creating a cycle
console.log(hasCycle(head)); // Output: true
