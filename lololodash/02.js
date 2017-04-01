const _ = require("lodash");

module.exports = function(data) {
  return _.reverse(_.sortBy(data, ['quantity']));
}
