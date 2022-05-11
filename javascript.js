//function computerPlay. Takes number 1, 2 or 3 randomly and returns
//rock, papers or scissors depending on the number's value.



function computerPlay () {
  let randomNumber = Math.floor(Math.random()*(3)+1);
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

let playerCounter = 0;
let computerCounter = 0;

function playRound(player,computer) {
  let tieMessage = "It is a tie";
  let computerWinMessage = `You lose! ${computer} beats ${player}`;
  let playerWinMessage = `You win! ${player} beats ${computer}`;
  
  if (player == computer) {
    playerCounter;
    computerCounter;
    
    return (tieMessage) + (" | Player: " + playerCounter + "; Computer: " + computerCounter);
   
    
  } else if ((player == "rock" && computer == "paper") || 
    (player == "paper" && computer == "scissors") || 
    (player == "scissors" && computer == "rock")) {
    playerCounter;
    computerCounter += 1;
    return (computerWinMessage) + (" | Player: " + playerCounter + "; Computer: " + computerCounter);
    
    
  } else if ((player == "rock" && computer == "scissors") ||
    (player == "paper" && computer == "rock") || 
    (player == "scissors" && computer == "paper")){
    playerCounter += 1;
    computerCounter;
    return (playerWinMessage) + (" | Player: " + playerCounter + "; Computer: " + computerCounter);   
  }
  

}



// Function game(). To play rock, paper, scissors game with computer five times
// Returns winner and score of both, the player and the computer


function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt ("Rock, Paper or Scissors?", "your choice").toLowerCase();
    let computerSelection = computerPlay();
    console.log("Round: " + (i + 1) + " Your Choice : " + playerSelection + " | " + 
    "Computer's Choice : " + computerSelection);
    console.log(playRound(playerSelection,computerSelection));
    
  
  }
  //add if block with counter section indicating the winner
  
  
  if (playerCounter > computerCounter) {
    console.log("\nFinal Result: Player wins!");
  } else if (playerCounter == computerCounter) {
    console.log("\nFinal Result: It is a tie");
  } else {
    console.log("\nFinal Result: Computer Wins!");
  }
}

game();

