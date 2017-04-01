const _ = require("lodash");

module.exports = function(data) {

  function isHot([k, v]) {
    return _.every(v, e => e > 19);
  }

  function isWarm([k, v]) {
    return _.some(v, e => e > 19) && !isHot([k, v]);
  }

  function group(d, fn) {
    return _.chain(d).toPairs().filter(fn).map(_.head).value();
  }

  const r = {
    hot: group(data, isHot),
    warm: group(data, isWarm)
  };

  return r;
}
