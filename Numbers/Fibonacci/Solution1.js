function fibonacci(n) {
  let result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[result.length - 1];
    const b = result[result.length - 2];
    result.push(a + b);
  }

  return result[result.length - 1];
}

console.log(fibonacci(8));
