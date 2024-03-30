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

let computerScore = 0;
let playerScore = 0;
const pscore = document.querySelector(".playerScore");
pscore.textContent = "Player: "+playerScore;
const cscore = document.querySelector(".computerScore");
cscore.textContent = "Computer: "+computerScore;

function playGame(e){

    if(playerScore==5 || computerScore==5) return;

    const ychoice = document.querySelector(".yc");
    const cchoice = document.querySelector(".cc");
    const winMessage = document.querySelector(".winner");

    let playerSelection = e.target.className ;
    if(playerSelection==="choice") return;
    let computerSelection = getComputerChoice();

    ychoice.textContent = "You chose: "+playerSelection.toUpperCase();
    cchoice.textContent = "Computer chose: "+computerSelection.toUpperCase();

    let winner = result(playerSelection, computerSelection);
    if(winner.includes("Win")) playerScore++ ;
    else if(winner.includes("Lose")) computerScore++;

    pscore.textContent = "Player: "+playerScore;
    cscore.textContent = "Computer: "+computerScore;
        
    if(playerScore==5) winMessage.textContent = "Game over! You win!!";
    else if(computerScore==5) winMessage.textContent = "Game over! You loose!!";
    else winMessage.textContent = winner;
}

const player = document.querySelector(".choice");
player.addEventListener("click",playGame);