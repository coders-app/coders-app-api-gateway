import { environment } from "./loadEnvironments.js";
import debugCreator from "debug";
import chalk from "chalk";
import startServer from "./server/startServer.js";

const debug = debugCreator("identity-server:root");

const { port } = environment;

try {
  await startServer(+port);
  debug(chalk.blue(`Server listening on port ${port}`));
} catch (error: unknown) {
  debug(chalk.red(`Error with the server ${(error as Error).message}`));
}
