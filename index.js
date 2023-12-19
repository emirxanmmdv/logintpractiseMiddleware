const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
app.use(express.static('public'))
const checkAuthorized = function (req, res, next) {
  const password = req.body.password;
  if (password === "1235") {
    next();
  } else {
    res.status(404).send("sen kimsen qaqa?");
  }
};

app.post("/login", checkAuthorized, (req, res) => {
  console.log("login is working!");
  res.send("xos gelmisen ay qudam")
});

const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

app.get("/", myLogger, (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
