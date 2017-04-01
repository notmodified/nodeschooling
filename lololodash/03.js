const _ = require("lodash");

module.exports = function(data) {
  _.forEach(data, (d, k) => {
    if (d.population > 1) d.size = 'big'
    else if (d.population > 0.5) d.size = 'med'
    else d.size = 'small'
  });

  return data;
}
