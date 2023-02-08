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
      })
    );
  });
};
