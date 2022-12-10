import { sortByLength } from "./sort";
describe("sortByLength()", () => {
  it("sorts the strings from shortest to longest", () => {
    // arrange
    const strs = ["abc", "", "aaa", "a", "zz"];

    // act
    const result = sortByLength(strs);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
  });
});
