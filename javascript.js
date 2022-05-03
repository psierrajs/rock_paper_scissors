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
      return "Rock!"
    case 1:
      return "Paper!"
    case 2:
      return "Scissors"
  }
}

const computerDecision = computerPlay();
console.log(computerDecision);
