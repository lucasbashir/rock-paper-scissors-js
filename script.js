document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("rock").addEventListener('click', () => playGame(rockChoice(), computerChoice()));
  document.getElementById("paper").addEventListener('click', () => playGame(paperChoice(), computerChoice()));
  document.getElementById("scissors").addEventListener('click', () => playGame(scissorsChoice(), computerChoice()));
  document.getElementById("reset").addEventListener('click', reset);
});




function reset() {
  // Reset the scores to 0
  playerScore = 0;
  computerScore = 0;
  tie = 0;
  count = 0;

  document.getElementById("playerscore").innerHTML = `Player Score: ${playerScore}`;
  document.getElementById("computerscore").innerHTML = `Computer Score: ${computerScore}`;
  document.getElementById("win").textContent = "Winner: ";
  document.getElementById("player").textContent = "You Chose: ";
  document.getElementById("computer").textContent = "Computer Chose: ";
  document.getElementById("tie").innerHTML = `Tie: ${tie}`;

  //show game buttons
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;

  // Hide the "Reset" button
  document.getElementById("reset").style.display = "none";
}


let computerScore = 0;
let playerScore = 0;
let tie = 0;
let count = 0;

function playGame(player, computer) {
  limit = 5;


  for(let i=0; i < limit; i++) {
    count++;
    if(count < limit) {
      document.getElementById("reset").style.display = 'none';
    } else if(count === limit) {
      document.getElementById("rock").disabled = true;
      document.getElementById("paper").disabled = true;
      document.getElementById("scissors").disabled = true;
      document.getElementById("reset").style.display = 'block';
    }

    if(count === limit && playerScore > computerScore) {
      document.getElementById("win").innerHTML = "Winner: Player";
    }
    if(count === limit && playerScore < computerScore) {
      document.getElementById("win").innerHTML = "Winner: Computer";
    }
    if((count === limit && playerScore === computerScore) || (playerScore === tie && playerScore != computerScore)){
      document.getElementById.innerHTML = "It is a tie!"
    }


    if(player === "rock" && computer === "rock"){
      tie++;
      document.getElementById("tie").innerHTML = `Tie Count: ${tie}`;
      break;

    } else if(player === "rock" && computer === "scissors" || player === "scissors" && computer === "paper"
    || player === "paper" && computer === "rock") {
      playerScore++;
      document.getElementById("playerscore").innerHTML = `Player Score: ${playerScore}`;
      break;

    } else {
      computerScore++;
      document.getElementById("computerscore").innerHTML = `Computer Score: ${computerScore}`;
      console.log(computerScore)
      break;
    }
  }

}



function computerChoice() {
  let options = ["rock", "paper", "scissors"];
  let rand = Math.floor(Math.random() * options.length);
  document.getElementById("computer").textContent = `Computer Chose: ${options[rand]}`
  console.log(options[rand])

  return options[rand];
};

function rockChoice() {
  const rock = "rock"
  let y = document.getElementById("player").textContent = "You Chose: rock";
  console.log(rock)
  return rock;
}

function paperChoice() {
  const paper = "paper"
  document.getElementById("player").textContent = "You Chose: paper";
  console.log(paper)
  return paper;
}

function scissorsChoice() {
  const scissors = "scissors"
  document.getElementById("playerchoice").textContent = "You Chose: Scissors";
  console.log(scissors)
  return scissors;
}

