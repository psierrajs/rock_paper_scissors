/*let computerChoice = 0;*/


/*Function computerPlay returns randomly "rock!", "paper!" and "scissors!"
strings.
Uses a random number between 0 and 3 generated with
Math.floor() and Math.random() functions.
According to the value of randomNumber (above) computerChoice returns one
of the three strings*/

function computerPlay() {
  let randomNumber = (Math.floor(Math.random() * 3));
  switch (randomNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

/*const computerSelection = computerPlay().toLowerCase();*/


/*Defining parameter with player selection. toLowerCase() makes it
case insensitive*/

/*let playerSelection = window.prompt("Choose Rock, Paper or Scissors :");
playerSelection = playerSelection.toLowerCase();*/




/*Function playRound below
takes imput from user and compares it width
randomly generated choice by computer
Returns result with strings*/

let playerWinCounter = 0;

function playRound(playerSelection,computerSelection) {

  let message = "";


  if ((playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "rock")) {
        playerWinCounter += 1;
        message = "You won! " + playerSelection + " beats " + computerSelection
        + " You won " + playerWinCounter + " times out of five.";
        return message;
      } else if ((playerSelection == "rock" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "rock")) {
        message = "You Lost! " + computerSelection + " beats " + playerSelection
        + " You won " + playerWinCounter + " times out of five.";
        return message;
      } else if (playerSelection == computerSelection) {
        message = "It is a tie!";
        return message;
      }
}

function Game() {
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Rock, Paper or Scissors?");
    playerChoice = playerChoice.toLowerCase();
    let computerChoice = computerPlay().toLowerCase();
    console.log(playRound(playerChoice, computerChoice));
  }
  if (playerWinCounter >= 3) {
    console.log("You won " + playerWinCounter + " times out of five");

  } else {
    console.log("Sorry, you  lost " + (5 - playerWinCounter) + " times");

  }
}

Game();
