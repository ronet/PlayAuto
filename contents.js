const request = require("request"),
  cheerio = require("cheerio");

module.exports = async args => {
  console.log("Contents crawling start");

  return Promise.all(args.map(async keyword => {
    const url = keyword.url;
    const body = await new Promise((resolve, reject) => {
      request(url, (err, res, body) => {
        return resolve(body);
      });
    });

    const $ = cheerio.load(body);

    return $("._related_keyword_ul li a").map((i, e) => {
      return $(e).text();
    }).get();
  }));
};
