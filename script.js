function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if(choice === 0) return "rock";
    else if(choice === 1) return "paper";
    return "scissors";
}
function result(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection) return "It's a tie";
    if(playerSelection === "rock"){
        if(computerSelection === "paper") return "You Lose! Paper beats Rock";
        else return "You Win! Rock beats Scissors";
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "scissors") return "You Lose! Scissors beat Paper";
        else return "You Win! Paper beats Rock";
    }
    else{
        if(computerSelection === "rock") return "You Lose! Rock beats Scissors";
        else return "You Win! Scissors beat Paper";
    }
}
