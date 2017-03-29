module.exports = (...args) => args.reduce((acc, e) => (Object.prototype.hasOwnProperty.call(e, 'quack') ? acc + 1 : acc), 0)
