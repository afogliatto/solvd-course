function customFilterUnique(array, callback) {
  const counts = new Map();
  const uniqueArray = [];

  array.forEach((element) => {
    const result = callback(element);
    counts.set(result, (counts.get(result) || 0) + 1);
  });

  array.forEach((element) => {
    const result = callback(element);
    if (counts.get(result) === 1) {
      uniqueArray.push(element);
    }
  });

  return uniqueArray;
}

module.exports = {
  customFilterUnique,
};
