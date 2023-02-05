import dotenv from "dotenv";

dotenv.config();

const {
  PORT: port,
  ORIGIN_WHITELIST: originWhitelist,
  BASIC_AUTH_USERNAME: basicAuthUsername,
  BASIC_AUTH_PASSWORD: basicAuthPassword,
  SERVICES: services,
  API_KEY: apiKey,
} = process.env;

export const environment = {
  port,
  originWhitelist: originWhitelist.split(","),
  basicAuth: {
    username: basicAuthUsername,
    password: basicAuthPassword,
  },
  services: JSON.parse(services) as Record<string, string>,
  apiKey,
};
