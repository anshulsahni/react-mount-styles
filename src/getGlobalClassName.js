var _ = require('lodash');

const GLOBAL_CLASS_PREFIX = '--react-mount-styles__';

export default function(className) {
  return className + _.uniqueId(GLOBAL_CLASS_PREFIX);
}
