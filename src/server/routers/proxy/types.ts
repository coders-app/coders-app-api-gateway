export type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

interface ProxyRoute {
  path: string;
  method: HttpMethod;
  target: string;
  targetPath: string;
}

export type ProxyRoutes = ProxyRoute[];
