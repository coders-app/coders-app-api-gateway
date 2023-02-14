import app from "../../app";
import * as httpProxyMiddleware from "http-proxy-middleware";
import type { ProxyRoutes } from "../../routers/proxy/types";
import { registerProxyRoutes } from "./proxy";

const createProxyMiddlewareSpy = jest.spyOn(
  httpProxyMiddleware,
  "createProxyMiddleware"
);

describe("Given a registerProxyRouts function", () => {
  describe("When it receives app and two proxy routes with method 'post' and paths '/login' and '/register'", () => {
    test("Then createProxyMiddleware should be invoked once for each route", () => {
      const proxyRoutes: ProxyRoutes = [
        {
          path: "/login",
          method: "post",
          target: "",
          targetPath: "",
        },
        {
          path: "/register",
          method: "post",
          target: "",
          targetPath: "",
        },
      ];

      const totalCalls = proxyRoutes.length;

      registerProxyRoutes(app, proxyRoutes);

      expect(createProxyMiddlewareSpy).toHaveBeenCalledTimes(totalCalls);
    });
  });
});
