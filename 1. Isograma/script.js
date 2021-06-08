function isIsogram() {

    var word = document.getElementById('word').value;

    var wordLower = word.toLowerCase();
    var wordLetters = wordLower.split("");
    var isogram = 0;
  
    for (x = 0; x < wordLetters.length; x++) {
      for (i = 1; i < wordLetters.length; i++) {
        if (wordLetters[x] == wordLetters[x + i]) {
          isogram++;
        }
      }
    }
    if (isogram == 0) {
        document.getElementById("validacao").innerHTML = "Sua Palavra É Um Isograma"
    } else {
        document.getElementById("validacao").innerHTML = "Sua Palavra Não É Um Isograma"
    }
  }