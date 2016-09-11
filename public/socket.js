function Socket(movimiento, gano, reinicie){
  var self = this;
  self.juego = false;
  var socket = io();

  self.play = function(position){
    socket.emit("movimiento", {position:position});
    movimiento(self.figura(), position);
  }
  self.figura = function(){
    return self.juego ? "X":"O";
  }
  socket.on("connect", function(){
    socket.on("init", function(data){
      self.juego = data.figure;
    })
  });

}
