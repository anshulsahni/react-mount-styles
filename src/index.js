var _ = require('lodash');
var combineCSSAndProps = require('./combineCSSAndProps');
var getGlobalClassName = require('./getGlobalClassName');
var getClassesFromCSS = require('./getClassesFromCSS');
var replaceOldClassWithNew = require('./replaceOldClassWithNew');
var mountCSSToDocument = require('./mountCSSToDocument');

module.exports = function() {
  var css = combineCSSAndProps(_.first(arguments), _.tail(arguments));
  var cssClasses = getClassesFromCSS(css);

  var classMap = {};

  _.each(cssClasses, function(cssClass) {
    var globalClass = getGlobalClassName(cssClass);

    var cssClassRegExp = new RegExp(cssClass + '\\s');
    css = replaceOldClassWithNew(css, cssClassRegExp, globalClass);
    mountCSSToDocument(css);
    classMap[cssClass] = globalClass;
  });

  return classMap;
}
