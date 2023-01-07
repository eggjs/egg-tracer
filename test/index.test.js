const assert = require('assert');
const Tracer = require('..');

describe('index.test.js', () => {
  it('should work with lib', () => {
    assert(typeof Tracer === 'function');
  });
});
