const express = require("express");

const app = express();

const token = (req, res, next) => {
  const token = "123";
  req.token = token;
  console.log(req.token); //token checking

  next();
};

const auth = (req, res, next) => {
  if (req.token) {
    next();
  }  
};

app.get("/", token, auth, (req, res) => {
  res.send("AUTHENTICATED");
  res.end();
});

app.listen(5000, console.log("server is ok"));
