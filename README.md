# egg-tracer

[![NPM version][npm-image]][npm-url]
[![Test coverage][codecov-image]][codecov-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-tracer.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-tracer
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-tracer.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-tracer?branch=master
[snyk-image]: https://snyk.io/test/npm/egg-tracer/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-tracer
[download-image]: https://img.shields.io/npm/dm/egg-tracelog.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-tracer

tracer plugin for egg.

## Install

```bash
npm i egg-tracer
```

## Usage

Enable tracer plugin:

```js
// config/plugin.js
exports.tracer = {
  enable: true,
  package: 'egg-tracer',
};
```

### Build my own tracer

```js
// my_tracer.js
const Tracer = require('egg-tracer');

const counter = 0;

class MyTracer extends Tracer {
  get traceId() {
    return `${counter++}-${Date.now()}-${process.pid}`;
  }
}
module.exports = MyTracer;
```

Change the config to use `MyTracer`:

```js
// config/config.default.js
exports.tracer = {
  Class: require('path/to/my_tracer.js'),
};
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
