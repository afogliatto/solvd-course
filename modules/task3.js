function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

function repeatFunction(func, times) {
  if (typeof func !== 'function') {
    throw new TypeError('First argument must be a function');
  }

  if (typeof times !== 'number') {
    throw new TypeError('Second argument must be a number');
  }
  return function (...args) {
    if (times >= 0) {
      for (let i = 0; i < times; i++) {
        func(...args);
      }
    } else {
      setInterval(() => {
        func(...args);
      }, 1000);
    }
  };
}

module.exports = {
  repeatFunction,
  createCounter,
};
