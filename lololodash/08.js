const _ = require("lodash");


module.exports = function(data) {

  const average = _.chain(data)
    .map(_.property('income'))
    .reduce(_.add)
    .value() / _.size(data);

  return {
    average,
    underperform: _.chain(data).filter(({income}) => income <= average).sortBy('income'),
    overperform: _.chain(data).filter(({income}) => income > average).sortBy('income'),
  }
}
