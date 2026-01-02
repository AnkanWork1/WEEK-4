import pinoHttp from "pino-http";
import logger from "../utils/logger.js";

export const requestLogger = pinoHttp({
  logger,
  customLogLevel: (res, err) => {
    if (res.statusCode >= 500 || err) return "error";
    if (res.statusCode >= 400) return "warn";
    return "info";
  },
  serializers: {
    req(req) {
      return {
        method: req.method,
        url: req.url,
        params: req.params,
        query: req.query,
        body: req.body,
      };
    },
    res(res) {
      return {
        statusCode: res.statusCode,
      };
    },
  },
});
