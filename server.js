var express = require("express");
var http = require ("http");
var app = express();

var server = http.createServer(app);

app.get("/", function (req, res){
  res.sendFile("./index.html", {"root":__dirname});
});


server.listen(2000);
