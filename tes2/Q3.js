
function curry(f) { // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

// usage
function product(a, b) {
  return a * b;
}

let curriedSum = curry(product);
console.log( curriedSum(4)(2) ); 

