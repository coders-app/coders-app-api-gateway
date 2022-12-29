import dotenv from "dotenv";

dotenv.config();

const { PORT: port } = process.env;

export const environment = {
  port,
};
