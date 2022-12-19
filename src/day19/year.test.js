import { centuryFromYear } from "./year";

//Test Suite
describe("centuryFromYear()", () => {
  it("returns current century", () => {
    //arrange
    const year = 1905;

    //act
    const result = centuryFromYear(year);

    //assert
    expect(result).toBe(20);
  });

  it("returns current century for edge case of start of century", () => {
    //arrange
    const year = 1900;

    //act
    const result = centuryFromYear(year);

    //assert
    expect(result).toBe(19);
  });
});
