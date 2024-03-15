const options = ["R", "P", "S"];
let userChoice = "";
let playAgain = true;
let userScore = 0;
let computerScore = 0;

while (playAgain) {
  const computerChoice = options[Math.floor(Math.random() * options.length)];
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
    userScore++;
    alert(
      `Your choice: ${userChoice}, Computer's choice: ${computerChoice}\nYou Win!\nScore = User: ${userScore}, Computer: ${computerScore}`
    );
  } else if (userChoice === computerChoice) {
    alert(
      `Your choice: ${userChoice}, Computer's choice: ${computerChoice}\nIt's a tie!\nScore = User: ${userScore}, Computer: ${computerScore}`
    );
  } else {
    computerScore++;
    alert(
      `Your choice: ${userChoice}, Computer's choice: ${computerChoice}\nComputer Wins!\nScore = User: ${userScore}, Computer: ${computerScore}`
    );
  }
  playAgainChoice = prompt("Would you like to play again? (Y/N)").toUpperCase();
  if (playAgainChoice === "N") {
    playAgain = false;
  }
}

alert(`FINAL SCORE\nUser: ${userScore}, Computer: ${computerScore}`);
