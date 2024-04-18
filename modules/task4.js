function calculateFactorial(n) {
  if (typeof n !== 'number') {
    throw new Error("Value of n must be a number")
  } else {
    
    function factorialHelper(n, accumulator) {
      if (n === 0 || n === 1) {
        return accumulator;
      } else {
        return factorialHelper(n - 1, n * accumulator);
      }
    }
    
    return factorialHelper(n, 1);
  }
}

function power(base, exponent) {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new Error("Base and exponent must be numbers")
  }
  if (exponent === 0) {
    return 1;
  }
  return exponent > 0
    ? base * power(base, exponent - 1)
    : 1 / power(base, -exponent);
}

module.exports = {
  calculateFactorial,
  power,
};
