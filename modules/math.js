class Operations {
  add = (x, y) => {
    let maxLength = Math.max(x.length, y.length);
    let result = '';
    let carry = 0;

    for (let i = 0; i < maxLength; i++) {
      let num1 = parseInt(x[x.length - 1 - i] || 0);
      let num2 = parseInt(x[x.length - 1 - i] || 0);
      let sum = num1 + num2 + carry;

      result = (sum % 10) + result;
      carry = Math.floor(sum / 10);
    }

    if (carry) {
      result = carry + result;
    }

    return result;
  };

  subs = (x, y) => {
    if (x < y) {
      return 'Error: The first number must be greater than or equal to the second number.';
    }

    let maxLength = Math.max(x.length, y.length);
    let result = '';
    let borrow = 0;

    for (let i = 0; i < maxLength; i++) {
      let digit1 = parseInt(x[x.length - 1 - i] || 0);
      let digit2 = parseInt(y[y.length - 1 - i] || 0);

      // Adjust for borrow
      digit1 -= borrow;

      if (digit1 < digit2) {
        digit1 += 10;
        borrow = 1;
      } else {
        borrow = 0;
      }

      let diff = digit1 - digit2;
      result = diff + result;
    }

    result = result.replace(/^0+/, '');

    return result || '0';
  };

  mult = (x, y) => {
    const result = [];

    for (let i = 0; i < x.length + y.length; i++) {
      result.push(0);
    }

    for (let i = x.length - 1; i >= 0; i--) {
      for (let j = y.length - 1; j >= 0; j--) {
        let product = parseInt(x[i]) * parseInt(y[j]);
        let sum = product + result[i + j + 1];
        result[i + j + 1] = sum % 10;
        result[i + j] += Math.floor(sum / 10);
      }
    }

    let resultString = '';
    for (let digit of result) {
      resultString += digit;
    }

    resultString = resultString.replace(/^0+/, '');

    return resultString || '0';
  };

  div = (dividend, divisor) => {
    // Compare arrays function defined directly inside the div method
    const compareArrays = (arr1, arr2) => {
      if (arr1.length !== arr2.length) {
        return arr1.length - arr2.length;
      }
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return arr1[i] - arr2[i];
        }
      }
      return 0;
    };

    const dividendArray = dividend.split('').map(Number);
    const divisorArray = divisor.split('').map(Number);

    if (compareArrays(dividendArray, divisorArray) < 0) {
      return 'Error: Divisor is greater than or equal to dividend.';
    }

    let dividendLarger = false;
    if (dividend.length > divisor.length) {
      dividendLarger = true;
    } else if (dividend.length === divisor.length) {
      for (let i = 0; i < dividend.length; i++) {
        if (dividendArray[i] > divisorArray[i]) {
          dividendLarger = true;
          break;
        } else if (dividendArray[i] < divisorArray[i]) {
          break;
        }
      }
    }

    if (!dividendLarger) {
      return 'Error: Divisor is greater than or equal to dividend.';
    }

    const quotient = Array(dividendArray.length).fill(0);

    let remainder = 0;
    let currentDigit;

    for (let i = 0; i < dividendArray.length; i++) {
      currentDigit =
        ((remainder * 10 + dividendArray[i]) / divisorArray[0]) | 0;
      quotient[i] = currentDigit;

      remainder =
        remainder * 10 + dividendArray[i] - currentDigit * divisorArray[0];
    }

    let quotientString = quotient.join('');

    quotientString = quotientString.replace(/^0+/, '');

    return quotientString || '0';
  };
}

module.exports = {
 Operations
}
