'use strict';

/**
 * tracer config
 * @member Config#tracer
 * @property {Tracer} Class - tracer class name
 */
exports.tracer = {
  Class: class Tracer {
    constructor(ctx) {
      this.ctx = ctx;
    }

    get traceId() {
      if (!this.TRACE_ID) {
        this.TRACE_ID = Date.now();
      }
      return this.TRACE_ID;
    }
  },
};

exports.keys = '123456';
