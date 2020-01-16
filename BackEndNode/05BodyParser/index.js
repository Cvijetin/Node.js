const express = require("express");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/login", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/login", (req, res) => {
  console.log(req.body.email);
  res.redirect("/");
});

app.listen(4000, () => console.log("Server is running on port 4000"));
