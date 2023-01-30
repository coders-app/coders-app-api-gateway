import { userMock } from "../../mocks/userMocks";
import UserRepository from "./UserRepository";

describe("Given an instance of UserRepository", () => {
  const user = new UserRepository();
  describe("When its method loginUser is invoked with username: user123 and password: user123", () => {
    test("Then it should return status 200 and the message 'Cookie has been set' ", async () => {
      const expectedResponse = { message: "Cookie has been set" };

      const response = await user.loginUser(
        userMock.username,
        userMock.password
      );

      expect(response).toStrictEqual(expectedResponse);
    });
  });
});
