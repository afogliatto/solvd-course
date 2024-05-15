function promiseAllSettled(promises) {
  return new Promise((resolve) => {
    let settledPromises = [];
    let settledCount = 0;
    promises.forEach((p, index) => {
      p.then(
        (value) => {
          settledPromises[index] = { status: 'fulfilled', value };
        },
        (reason) => {
          settledPromises[index] = { status: 'rejected', reason };
        },
      ).finally(() => {
        settledCount++;
        if (settledCount === promises.length) {
          resolve(settledPromises);
        }
      });
    });
  });
}

// Example usage:
const promises = [
  Promise.resolve(1),
  Promise.reject('Error occurred'),
  Promise.resolve(3),
];

promiseAllSettled(promises).then((results) => {
  console.log('All promises settled:', results);
  // Expected: [{ status: 'fulfilled', value: 1 },
  //            { status: 'rejected', reason: 'Error occurred' },
  //            { status: 'fulfilled', value: 3 }]
});
