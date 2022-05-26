

const possibleChoices = document.querySelectorAll('button')
const resultDisplay = document.getElementById('result');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const userScoreDisplay = document.getElementById('userScore');
const computerScoreDisplay = document.getElementById('computerScore');
let userChoice;
let result;
let userScore = 0;
let computerScore = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerSelection = e.target.id;
  userChoiceDisplay.innerHTML = playerSelection;
  computerPlay();
  playRound();
}))


function computerPlay () {
  let choice = Math.floor(Math.random()*3)+ 1;
  
  if (choice === 1) {
    computerChoice = 'Rock';
  }
  else if (choice === 2) {
    computerChoice = 'Paper';
  }
  else if (choice === 3) {
    computerChoice = 'Scissors'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}




function playRound() {
  
  if (playerSelection === computerChoice) {
    result = 'It is a tie!';
    userScore = userScore + 0;
    computerScore = computerScore + 0;
      
  } else if ((playerSelection === 'Rock' && computerChoice === 'Paper') || 
    (playerSelection === 'Paper' && computerChoice === 'Scissors') || 
    (playerSelection === 'Scissors' && computerChoice === 'Rock')) {
    result = 'You Lose!';
    userScore = userScore + 0;
    computerScore = computerScore + 1;
    
  } else if ((playerSelection === 'Rock' && computerChoice === 'Scissors') ||
    (playerSelection === 'Paper' && computerChoice === 'Rock') || 
    (playerSelection === 'Scissors' && computerChoice === 'Paper')){
    result = 'You Win!';
    userScore += 1;
    computerScore = computerScore + 0;
  } 
  userScoreDisplay.innerHTML = userScore;
  computerScoreDisplay.innerHTML = computerScore;
  resultDisplay.innerHTML = result;
  

}

