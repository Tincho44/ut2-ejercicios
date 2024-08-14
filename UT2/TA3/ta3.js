function removeFromArray(arr, el) {
  const index = arr.indexOf(el);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

console.log(removeFromArray([1, 2, 3, 4, 5], 3));