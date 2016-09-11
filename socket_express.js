var express = require("express");
var socket_io = require ("socket.io");

var app = express();
var io = socket_io();

io.on("connection", function(socket){
  console.log("se conecto un boludo");

});

app.io=io;
module.exports = app;
