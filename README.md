# koa-response-handler
[![npm version][npm-image]][npm-url]

Response handler middleware for [koa](https://github.com/koajs/koa).

## Installation
```js
$ yarn install koa-response-handler
```
## Example
```js
const responseHandler = require('koa-response-handler')
const Koa = require('koa')
const app = new Koa()

app.use(responseHandler())
```

## License
  MIT
[npm-image]: https://img.shields.io/npm/v/koa-reponse-handler.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/koa-response-handler
