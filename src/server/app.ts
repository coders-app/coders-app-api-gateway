import express from "express";
import morgan from "morgan";
import cors from "cors";
import basicAuth from "express-basic-auth";
import swaggerUi from "swagger-ui-express";
import generalError, { unknownEndpoint } from "./middlewares/errors/errors.js";
import pingPongProtocolRouter from "./routers/pingPongProtocolRouter/pingPongProtocolRouter.js";
import openApiDocument from "../openapi/index.js";
import corsOptions from "./cors/corsOptions.js";
import { environment } from "../loadEnvironments.js";
import { registerProxyRoutes } from "./middlewares/proxy/proxy.js";
import proxyRoutes from "./routers/proxy/proxyRoutes.js";
import { paths } from "./routers/paths.js";

const app = express();

app.use(cors(corsOptions));
app.disable("x-powered-by");

app.use(morgan("dev"));

app.use(express.json());

app.use(paths.root, pingPongProtocolRouter);

registerProxyRoutes(app, proxyRoutes);

app.use(
  paths.apiDocs.base,
  basicAuth({
    users: {
      [environment.swaggerAuth.username]: environment.swaggerAuth.password,
    },
    challenge: true,
  }),
  swaggerUi.serve,
  swaggerUi.setup(openApiDocument)
);

app.use(unknownEndpoint);
app.use(generalError);

export default app;
