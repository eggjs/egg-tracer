'use strict';

const TRACER = Symbol('tracer');

module.exports = {
  get tracer() {
    if (!this[TRACER]) {
      this[TRACER] = new this.app.config.tracer.Class(this);
    }
    return this[TRACER];
  },

  get traceId() {
    return this.tracer.traceId;
  },
};
