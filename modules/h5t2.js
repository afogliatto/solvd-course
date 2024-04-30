function chunkArray(array, chunkSize) {
  if (!Array.isArray(array)) {
    throw new Error('The first argument must be an array.');
  }

  if (!Number.isInteger(chunkSize) || chunkSize <= 0) {
    throw new Error('The second argument must be a positive integer.');
  }

  const chunkedArray = [];
  let index = 0;

  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + chunkSize));
    index += chunkSize;
  }

  return chunkedArray;
}

module.exports = {
  chunkArray,
};
