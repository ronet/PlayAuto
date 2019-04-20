const assert = require("assert"),
  request = require("request"),
  cheerio = require("cheerio");

const url = "https://www.naver.com";
describe("test start", () => {
  it("request", () => {
    request(url, (err, res, body) => {
        it('here',()=> {
            console.log(body)
        })
    });
  });
});
describe("request2", () => {
  console.log("request2222s");
});
// describe("Array Test 2", () => {
//   describe("indexOf() Method", () => {
//     it("return -a when null", () => {
//       assert.equal(-1, [1, 2, 3].indexOf(5));
//       assert.equal(-1, [1, 2, 3].indexOf(0));
//     });
//   });
// });
