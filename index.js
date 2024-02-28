// 1. receivesAFunction
function receivesAFunction(callback) {
  // Call the provided callback function
  callback();
}

// 2. returnsANamedFunction
function returnsANamedFunction() {
  // Return a named function
  function namedFunction() {
    // Function body
  }
  return namedFunction;
}

// 3. returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
  // Return an anonymous function
  return function () {
    // Function body
  };
}

// Don't forget to export the functions if you're working in a Node.js environment
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction,
};
