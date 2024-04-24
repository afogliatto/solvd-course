const product = {
  name: 'Laptop',
  price: 1000,
  quantity: 5,
};

// Make price and quantity non-enumerable and non-writable
Object.defineProperty(product, 'price', {
  enumerable: false,
  writable: false,
});
Object.defineProperty(product, 'quantity', {
  enumerable: false,
  writable: false,
});

function getTotalPrice(product) {
  const priceDescriptor = Object.getOwnPropertyDescriptor(product, 'price');
  const quantityDescriptor = Object.getOwnPropertyDescriptor(
    product,
    'quantity',
  );

  if (priceDescriptor && quantityDescriptor) {
    const price = priceDescriptor.value;
    const quantity = quantityDescriptor.value;
    return price * quantity;
  } else {
    console.log("Error: Properties 'price' and 'quantity' not found.");
    return null;
  }
}

function deleteNonConfigurable(obj, propName) {
  if (obj.hasOwnProperty(propName)) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, propName);
    if (descriptor.configurable) {
      delete obj[propName];
      console.log(`Property '${propName}' deleted successfully.`);
    } else {
      throw new Error(`Cannot delete non-configurable property '${propName}'.`);
    }
  } else {
    console.log(`Property '${propName}' does not exist in the object.`);
  }
}

// Creating objects for the last part of the task

const obj1 = {
  name: "Agustin",
  age: 34,
};

const obj2 = {
  name: "Tomas",
  age: 25,
};

Object.defineProperty(obj2, "age", {
  value: 25,
  configurable: false,
});

module.exports = {
  product,
  getTotalPrice,
  deleteNonConfigurable,
  obj1,
  obj2
}
