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

const humanWon = () => {
    cpuResult.textContent = "GAME IS OVER!";
    roundResult.textContent = "YOU WON!";
    score.textContent = `Final score: YOU ${humanScore} - ${computerScore} CPU`;
    humanScore = 0;
    computerScore = 0;
}

const cpuWon = () => {
    cpuResult.textContent = "GAME IS OVER!";
    roundResult.textContent = "YOU LOST...";
    score.textContent = `Final score: YOU ${humanScore} - ${computerScore} CPU`;
    humanScore = 0;
    computerScore = 0;
}

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    if(humanScore===5){
        humanWon();
    } else if(computerScore===5){
        cpuWon();
    } else {
        scoreMessage();
    };
});
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    if(humanScore===5){
        humanWon();
    } else if(computerScore===5){
        cpuWon();
    } else {
        scoreMessage();
    };
});
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    if(humanScore===5){
        humanWon();
    } else if(computerScore===5){
        cpuWon();
    } else {
        scoreMessage();
    };
});