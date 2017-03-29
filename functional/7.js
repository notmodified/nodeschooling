


module.exports = function reduce(arr, fn, initial) {

  function step(index, value) {
    if (index > arr.length - 1) return value;

    return step(index + 1, fn(value, arr[index], index, arr));
  }

  return step(0, initial);
}
