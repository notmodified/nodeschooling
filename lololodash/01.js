const _ = require("lodash");

module.exports = function(data) {
  return _.filter(data, { active: true });
}
