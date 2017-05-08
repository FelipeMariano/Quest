function answer(answer){
  var response = {};

  response["correct"] =  answer.choice === 1;

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
  if(response.correct){
      $("#answer_result").text("Resposta correta");

      walk($selectedFicha.valor);
      $selectedFicha = null;
  }else{
    $("#answer_result").text("Resposta errada");
  }
}

function getQuestion(configuration, callback){
  console.log(configuration);

  var question = {
    "id": 2,
    "enunciado": "this is real world?",
    "respostas": {
      "a": {
        "id": 1,
        "valor": "yes"
      },
      "b": {
        "id": 2,
        "valor": "no"
      },
      "c": {
        "id": 3,
        "valor": "maybe"
      },
      "d": {
        "id": 4,
        "valor": "really?"
      }
    }
  }

  callback(question);
}

function selectAnswer(){
  var answerValue = $("input[name='answer']:checked").val();
  var answer = {
    "question": $turno.question.id,
    "choice": Number(answerValue)
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
