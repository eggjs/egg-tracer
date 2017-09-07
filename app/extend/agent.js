'use strict';

const cacheTracer = Symbol('before_agent_ready_tracer');
const isReady = Symbol.for('egg_tracer_agent_is_ready');

module.exports = {
  get tracer() {
    if (this[isReady]) {
      return new this.config.tracer.Class({
        app: this,
      });
    }

    if (!this[cacheTracer]) {
      this[cacheTracer] = new this.config.tracer.Class({
        app: this,
      });
    }

    return this[cacheTracer];
  },
};
