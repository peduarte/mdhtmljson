'use restrict';

var mdhtmljson = require('./');
var test = require('tape');

test('Check default output', function(assert) {
  var lib = new mdhtmljson('https://raw.githubusercontent.com/defunctzombie/zuul/master/README.md');

  assert.equal(lib.output, './mdhtml.json', 'Default output is "mdhtml.json"');
  assert.end();
});
