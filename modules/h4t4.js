function createImmutableObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  // Create a new object to store the immutable version
  const immutableObj = Array.isArray(obj) ? [] : {};

  Object.keys(obj).forEach((key) => {

    const descriptor = Object.getOwnPropertyDescriptor(obj, key);

    if (
      descriptor &&
      (typeof descriptor.value === 'object' ||
        typeof descriptor.value === 'array') &&
      descriptor.value !== null
    ) {
      immutableObj[key] = createImmutableObject(obj[key]);
    } else {

      Object.defineProperty(immutableObj, key, {
        value: obj[key],
        writable: false,
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
      });
    }
  });

  return immutableObj;
}

module.exports = {
  createImmutableObject,
};
