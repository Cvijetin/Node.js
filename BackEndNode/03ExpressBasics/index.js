const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  //res.status(200).json({ user: "cvele", balance: "200", id: "123" });
  res.status(500).json({ error: "Shit does not work" });
});

app.get("/services", (req, res) => {
  res.send(
    "<ul><li>Web development</li><li>Web design</li><li>Mobile app development</li></ul>"
  );
});

app.get("/contact", (req, res) => {
  res.send("<h1>Im contact</h1>");
});

app.get("/ab*cd", (req, res) => {
  res.send("<h1>Im regex page</h1>");
});

app.get("/flights/:from-:to", (req, res) => {
  res.send(req.params);
});

app.get("/user/:id/status/:status_id", (req, res) => {
  res.send(req.params);
});

app.post("/login", (req, res) => {
  res.send("login succes");
});
// Type: GET
// ACCESS: Public
// @Description: used for login
app.delete("/delete", (req, res) => {
  res.send("delete succes");
});

//app.listen(3000, () => console.log("server is running"));
