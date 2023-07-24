const express = require("express");
const app = express();
const port = 7000;
app.set("view engine", "ejs");

app.use("/public", express.static("public"));

app.listen(port, function () {
  console.log("listening on " + port);
});

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/tech", function (req, res) {
  res.render("tech.ejs");
});

app.get("/about", function (req, res) {
  res.render("about.ejs");
});

app.get("/map", function (req, res) {
  res.render("map.ejs");
});

app.get("/contact", function (req, res) {
  res.render("contact.ejs");
});
