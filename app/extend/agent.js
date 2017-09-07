'use strict';

const BEFORE_AGENT_READY_TRACER = Symbol('before_agent_ready_tracer');

module.exports = {
  get tracer() {
    if (this[Symbol.for('egg_tracer_agent_is_ready')]) {
      try {
        return new this.config.tracer.Class({
          app: this,
        });
      } catch (e) {
        this.coreLogger.warn(e);
        return null;
      }
    }

    if (!this[BEFORE_AGENT_READY_TRACER]) {
      try {
        this[BEFORE_AGENT_READY_TRACER] = new this.config.tracer.Class({
          app: this,
        });
        return this[BEFORE_AGENT_READY_TRACER];
      } catch (e) {
        this.coreLogger.warn(e);
        this[BEFORE_AGENT_READY_TRACER] = null;
      }
    }

    return this[BEFORE_AGENT_READY_TRACER];
  },
};
