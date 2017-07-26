import { doCalculation } from "../src/app";

describe("App Test", () => {
  it("Should be true", () => {
    expect(doCalculation(1, 2, 3)).toEqual(6);
  });
});
