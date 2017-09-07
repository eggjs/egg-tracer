'use strict';

const isReady = Symbol.for('egg_tracer_is_ready');

module.exports = app => {
  app.ready(() => {
    app[isReady] = true;
  });
};

