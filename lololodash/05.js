const _ = require("lodash");

module.exports = function(data) {
  return _.chain(data)
    .map(e => e.toUpperCase())
    .map(e => e + 'CHAINED')
    .sort()
    .value();
}
