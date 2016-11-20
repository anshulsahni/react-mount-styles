var _ = require('lodash');

const GLOBAL_CLASS_PREFIX = '--react-mount-styles__';

module.exports = function(className) {
  return className ? className + _.uniqueId(GLOBAL_CLASS_PREFIX) : null;
}
