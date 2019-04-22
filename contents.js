const request = require("request"),
  cheerio = require("cheerio");

module.exports = async args => {
  console.log("Contents crawling start");

  const list = args;

  for (const keyword of list) {
    const url = keyword.url;
    const body = await new Promise((resolve, reject) => {
      request(url, (err, res, body) => {
        return resolve(body);
      });
    });

    const $ = cheerio.load(body);

    $("._related_keyword_ul li a").map((i, e) => {
      if (keyword.contents.length < 10) return keyword.contents.push($(e).text());
    });
  }
  return list;
};
