document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("rock").addEventListener('click', () => playGame(rockChoice(), computerChoice()));
  document.getElementById("paper").addEventListener('click', () => playGame(paperChoice(), computerChoice()));
  document.getElementById("scissors").addEventListener('click', () => playGame(scissorsChoice(), computerChoice()));
});


let computerScore = 0;
let playerScore = 0;

function playGame(player, computer) {
  limit = 5;

  for(let i=0; i < limit; i++) {
    if(player === "rock" && computer === "rock"){
      let s = document.getElementById("win")
      s.textContent = "It is a tie";
      break;
      
    } else if(player === "rock" && computer === "scissors") {
      let s = document.getElementById("win")
      playerScore++;
      document.getElementById("playerscore").innerHTML = playerScore;
      s.textContent = "You won";
      console.log(playerScore);
      break;
      
    } else if(player === "scissors" && computer === "paper") {
      playerScore++;
      document.getElementById("playerscore").innerHTML = playerScore;
      let s = document.getElementById("win")
      s.textContent = "You won";
      console.log(playerScore);
      break;
    } else if(player === "paper" && computer === "rock") {
      playerScore++;
      document.getElementById("playerscore").innerHTML = playerScore;
      let s = document.getElementById("win")
      s.textContent = "You won";
      console.log(playerScore);
      break;
    } else {
      let s = document.getElementById("win")
      s.textContent = "You Lost";
      computerScore++;
      document.getElementById("computerscore").innerHTML = computerScore;
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

function res() {
  return "LLL"
};