var _ = require('lodash');

const CLASS_PATTERN = /\.(\w|-)+\s?\{/g;

module.exports = function(css) {
  return _.flatten(_.map(css.match(CLASS_PATTERN), function(patternMatch) {
    return _.words(_.join(_.tail(patternMatch), ''));
  }));
}
