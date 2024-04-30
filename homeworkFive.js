const h5t1 = require("./modules/h5t1")
const h5t2 = require('./modules/h5t2');
const h5t3 = require('./modules/h5t3');
const h5t4 = require('./modules/h5t4');
const h5t5 = require('./modules/h5t5');


//Task 1 Examples
console.log('Task 1 Examples');

const objectsArray = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Alice' },
  { id: 3, name: 'Bob' },
  { id: 4, name: 'John' },
  { id: 5, name: 'Alice' },
];

const callback = (element) => element.name;

const uniqueObjectsArray = h5t1.customFilterUnique(objectsArray, callback);
console.log(uniqueObjectsArray);

//Task 2 Examples
console.log('Task 2 Examples')

try {
  h5t2.chunkArray(null, 2);
} catch (error) {
  console.error(error.message);
}

try {
  h5t2.chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'abc');
} catch (error) {
  console.error(error.message);
}
try {
  const chunkedArray = h5t2.chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 2);
  console.log(chunkedArray);
} catch (error) {
  console.error(error.message);
}
try {
  const chunkedArray = h5t2.chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3);
  console.log(chunkedArray);
} catch (error) {
  console.error(error.message);
}
//Task 3 Examples
console.log('Task 3 Examples');
 
try {
  const originalArray = [1, 2, 3, 4, 5];
  console.log(originalArray);
  const shuffledArray = h5t3.customShuffle(originalArray);
  console.log(shuffledArray);
} catch (error) {
  console.error(error.message);
}
try {
  const originalArray = ['Agustin', 'Tomas', 'Mihael', 'Alexandrina'];
  console.log(originalArray);
  const shuffledArray = h5t3.customShuffle(originalArray);
  console.log(shuffledArray);
} catch (error) {
  console.error(error.message);
}
try {
  h5t3.customShuffle(null);
} catch (error) {
  console.error(error.message);
}

//Task 4 Examples
console.log('Task 4 Examples')

//getArrayIntersection Examples
console.log('getArrayIntersection Examples');

try {
  const array1 = [
    3, 5, 17, 19, 31, 33, 38, 39, 40, 44, 49, 51, 56, 57, 68, 70, 72, 73, 74,
    76, 78, 81, 89, 94, 98,
  ];
  const array2 = [
    3, 4, 7, 8, 10, 12, 19, 20, 24, 25, 33, 35, 42, 44, 52, 56, 57, 58, 62, 64,
    67, 69, 85, 93, 99,
  ];

  const intersectionArray = h5t4.getArrayIntersection(array1, array2);
  console.log(intersectionArray);
} catch (error) {
  console.error(error.message);
}

try {
  const array1 = 'Hello Tomas';
  const array2 = [
    3, 4, 7, 8, 10, 12, 19, 20, 24, 25, 33, 35, 42, 44, 52, 56, 57, 58, 62, 64,
    67, 69, 85, 93, 99,
  ];

  const intersectionArray = h5t4.getArrayIntersection(array1, array2);
  console.log(intersectionArray);
} catch (error) {
  console.error(error.message);
}

try {
  const array1 = [
    3, 5, 17, 19, 31, 33, 38, 39, 40, 44, 49, 51, 56, 57, 68, 70, 72, 73, 74,
    76, 78, 81, 89, 94, 98,
  ];
  const array2 = 1989

  const intersectionArray = h5t4.getArrayIntersection(array1, array2);
  console.log(intersectionArray);
} catch (error) {
  console.error(error.message);
}

//getArrayUnion Examples
console.log('getArrayUnion Examples')

try {
  const array1 = [
    3, 7, 8, 10, 17, 35, 37, 39, 40, 45, 47, 55, 57, 60, 62, 65, 72, 73, 75, 76,
    77, 82, 90, 96, 99,
  ];
  const array2 = [
    3, 8, 9, 10, 19, 22, 25, 27, 28, 29, 37, 40, 42, 45, 46, 58, 61, 62, 68, 77,
    81, 85, 92, 94, 99,
  ];

  const union = h5t4.getArrayUnion(array1, array2);
  console.log('Union:', union);
} catch (error) {
  console.error(error.message);
}

try {
  const array1 = [
    3, 7, 8, 10, 17, 35, 37, 39, 40, 45, 47, 55, 57, 60, 62, 65, 72, 73, 75, 76,
    77, 82, 90, 96, 99,
  ];
  const array2 = 'Hello World';
  const union = h5t4.getArrayUnion(array1, array2);
  console.log('Union:', union);
} catch (error) {
  console.error(error.message);
}

try {
  const array1 = 35;
  const array2 = [
    3, 8, 9, 10, 19, 22, 25, 27, 28, 29, 37, 40, 42, 45, 46, 58, 61, 62, 68, 77,
    81, 85, 92, 94, 99,
  ];
  const union = h5t4.getArrayUnion(array1, array2);
  console.log('Union:', union);
} catch (error) {
  console.error(error.message);
}

//Task 5 Examples
console.log('Task 5 Examples');

function getArrayIntersection(array1, array2) {
  const set1 = new Set(array1);
  return array2.filter((element) => set1.has(element));
}

try {
  const array1 = [
    20, 21, 23, 26, 29, 36, 48, 52, 55, 57, 58, 60, 62, 70, 71, 75, 78, 79, 85,
    88, 91, 92, 94, 95, 97,
  ];
  const array2 = [
    2, 8, 9, 10, 17, 18, 20, 25, 26, 28, 33, 35, 36, 39, 45, 47, 50, 53, 68, 71,
    73, 75, 76, 80, 97,
  ];

  const wrapperFunction = () => {
    getArrayIntersection(array1, array2);
  };

  const executionTime = h5t5.measureArrayPerformance(wrapperFunction, array1);
  console.log('Execution time:', executionTime, 'milliseconds');
} catch (error) {
  console.error(error.message);
}
