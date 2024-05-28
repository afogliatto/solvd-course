// main.js

const CustomHashTable = require('./hashFunctions');

// Creating an instance of CustomHashTable
const hashTable = new CustomHashTable();

// Test case: Inserting key-value pairs
hashTable.insert('name', 'Alice');
hashTable.insert('age', 25);
hashTable.insert('occupation', 'Engineer');

// Test case: Retrieving values by key
console.log(hashTable.get('name')); // Expected output: Alice
console.log(hashTable.get('age')); // Expected output: 25
console.log(hashTable.get('occupation')); // Expected output: Engineer

// Test case: Updating an existing key
hashTable.insert('name', 'Bob');
console.log(hashTable.get('name')); // Expected output: Bob

// Test case: Deleting a key-value pair
hashTable.delete('age');
console.log(hashTable.get('age')); // Expected output: null

// Test case: Handling collisions
hashTable.insert('a', 'First Entry');
hashTable.insert('b', 'Second Entry');
console.log(hashTable.get('a')); // Expected output: First Entry
console.log(hashTable.get('b')); // Expected output: Second Entry
