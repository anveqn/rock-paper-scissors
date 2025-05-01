let getComputerChoice = () => {
    let randomChoice = Math.floor(Math.random() * 3);
    let finalChoice;
    switch (randomChoice) {
        case 0:
            finalChoice = "rock";
            break;
        case 1:
            finalChoice = "paper";
            break;
        case 2:
            finalChoice = "scissors";
            break;         
    }
    return finalChoice;
};

let humanScore = 0;
let computerScore = 0;
    
let playRound = (humanChoice, computerChoice) => {
        switch (humanChoice){
            case "rock":
                if (computerChoice==="scissors"){
                    console.log("You win! Rock beats Scissors");
                    humanScore++;
                } else if (computerChoice==="paper"){
                    console.log("You lose, Paper beats Rock");
                    computerScore++;
                }else {
                    console.log("It's a draw! No points gained.")
                };
                break;
            case "paper":
                if (computerChoice==="rock"){
                    console.log("You win! Paper beats Rock");
                    humanScore++;
                } else if (computerChoice==="scissors"){
                    console.log("You lose, Scissors beat Paper");
                    computerScore++;
                }else {
                    console.log("It's a draw! No points gained.")
                };
                break;
            case "scissors":
                if (computerChoice==="paper"){
                    console.log("You win! Scissors beat Paper");
                    humanScore++;
                } else if (computerChoice==="rock"){
                    console.log("You lose, Rock beats Scissors");
                    computerScore++;
                }else {
                    console.log("It's a draw! No points gained.")
                };
                break;
        }
};

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {playRound("rock", getComputerChoice());});
paper.addEventListener("click", () => {playRound("paper", getComputerChoice());});
scissors.addEventListener("click", () => {playRound("scissors", getComputerChoice());});