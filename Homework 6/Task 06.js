function curry(func, arity) {
  function curried(...args) {
    if (args.length >= arity) {
      return func(...args);
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  }
  return curried;
}

// Example usage:
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add, 3);

console.log(curriedAdd(1)(2)(3));
console.log(curriedAdd(1, 2)(3));
console.log(curriedAdd(1)(2, 3));
console.log(curriedAdd(1, 2, 3));
