//business

var numbers = [];

var pingPong = function (number) {
  for (var index = 1; index <=number; index+=1) {
    if(index  % 15 === 0){
      numbers.push("pingpong");
    }else if (index % 5 === 0){
      numbers.push("pong");
    }else if (index % 3 ===0){
      numbers.push("ping");
    }else{
      numbers.push(index);
    }
  }

};
//front-end

$(document).ready(function() {
  $("form#pongpi").submit(function() {
    event.preventDefault();
    var number= parseInt($("input#number").val());

  pingPong(number);

  numbers.forEach(function (number) {
    $("#output").append('<li>' + number + "</li>");

  });

  });
});
