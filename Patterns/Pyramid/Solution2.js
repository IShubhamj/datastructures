function pyramid(n, row = 0, column = 0, level = "") {
  let midPoint = Math.floor((2 * n - 1) / 2);
  if (n === row) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    pyramid(n, row + 1);
    return;
  }

  if (midPoint - row <= column && midPoint + row >= column) {
    level += "#";
  } else {
    level += " ";
  }
  pyramid(n, row, column + 1, level);
}

pyramid(8);
