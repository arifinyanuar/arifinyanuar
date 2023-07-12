var randomNumber = Math.floor(Math.random() * 10) + 1;
var guessInput = document.getElementById("guessInput");
var message = document.getElementById("message");
var resetButton = document.getElementById("resetButton");

function checkGuess() {
  var userGuess = parseInt(guessInput.value);
  if (userGuess === randomNumber) {
    message.textContent = "Selamat, tebakan Anda benar!";
    resetButton.style.display = "block";
  } else if (userGuess < randomNumber) {
    message.textContent = "Tebakan Anda terlalu rendah, coba lagi!";
  } else if (userGuess > randomNumber) {
    message.textContent = "Tebakan Anda terlalu tinggi, coba lagi!";
  } else {
    message.textContent = "Masukkan angka yang valid.";
  }
}

function resetGame() {
  guessInput.value = "";
  message.textContent = "";
  resetButton.style.display = "none";
  randomNumber = Math.floor(Math.random() * 10) + 1;
}
