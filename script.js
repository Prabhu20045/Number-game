let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById('guessInput').value);
  const message = document.getElementById('message');
  attempts++;

  if (isNaN(userGuess)) {
    message.textContent = "Please enter a valid number!";
  } else if (userGuess < 1 || userGuess > 100) {
    message.textContent = "Number must be between 1 and 100!";
  } else if (userGuess === secretNumber) {
    message.textContent = `🎉 Correct! You guessed it in ${attempts} tries.`;
  } else if (userGuess < secretNumber) {
    message.textContent = "Too low! Try again.";
  } else {
    message.textContent = "Too high! Try again.";
  }
}
