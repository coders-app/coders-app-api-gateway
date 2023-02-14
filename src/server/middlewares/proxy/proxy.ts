import type express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { environment } from "../../../loadEnvironments.js";
import type { ProxyRoutes } from "../../routers/proxy/types.js";

const { services, apiKey } = environment;

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
        headers: { "X-API-KEY": apiKey },
      })
    );
  });
};
