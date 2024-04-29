const person = {
  firstName: 'Agustin',
  lastName: 'Fogliatto',
  age: 34,
  email: 'agustin.fogliatto@example.com',
};

Object.defineProperty(person, 'firstName', {
  writable: false,
});
Object.defineProperty(person, 'lastName', {
  writable: false,
});
Object.defineProperty(person, 'age', {
  writable: false,
});
Object.defineProperty(person, 'email', {
  writable: false,
});

person.updateInfo = function (newInfo) {
  for (let prop in newInfo) {
    if (this.hasOwnProperty(prop)) {
      if (prop === 'address') {
        this[prop] = newInfo[prop]; // Direct assignment for address property
      } else {
        Object.defineProperty(this, prop, {
          value: newInfo[prop],
          writable: false,
          configurable: false,
          enumerable: true,
        });
      }
    }
  }
};

Object.defineProperty(person, 'address', {
  value: {},
  enumerable: false,
  configurable: false,
});

module.exports = {
  person
}
