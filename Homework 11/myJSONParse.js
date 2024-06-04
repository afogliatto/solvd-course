/**
 * myJSONParse: A simplified JSON.parse implementation using regular expressions
 *
 * JSON Syntax Overview:
 *  - Objects: Enclosed in {}, contain key-value pairs.
 *  - Arrays: Enclosed in [], contain values.
 *  - Values: Can be strings, numbers, booleans, null, objects, or arrays.
 *  - Strings: Enclosed in double quotes.
 *  - Numbers: Can be integers or floating-point.
 *  - Booleans: true or false.
 *  - Null: null.
 *
 * This function implements a basic JSON parser using regular expressions to tokenize
 * the input JSON string and a recursive descent parser to construct the corresponding
 * JavaScript object.
 *
 * @param {string} jsonString - The JSON-formatted string to parse.
 * @returns {any} - The JavaScript object representation of the JSON string.
 * @throws {SyntaxError} - Throws a SyntaxError if the JSON string is invalid.
 */

function myJSONParse(jsonString) {
  // Trim whitespace from the input string
  jsonString = jsonString.trim();

  // Tokenize the JSON string using regular expressions
  const tokens = tokenize(jsonString);

  // Parse the tokens to construct the JavaScript object
  const result = parseTokens(tokens);

  return result;
}

// Regular expressions for different JSON elements
const tokenPatterns = {
  string: /^"(?:\\["\\\/bfnrt]|\\u[0-9a-fA-F]{4}|[^"\\])*"/, // Matches JSON strings
  number: /^-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/, // Matches JSON numbers
  boolean: /^(true|false)/, // Matches JSON booleans
  null: /^null/, // Matches JSON null
  whitespace: /^\s+/, // Matches whitespace
  punctuation: /^[\[\]\{\},:]/, // Matches JSON punctuation
};

/**
 * Tokenize the JSON string into an array of tokens.
 *
 * @param {string} jsonString - The JSON-formatted string to tokenize.
 * @returns {Array} - An array of token objects, each with a type and value.
 * @throws {SyntaxError} - Throws a SyntaxError if an unexpected token is found.
 */
function tokenize(jsonString) {
  let tokens = [];
  let remaining = jsonString;

  while (remaining.length > 0) {
    let match = null;

    for (const type in tokenPatterns) {
      match = remaining.match(tokenPatterns[type]);
      if (match) {
        if (type !== 'whitespace') {
          // Ignore whitespace
          tokens.push({ type, value: match[0] });
        }
        remaining = remaining.slice(match[0].length);
        break;
      }
    }

    if (!match) {
      throw new SyntaxError('Unexpected token in JSON');
    }
  }

  return tokens;
}

/**
 * Parse the array of tokens into a JavaScript object.
 *
 * @param {Array} tokens - The array of tokens to parse.
 * @returns {any} - The JavaScript object representation of the parsed tokens.
 * @throws {SyntaxError} - Throws a SyntaxError if an unexpected token or end of input is found.
 */
function parseTokens(tokens) {
  if (tokens.length === 0) {
    throw new SyntaxError('Unexpected end of JSON input');
  }

  const token = tokens.shift();

  switch (token.type) {
    case 'string':
      return JSON.parse(token.value); // Use native JSON parser for string unescaping
    case 'number':
      return parseFloat(token.value);
    case 'boolean':
      return token.value === 'true';
    case 'null':
      return null;
    case 'punctuation':
      if (token.value === '{') {
        let obj = {};
        while (tokens[0].value !== '}') {
          if (tokens[0].value === ',') {
            tokens.shift();
          }
          const key = parseTokens(tokens);
          if (typeof key !== 'string') {
            throw new SyntaxError('Expected string as key in object');
          }
          if (tokens.shift().value !== ':') {
            throw new SyntaxError("Expected ':' after key in object");
          }
          const value = parseTokens(tokens);
          obj[key] = value;
        }
        tokens.shift(); // Remove closing brace
        return obj;
      } else if (token.value === '[') {
        let arr = [];
        while (tokens[0].value !== ']') {
          if (tokens[0].value === ',') {
            tokens.shift();
          }
          arr.push(parseTokens(tokens));
        }
        tokens.shift(); // Remove closing bracket
        return arr;
      } else {
        throw new SyntaxError('Unexpected punctuation in JSON');
      }
    default:
      throw new SyntaxError(`Unexpected token type: ${token.type}`);
  }
}

// Export the function for use in other files
module.exports = myJSONParse;
