const ball = document.querySelector(".game__image");
const gameWarning = document.querySelector(".game__warning");
const gameAnswer = document.querySelector(".game__answer");

const warnings = ["Wpisz pytanie", `Na końcu zdania dopisz znak '?'`];
const answers = [
  "Tak",
  "Nie",
  "Może",
  "Ciężko powiedzieć...",
  "Nie chcesz znać odpowiedzi na to pytanie... :/",
];

const ballAnimation = () => {
  ball.classList.add("shake-animation");
};

const showAnswers = (input) => {
  const answerNr = Math.floor(Math.random() * (answers.length - 1));
  gameAnswer.textContent = `Odpowiedź: ${answers[answerNr]}`;
};

const checkAnimationEnd = (input) => {
  ball.addEventListener("animationend", () => {
    ball.classList.remove("shake-animation");
    showAnswers(input);
  });
};

const checkingInput = () => {
  const gameInput = document.querySelector(".game__input").value;
  if (gameInput === "") {
    gameWarning.textContent = warnings[0];
  } else if (gameInput[gameInput.length - 1] !== "?") {
    gameWarning.textContent = warnings[1];
  } else {
    gameWarning.textContent = "";
    ballAnimation();
    checkAnimationEnd(gameInput);
  }
};

ball.addEventListener("click", checkingInput);
