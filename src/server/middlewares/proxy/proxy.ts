import type express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { environment } from "../../../loadEnvironments.js";
import type { ProxyRoutes } from "../../routers/proxy/types.js";
import requestHeaders from "../../../constants/requestHeaders.js";

const { services, apiKey, appName } = environment;

export const registerProxyRoutes = (
  app: express.Application,
  proxyRoutes: ProxyRoutes
) => {
  proxyRoutes.forEach((route) => {
    app[route.method](
      route.path,
      createProxyMiddleware({
        target: services.identityServer,
        pathRewrite: { [route.path]: route.targetPath },
        changeOrigin: true,
        headers: {
          [requestHeaders.apiKey]: apiKey,
          [requestHeaders.apiName]: appName,
        },
        logLevel: "debug",
        onProxyReq(proxyReq, req) {
          // https://github.com/chimurai/http-proxy-middleware/issues/202#issuecomment-440562619
          if (req.body) {
            const bodyData = JSON.stringify(req.body);

            proxyReq.setHeader(requestHeaders.contentType, "application/json");
            proxyReq.setHeader(
              requestHeaders.contentLength,
              Buffer.byteLength(bodyData)
            );

            proxyReq.write(bodyData);
          }
        },
      })
    );
  });
};
