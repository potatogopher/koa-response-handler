# koa-response-handler
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
