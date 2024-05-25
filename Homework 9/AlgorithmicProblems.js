// Min/Max Stack Implementation
class MinMaxStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
    this.maxStack = [];
  }

  /**
   * Pushes an item onto the stack.
   * Time Complexity: O(1)
   * @param {any} item - The item to be pushed onto the stack.
   */
  push(item) {
    this.stack.push(item);
    if (this.minStack.length === 0 || item <= this.getMin()) {
      this.minStack.push(item);
    }
    if (this.maxStack.length === 0 || item >= this.getMax()) {
      this.maxStack.push(item);
    }
  }

  /**
   * Pops an item from the stack.
   * Time Complexity: O(1)
   * @returns {any} - The popped item.
   * @throws {Error} - If the stack is empty.
   */
  pop() {
    if (this.stack.length === 0) {
      throw new Error('pop from empty stack');
    }
    const item = this.stack.pop();
    if (item === this.getMin()) {
      this.minStack.pop();
    }
    if (item === this.getMax()) {
      this.maxStack.pop();
    }
    return item;
  }

  /**
   * Gets the minimum item in the stack.
   * Time Complexity: O(1)
   * @returns {any} - The minimum item.
   * @throws {Error} - If the stack is empty.
   */
  getMin() {
    if (this.minStack.length === 0) {
      throw new Error('stack is empty');
    }
    return this.minStack[this.minStack.length - 1];
  }

  /**
   * Gets the maximum item in the stack.
   * Time Complexity: O(1)
   * @returns {any} - The maximum item.
   * @throws {Error} - If the stack is empty.
   */
  getMax() {
    if (this.maxStack.length === 0) {
      throw new Error('stack is empty');
    }
    return this.maxStack[this.maxStack.length - 1];
  }
}

// TreeNode and BinaryTree classes
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree2 {
  constructor() {
    this.root = null;
  }

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
}

/**
 * Checks if a binary tree is a binary search tree (BST).
 * Time Complexity: O(n)
 * @param {TreeNode} root - The root of the binary tree.
 * @returns {boolean} - True if the tree is a BST, false otherwise.
 */
function isBST(root, min = null, max = null) {
  if (root === null) return true;
  if (
    (min !== null && root.value <= min) ||
    (max !== null && root.value >= max)
  )
    return false;
  return (
    isBST(root.left, min, root.value) && isBST(root.right, root.value, max)
  );
}

// Graph class with Dijkstra and BFS shortest path algorithms
class Graph2 {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(v1, v2, weight = 1) {
    if (this.adjList.has(v1) && this.adjList.has(v2)) {
      this.adjList.get(v1).push({ node: v2, weight });
      this.adjList.get(v2).push({ node: v1, weight });
    }
  }

  /**
   * Finds the shortest path using Dijkstra's algorithm.
   * Time Complexity: O(V^2) with adjacency matrix, O((V + E) log V) with adjacency list + priority queue.
   * @param {any} start - The starting vertex.
   * @param {any} end - The ending vertex.
   * @returns {any[]} - The shortest path from start to end.
   */
  dijkstra(start, end) {
    const distances = new Map();
    const priorityQueue = new Map(); // Use MinHeap or Priority Queue in a real scenario
    const previous = new Map();
    const path = [];
    let smallest;

    this.adjList.forEach((_, vertex) => {
      if (vertex === start) {
        distances.set(vertex, 0);
        priorityQueue.set(vertex, 0);
      } else {
        distances.set(vertex, Infinity);
        priorityQueue.set(vertex, Infinity);
      }
      previous.set(vertex, null);
    });

    while (priorityQueue.size) {
      smallest = Array.from(priorityQueue.entries()).reduce(
        (min, [key, value]) => (value < min[1] ? [key, value] : min),
        [null, Infinity],
      )[0];
      priorityQueue.delete(smallest);

      if (smallest === end) {
        while (previous.get(smallest)) {
          path.push(smallest);
          smallest = previous.get(smallest);
        }
        break;
      }

      if (smallest || distances.get(smallest) !== Infinity) {
        for (let neighbor of this.adjList.get(smallest)) {
          let candidate = distances.get(smallest) + neighbor.weight;
          let nextNeighbor = neighbor.node;
          if (candidate < distances.get(nextNeighbor)) {
            distances.set(nextNeighbor, candidate);
            previous.set(nextNeighbor, smallest);
            priorityQueue.set(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }

  /**
   * Finds the shortest path using BFS.
   * Time Complexity: O(V + E)
   * @param {any} start - The starting vertex.
   * @param {any} end - The ending vertex.
   * @returns {any[]} - The shortest path from start to end.
   */
  bfsShortestPath(start, end) {
    const queue = [[start]];
    const visited = new Set([start]);

    while (queue.length) {
      const path = queue.shift();
      const node = path[path.length - 1];

      if (node === end) {
        return path;
      }

      for (const neighbor of this.adjList.get(node)) {
        if (!visited.has(neighbor.node)) {
          visited.add(neighbor.node);
          const newPath = path.slice();
          newPath.push(neighbor.node);
          queue.push(newPath);
        }
      }
    }
    return [];
  }
}

// LinkedList and cycle detection function
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Detects if a linked list has a cycle.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {ListNode} head - The head of the linked list.
 * @returns {boolean} - True if there is a cycle, false otherwise.
 */
function hasCycle(head) {
  if (!head) return false;

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// Exporting all classes and functions for use in other files
module.exports = {
  MinMaxStack,
  TreeNode,
  BinaryTree2,
  isBST,
  Graph2,
  ListNode,
  hasCycle,
};
