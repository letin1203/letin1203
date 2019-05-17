const express = require("express");
const fetch = require('node-fetch');

var port = process.env.PORT || 3000;

/* Express */
const app = express();

app.get("/getData", (req, res) => {
    var url = 'https://www.gosugamers.net/dota2';
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