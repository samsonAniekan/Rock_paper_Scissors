let humanScore = 0;
let computerScore = 0;

function getComputeValues() {
  const values = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * values.length);
  return values[index];
}

console.log(`this is what computer choose: ${getComputeValues()}`);
console.log("------------------ WE GAME ON -------------------");

function getHumanChoice() {
  const choice = prompt("Enter rock, paper, or scissors");
  if (!choice) return null;

  const formattedChoice = choice.toLowerCase();
  if (!["rock", "paper", "scissors"].includes(formattedChoice)) {
    alert("invalid entry!");
    return null;
  }

  return formattedChoice;
}

// getHumanChoice();

function playgRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("its a Tie");
    return `Human score: ${humanScore} computer Score: ${computerScore}`;
  }
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("human wins!");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("human wins!");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("human wins!");
    humanScore++;
  } else {
    console.log("computer wins");
    computerScore++;
  }
  return `human score: ${humanScore} computer score: ${computerScore}`;
}

function playGame() {
  humanScore = 0;
  computerScore = 0;
  for (let i = 0; i <= 5; i++) {
    console.log(`---------Round${i}begins---------`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputeValues();

    console.log(
      `Human choose:${humanSelection}, Computer Choose: ${computerSelection}`,
    );

    console.log(playgRound(humanSelection, computerSelection));
  }

  console.log("==== final Results ====");
  console.log(`Human: ${humanScore}`);
  console.log(`Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("🏆Human wins the Game");
  } else if (computerScore > humanScore) {
    console.log("💻computer wins the Game");
  } else {
    console.log("🤝its a tie game");
  }
}
playGame();
