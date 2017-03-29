module.exports = (target, method) => {
  target[method] = (...args) => {
    target.count = (target.count || 0) + 1;
    return target[method].bind(target, args);
  };
  return target;
}
