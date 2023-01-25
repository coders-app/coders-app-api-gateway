import BaseRepository from "./BaseRepository";

describe("Given the class BaseRepository", () => {
  describe("When it's instantiated", () => {
    test("Then it should have a property 'X-API-KEY' in the default headers", async () => {
      const repository = new BaseRepository();
      const expectedHeader = "X-API-KEY";

      expect(repository.defaults.headers).toHaveProperty(expectedHeader);
    });
  });
});
