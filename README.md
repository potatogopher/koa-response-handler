# koa-response-handler
Response handler middleware for [koa](https://github.com/koajs/koa).

<a href="https://communityinviter.com/apps/koa-js/koajs" rel="KoaJs Slack Community">![KoaJs Slack](https://img.shields.io/badge/Koa.Js-Slack%20Channel-Slack.svg?longCache=true&style=for-the-badge)</a>

## Installation
```js
$ yarn add koa-response-handler
```
## Example
```js
import Koa from 'koa'  
import Router from 'koa-router'  
import responseHandler from 'koa-response-handler'

const app = new Koa()  
const router = new Router()

app  
  .use(responseHandler({ contentType: 'application/json' }))
  .use(router.routes())
  .use(router.allowedMethods())

router.get('/:id', function async (ctx, next) {  
    let data = {id: 1, hello: 'world' }

    if (ctx.params.id !== data.id) {
      ctx.response.notFound()
      return
    }

    ctx.response.ok(data)
})
```

## License
  MIT
