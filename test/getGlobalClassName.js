var assert = require('assert');
var getGlobalClassName = require('../src/getGlobalClassName');

describe('getGlobalClassName', function() {
  it('should return global class name', function() {
    assert.equal('test--react-mount-styles__1', getGlobalClassName('test'));
  });
});
