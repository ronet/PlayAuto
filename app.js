const assert = require("assert"),
  request = require("request"),
  cheerio = require("cheerio");

const url = "https://www.naver.com";

const body = new Promise((resolve, reject) => {
  request(url, (err, res, body) => {
    if (err) return reject(err);
    return resolve(body);
  });
});

const parser = body => {
  const $ = cheerio.load(body);

  const result = $(".ah_k")
    .map((i, e) => {
		if(i>10) return;
      return $(e).text();
    })
    .get()
    .join(", ");
  console.log(result);
};

body.then(body => parser(body));
