const assert = require("assert");
const crawler = require("../crawler");

describe("crawler", () => {
  it("will return string", async () => {
    const result = await crawler();
    assert.equal(typeof result, "string");
  });
});
