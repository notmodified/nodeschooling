const _ = require("lodash");

module.exports = function(data) {
  return _.chain(data)
    .groupBy('username')
    .map((v, k) => ({username: k, comment_count: _.size(v)}))
    .sortBy('comment_count')
    .reverse()
    .value();
}
