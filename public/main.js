(function(){
  //esto esta en el script socket.io

  function $(selector){
      return document.querySelector(selector);
  }

  function build_cat(){
      for(var i=0; i<9; i++){
          var item = build_item(i);
          $("#cat").innerHTML += item;
      }
      add_events();
  }

  function build_item(i){
      return "<div class='cat-element col-md-4' id='elemento-"+i+"'></div>";
  }

  function add_events() {
    var elements = document.querySelectorAll(".cat-element");
    for (var i = 0; i< elements.length; i++){
      elements[i].addEventListener("click", function(){
        var position = this.id.split("-")[1];
        socket.play(position);
      });
    }
  }
  build_cat();
  var movimiento = function (figura,position){
    $("#elemento-"+position).innerHTML = figura;
  }
  var socket = new Socket(movimiento,2,3);
})();
