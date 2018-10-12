/**
 * Response middleware for koajs
 *
 * @author Nick Rucci <nick@rucci.io>
 * @link https://github.com/potatogopher/koa-response-handler
 */

/**
 * Status codes
 *
 * TODO: add all status codes
 */
const statusCodes = {
  // 1xx
  CONTINUE: 100,
  // 2xx
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  // 3xx
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  // 4xx
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  REQUEST_TIME_OUT: 408,
  CONFLICT: 409,
  GONE: 410,
  PAYLOAD_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  IM_A_TEAPOT: 418,
  // 5xx
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIME_OUT: 504,
};

/**
 * @param {Object} [options={}] - Optional configuration.
 * @param {Object} [options.contentType=application/json] - Response content-type.
 * @return {function} Koa middleware.
 */
function responseHandler({ contentType = 'application/json' } = {}) {
  return async (ctx, next) => {
    const withStatus = status => (res = null) => {
      ctx.type = contentType;
      ctx.body = res;
      ctx.status = status;
    };

    ctx.response = Object.assign(ctx.response || {}, {
      // 1xx
      continue: withStatus(statusCodes.CONTINUE),
      // 2xx
      ok: withStatus(statusCodes.OK),
      created: withStatus(statusCodes.CREATED),
      accepted: withStatus(statusCodes.ACCEPTED),
      noContent: withStatus(statusCodes.NO_CONTENT),
      // 3xx
      movedPermanently: withStatus(statusCodes.MOVED_PERMANENTLY),
      found: withStatus(statusCodes.FOUND),
      // 4xx
      badRequest: withStatus(statusCodes.BAD_REQUEST),
      unauthorized: withStatus(statusCodes.UNAUTHORIZED),
      forbidden: withStatus(statusCodes.FORBIDDEN),
      notFound: withStatus(statusCodes.NOT_FOUND),
      methodNotAllowed: withStatus(statusCodes.METHOD_NOT_ALLOWED),
      notAcceptable: withStatus(statusCodes.NOT_ACCEPTABLE),
      requestTimeOut: withStatus(statusCodes.REQUEST_TIME_OUT),
      conflict: withStatus(statusCodes.CONFLICT),
      gone: withStatus(statusCodes.GONE),
      payloadTooLarge: withStatus(statusCodes.PAYLOAD_TOO_LARGE),
      uriTooLong: withStatus(statusCodes.URI_TOO_LONG),
      unsupportedMediaType: withStatus(statusCodes.UNSUPPORTED_MEDIA_TYPE),
      teapot: withStatus(statusCodes.IM_A_TEAPOT),
      // 5xx
      internalServerError: withStatus(statusCodes.INTERNAL_SERVER_ERROR),
      notImplemented: withStatus(statusCodes.NOT_IMPLEMENTED),
      badGateway: withStatus(statusCodes.BAD_GATEWAY),
      serviceUnavailable: withStatus(statusCodes.SERVICE_UNAVAILABLE),
      gatewayTimeOut: withStatus(statusCodes.GATEWAY_TIME_OUT),
    });

    return next();
  };
}

module.exports = responseHandler;
