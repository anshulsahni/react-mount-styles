var assert = require('assert');
var getClassesFromCSS = require('../src/getClassesFromCSS');

const sampleCSS = '@media (min-width: 600px) {'
+ '.notifications {'
+ '   padding: 15px;'
+ ' }'
+ '}'
+ '.notification {'
+ '   border: 10px solid ${red};'
+ '}';

describe('getClassesFromCSS', function() {
  it ('should return all classes in CSS', function() {
    assert.deepEqual(['notifications', 'notification'], getClassesFromCSS(sampleCSS));
  });
});
