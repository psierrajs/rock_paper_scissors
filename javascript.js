/*let computerChoice = 0;*/
let randomNumber = (Math.floor(Math.random() * 9));

function computerChoice() {
  if (randomNumber <= 2) {
    console.log("Rock!");
  } else if (randomNumber >= 6) {
    console.log("Paper!");
  } else {
    console.log("Scissors!")
  }
}

computerChoice();
