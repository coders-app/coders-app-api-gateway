import dotenv from "dotenv";

dotenv.config();

const { PORT: port, ORIGIN_WHITELIST: originWhitelist } = process.env;

export const environment = {
  port,
  originWhitelist: originWhitelist.split(","),
};
