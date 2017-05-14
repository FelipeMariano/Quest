function walk(steps){
  console.log(steps);
  var atual = Number($("#posicao").text());
  $("#posicao").text(atual + steps);
}
