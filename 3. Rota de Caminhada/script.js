function gerarRota(){
var directions = ["Norte", "Sul", "Leste", "Oeste"];
var path = [];
var showPath = [];
var height = 0;
var width = 0;

console.log("This is your path:");

for (x = 0; x < 10; x++) {
  var randomDirection = parseInt(Math.random() * 4);
  path[x] = randomDirection;
  showPath[x] = directions[randomDirection];
  document.getElementById("li" + x).innerHTML = showPath[x]

  if (path[x] == 0) {
    height++;
  } else if (path[x] == 1) {
    height--;
  } else if (path[x] == 2) {
    width++;
  } else {
    width--;
  }
}

document.getElementById("pontoInicial").innerHTML = "PONTO INICAL: <br> (0;0)"
document.getElementById("pontoFinal").innerHTML = "PONTO FINAL: <br> (" + height + ";" + width + ")"

if (height == 0 && width == 0) {
    document.getElementById("validade").innerHTML = "Caminho Válido"
} else {
    document.getElementById("validade").innerHTML = "Caminho Invalido"
}
}