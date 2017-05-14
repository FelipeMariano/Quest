function answer(answer){
  var response = {};
  response["answered"] = true;

  var response = getResponseForRandomQuestion(answer);

  console.log(response);

  answerResponse(response);
  // $.ajax({
  //   url: "url",
  //   type: "POST",
  //   cache: false,
  //   data: answer,
  //   success: function(response){
  //     console.log(response);
  //   },
  //   error: function(response){
  //     console.log("ERROR!");
  //   }
  // });
}

function answerResponse(response){
  if(!response.answered){
    $("#answer_result").text("Não respondido :(");
  }else if(response.correct){
      $("#answer_result").text("Resposta correta");

      walk($selectedFicha.valor);
      $selectedFicha = null;
  }else{
    $("#answer_result").text("Resposta errada");
  }
}

function getQuestion(configuration, callback){
  var question = getRandomQuestion();

  callback(question);
}

function selectAnswer(notAnswered){
  clearInterval(intervalo);

  if(notAnswered){
    var answer = {
      "question": 0,
      "choice": 0
    }
  }else{
  var answerValue = $("input[name='answer']:checked").val();
  var answer = {
    "question": $turno.question.id,
    "choice": Number(answerValue)
  }
}
  this.answer(answer);
  $turno.question = null;
}

function showQuestion(question){
  $("#enunciado").text(question.enunciado);
  $("#choice_a").text(question.respostas.a.valor);
  $("#choice_b").text(question.respostas.b.valor);
  $("#choice_c").text(question.respostas.c.valor);
  $("#choice_d").text(question.respostas.d.valor);
}

function checkQuestion(){
  $selectedFicha.disponivel = false;
  $fichas[String($selectedFicha.valor)] = $selectedFicha;
  if(($turno.toPlay === "you") && ($turno.question === null)){

    var configuration = {
      "tema": 123
    };

    getQuestion(configuration, function(question){
      $turno.question = question;
      showQuestion(question);
    });
  }
}

$(document).ready(function(){
  $("#answer").on("click", function(){
    selectAnswer();
  });
});
