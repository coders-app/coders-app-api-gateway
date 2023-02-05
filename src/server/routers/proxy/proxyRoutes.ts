import type { ProxyRoutes } from "./types.js";
import { environment } from "../../../loadEnvironments.js";

/* Dejo esta ruta aquí como ejemplo para cuando creéis las rutas */
const proxyRoutes: ProxyRoutes = [
  {
    path: "/dame/llentelmen/tots",
    method: "get",
    target: environment.services.identityServer,
    targetPath: "/gentlemen/",
  },
];

export default proxyRoutes;
