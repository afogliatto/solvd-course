function observeObject(obj, callback) {
    return new Proxy(obj, {
    get(target, property, receiver) {
      const value = Reflect.get(target, property, receiver);
      callback(property, value);
      return value;
    },
    set(target, property, value, receiver) {
      callback(property, value);
      return Reflect.set(target, property, value, receiver);
    },
  });
}
module.exports = {
   observeObject
 }
