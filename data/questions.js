var questions;

var question1 = {
  "id": 1,
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

var question2 = {
  "id": 2,
  "enunciado": "sou melhor que...",
  "respostas": {
    "a": {
      "id": 1,
      "valor": "seu amigo"
    },
    "b": {
      "id": 2,
      "valor": "seu marido"
    },
    "c": {
      "id": 3,
      "valor": "esculacho - pode estar errado isso"
    },
    "d": {
      "id": 4,
      "valor": "sou foda"
    }
  }
}

var question3 = {
  "id": 3,
  "enunciado": "I have...",
  "respostas": {
    "a": {
      "id": 1,
      "valor": "oi?"
    },
    "b": {
      "id": 2,
      "valor": "ta de brincation with me, cara?"
    },
    "c": {
      "id": 3,
      "valor": "the power"
    },
    "d": {
      "id": 4,
      "valor": "ma oe"
    }
  }
}

var question4 = {
  "id": 4,
  "enunciado": "Não quero falar",
  "respostas": {
    "a": {
      "id": 1,
      "valor": "com a globo"
    },
    "b": {
      "id": 2,
      "valor": "como o SBT"
    },
    "c": {
      "id": 3,
      "valor": "morre diabo"
    },
    "d": {
      "id": 4,
      "valor": "( ͡° ͜ʖ ͡°)"
    }
  }
}


var question5 = {
  "id": 5,
  "enunciado": "COEEEEE",
  "respostas": {
    "a": {
      "id": 1,
      "valor": "RAPAZIADA"
    },
    "b": {
      "id": 2,
      "valor": "COEEE RAPAZIADA"
    },
    "c": {
      "id": 3,
      "valor": "COEEEEE RAPAZIADAAAA"
    },
    "d": {
      "id": 4,
      "valor": "COEEEEEEEEEEEEEEEEE RAPAZIADAAAAAAAAAAAAA"
    }
  }
}

function getResponseForRandomQuestion(answer){
  var response = {};
  response["answered"] = true;
  switch(answer.question){
    case 1:
      response["correct"] = (answer.choice === 1);
      break;
      case 2:
      response["correct"] = (answer.choice === 3);
      break;
      case 3:
      response["correct"] = (answer.choice === 3);
      break;
      case 4:
      response["correct"] = (answer.choice === 4);
      break;
      case 5:
      response["correct"] = (answer.choice === 1);
      break;
  }
  return response;
}

function getRandomQuestion(){
  var questionNum;
  questionNum = Math.floor(((Math.random() * 5)));

  return questions[questionNum];
}

$(document).ready(function(){
  questions = [question1, question2, question3, question4, question5];
});
