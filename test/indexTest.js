require ( './root.js' );

const { name, height, message } = require("../index.js");

describe("what-is-a-test", () => {
  describe("Name", () => {
    it('returns "Joe"', () => {
      expect(name).toEqual("Joe");
    });
  });

  describe("Height", () => {
    it(" 74 to be less than 40 ", () => {
      expect(height).toBeMoreThan(0)
      expect(74).toBeLessThan(40);
    });
  });

  describe("Message", () => {
    it("gives the name and height", () => {
      expect(message).toInclude(name);
      expect(message).toInclude(height);
    });
  });
});
