function throttle(func, intervalProvider) {
  try {
    if (typeof func !== 'function') {
      throw new TypeError('The first argument must be a function');
    }
    if (typeof intervalProvider !== 'function') {
      throw new TypeError('The second argument must be a function');
    }

    let timeoutId = null;

    return function (...args) {
      try {
        const interval = intervalProvider();

        if (typeof interval !== 'number' || interval <= 0) {
          throw new TypeError(
            'Interval provider function must return a positive number',
          );
        }

        if (!timeoutId) {
          func.apply(this, args);
          timeoutId = setTimeout(() => {
            timeoutId = null;
          }, interval);
        }
      } catch (error) {
        console.error('Error in throttle function:', error.message);
      }
    };
  } catch (error) {
    console.error('Error in throttle function:', error.message);
  }
}

function handleScroll() {
  console.log('Scroll event throttled');
}

function getInterval() {
  return Math.random() * 1000; 
}

const throttledScroll = throttle(handleScroll, getInterval); 

setTimeout(throttledScroll, 200);
setTimeout(throttledScroll, 600);
setTimeout(throttledScroll, 1100);
