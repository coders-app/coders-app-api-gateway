import type express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { environment } from "../../loadEnvironments.js";
import proxyRoutes from "../routers/proxy/proxyRoutes.js";

const { services, apiKey } = environment;

export const registerProxyRoutes = (app: express.Application) => {
  proxyRoutes.forEach((route) => {
    app[route.method](
      route.path,
      createProxyMiddleware({
        target: services.identityServer,
        pathRewrite: { [route.path]: route.targetPath },
        changeOrigin: true,
        headers: { "X-API-KEY": apiKey },
        logLevel: "debug",
        onProxyReq(proxyReq, req) {
          // https://github.com/chimurai/http-proxy-middleware/issues/202#issuecomment-440562619
          if (req.body) {
            const bodyData = JSON.stringify(req.body);

            proxyReq.setHeader("Content-Type", "application/json");
            proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));

            proxyReq.write(bodyData);
          }
        },
      })
    );
  });
};
