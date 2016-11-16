var _ = require('lodash');

module.exports = function(cssString) {
  var props = _.tail(arguments);
  return _.join(_.map(cssString, function(css, index) {
    return props[index] ? css + props[index] : css;
  }), ' ');
}
