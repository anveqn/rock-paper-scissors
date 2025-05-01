const cpuResult = document.querySelector("#cpu-choice");

let getComputerChoice = () => {
    let randomChoice = Math.floor(Math.random() * 3);
    let finalChoice;
    switch (randomChoice) {
        case 0:
            finalChoice = "rock";
            cpuResult.textContent = "CPU chose Rock";
            break;
        case 1:
            finalChoice = "paper";
            cpuResult.textContent = "CPU chose Paper";
            break;
        case 2:
            finalChoice = "scissors";
            cpuResult.textContent = "CPU chose Scissors";
            break;         
    }
    return finalChoice;
};

const roundResult = document.querySelector("#round-result");

let humanScore = 0;
let computerScore = 0;
    
let playRound = (humanChoice, computerChoice) => {
        switch (humanChoice){
            case "rock":
                if (computerChoice==="scissors"){
                    roundResult.textContent = "You win! Rock beats Scissors";
                    humanScore++;
                } else if (computerChoice==="paper"){
                    roundResult.textContent = "You lose, Paper beats Rock";
                    computerScore++;
                }else {
                    roundResult.textContent = "It's a draw! No points gained.";
                };
                break;
            case "paper":
                if (computerChoice==="rock"){
                    roundResult.textContent = "You win! Paper beats Rock";
                    humanScore++;
                } else if (computerChoice==="scissors"){
                    roundResult.textContent = "You lose, Scissors beat Paper";
                    computerScore++;
                }else {
                    roundResult.textContent = "It's a draw! No points gained.";
                };
                break;
            case "scissors":
                if (computerChoice==="paper"){
                    roundResult.textContent = "You win! Scissors beat Paper";
                    humanScore++;
                } else if (computerChoice==="rock"){
                    roundResult.textContent = "You lose, Rock beats Scissors";
                    computerScore++;
                }else {
                    roundResult.textContent = "It's a draw! No points gained.";
                };
                break;
        }
};

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const buttons = document.querySelectorAll("button");
const score = document.querySelector("#score");

const scoreMessage = () => {
    score.textContent = `Total score YOU ${humanScore} - ${computerScore} CPU`;
};


rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    scoreMessage();
});
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    scoreMessage();
});
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    scoreMessage();
});
