function number(){

var number = document.getElementById('number').value;

var numbers = [];
var result = 0;

if (number > 0) {
  for (x = number - 1; x > 2; x--) {
    var multipleOf3 = x % 3;
    var multipleOf5 = x % 5;

    if (multipleOf3 == 0) {
      numbers.push(x);
    } else if (multipleOf5 == 0) {
      numbers.push(x);
    }
  }
  for (x = 0; x < numbers.length; x++) {
    var result = result + numbers[x];
  }
  document.getElementById("verificacao").innerHTML = "A soma resulta em: " + result
} else {
  document.getElementById("verificacao").innerHTML = "A soma resulta em: " + result + "<br> Na proxima escolha um numero maior que 0"
}
}