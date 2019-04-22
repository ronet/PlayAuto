const keyword = require("./keyword"),
  contents = require("./contents");

const app = async () => {
  console.log("app start");
  const keywordResult = await keyword();
  // console.log("keyword : ", keywordResult);
  const contentsResult = await contents(keywordResult);
  console.log("contents : ", contentsResult);
};

app();
