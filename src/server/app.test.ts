import request from "supertest";
import app from "./app";
import httpStatusCodes from "../constants/httpStatusCodes";
import { paths } from "./routers/paths";

const {
  clientErrors: { badRequestCode },
} = httpStatusCodes;

describe("Given a GET / endpoint", () => {
  describe("When it receives a request from an origin that is not whitelisted", () => {
    test("Then it should respond with status 400 and the message 'Blocked by CORS'", async () => {
      const expectedMessage = "Not allowed by CORS";
      const unknownOrigin = "http://localhost:1234";

      const response = await request(app)
        .get(paths.root)
        .set("origin", unknownOrigin)
        .expect(badRequestCode);

      expect(response.body).toHaveProperty("error", expectedMessage);
    });
  });
});
