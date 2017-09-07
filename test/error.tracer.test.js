'use strict';

const mm = require('egg-mock');
const assert = require('assert');
const request = require('supertest');

describe('test/error.tracer.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/error-tracer-test',
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('should get app, agent tracer is null', function* () {
    assert(app.tracer === null);
    let [ appTracer_1, appTracer_2, appTracer_3 ] = app.appBeforeReadyTracers;
    let [ agentTracer_1, agentTracer_2, agentTracer_3 ] = app.agent.agentBeforeReadyTracers;

    assert(appTracer_1 === null);
    assert(appTracer_2 === null);
    assert(appTracer_3 === null);

    assert(agentTracer_1 === null);
    assert(agentTracer_2 === null);
    assert(agentTracer_3 === null);

    // app ready
    [ appTracer_1, appTracer_2, appTracer_3 ] = app.appAfterReadyTracers;
    [ agentTracer_1, agentTracer_2, agentTracer_3 ] = app.agent.agentAfterReadyTracers;

    assert(appTracer_1 === null);
    assert(appTracer_2 === null);
    assert(appTracer_3 === null);

    assert(agentTracer_1 === null);
    assert(agentTracer_2 === null);
    assert(agentTracer_3 === null);
  });

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('x-trace-id', /\w{13}/)
      .expect('hi, egg')
      .expect(200);
  });
});
