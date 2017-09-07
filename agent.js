'use strict';

const isReady = Symbol.for('egg_tracer_agent_is_ready');

module.exports = agent => {
  agent.ready(() => {
    agent[isReady] = true;
  });
};
