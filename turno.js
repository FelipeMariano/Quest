var intervalo = null;
var $turno = {
  toPlay: "you",
  position: 0,
  points: 0,
  question: null,
  answers: 0
}

/////////////////////////////////////////



function checkTurnoJSON(){
  var obj = {
    turno:  true
  }

  return obj;
}



////////////////////////////////////////

function requestTurno(dataToSend){
  $.ajax({
    url: "url",
    type: "GET",
    cache: false,
    data: dataToSend,
    success: function(response){
      console.log(response);
    },
    error: function(response){
      console.log("ERROR!");
    }
  });
}


function prepareTurno(configuration){
  $turno.toPlay = "you";
  $("#turno").text("sua vez de jogar");
}

function prepareEspectador(configuration){
  $("#questionArea").hide();
}

function statusTurno(){
  var configuration = checkTurnoJSON();

  if(configuration.turno)
    prepareTurno(configuration);
  else
    prepareEspectador(configuration);
}

function updateTurnoTimer(){
    var secAtual = Number($("#turno_timer").text());
    $("#turno_timer").text(++secAtual);

    if(secAtual >= 30){
      selectAnswer(true);
    }
}

$(document).ready(function(){
  statusTurno();
  setInterval(function(){
    statusTurno();
  }, 2000);
  $("#get_question").on("click",function(){
    intervalo = setInterval(function(){
    updateTurnoTimer();
    }, 1000);
  });
});
