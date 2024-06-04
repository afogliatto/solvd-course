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

/**
 * Analisys:
 * Custom Hash Function
The custom hash function implemented in the CustomHashTable class uses a simple hashing algorithm that processes each character in the string key to generate a numeric hash code.
Complexity: It iterates through each character of the input string.
Properties and Trade-Offs: 
It's simple and easy to implement.
It can produce good distribution of hash values minimizin collitions.

* Hash Table
* Intertion:
Time Complexity: Insertion involves computing the hash code (O(n) due to the length of the key) and then performing an insertion operation in the appropriate bucket.
* Retrieval:
Time Complexity: Retrieval involves computing the hash code (O(n)) and then searching for the key in the appropriate bucket.
* Deletion:
Time Complexity: Deletion involves computing the hash code (O(n)), finding the key in the bucket, and then removing the element.
* Trade-offs and Considerations:
Load Factor:
The performance of the hash table is highly dependent on the load factor affecting the performace of all operations.
Choosing an appropriate initial size for the hash table and implementing dynamic resizing (rehashing) can help maintain a low load factor.
Collision Handling:
The current implementation uses separate chaining to handle collisions, storing multiple key-value pairs in linked lists within each bucket.
Space Complexity:
Each bucket itself requires additional space to store linked lists.
Prime Number Table Size:
Using a prime number for the table size can help reduce the likelihood of collisions by providing a more uniform distribution of hash values.
 */
