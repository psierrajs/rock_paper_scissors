//function computerPlay. Takes number 1, 2 or 3 randomly and returns
//rock, papers or scissors depending on the number's value.

const possibleChoices = document.querySelectorAll('button')
const resultDisplay = document.getElementById('result');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');

let userChoice;
let result;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerSelection = e.target.id;
  userChoiceDisplay.innerHTML = playerSelection;
  computerPlay();
  playRound();
}))


function computerPlay () {
  let randomNumber = Math.floor(Math.random()*(3)+1);
  switch (randomNumber) {
    case 1:
      computerChoice = 'Rock';
      break;
    case 2:
      computerChoice = 'Paper';
      break;
    case 3:
      computerChoice = 'Scissors';
      break;    
  }
  computerChoiceDisplay.innerHTML = computerChoice
}


//Function playRound(). It takes two parameters (playerSelection and computerSelection)
//and then returns a string declaring the winner of the round.

// let playerCounter = 0;
// let computerCounter = 0;

function playRound() {
  
  if (playerSelection == computerChoice) {
    result = 'It is a tie!';
      
  } else if ((playerSelection == 'Rock' && computerChoice == 'Paper') || 
    (playerSelection == 'Paper' && computerChoice == 'Scissors') || 
    (playerSelection == 'Scissors' && computerChoice == 'Rock')) {
    result = 'You Lose!';
    
  } else if ((playerSelection == 'Rock' && computerChoice == 'Scissors') ||
    (playerSelection == 'Paper' && computerChoice == 'Rock') || 
    (playerSelection == 'Scissors' && computerChoice == 'Paper')){
      
  } resultDisplay.innerHTML = result;
  

}



// Function game(). To play rock, paper, scissors game with computer n times
// Returns winner and score of both, the player and the computer

// n in game(n) refers to number of times to play the game
// function game(n) {
//   for (let i = 0; i < n; i++) {
//     // let playerSelection = prompt ("Rock, Paper or Scissors?", "your choice").toLowerCase();
//     let computerSelection = computerPlay();
//     console.log("Round: " + (i + 1) + " Your Choice : " + playerSelection + " | " + 
//     "Computer's Choice : " + computerSelection);
//     console.log(playRound(playerSelection,computerSelection));
    
  
//   }

  //add if block with counter section indicating the winner
  
  
//   if (playerCounter > computerCounter) {
//     console.log("\nFinal Result: Player wins!");
//   } else if (playerCounter == computerCounter) {
//     console.log("\nFinal Result: It is a tie");
//   } else {
//     console.log("\nFinal Result: Computer Wins!");
//   }
// }

// bottons below



// Rock.addEventListener("click",function(e) {
//   playRound("rock", computerPlay());
//   console.log("Rock has been chosen");
// });
// paperBtn.addEventListener("click", function(e) {
//   playRound("paper", computerPlay());
//   console.log("You have chosen 'paper'");
// });
// scissorsBtn.addEventListener("click", function(e) {
//   playRound("scissors", computerPlay());
//   console.log("You have chosen 'scissors'");
// });

