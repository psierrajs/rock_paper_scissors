

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
  let choice = Math.floor(Math.random()*3)+ 1;
  
  if (choice === 1) {
    computerChoice = 'Rock';
  }
  if (choice === 2) {
    computerChoice = 'Paper';
  }
  if (choice === 3) {
    computerChoice = 'Scissors'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}




function playRound() {
  
  if (playerSelection === computerChoice) {
    result = 'It is a tie!';
      
  } else if ((playerSelection === 'Rock' && computerChoice === 'Paper') || 
    (playerSelection === 'Paper' && computerChoice === 'Scissors') || 
    (playerSelection === 'Scissors' && computerChoice === 'Rock')) {
    result = 'You Lose!';
    
  } else if ((playerSelection === 'Rock' && computerChoice === 'Scissors') ||
    (playerSelection === 'Paper' && computerChoice === 'Rock') || 
    (playerSelection === 'Scissors' && computerChoice === 'Paper')){
      
  } 
  resultDisplay.innerHTML = result;
  

}

