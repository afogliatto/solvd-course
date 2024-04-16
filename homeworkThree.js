const task1 = require('./modules/task1')
const task2 = require("./modules/task2")
const task3 = require("./modules/task3")

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

const discountPercentage = 10;
const discountedProducts = task1.calculateDiscountedPrice(
  products,
  discountPercentage,
);
console.log(discountedProducts);
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
];

people.forEach((person) => {
  console.log(task2.getFullName(person));
});

//filterUniqueWords example
console.log('filterUniqueWords example');

const text =
"Nory was a Catholic because her mother was a Catholic, and Nory's mother was a Catholic because her father was a Catholic, and her father was a Catholic because his mother was a Catholic, or had been.";
console.log(task2.filterUniqueWords(text));

//repeatFunction examples
console.log('repeatFunction examples');

function greet(name) {
  console.log(`Hello, ${name}!`);
}

const greetThreeTimes = task3.repeatFunction(greet, 3);
greetThreeTimes('Agustin');

const greetFourTimes = task3.repeatFunction(greet, 4);
greetFourTimes('Flaco');

const greetIndefinitely = task3.repeatFunction(greet, -1);
greetIndefinitely('Tomas');
