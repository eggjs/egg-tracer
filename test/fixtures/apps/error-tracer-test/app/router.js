'use strict';

const assert = require('assert');

module.exports = app => {
  app.get('/', function* () {
    assert(this.traceId === this.traceId);
    this.set('x-trace-id', this.traceId);
    this.body = 'hi, egg';
  });
};
