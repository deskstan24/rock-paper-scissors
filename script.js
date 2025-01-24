"use strict";

let divResult = document.querySelector(".result");
let resultText = document.querySelector(".result-text");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

let humanScore = 0;
let computerScore = 0;
let gameOver = false; //To teack if the game is over
let computerOptions = ["rock", "paper", "scissors"];

//Function to get computer's choice
function getComputerChoice() {
  //randomly generate computer's choice
  let computerNumber = Math.floor(Math.random() * 3);
  let computerGameOption = computerOptions[computerNumber];
  return computerGameOption;
}

//Function to play a single round
function playRound(computerChoice, humanChoice) {
  //The logic behind the rock, paper, scissors game.
  if (gameOver) return;
  if (computerChoice === humanChoice) {
    resultText.textContent = `It's a draw, you both chose ${humanChoice}`;
  } else if (
    (computerChoice == "rock" && humanChoice == "paper") ||
    (computerChoice == "paper" && humanChoice == "scissors") ||
    (computerChoice == "scissors" && humanChoice == "rock")
  ) {
    humanScore++;
    resultText.textContent = `You Win this round ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultText.textContent = `You lose this round ${computerChoice} beats ${humanChoice}`;
  }

  updateScore();
  checkWinner();
}

//Function to Update Scores
function updateScore() {
  divResult.innerHTML = `Your Score: ${humanScore} <br> Computer's Score: ${computerScore}`;
}

//Function to check for a winner
function checkWinner() {
  if (humanScore === 5) {
    resultText.textContent = "Congratulations! You Won the GAME!";
    gameOver = true;
  } else if (computerScore === 5) {
    resultText.textContent = "The Computer Wins. Better Luck next TIme";
    gameOver = true;
  }
}

//Event Listeners for Human's Choice
rock.addEventListener("click", (e) => {
  if (!gameOver) {
    let humanChoice = e.target.textContent.toLowerCase();
    playRound(getComputerChoice(), humanChoice);
  }
});
paper.addEventListener("click", (e) => {
  if (!gameOver) {
    let humanChoice = e.target.textContent.toLowerCase();
    playRound(getComputerChoice(), humanChoice);
  }
});
scissors.addEventListener("click", (e) => {
  if (!gameOver) {
    let humanChoice = e.target.textContent.toLowerCase();
    playRound(getComputerChoice(), humanChoice);
  }
});
