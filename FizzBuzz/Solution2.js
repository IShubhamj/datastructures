function fizzBuzz(n, k) {
  if (n > k) {
    return;
  }
  if (n % 3 === 0 && n % 5 === 0) {
    console.log(n, "fizz buzz");
  } else if (n % 3 === 0) {
    console.log(n, "fizz");
  } else if (n % 5 === 0) {
    console.log(n, "buzz");
  }
  fizzBuzz((n += 1), k);
}

fizzBuzz(1, 30);
