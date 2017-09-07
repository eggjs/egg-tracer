'use strict';

const mm = require('egg-mock');
const assert = require('assert');

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
    assert(app.appBeforeReadyTracers.length === 0);
    assert(app.agent.agentBeforeReadyTracers.length === 0);

    assert(app.appAfterReadyTracers.length === 0);
    assert(app.agent.agentAfterReadyTracers.length === 0);
  });

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('x-trace-id', /\w{13}/)
      .expect('hi, egg')
      .expect(200);
  });
});
