function deepCloneObject(obj, clones = new WeakMap()) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (clones.has(obj)) {
    return clones.get(obj);
  }

  const clone = Array.isArray(obj) ? [] : {};

  clones.set(obj, clone);

  for (let key in obj) {
    clone[key] = deepCloneObject(obj[key], clones);
  }

  return clone;
}

module.exports = {
  deepCloneObject,
};
