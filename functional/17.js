module.exports = function curryN(fn, n) {
  const a = n || fn.length;
  return arg => {
    if (a === 1) return fn(arg);
    return curryN(fn.bind(null, arg), a-1);
  };
}

