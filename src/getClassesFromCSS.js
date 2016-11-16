var _ = require('lodash');

const CLASS_PATTERN = /\.\w+\s?\{/g;

export default function(css) {
  return _.map(css.match(CLASS_PATTERN), function(patternMatch) {
    return _.word(_.join(_.tail(patternMatch)));
  });
}
