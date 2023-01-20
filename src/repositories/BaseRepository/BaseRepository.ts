import { Axios } from "axios";
import type { AxiosRequestConfig } from "axios";
import { environment } from "../../loadEnvironments";

const { apiKey } = environment;

class BaseRepository extends Axios {
  readonly config: AxiosRequestConfig;

  public createConfig(config?: AxiosRequestConfig) {
    return {
      ...config,
      headers: {
        ...config.headers,
        "X-API-KEY": apiKey,
      },
    };
  }
}

export default BaseRepository;
