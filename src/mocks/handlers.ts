import { rest } from "msw";
import { environment } from "../loadEnvironments";
import paths from "../utils/paths";

const { identityServerUrl } = environment;
const { login, users } = paths;

export const handlers = [
  rest.post(`${identityServerUrl}${users}${login}`, async (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ message: "Cookie has been set" }))
  ),
];
