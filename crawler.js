const request = require("request"),
  cheerio = require("cheerio");

const url = "https://www.naver.com";

const crawler = async () => {
  console.log("crawling start");
  const body = await new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      return resolve(body);
    });
  });

  const $ = cheerio.load(body);

  const parser = await Promise.all(
    $(".ah_k")
      .map((i, e) => {
        if (i > 9) return;
        return $(e).text();
      })
      .get()
  );

  const result = parser.join(", ");

  return result;
};

module.exports = crawler;
