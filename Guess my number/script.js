"use strict";
const input = document.querySelector(".number");
const form = document.querySelector("form");
const warning = document.querySelector(".warn");
const pGuess = document.querySelector(".guess");
const rGuess = document.querySelector(".r-guess");
const newB = document.querySelector(".again");

let randomNumber = Math.floor(Math.random() * 20 + 1);
let previousGuesses = [];
let score = 10;
rGuess.textContent = score;

newB.addEventListener("click", () => {
  previousGuesses = [];
  pGuess.textContent = "";
  input.value = "";
  score = 10;
  randomNumber = Math.floor(Math.random() * 20 + 1);
  rGuess.textContent = score;
  newB.style.display = "none";
  form.style.pointerEvents = "auto";
  warning.style.color = "#fff";
  warning.textContent = "Enter number between 1 and 20!";
});

form.addEventListener("submit", function (e) {
  newB.style.display = "flex";
  e.preventDefault();
  const value = parseInt(input.value);

  if (isNaN(value)) {
    warning.style.color = "red";
    warning.textContent = "Please enter a number";
    input.value = "";
    return;
  }

  if (value < 1 || value > 20) {
    warning.style.color = "red";
    warning.textContent = "Enter number between 1 and 20!";
    input.value = "";
    return;
  }

  previousGuesses.push(value);
  pGuess.textContent = `${previousGuesses.join(", ")}`;

  if (value > randomNumber) {
    warning.style.color = "#fff";
    warning.textContent = "Your number is higher than my number";
  } else if (value < randomNumber) {
    warning.style.color = "#fff";
    warning.textContent = "Your number is lower than my number";
  } else {
    warning.style.color = "green";
    warning.textContent = "🎉 You win!!";
    form.style.pointerEvents = "none";
    return;
  }

  score--;
  rGuess.textContent = score;

  if (score === 0) {
    warning.style.color = "orange";
    warning.textContent = `You lose! The number was ${randomNumber}`;
    form.style.pointerEvents = "none";
  }

  input.value = "";
});
