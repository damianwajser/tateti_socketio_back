var cors = require('cors');
var http = require ("http");
var morgan = require('morgan');
var app = require("./socket_express");
var express = require("express");

var server = http.createServer(app);

//seteo para loguear todos los reqest  responses
app.use(morgan('dev'));
//creo la carpeta para contenido estatico
app.use("/static", express.static("public"));

//seteo los cors para todos los servicios
app.all("*", cors());

app.get("/", function (req, res){
  res.sendFile("./index.html", {"root":__dirname});
});

server.listen(2000);
app.io.attach(server);
