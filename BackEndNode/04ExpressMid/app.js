const express = require("express");
const app = express();

var myConsoleLog = function(res, req, next) {
  console.log("I am a MIDDLEWARE");
  next();
};

var serverTime = function(req, res, next) {
  req.requestTime = Date.now();
  next();
};

app.use(serverTime);

app.get("/", (req, res) => {
  res.send("Hello world" + "and time is :" + req.requestTime);
  console.log("Gello world form /");
});

//app.listen(3001, () => console.log("server is running"));
