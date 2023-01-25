import { Axios } from "axios";
import { environment } from "../../loadEnvironments";

const { apiKey } = environment;

class BaseRepository extends Axios {
  constructor() {
    super({ headers: { "X-API-KEY": apiKey } });
  }
}

export default BaseRepository;
