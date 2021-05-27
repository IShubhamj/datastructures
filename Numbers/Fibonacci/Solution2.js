function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  let num = fibonacci(n - 1) + fibonacci(n - 2);
  return num;
}

// console.log(fibonacci(50));

function memoize(fn) {
  let cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    console.log(cache);
    return result;
  };
}

fib = memoize(fibonacci);
fib(50);
