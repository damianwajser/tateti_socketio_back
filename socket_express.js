var express = require("express");
var socket_io = require ("socket.io");

var app = express();
var io = socket_io();
var figure = true;
io.on("connection", function(socket){
  console.log("se conecto un boludo");
  //se envia a todos
  //socket.emit();
  //se envia con la clave init
  socket.emit("init", {"figure":figure});
  figure = !figure;
});

app.io=io;
module.exports = app;
