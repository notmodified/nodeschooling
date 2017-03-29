module.exports = (arr, fn) => arr.reduce((acc, e) => (acc.push(fn(e)), acc), [])
