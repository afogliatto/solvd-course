function getFullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

const filterUniqueWords = (text) =>
  text
    .toLowerCase() 
    .match(/\b\w+\b/g) 
    .filter((word, index, array) => array.indexOf(word) === index) 
    .sort(); 
module.exports = {
  getFullName,
  filterUniqueWords
 }
