class Operations {
  add = (x, y) => {
    let num1 = Number(x);
    let num2 = Number(y);
    let result = num1 + num2;
    return result.toString();
  };

  subs = (x, y) => {
    let num1 = Number(x);
    let num2 = Number(y);
    if (num1 < num2) {
      return "First Number can't be smaller than Second Number"
    }
    let result = num1 - num2;
    return result.toString();
  };

  mult = (x, y) => {
    let num1 = Number(x);
    let num2 = Number(y);
    let result = num1 * num2;
    return result.toString();
  };

  div = (x, y) => {
    let num1 = Number(x);
    let num2 = Number(y);
    let result = Math.floor(num1 / num2)
    return result.toString();
  };
}

module.exports = {
 Operations
}
