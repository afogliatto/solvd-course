function chainPromises(functionsArray) {
  if (!Array.isArray(functionsArray)) {
    return Promise.reject(new Error('Argument is not an array.'));
  }

  if (functionsArray.some((func) => typeof func !== 'function')) {
    return Promise.reject(new Error('Array contains non-function elements.'));
  }

  return functionsArray.reduce(
    (chain, func) => chain.then(func),
    Promise.resolve(),
  );
}

// Example 1: Correct Usage
function asyncFunction1() {
  return Promise.resolve('Result from asyncFunction1');
}

function asyncFunction2(data) {
  return Promise.resolve(data + ' - Result from asyncFunction2');
}

function asyncFunction3(data) {
  return Promise.resolve(data + ' - Result from asyncFunction3');
}

const correctFunctionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];

chainPromises(correctFunctionsArray)
  .then((result) => {
    console.log('Chained promise result:', result);
    // Expected: "Result from asyncFunction1 - Result from asyncFunction2 - Result from asyncFunction3"
  })
  .catch((error) => {
    console.error('Chained promise error:', error);
  });

// Example 2: Triggering Error Handler
const incorrectFunctionsArray = [
  asyncFunction1,
  'not a function',
  asyncFunction3,
];

chainPromises(incorrectFunctionsArray)
  .then((result) => {
    console.log('Chained promise result:', result);
  })
  .catch((error) => {
    console.error('Chained promise error:', error);
    // Expected: Chained promise error: Error: Array contains non-function elements.
  });
