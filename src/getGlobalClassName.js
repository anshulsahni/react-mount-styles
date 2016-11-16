var _ = require('lodash');

const GLOBAL_CLASS_PREFIX = '--react-mount-styles__';

module.exports = function(className) {
  return className + _.uniqueId(GLOBAL_CLASS_PREFIX);
}
