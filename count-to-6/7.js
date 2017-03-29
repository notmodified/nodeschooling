module.exports = function average(...args) {
  return args.reduce((acc = 0, e) => acc + e) / args.length;
};
