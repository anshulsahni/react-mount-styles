var _ = require('lodash');

module.exports = function(css, oldClass, newClass) {
  return _.replace(css, oldClass, newClass);
}
