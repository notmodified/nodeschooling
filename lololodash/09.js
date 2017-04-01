const _ = require("lodash");

module.exports = function({name, login}) {
  return _.template('Hello <%= name %> (logins: <%= logins %>)')({
    name,
    logins: login.length,
  });
}
