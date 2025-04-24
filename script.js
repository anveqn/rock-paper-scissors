let getComputerChoice = () => {
    let randomChoice = Math.floor(Math.random() * 3);
    let finalChoice;
    switch (randomChoice) {
        case 0:
            finalChoice = "Rock";
            break;
        case 1:
            finalChoice = "Paper";
            break;
        case 2:
            finalChoice = "Scissors";
            break;         
    }
    return finalChoice;
};

let getHumanChoice = () => {
    let human = prompt("Make your choice.").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;