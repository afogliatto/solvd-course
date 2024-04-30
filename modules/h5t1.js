function customFilterUnique(array, callback) {
  const uniqueArray = [];
  const uniqueSet = new Set();

  array.forEach((element) => {
    const result = callback(element);
    if (!uniqueSet.has(result)) {
      uniqueSet.add(result);
      uniqueArray.push(element);
    }
  });

  return uniqueArray;
}

module.exports = {
  customFilterUnique,
};
