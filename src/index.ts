import { environment } from "./loadEnvironments.js";
import debugConfig from "./utils/debugConfig.js";
import chalk from "chalk";
import startServer from "./server/startServer.js";
import type CustomError from "./CustomError/CustomError.js";

const debug = debugConfig.extend("root");

const { port } = environment;

try {
  await startServer(+port);

  debug(chalk.blue(`Server listening on port ${port}`));
} catch (error: unknown) {
  if ((error as CustomError).code === "EADDRINUSE") {
    debug(chalk.red(`Error with the server: port ${port} in use`));
    process.exit(1);
  }

  debug(chalk.red(`Error with the server: ${(error as Error).message}`));
  process.exit(1);
}
