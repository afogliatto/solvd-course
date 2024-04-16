function repeatFunction(func, times) {
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
  repeatFunction
}
