const mm = require('egg-mock');
const assert = require('assert');

describe('test/tracer.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/plugin-test',
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('should get app, agent tracer', () => {
    assert(app[Symbol.for('egg_tracer_is_ready')]);
    assert(app.agent[Symbol.for('egg_tracer_is_ready')]);

    let [ appTracer_1, appTracer_2, appTracer_3 ] = app.appBeforeReadyTracers;
    let [ agentTracer_1, agentTracer_2, agentTracer_3 ] = app.agent.agentBeforeReadyTracers;

    assert(appTracer_1 === appTracer_2);
    assert(appTracer_1 === appTracer_3);

    assert(appTracer_1.traceId);
    assert(appTracer_2.traceId);
    assert(appTracer_3.traceId);

    assert(appTracer_1 === appTracer_2);
    assert(appTracer_1 === appTracer_3);

    assert(appTracer_1.traceId === appTracer_2.traceId);
    assert(appTracer_1.traceId === appTracer_3.traceId);

    assert(agentTracer_1.traceId);
    assert(agentTracer_2.traceId);
    assert(agentTracer_3.traceId);

    assert(agentTracer_1 === agentTracer_2);
    assert(agentTracer_1 === agentTracer_3);

    assert(agentTracer_1.traceId);
    assert(agentTracer_2.traceId);
    assert(agentTracer_3.traceId);

    assert(agentTracer_1.traceId === agentTracer_2.traceId);
    assert(agentTracer_1.traceId === agentTracer_3.traceId);

    // app ready
    [ appTracer_1, appTracer_2, appTracer_3 ] = app.appAfterReadyTracers;

    assert(appTracer_1 !== appTracer_2);
    assert(appTracer_1 !== appTracer_3);

    assert(appTracer_1.traceId);
    assert(appTracer_2.traceId);
    assert(appTracer_3.traceId);

    assert(appTracer_1 !== appTracer_2);
    assert(appTracer_1 !== appTracer_3);

    assert(appTracer_1.traceId !== appTracer_2.traceId);
    assert(appTracer_1.traceId !== appTracer_3.traceId);

    // agent ready
    [ agentTracer_1, agentTracer_2, agentTracer_3 ] = app.agent.agentAfterReadyTracers;
    assert(agentTracer_1.traceId);
    assert(agentTracer_2.traceId);
    assert(agentTracer_3.traceId);

    assert(agentTracer_1 !== agentTracer_2);
    assert(agentTracer_1 !== agentTracer_3);

    assert(agentTracer_1.traceId);
    assert(agentTracer_2.traceId);
    assert(agentTracer_3.traceId);

    assert(agentTracer_1.traceId !== agentTracer_2.traceId);
    assert(agentTracer_1.traceId !== agentTracer_3.traceId);
  });
});
