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
      return "Rock"
    case 1:
      return "Paper"
    case 2:
      return "Scissors"
  }
}
const computerSelection = computerPlay().toLowerCase();
console.log(computerSelection);

/*Defining parameter with player selection. toLowerCase() makes it
case insensitive*/

let playerSelection = window.prompt("Choose Rock, Paper or Scissors :");
playerSelection = playerSelection.toLowerCase();

console.log(playerSelection);


/*Function playRound below*/

function playRound(playerSelection,computerSelection) {
  if (computerSelection == playerSelection) {
    return "There is a tie!";
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    return "You Won! Paper! beats rock!"
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    return "You Lost! Rock beats Scissors"
  } else if (computerSelection == "paper" && playerSelection == "scissors") {
    return "You won! Scissorts beat paper"
  } else if (computerScience == "paper" && playerSelection == "rock") {
    return "You lost! Paper beats rock"
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    return "You lost! Scissors beat paper"
  } else if (computerSelection == "scissort" && playerSelection == "rock") {
    return "You won! Rock bears Scissors"
  }

}

console.log(playRound(playerSelection,computerSelection));
