const mm = require('egg-mock');

describe('test/plugin.test.js', () => {
  let app;
  before(async () => {
    app = mm.app({
      baseDir: 'apps/plugin-test',
    });
    await app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('x-trace-id', /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)
      .expect('hi, egg')
      .expect(200);
  });
});
