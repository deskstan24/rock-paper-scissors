let humanScore = 0;

let computerScore = 0;

let computerOptions = ["rock", "paper", "scissors"];

//Function to get computer's choice
function getComputerChoice() {
  //randomly generate computer's choice
  let computerNumber = Math.floor(Math.random() * 3);
  let computerGameOption = computerOptions[computerNumber];
  return computerGameOption;
}

//Function to get human's choice
function getHumanChoice() {
  let choice = prompt("Rock Paper Scissors").toLowerCase();
  if (choice == "rock" || choice == "paper" || choice == "scissors") {
    return choice;
  } else {
    console.log("invalid response");
  }
}

function playRound(computerChoice, humanChoice) {
  //The logic behind the rock, paper, scissors game.
  if (computerChoice === humanChoice) {
    console.log("It's a draw!");
  } else if (computerChoice == "rock" && humanChoice == "paper") {
    console.log("You Win!");
    console.log("You get " + ++humanScore + " points");
  } else if (computerChoice == "paper" && humanChoice == "scissors") {
    console.log("You Win!");
    console.log("You get " + ++humanScore + " points");
  } else if (computerChoice == "scissors" && humanChoice == "rock") {
    console.log("You Win!");
    console.log("You get " + ++humanScore + " points");
  } else if (computerChoice == "rock" && humanChoice == "scissors") {
    console.log("You Lose!");
    console.log("Computer gets " + `${++computerScore}` + " points");
  } else if (computerChoice == "paper" && humanChoice == "rock") {
    console.log("You Lose!");
    console.log("Computer gets " + `${++computerScore}` + " points");
  } else if (computerChoice == "scissors" && humanChoice == "paper") {
    console.log("You Lose!");
    console.log("Computer gets " + `${++computerScore}` + " points");
  }
}

//Function for making the entire game work
function playGame() {
  let numberOfGames = 1;
  do {
    // Generate new selections for each round
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();

    // Play a single round
    playRound(computerSelection, humanSelection);

    // Increment the game counter
    numberOfGames++;
  } while (numberOfGames <= 5);

  console.log("\n--- Game Over ---");
  //Code for displaying the final scores
  console.log(`Final Scores: You: ${humanScore}, Computer: ${computerScore}`);

  //Condition for Selecting the overall winner of the game
  if (humanScore > computerScore) {
    console.log("Congratulations! You are the overall winner!");
  } else if (humanScore < computerScore) {
    console.log("The computer wins! Better luck next time.");
  } else {
    console.log("It's a tie!");
  }
}
playGame();
