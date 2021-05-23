function fizzBuzz(n) {
  for (let num = 1; num <= n; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(num);
      console.log("fizz buzz");
    } else if (num % 3 === 0) {
      console.log(num);
      console.log("fizz");
    } else if (num % 5 === 0) {
      console.log(num);
      console.log("buzz");
    }
  }
}

fizzBuzz(30);
