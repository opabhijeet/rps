function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if(choice === 0) return "rock";
    else if(choice === 1) return "paper";
    return "scissors";
}
function result(playerSelection, computerSelection){
    if(playerSelection === computerSelection) return "It's a tie";
    if(playerSelection === "rock"){
        if(computerSelection === "paper") return "You Lose! Paper beats Rock";
        else return "You Win! Rock beats Scissors";
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "scissors") return "You Lose! Scissors beat Paper";
        else return "You Win! Paper beats Rock";
    }
    else if(playerSelection === "scissors"){
        if(computerSelection === "rock") return "You Lose! Rock beats Scissors";
        else return "You Win! Scissors beat Paper";
    }
    else{
        console.log("Invalid choice. Try again.");
        playerSelection = prompt("Enter your choice").toLowerCase();
        return result(playerSelection, computerSelection);
    }
}

function playGame(){
    let computerScore = 0;
    let playerScore = 0;
    for(let i=1;i<=3;i++){
        let playerSelection = prompt("Enter your choice").toLowerCase();
        let computerSelection = getComputerChoice();
        let winner = result(playerSelection, computerSelection);
        if(winner.includes("Win")) playerScore++ ;
        else if(winner.includes("Lose")) computerScore++;
        console.log(winner);
    }
    if(playerScore < computerScore) console.log("You Lose!");
    else if(playerScore > computerScore) console.log("You Win!")
    else console.log("Tie!");

    console.log(`Score: ${playerScore} - ${computerScore}`);
}

playGame();