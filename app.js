const express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(8080);
console.log("listening on port 8080");
