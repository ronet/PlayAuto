const crawler = require("./crawler");

const app = async () => {
  console.log("app start");
  const result = await crawler();
  console.log(result);
};

app();
