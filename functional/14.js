function repeat(operation, num) {
  if (num <= 0) return
  operation()
  return () => repeat(operation, num-1);
}

function trampoline(fn) {
  while(typeof fn === 'function') {
    fn = fn();
  }
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  return trampoline(() => repeat(operation, num));
}
