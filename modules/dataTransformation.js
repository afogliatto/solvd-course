function addValues(a, b) {
  // Check if both arguments have the same type
  if (typeof a === 'number') {
    if (typeof b === 'number') {
      return a + b;
    }
    if (typeof b === 'string' && !isNaN(b)) {
      b = Number(b);
      return a + b;
    } else {
      return 'Addition not possible with the provided types';
    }
  }
  if (typeof a === 'string' && !isNaN(a)) {
    a = Number(a);
    if (typeof b === 'number') {
      return a + b;
    } else if (typeof b === 'string' && !isNaN(b)) {
      a = Number(a);
      b = Number(b);
      return a + b;
    }
  }

  return 'Addition not possible with the provided types';
}

function stringifyValue(x) {
  if (typeof x === 'object' && x !== null) {
    return JSON.stringify(x)
  } else {
    return String(x)
  }
}

function invertBoolean(x) {
  if (typeof x === 'boolean') {
    x = !x
    return x
  } else {
    return "Can't invert a non-boolean"
  }
}

function coerceToType(value, type) {
  switch (type) {
    case 'string':
      if (typeof value === 'string') {
        return 'Value is already a string';
      }
      if (typeof value === 'number') {
        return String(value);
      }
      if (typeof value === 'boolean') {
        return String(value);
      }
      if (typeof value === 'object') {
        return JSON.stringify(value);
      }
    case 'number':
      if (typeof value === 'number') {
        return 'Value is already a number';
      }
      if (typeof value === 'string') {
        return Number(value);
      }
      if (typeof value === 'boolean') {
        return Number(value);
      }
      if (typeof value === 'object') {
        return "Can't coerce";
      }
    case 'boolean':
      if (typeof value === 'boolean') {
        return 'Value is already a boolean';
      }
      if (typeof value === 'number') {
        return Boolean(value);
      }
      if (typeof value === 'string') {
        return Boolean(value);
      }
      if (typeof value === 'array') {
        return Boolean(value.length);
      }
      if (typeof value === 'object') {
        return Boolean(Object.keys(value).length);
      }
    case 'array':
      if (typeof value === 'string') {
        return value.split('');
      }
      if (typeof value === 'number') {
        const numString = value.toString();
        return numString.split('').map((digit) => parseInt(digit));
      }
      if (typeof value === 'object' && Array.isArray(value)) {
        return 'Value is already an array';
      } else {
        return Object.entries(value);
      }
    case 'object':
      if (typeof value === 'number') {
        return { numberValue: value };
      }
      if (typeof value === 'string') {
        return { stringValue: value };
      }
      if (typeof value === 'boolean') {
        return { booleanValue: value };
      }
      if (typeof value === 'object' && Array.isArray(value)) {
        return Object.assign({}, value);
      } else {
        return 'Value is already an object';
      }
  }
}
module.exports = {
  addValues,
  stringifyValue,
  invertBoolean,
  coerceToType
};
