const _ = require("lodash");

function sumQuantity(v) {
  return _.chain(v).map(_.property('quantity')).reduce(_.add);
}

module.exports = function(data) {
  return _.chain(data)
    .groupBy('article')
    .map((v, k) => ({
      article: k|0,
      total_orders: sumQuantity(v),
    }))
    .sortBy('article')
    .reverse()
    .value();
}
