// hashFunctions.js

/**
 * A class representing a hash table with a custom hash function.
 */
class CustomHashTable {
  /**
   * Creates an instance of CustomHashTable.
   * @param {number} size - The size of the hash table.
   */
  constructor(size = 50) {
    this.size = size;
    this.buckets = Array(size)
      .fill(null)
      .map(() => []);
  }

  /**
   * Custom hash function to convert a string key to a numeric index.
   * @param {string} key - The key to hash.
   * @returns {number} The hash code for the key.
   */
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash) % this.size;
  }

  /**
   * Inserts a key-value pair into the hash table.
   * @param {string} key - The key to insert.
   * @param {*} value - The value to insert.
   */
  insert(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const existing = bucket.find((item) => item.key === key);

    if (existing) {
      existing.value = value; // Update existing value
    } else {
      bucket.push({ key, value });
    }
  }

  /**
   * Retrieves the value associated with a given key.
   * @param {string} key - The key to retrieve.
   * @returns {*} The value associated with the key, or null if the key is not found.
   */
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const found = bucket.find((item) => item.key === key);

    return found ? found.value : null;
  }

  /**
   * Deletes a key-value pair from the hash table.
   * @param {string} key - The key to delete.
   */
  delete(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const itemIndex = bucket.findIndex((item) => item.key === key);

    if (itemIndex !== -1) {
      bucket.splice(itemIndex, 1);
    }
  }
}

// Export the class for use in other files
module.exports = CustomHashTable;
