# koa-response-handler
Response handler middleware for [koa](https://github.com/koajs/koa).

## Installation
```js
$ yarn add koa-response-handler
```
## Example
```js
const responseHandler = require('koa-response-handler')
const Koa = require('koa')
const router = require('koa-router')();
const app = new Koa()

app.use(responseHandler({contentType: 'application/json'}))


router.get('/', function async (ctx, next) {
  let res = { hello: 'world' }
  ctx.res.ok(res)
})
```

## License
  MIT
