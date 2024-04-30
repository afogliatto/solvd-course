function measureArrayPerformance(func, array) {
  if (typeof func !== 'function') {
    throw new Error('The first argument must be a function.');
  }

  if (!Array.isArray(array)) {
    throw new Error('The second argument must be an array.');
  }

  const startTime = performance.now();
  func(array);
  const endTime = performance.now();

  return endTime - startTime;
}

module.exports = {
  measureArrayPerformance,
};
