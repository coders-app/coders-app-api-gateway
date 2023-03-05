import type { ProxyRoutes } from "./types.js";
import { environment } from "../../../loadEnvironments.js";
import { paths } from "../paths.js";

const { services } = environment;
const proxyRoutes: ProxyRoutes = [
  {
    path: paths.users.login,
    method: "post",
    target: services.identityServer,
    targetPath: paths.users.login,
  },
  {
    path: paths.users.logout,
    method: "post",
    target: services.identityServer,
    targetPath: paths.users.logout,
  },
];

export default proxyRoutes;
