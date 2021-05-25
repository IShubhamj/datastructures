function pyramid(n, row = 0, level = "") {
  let midPoint = Math.floor((2 * n - 1) / 2);
  if (n === row) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    pyramid(n, row + 1);
    return;
  }

  if (midPoint - row <= level.length && midPoint + row >= level.length) {
    level += "#";
  } else {
    level += " ";
  }
  pyramid(n, row, level);
}

pyramid(8);
