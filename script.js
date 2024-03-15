const options = ["R", "P", "S"];
const computerChoice = options[Math.floor(Math.random() * options.length)];
let userChoice = "";
let playAgain = true;

while (playAgain) {
  let validChoice = false;
  while (!validChoice) {
    userChoice = prompt(
      "Choose rock (R), paper (P), or scissors (S)"
    ).toUpperCase();

    validChoice = options.includes(userChoice);

    if (!validChoice) {
      alert("Invalid choice");
    }
  }

  if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
  ) {
    alert(
      `Your choice: ${userChoice}, Computer's choice: ${computerChoice}, You Win!`
    );
  } else if (userChoice === computerChoice) {
    alert(
      `Your choice: ${userChoice}, Computer's choice: ${computerChoice}, It's a tie!`
    );
  } else {
    alert(
      `Your choice: ${userChoice}, Computer's choice: ${computerChoice}, Computer Wins!`
    );
  }
  playAgainChoice = prompt("Would you like to play again? (Y/N)").toUpperCase();
  if (playAgainChoice === "N") {
    playAgain = false;
  }
}
