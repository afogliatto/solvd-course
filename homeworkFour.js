const h4t1 = require("./modules/h4t1")
const h4t2 = require('./modules/h4t2');
const h4t3 = require("./modules/h4t3")
const h4t4 = require('./modules/h4t4');
const h4t5 = require('./modules/h4t5');
const h4t6 = require('./modules/h4t6');
const h4t7 = require('./modules/h4t7');




//Task 1
console.log('Task 1');

console.log('Before update:');
console.log(h4t1.person);

h4t1.person.updateInfo({
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  email: 'john.doe@example.com',
});

console.log('After update:');
console.log(h4t1.person);

//Task 2
console.log('Task 2');

console.log(h4t2.getTotalPrice(h4t2.product)); 

try {
  h4t2.deleteNonConfigurable(h4t2.obj1, 'age');
  console.log(h4t2.obj1);
} catch (error) {
  console.error(error.message);
}

try {
  h4t2.deleteNonConfigurable(h4t2.obj2, 'age');
} catch (error) {
  console.error(error.message);
  console.log(h4t2.obj2);
}

//Task 3
console.log('Task 3');

console.log(h4t3.myAccount.formattedBalance);
console.log(h4t3.friendAccount.formattedBalance);

h4t3.bankAccount.transfer(h4t3.myAccount, h4t3.friendAccount, 15000);

console.log(h4t3.myAccount.formattedBalance);
console.log(h4t3.friendAccount.formattedBalance);

h4t3.bankAccount.transfer(h4t3.myAccount, h4t3.friendAccount, 500);

console.log(h4t3.myAccount.formattedBalance);
console.log(h4t3.friendAccount.formattedBalance);

//Task 4
console.log('Task 4')

const originalObject = {
  name: 'Agustin',
  age: 34,
  address: {
    city: 'Tucuman',
    country: 'Argentina',
  },
  hobbies: ['Gamming', 'Origami'],
};

const immutableObject = h4t4.createImmutableObject(originalObject);

immutableObject.name = 'Alice';
immutableObject.address.city = 'Los Angeles'; 
immutableObject.hobbies.push('Cooking');

console.log(immutableObject);

const immutableJohn = h4t4.createImmutableObject(h4t1.person)

console.log(immutableJohn)

//Task 5
console.log('Task 5')

const dude = {
  name: 'Agustin',
  age: 34,
  city: 'Tucuman',
};

function callback(property, action, value) {
  if (action === 'set') {
  console.log(`Property '${property}' 'modified (set) with value:`, value);

  } else {
    console.log(`Property '${property}' 'accessed (get)`);

  }
}

console.log(dude);

const observedObj = h4t5.observeObject(dude, callback);

// Access properties
console.log(observedObj.name);

// Modify properties
observedObj.age = 35;

// Add a new property
observedObj.city = 'New York';

console.log(dude);

//Modify John
console.log('Modify John')

console.log(h4t1.person);

const modifiedJohn = h4t5.observeObject(h4t1.person, callback);

// Access properties
console.log(modifiedJohn.firstName);

// Modify properties
modifiedJohn.age = 40;

// Add a new property
modifiedJohn.city = 'Santiago';

console.log(modifiedJohn);

//Task 6
console.log('Task 6')

const firstObject = {
  name: 'Agustin',
  age: 34,
  address: {
    city: 'Tucuman',
    country: 'Argentina',
  },
  hobbies: ['Gamming', 'Origami'],
};

// Create a deep clone of the original object
const clonedObject = h4t6.deepCloneObject(firstObject);

// Modify the cloned object
clonedObject.name = 'Alice';
clonedObject.age = 25;
clonedObject.address.city = 'Santiago';
clonedObject.hobbies = ['Reading', 'Traveling'];
clonedObject.hobbies.push('Cooking');

console.log(firstObject);
console.log(clonedObject);
 
//Task 7
console.log('Task 7')

// Validation schema
const schema = {
  name: { type: 'string', required: true },
  age: { type: 'number', required: true },
  email: { type: 'string', required: false },
  isAdmin: { type: 'boolean', required: false },
  customValidation: {
    required: true,
    validator: (value) => value === 'custom validation',
  },
};

// Objects to validate
const objToValidate = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
  isAdmin: true,
  customValidation: 'custom validation',
};

const objToValidate2 = {
  name: 'John',
  age: '30',
  email: 'john@example.com',
  isAdmin: false,
  customValidation: 'custom validation',
};

console.log(h4t7.validateObject(objToValidate, schema)); 
console.log(h4t7.validateObject(objToValidate2, schema));
