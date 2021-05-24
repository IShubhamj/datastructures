function chunk(array, size) {
  let chunked = [];
  for (let item of array) {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([item]);
    } else {
      last.push(item);
    }
  }
  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5, 6], 2));
