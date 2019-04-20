const request = require("request"),
  cheerio = require("cheerio");

const url = "https://www.naver.com";

console.log("app start");

const crawling = async () => {
  console.log("crawling start");
  const body = await new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      return resolve(body);
    });
  });

  const $ = cheerio.load(body);

  const result = await $(".ah_k")
    .map((i, e) => {
      if (i > 9) return;
      return $(e).text();
    })
    .get()
    .join(", ");

  console.log(result);
};

crawling();

// const body = new Promise((resolve, reject) => {
//   request(url, (err, res, body) => {
//     if (err) return reject(err);
//     return resolve(body);
//   });
// });

// const parser = body => {
//   const $ = cheerio.load(body);

//   const result = $(".ah_k")
//     .map((i, e) => {
//       if (i > 9) return;
//       return $(e).text();
//     })
//     .get()
//     .join(", ");
//   console.log(result);
// };

// body.then(body => parser(body));
