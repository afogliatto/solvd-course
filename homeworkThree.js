const task1 = require('./modules/task1')
const task2 = require("./modules/task2")
const task3 = require("./modules/task3")
const task4 = require('./modules/task4');
const task5 = require('./modules/task5');

//Homework #3
console.log('Homework #3');

//calculateDiscountedPrice examples
console.log('calculateDiscountedPrice examples');

const products = [
  { name: 'Product 1', price: 20 },
  { name: 'Product 2', price: 130 },
  { name: 'Product 3', price: 40 },
  { name: 'Product 4', price: 381 },
  { name: 'Product 5', price: 107 },
  { name: 'Product 6', price: 235 },
];

const discountPercentage = 25;
try {
  const discountedProducts = task1.calculateDiscountedPrice(
    products,
    discountPercentage,
  );
  console.log(discountedProducts);
  
} catch (error) {
  console.error(error.message)
}
//calculateTotalPrice examples
console.log('calculateTotalPrice examples');

console.log(task1.calculateTotalPrice(products));


//getFullName examples
console.log('getFullName examples');

const people = [
  {
    firstName: 'Agustin',
    lastName: 'Fogliatto',
  },
  {
    firstName: 'Tomas',
    lastName: 'Leguizamon',
  },
  {
    firstName: 'Alexandrina',
    lastName: 'Poida',
  },
  {
    firstName: 'Mihael',
    lastName: 'Tomashuk',
  },
  {
    firstName: '',
    lastName: 'Tomashuk',
  },
  {
    firstName: 5,
    lastName: 'Tomashuk',
  },
  
];

try {
  people.forEach((person) => {
    console.log(task2.getFullName(person));
  });
  
} catch (error) {
  console.error(error.message)
}

//filterUniqueWords example
console.log('filterUniqueWords example');

const text =
"Nory was a Catholic because her mother was a Catholic, and Nory's mother was a Catholic because her father was a Catholic, and her father was a Catholic because his mother was a Catholic, or had been.";
console.log(task2.filterUniqueWords(text));

//createCounter examples
console.log('createCounter examples')

const counter1 = task3.createCounter();
console.log(counter1());
console.log(counter1()); 
console.log(counter1()); 
console.log(counter1()); 
console.log(counter1()); 
console.log(counter1()); 

const counter2 = task3.createCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());

//repeatFunction examples
console.log('repeatFunction examples');

try {
function greet(name) {
  console.log(`Hello, ${name}!`);
}
  
  const greetThreeTimes = task3.repeatFunction(greet, 3);
  greetThreeTimes('Agustin');
  
  const greetFourTimes = task3.repeatFunction(greet, 4);
  greetFourTimes('Flaco');
  
  try {
    const greetNodeTimes = task3.repeatFunction(greet, 'Node');
    greetNodeTimes('Node');
  } catch (error) {
    console.error(error.message)
  }
    
    const greetIndefinitely = task3.repeatFunction(greet, -1);
  greetIndefinitely('Tomas');
  
} catch (error) {
  console.error(error.message)
}

//calculateFactorial examples
console.log("calculateFactorial examples")

try {
  
  console.log(task4.calculateFactorial(5));
  console.log(task4.calculateFactorial(10));
  console.log(task4.calculateFactorial(80));
  console.log(task4.calculateFactorial(3));
  console.log(task4.calculateFactorial('eight'));

} catch (error) {
  console.error(error.message)
}

//power example
console.log('power example');

try {
  
  console.log(task4.power(2, 3));
  console.log(task4.power(5, -2)); 
  console.log(task4.power(3, 10)); 
  // console.log(task4.power(9, 7)); 
  console.log(task4.power(5, "a")); 
} catch (error) {
  console.error(error.message)
}

//lazyMap examples
console.log('lazyMap examples');


const numbers = [1, 2, 3, 4, 5];

try {
  function square(x) {
    return x * x;
  }
  
  const lazySquareFunction = task5.lazyMap(numbers, square);
  
  let nextMappedElement;
  while ((nextMappedElement = lazySquareFunction()) !== undefined) {
    console.log(nextMappedElement);
  }
} catch (error) {
  console.error(error.message)
}

//fibonacciGenerator examples
console.log('fibonacciGenerator examples');

const generateFibonacci = task5.fibonacciGenerator();

for (let i = 0; i < 40; i++) {
  console.log(generateFibonacci());
}
