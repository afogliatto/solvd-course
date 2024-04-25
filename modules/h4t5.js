function observeObject(obj, callback) {
    return new Proxy(obj, {
    get(target, property, receiver) {
      callback(property, 'get');
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      callback(property, 'set', value);
      return Reflect.set(target, property, value, receiver);
    },
  });
}
module.exports = {
   observeObject
 }
