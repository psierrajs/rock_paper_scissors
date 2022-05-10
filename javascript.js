//function computerPlay. Takes number 1, 2 or 3 randomly and returns
//rock, papers or scissors depending on the number's value.


let randomNumber = Math.floor(Math.random()*(3)+1);
function computerPlay () {
  switch (randomNumber) {
    case 1:
      return ("Rock");
      break;
    case 2:
      return ("Paper");
      break;
    case 3:
      return ("Scissors");
      break;
      
  }
  
}
let computerSelection = computerPlay();
console.log(computerSelection);
