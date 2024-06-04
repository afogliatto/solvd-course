const myJSONParse = require('./myJSONParse');

// Testing the function with various JSON strings
try {
  const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
  const jsonObject = myJSONParse(jsonString);
  console.log(jsonObject); // Should output the parsed JavaScript object

  // Additional tests
  console.log(
    myJSONParse(
      '{"name": "John", "age": 30, "address": {"city": "New York", "zip": "10001"}}',
    ),
  ); // Nested objects
  console.log(myJSONParse('["apple", "banana", "cherry"]')); // Array
  console.log(myJSONParse('true')); // Boolean true
  console.log(myJSONParse('null')); // Null
  console.log(myJSONParse('12345')); // Number
} catch (e) {
  console.error(e.message);
}

/**
 * Reflection:
 * The first challenge I encountered were the Escaped Characters in Strings which could be really confusing and hard to follow.
 * The best way I found to avoind errors was to carefully craft the expresions so I would'nt terminate it early by mistake.
 * I also had some difficulties when handling Nested Structures and the syntax complexity.
 * To address this I found very usefull to implement temporal error handlers that would allow me to catch the error and pin point it in the code.
 */
