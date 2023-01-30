import axios, { Axios } from "axios";
import { environment } from "../../loadEnvironments";

const { apiKey } = environment;

class BaseRepository extends Axios {
  constructor() {
    super({
      headers: { "X-API-KEY": apiKey },
      transformRequest: axios.defaults.transformRequest,
      transformResponse: axios.defaults.transformResponse,
    });
  }
}

export default BaseRepository;
