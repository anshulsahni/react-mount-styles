var assert = require('assert');
var getGlobalClassName = require('../src/getGlobalClassName');

describe('getGlobalClassName', function() {

  it('should return global class name', function() {
    assert.equal('test--react-mount-styles__1', getGlobalClassName('test'));
    assert.equal('test--react-mount-styles__2', getGlobalClassName('test'));
    assert.equal('ansh--react-mount-styles__3', getGlobalClassName('ansh'));
  });

  it('should return null for empty or null value being passed', function() {
    assert.equal(null, getGlobalClassName(null));
    assert.equal(null, getGlobalClassName(undefined));
    assert.equal(null, getGlobalClassName(''));
  });
});
