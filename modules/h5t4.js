function getArrayIntersection(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new Error('Both arguments must be arrays');
  }

  const intersection = [];

  for (const element of array1) {
    if (array2.includes(element) && !intersection.includes(element)) {
      intersection.push(element);
    }
  }

  return intersection;
}

function getArrayUnion(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new Error('Both arguments must be arrays');
  }
  const unionSet = new Set([...array1, ...array2]);
  // Convert the set back to an array
  return Array.from(unionSet);
}

module.exports = {
  getArrayIntersection,
  getArrayUnion,
};
