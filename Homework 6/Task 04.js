function debounce(func, delay) {
  let timeoutId;
  const queries = [];

  function execute() {
    func(queries.shift());
    if (queries.length === 0) {
      clearTimeout(timeoutId);
    } else {
      timeoutId = setTimeout(execute, delay);
    }
  }

  return function (query) {
    queries.push(query);
    if (!timeoutId) {
      timeoutId = setTimeout(execute, delay);
    }
  };
}

// Test function
function debouncedSearch(query) {
  console.log('Searching for:', query);
}

const debouncedSearchHandler = debounce(debouncedSearch, 3000);

debouncedSearchHandler('apple');
debouncedSearchHandler('banana');
debouncedSearchHandler('orange');

// Output will be:
// "Searching for: apple"
// "Searching for: banana"
// "Searching for: orange"
