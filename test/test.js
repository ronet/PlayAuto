const assert = require("assert"),
  keyword = require("../keyword"),
  contents = require("../contents");

describe("keyword", () => {
  it("will return object", async () => {
    assert.notEqual(typeof result, "string");
  });
});

describe("contents", () => {
  const result1 = keyword();
  it("will return array", async () => {
    const result = await contents(result1);
    assert.equal(typeof result, "object");
  });
});
