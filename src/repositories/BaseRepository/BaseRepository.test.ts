import BaseRepository from "./BaseRepository";

describe("Given an instance of BaseRepository", () => {
  describe("When its method createConfig is invoked with the header 'Authorization: 'Bearer 123''", () => {
    test("Then it should return an object with the received information adding the header 'X-API-KEY'", async () => {
      const repository = new BaseRepository();
      const firstExpectedHeader = "Authorization";
      const firstExpectedValue = "Bearer 123";
      const secondExpectedHeader = "X-API-KEY";

      const result = repository.createConfig({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        headers: { Authorization: firstExpectedValue },
      });

      expect(result.headers).toHaveProperty(
        firstExpectedHeader,
        firstExpectedValue
      );
      expect(result.headers).toHaveProperty(secondExpectedHeader);
    });
  });
});
