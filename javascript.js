//function computerPlay. Takes number 1, 2 or 3 randomly and returns
//rock, papers or scissors depending on the number's value.


let randomNumber = Math.floor(Math.random()*(3)+1);

function computerPlay () {
  switch (randomNumber) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;    
  }
}


//Function playRound(). It takes two parameters (playerSelection and computerSelection)
//and then returns a string declaring the winner of the round.



function playRound(player,computer) {
  let tie = "It is a tie";
  let computerWin = `You lose! ${computer} beats ${player}`;
  let playerWin = `You win! ${player} beats ${computer}`;
  if (player == computer) {
    return tie;
  } else if ((player == "rock" && computer == "paper") || 
    (player == "paper" && computer == "scissors") || 
    (player == "scissors" && computer == "rock")) {
    return computerWin;
  } else if ((player == "rock" && computer == "scissors") ||
    (player == "paper" && computer == "rock") || 
    (player == "scissors" && computer == "paper")){
    return playerWin;
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log("playerSelection : " + playerSelection);
console.log("computerSelection : " + computerSelection);
console.log(playRound(playerSelection,computerSelection));