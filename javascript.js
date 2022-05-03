/*let computerChoice = 0;*/
let randomNumber = (Math.floor(Math.random() * 9));

/*Function computerChoice returns randomly "rock!", "paper!" and "scissors!"
strings.
Uses a random number between 0 and 9 generated with
Math.floor() and Math.random() functions.
According to the value of randomNumber (above) computerChoice returns one
of the three strings*/

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
