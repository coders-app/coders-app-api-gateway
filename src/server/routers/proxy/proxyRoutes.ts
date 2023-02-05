import type { ProxyRoutes } from "./types";
import { environment } from "../../../loadEnvironments";

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
