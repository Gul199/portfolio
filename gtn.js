let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");

guessBtn.addEventListener("click", () => {
  const guess = Number(guessInput.value);
  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = "Please enter a number between 1 and 100.";
    attempts--;
    return;
  }

  if (guess === secretNumber) {
    feedback.textContent = `🎉 Congratulations! You guessed it right in ${attempts} attempt${
      attempts > 1 ? "s" : ""
    }.`;
    guessBtn.disabled = true;
    guessInput.disabled = true;
    restartBtn.style.display = "inline-block";
  } else if (guess < secretNumber) {
    feedback.textContent = "Try a higher number!";
  } else {
    feedback.textContent = "Try a lower number!";
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  guessInput.value = "";
  guessInput.focus();
});

restartBtn.addEventListener("click", () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  feedback.textContent = "";
  attemptsDisplay.textContent = "";
  guessBtn.disabled = false;
  guessInput.disabled = false;
  guessInput.value = "";
  restartBtn.style.display = "none";
  guessInput.focus();
});
