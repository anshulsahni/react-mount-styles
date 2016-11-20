var assert = require('assert');
var replaceOldClassWithNew = require('../src/replaceOldClassWithNew');

const sampleCSS = '.old-class {'
+   'property: value;'
+ '}';

const newCSS = '.new-class {'
+   'property: value;'
+ '}';

describe('replaceOldClassWithNew', function() {
  it('replace old classes with new one', function() {
    assert.equal(newCSS, replaceOldClassWithNew(sampleCSS, 'old-class', 'new-class'));
  });
});
