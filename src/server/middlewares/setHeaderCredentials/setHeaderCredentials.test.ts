import type { Request, Response, NextFunction } from "express";
import requestHeaders from "../../../constants/requestHeaders";
import setHeaderCredentials from "./setHeaderCredentials";

const { allowCredentials } = requestHeaders;

describe("Given a setHeaderCredentials middleware", () => {
  describe("When it receives a request, response and next function", () => {
    test("Then it should invoke response's method header with 'Access-Control-Allow-Credentials', 'true' and next function", () => {
      const req: Partial<Request> = {};
      const res: Partial<Response> = {
        header: jest.fn(),
      };

      const next: NextFunction = jest.fn();

      setHeaderCredentials(req as Request, res as Response, next);

      expect(res.header).toHaveBeenCalledWith(allowCredentials, "true");
      expect(next).toHaveBeenCalled();
    });
  });
});
