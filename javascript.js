/*let computerChoice = 0;*/


/*Function computerChoice returns randomly "rock!", "paper!" and "scissors!"
strings.
Uses a random number between 0 and 3 generated with
Math.floor() and Math.random() functions.
According to the value of randomNumber (above) computerChoice returns one
of the three strings*/

function computerChoice() {
  let randomNumber = (Math.floor(Math.random() * 3));
  switch (randomNumber) {
    case 0:
      return "Rock!"
    case 1:
      return "Paper!"
    case 2:
      return "Scissors"
  }
}

const computerPlay = computerChoice();
console.log(computerPlay);
