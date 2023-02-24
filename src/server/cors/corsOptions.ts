import type { CorsOptions } from "cors";
import { environment } from "../../loadEnvironments.js";
import CustomError from "../../CustomError/CustomError.js";
import httpStatusCodes from "../../constants/httpStatusCodes.js";

const { originWhitelist } = environment;

const {
  clientErrors: { badRequestCode },
} = httpStatusCodes;

const corsOptions: CorsOptions = {
  origin(requestOrigin, callback) {
    if (!requestOrigin || originWhitelist.includes(requestOrigin)) {
      callback(null, requestOrigin);
      return;
    }

    callback(
      new CustomError(
        `${requestOrigin} blocked by CORS policy`,
        badRequestCode,
        "Not allowed by CORS"
      ),
      requestOrigin
    );
  },
};

export default corsOptions;
