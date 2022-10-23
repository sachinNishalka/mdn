const userInput = document.querySelector("input");
const numberOfGuesses = document.querySelector(".numberOfGuesses");
const lastGuess = document.querySelector(".lastGuess");
const highOrLow = document.querySelector(".highOrLow");
const button = document.querySelector("button");
const winOrLoose = document.querySelector(".winOrLoose");
const retry = document.querySelector("#retry");
let randomNumber = 45;
button.addEventListener("click", checkNumber);
let numberOfTurns = 1;

function checkNumber() {
  if (numberOfTurns <= 5 && Number(userInput.value) === randomNumber) {
    winOrLoose.textContent = "You Won!!!";
    winOrLoose.style.background = "green";
    winOrLoose.style.color = "while";
    gameOver();
  } else if (numberOfTurns <= 5 && Number(userInput.value) !== randomNumber) {
    if (userInput.value < randomNumber) {
      lastGuess.textContent += `${userInput.value} `;
      numberOfGuesses.textContent = `${5 - numberOfTurns}`;
      numberOfTurns++;
      highOrLow.textContent += "Low ";

      winOrLoose.textContent = "Try Again!!!";
      winOrLoose.style.background = "yellow";
      winOrLoose.style.color = "while";
    } else {
      lastGuess.textContent += `${userInput.value} `;
      numberOfGuesses.textContent = `${5 - numberOfTurns}`;
      numberOfTurns++;
      highOrLow.textContent += "High ";

      winOrLoose.textContent = "Try Again!!!";
      winOrLoose.style.background = "yellow";
      winOrLoose.style.color = "while";
    }
  } else {
    winOrLoose.textContent = "You Loose!!!";
    winOrLoose.style.background = "Red";
    winOrLoose.style.color = "while";
    gameOver();
    displayButton2();
  }
  userInput.value = " ";
}

function gameOver() {
  userInput.disabled = true;
  button.disabled = true;
  retry.disabled = false;
}

retry.addEventListener("click", retFun);

function retFun() {
  userInput.disabled = false;
  button.disabled = false;
  retry.disabled = true;
  numberOfTurns = 1;
  numberOfGuesses.textContent = "";
  numberOfGuesses.textContent = `${5 - numberOfTurns}`;
  lastGuess.textContent = " ";
  winOrLoose.textContent = " ";
  winOrLoose.background = " ";
  winOrLoose.style.color = " ";
}
