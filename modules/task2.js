function getFullName(person) {
  if (!person || typeof person !== 'object') {
    throw new Error ("Person object is missing or not provided")
  }

  if (typeof person.firstName !== 'string' || typeof person.lastName !== 'string') {
    throw new Error("Properties must be a string")
  }

  if (!person.firstName.trim() || !person.lastName.trim()) {
    throw new Error ("Person object cannot have empty properties")
  }
    return `${person.firstName} ${person.lastName}`;
}

const wordsToArray = (text) => text.replace(/[^\w\s]/g, '').split(/\s+/);
const uniqueElements = (array) => [...new Set(array)];
const sortedUniqueWords = (array) => array.sort();

const filterUniqueWords = (text) =>
  sortedUniqueWords(uniqueElements(wordsToArray(text)));

module.exports = {
  getFullName,
  filterUniqueWords
 }
