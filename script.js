getComputerChoice = () => {
    let res;
    let randomNum =  Math.floor(Math.random() * 3);
    switch(randomNum){
        case 0:
            res = "rock";
            break;
        case 1:
            res = "paper";
            break;
        case 2:
            res = "scissors"
            break;
    };
    return res;
}

getHumanChoice = () => {
    let choice;
    while (true){
        choice = prompt("Please enter your choice (Rock, Paper or Scissors)\n");
        choice = choice.toLowerCase();
        if (choice == "rock" || choice == "paper" || choice == "scissors")  break; 
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;

playRound = (humanChoice, computerChoice) => {
    // 
    if (humanChoice == computerChoice) {
        return "Tie";
    }
    if (humanChoice == "rock"){
        if (computerChoice == "paper"){
            computerScore++;
            return "Paper beats Rock, Computer Wins!";
        }
        else if (computerChoice == "scissors"){
            humanScore++;
            return "Scissors beats Rock, Player Wins!";
        }
    }

    else if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            humanScore++;
            return "Paper beats Rock, Player Wins!";
        }
        else if (computerChoice == "scissors"){
            computerScore++;
            return "Scissors beats Paper, Computer Wins!";
        }
    }

    else if (humanChoice == "scissors"){
        if (computerChoice == "rock"){
            computerScore++;
            return "Rock beats Scissors, Computer Wins!";
        }
        else if (computerChoice == "paper"){
            humanScore++;
            return "Scissors beats paper, Player Wins!"
        }
    }
}

playGame = () => {
    let humanChoice;
    let computerChoice;
    for (let i = 1; i <= 5; i++){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
        console.log(`Player Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        return "Human Wins!";
    }

    else if (humanScore < computerScore){
        return "Computer Wins!"
    }

    else return "Tie"
}

console.log(playGame());