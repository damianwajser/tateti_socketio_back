function Socket(movimiento, gano, reinicie){
  var self = this;
  self.juego = false;
  var socket = io();

  self.play = function(position){
    //emite hacia el server con la key movimiento
    socket.emit("movimiento", {position:position});
    movimiento(self.figura(), position);
  }
  self.figura = function(){
    return self.juego ? "X":"O";
  }

  socket.on("connect", function(){
    //escucha al server con la key init
    socket.on("init", function(data){
      self.juego = data.figure;
    })
  });

}
