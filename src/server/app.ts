import express from "express";
import morgan from "morgan";
import cors from "cors";
import generalError, { unknownEndpoint } from "./middlewares/errors.js";

const app = express();

app.use(cors());
app.disable("x-powered-by");

app.use(morgan("dev"));

app.use(express.json());

app.get("/", async (req, res) => {
  res.json({
    message: "Pong 🏓",
  });
});

app.use(unknownEndpoint);
app.use(generalError);

export default app;
