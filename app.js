const express = require("express");
const app = express();

app.get("/students", (req, res) => {
  res.send("hira hasan");
});
//http://localhost:4040/employee?id=3434&dept=sports
app.get("/employee", (req, res) => {
  const id = req.query.id;
  const dept = req.query.dept;
  console.log(dept);
  //console.log(req);
  console.log(id);
  // get details for this id and dept..
  const result = {
    id: 122,
    dept: "sports",
    salary: 344,
  };
  if (id) {
    res.send(result);
  } else res.send("No emp id");
});

app.get("/employee/:id/:dept", (req, res) => {
  res.send("hi...");
});

app.get("/employee/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const dept = req.query.dept;
  console.log(dept);
  res.send(id);
});

// client -- server : two process for get req
app.listen(4040, () => {
  console.log("started.. again");
});
