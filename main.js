const math = require("./modules/math")
const String = new math.Operations()
const dataTransformation = require ("./modules/dataTransformation")

// Homework Number 1
console.log("Homework #1")

console.log(String.add("123987129387123987129387", "1"));
console.log(String.subs('30000000000000000000000000000000000', '2'));
console.log(String.mult('30000000000000000000000000000000000000', '50000000000000000000000000000000000000000'));
console.log(String.div('25', '3'));


//Homework Number 2
console.log("Homework #2")
//addValues examples
console.log('addValues examples');

console.log(dataTransformation.addValues(5, 8)); 
console.log(dataTransformation.addValues(5, '8')); 
console.log(dataTransformation.addValues('3', 5)); 
console.log(dataTransformation.addValues('14', '23')); 
console.log(dataTransformation.addValues(5, 'Hola')); 
console.log(dataTransformation.addValues('Hello', 3)); 
console.log(dataTransformation.addValues('Hello', 'World')); 
console.log(dataTransformation.addValues('65', 'World')); 
console.log(dataTransformation.addValues('Hello', '77')); 
console.log(dataTransformation.addValues(true, false)); 

//stringifyValues examples
console.log('stringifyValue examples');

console.log(dataTransformation.stringifyValue(42)); 
console.log(dataTransformation.stringifyValue('Hello')); 
console.log(dataTransformation.stringifyValue(true)); 
console.log(dataTransformation.stringifyValue(null));
console.log(dataTransformation.stringifyValue()); 
console.log(dataTransformation.stringifyValue([42, 43, 44, 45])); 
console.log(dataTransformation.stringifyValue({ name: "Agustin", age: 34 })); 

//invertBoolean examples
console.log('invertBoolean examples');

console.log(dataTransformation.invertBoolean(true)) 
console.log(dataTransformation.invertBoolean(false)) 
console.log(dataTransformation.invertBoolean(15)) 

//coerceToType examples
console.log('coerceToType examples');

console.log(dataTransformation.coerceToType(5, 'number'));
console.log(dataTransformation.coerceToType('5', 'number'));
console.log(dataTransformation.coerceToType(true, 'number'));
console.log(dataTransformation.coerceToType(false, 'number'));
console.log(dataTransformation.coerceToType([5, 6, 7], 'number'));
console.log(dataTransformation.coerceToType({ name: 'Agustin', age: 34 }, 'number'));
console.log(dataTransformation.coerceToType('5', 'string'));
console.log(dataTransformation.coerceToType(5, 'string'));
console.log(dataTransformation.coerceToType(true, 'string'));
console.log(dataTransformation.coerceToType([5, 6, 7], 'string'));
console.log(dataTransformation.coerceToType({ name: 'Agustin', age: 34 }, 'string'));
console.log(dataTransformation.coerceToType('true', 'boolean'));
console.log(dataTransformation.coerceToType(42, 'boolean'));
console.log(dataTransformation.coerceToType(['apple', 'banana'], 'boolean'));
console.log(dataTransformation.coerceToType({ name: 'John' }, 'boolean'));
console.log(dataTransformation.coerceToType('', 'boolean'));
console.log(dataTransformation.coerceToType(0, 'boolean'));
console.log(dataTransformation.coerceToType([], 'boolean'));
console.log(dataTransformation.coerceToType({}, 'boolean'));
console.log(dataTransformation.coerceToType(['apple', 'banana'], 'array'));
console.log(dataTransformation.coerceToType('Hola', 'array'));
console.log(dataTransformation.coerceToType(6, 'array'));
console.log(dataTransformation.coerceToType({ name: 'Agustin', age: 34 }, 'array'));
console.log(dataTransformation.coerceToType(6, 'object'));
console.log(dataTransformation.coerceToType([5, 6, 7], 'object'));
console.log(dataTransformation.coerceToType({ name: 'Agustin', age: 34 }, 'object'));

//convertToNumber examples
console.log('convertToNumber examples');

console.log(dataTransformation.convertToNumber('123'));
console.log(dataTransformation.convertToNumber('123.45'));
console.log(dataTransformation.convertToNumber('abc'));
console.log(dataTransformation.convertToNumber(123)); 
console.log(dataTransformation.convertToNumber(true)); 
console.log(dataTransformation.convertToNumber(false));
console.log(dataTransformation.convertToNumber(null)); 
