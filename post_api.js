const express = require("express");
const app = express();

app.use(express.json());

app.post("/signup/:id", (req, res) => {
  if (req.headers["api_key"] !== "39048938jfhjsh834873") {
    res.send("error, not matching api key");
  }

  console.log(req.params.id);
  console.log(req.query.age);
  const { name, age, location, pass } = req.body;
  console.log(name, age, location, pass);
  console.log(req.headers["token"]);
  res.send("completed..");
});

app.listen(4000, () => {
  console.log("hi i am started...");
});
