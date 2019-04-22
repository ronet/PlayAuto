const request = require("request"),
  cheerio = require("cheerio");

module.exports = async () => {
  console.log("Keyword crawling start");
  const body = await new Promise((resolve, reject) => {
    const url = "https://www.naver.com";

    request(url, (err, res, body) => {
      return resolve(body);
    });
  });

  const $ = cheerio.load(body);

  const list = [];

  $(".ah_k").map((i, e) => {
    const content = {
      name: $(e).text(),
      url: $(e)
        .parent()
        .attr("href"),
      contents: []
    };
    if (content.url === "#") return;
    if (list.length < 10) return list.push(content);
  });

  return list;
};
