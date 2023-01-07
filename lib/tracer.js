
const { randomUUID } = require('crypto');

const TRACE_ID = Symbol('traceId');

class Tracer {
  constructor(ctx) {
    this.ctx = ctx;
  }

  get traceId() {
    if (!this[TRACE_ID]) {
      this[TRACE_ID] = randomUUID();
    }
    return this[TRACE_ID];
  }
}

module.exports = Tracer;
