var $selectedFicha = null;

var $fichas = {
  "1": {
    "valor": 1,
    "disponivel": true
  },
  "2": {
    "valor": 2,
    "disponivel": false
  },
  "3": {
    "valor": 3,
    "disponivel": true
  },
  "4": {
    "valor": 4,
    "disponivel": false
  },
  "5": {
    "valor": 5,
    "disponivel": true
  },
  "6": {
    "valor": 6,
    "disponivel": true
  }
}

function disableFicha($fichaComponent){
  $fichaComponent.prop("disabled", true);
  $fichaComponent.addClass("btn-primary");
  $fichaComponent.removeClass("btn-success");

}

function toggleFicha($fichaComponent){
  if ($fichaComponent.is(":disabled"))
    return;

    var fichaValue = $fichaComponent.attr("ficha");
    $selectedFicha = $fichas[fichaValue];

    $(".ficha").removeClass("btn-success");
    $(".ficha").removeClass("selected_ficha");
    $fichaComponent.addClass("btn-success");
    $fichaComponent.addClass("selected_ficha");

  $("#get_question").removeClass("hidden");


}

function selectFichaAndGetQuestion(){

  console.log($("#get_question").attr("ficha_value"));

  disableFicha($(".selected_ficha"));
  checkQuestion();
}

$(document).ready(function(){
  for(var key in $fichas){
    var ficha = $fichas[String(key)];
    if(!ficha.disponivel){
      var $fichaComponent = $("#ficha_" + String(ficha.valor));
      disableFicha($fichaComponent);
    }else {
      resetFichas = false;
    }

    if(resetFichas)
      resetarFichas();
  }

  $("#get_question").on('click', function(){
    selectFichaAndGetQuestion();
  });

  $(".ficha").on('click', function(){
    toggleFicha($(this));
  });
});
