const express = require("express");
const fetch = require('node-fetch');

var port = process.env.PORT || 3000;

/* Express */
const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/getData", (req, res) => {
  var url = req.body.url;
  fetch(url).then(function(res) {
      return res.text();
  }).then(function(html) {
      return res.json({ success: true, data: html });
  });
});

app.get("/", (req, res) => {
    res.send("Hey");
});

app.listen(port, function () {
    console.log(`Example app listening on port !`);
});