function lazyMap(arr, mappingFunction) {
  if (typeof arr !== 'object' || typeof mappingFunction !== 'function') {
    throw new Error('Cannot go on with the given arguments');
  }
  let index = 0;
  return function () {
    if (index < arr.length) {
      const mappedElement = mappingFunction(arr[index]);
      index++;
      return mappedElement;
    } else {
      return undefined; 
    }
  };
}

function fibonacciGenerator() {
  let prev = 0;
  let curr = 1;

  return function () {
    const nextFibonacci = curr;
    curr = prev + curr;
    prev = nextFibonacci;
    return nextFibonacci;
  };
}

module.exports = {
  lazyMap,
  fibonacciGenerator,
};
