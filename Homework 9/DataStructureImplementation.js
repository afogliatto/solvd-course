// Stack Implementation
class Stack {
  constructor() {
    this.items = [];
  }

  /**
   * Pushes an item onto the stack.
   * Time Complexity: O(1)
   * @param {any} item - The item to be pushed onto the stack.
   */
  push(item) {
    this.items.push(item);
  }

  /**
   * Pops an item from the stack.
   * Time Complexity: O(1)
   * @returns {any} - The popped item.
   * @throws {Error} - If the stack is empty.
   */
  pop() {
    if (this.isEmpty()) {
      throw new Error('pop from empty stack');
    }
    return this.items.pop();
  }

  /**
   * Peeks at the top item of the stack without removing it.
   * Time Complexity: O(1)
   * @returns {any} - The top item of the stack.
   * @throws {Error} - If the stack is empty.
   */
  peek() {
    if (this.isEmpty()) {
      throw new Error('peek from empty stack');
    }
    return this.items[this.items.length - 1];
  }

  /**
   * Checks if the stack is empty.
   * Time Complexity: O(1)
   * @returns {boolean} - True if the stack is empty, false otherwise.
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Returns a string representation of the stack.
   * @returns {string} - The string representation of the stack.
   */
  toString() {
    return `Stack(${this.items})`;
  }
}

// Queue Implementation
class Queue {
  constructor() {
    this.items = [];
  }

  /**
   * Enqueues an item to the queue.
   * Time Complexity: O(1)
   * @param {any} item - The item to be enqueued.
   */
  enqueue(item) {
    this.items.push(item);
  }

  /**
   * Dequeues an item from the queue.
   * Time Complexity: O(n)
   * @returns {any} - The dequeued item.
   * @throws {Error} - If the queue is empty.
   */
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('dequeue from empty queue');
    }
    return this.items.shift();
  }

  /**
   * Peeks at the front item of the queue without removing it.
   * Time Complexity: O(1)
   * @returns {any} - The front item of the queue.
   * @throws {Error} - If the queue is empty.
   */
  peek() {
    if (this.isEmpty()) {
      throw new Error('peek from empty queue');
    }
    return this.items[0];
  }

  /**
   * Checks if the queue is empty.
   * Time Complexity: O(1)
   * @returns {boolean} - True if the queue is empty, false otherwise.
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Returns a string representation of the queue.
   * @returns {string} - The string representation of the queue.
   */
  toString() {
    return `Queue(${this.items})`;
  }
}

// Binary Tree Implementation
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  /**
   * Inserts a value into the binary tree.
   * Time Complexity: O(log n) on average, O(n) in the worst case.
   * @param {any} value - The value to be inserted.
   */
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertRecursive(this.root, newNode);
    }
  }

  _insertRecursive(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertRecursive(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertRecursive(node.right, newNode);
      }
    }
  }

  /**
   * Searches for a value in the binary tree.
   * Time Complexity: O(log n) on average, O(n) in the worst case.
   * @param {any} value - The value to be searched.
   * @returns {TreeNode|null} - The node containing the value, or null if not found.
   */
  search(value) {
    return this._searchRecursive(this.root, value);
  }

  _searchRecursive(node, value) {
    if (node === null || node.value === value) {
      return node;
    }
    if (value < node.value) {
      return this._searchRecursive(node.left, value);
    }
    return this._searchRecursive(node.right, value);
  }

  /**
   * Performs in-order traversal of the binary tree.
   * Time Complexity: O(n)
   * @returns {any[]} - The values of the nodes in in-order.
   */
  inorder() {
    const result = [];
    this._inorderRecursive(this.root, result);
    return result;
  }

  _inorderRecursive(node, result) {
    if (node !== null) {
      this._inorderRecursive(node.left, result);
      result.push(node.value);
      this._inorderRecursive(node.right, result);
    }
  }

  /**
   * Performs pre-order traversal of the binary tree.
   * Time Complexity: O(n)
   * @returns {any[]} - The values of the nodes in pre-order.
   */
  preorder() {
    const result = [];
    this._preorderRecursive(this.root, result);
    return result;
  }

  _preorderRecursive(node, result) {
    if (node !== null) {
      result.push(node.value);
      this._preorderRecursive(node.left, result);
      this._preorderRecursive(node.right, result);
    }
  }

  /**
   * Performs post-order traversal of the binary tree.
   * Time Complexity: O(n)
   * @returns {any[]} - The values of the nodes in post-order.
   */
  postorder() {
    const result = [];
    this._postorderRecursive(this.root, result);
    return result;
  }

  _postorderRecursive(node, result) {
    if (node !== null) {
      this._postorderRecursive(node.left, result);
      this._postorderRecursive(node.right, result);
      result.push(node.value);
    }
  }
}

// Graph Implementation
class Graph {
  constructor() {
    this.adjList = new Map();
  }

  /**
   * Adds a vertex to the graph.
   * Time Complexity: O(1)
   * @param {any} vertex - The vertex to be added.
   */
  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  /**
   * Adds an edge between two vertices in the graph.
   * Time Complexity: O(1)
   * @param {any} v1 - The first vertex.
   * @param {any} v2 - The second vertex.
   */
  addEdge(v1, v2) {
    if (this.adjList.has(v1) && this.adjList.has(v2)) {
      this.adjList.get(v1).push(v2);
      this.adjList.get(v2).push(v1);
    }
  }

  /**
   * Performs depth-first search (DFS) starting from a given vertex.
   * Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges.
   * @param {any} start - The starting vertex.
   * @returns {any[]} - The vertices visited during DFS.
   */
  dfs(start) {
    const visited = new Set();
    const result = [];
    this._dfsRecursive(start, visited, result);
    return result;
  }

  _dfsRecursive(vertex, visited, result) {
    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);
      const neighbors = this.adjList.get(vertex);
      for (const neighbor of neighbors) {
        this._dfsRecursive(neighbor, visited, result);
      }
    }
  }

  /**
   * Performs breadth-first search (BFS) starting from a given vertex.
   * Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges.
   * @param {any} start - The starting vertex.
   * @returns {any[]} - The vertices visited during BFS.
   */
  bfs(start) {
    const visited = new Set();
    const queue = [start];
    const result = [];
    while (queue.length > 0) {
      const vertex = queue.shift();
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);
        const neighbors = this.adjList.get(vertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
    return result;
  }
}

// Linked List Implementation
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * Inserts a value at the end of the linked list.
   * Time Complexity: O(n)
   * @param {any} value - The value to be inserted.
   */
  insert(value) {
    const newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  /**
   * Deletes a value from the linked list.
   * Time Complexity: O(n)
   * @param {any} value - The value to be deleted.
   */
  delete(value) {
    if (this.head === null) return;
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next !== null && current.next.value !== value) {
      current = current.next;
    }
    if (current.next !== null) {
      current.next = current.next.next;
    }
  }

  /**
   * Searches for a value in the linked list.
   * Time Complexity: O(n)
   * @param {any} value - The value to be searched.
   * @returns {ListNode|null} - The node containing the value, or null if not found.
   */
  search(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  /**
   * Returns a string representation of the linked list.
   * @returns {string} - The string representation of the linked list.
   */
  toString() {
    const nodes = [];
    let current = this.head;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return `LinkedList(${nodes})`;
  }
}

// Exporting all classes for use in other files
module.exports = {
  Stack,
  Queue,
  BinaryTree,
  Graph,
  LinkedList,
};
