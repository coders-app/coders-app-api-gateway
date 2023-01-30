import { environment } from "../../loadEnvironments";
import BaseRepository from "../BaseRepository/BaseRepository";
import paths from "../../utils/paths";

const { identityServerUrl } = environment;
const { login, users } = paths;

class UserRepository extends BaseRepository {
  private readonly baseUrl = identityServerUrl;
  private readonly paths = {
    users: `${users}`,
    login: `${login}`,
  };

  public async loginUser<T>(username: string, password: string) {
    const result = await super.post<T>(
      `${this.baseUrl}${this.paths.users}${this.paths.login}`,
      {
        username,
        password,
      }
    );
    return result.data;
  }
}

export default UserRepository;
