import type { ProxyRoutes } from "./types.js";
import { environment } from "../../../loadEnvironments.js";
import paths from "../paths.js";

const { services } = environment;
const { login, users } = paths;
const proxyRoutes: ProxyRoutes = [
  {
    path: `${users}${login}`,
    method: "post",
    target: services.identityServer,
    targetPath: `${users}${login}`,
  },
];

export default proxyRoutes;
