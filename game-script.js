const myArray = ["rock", "paper", "scissor"];


function computerPlay(){
return myArray[Math.floor(Math.random()*myArray.length)];
}


let computerChoice = computerPlay();
let playerChoice = "scissor";


function playRound(playerChoice, computerChoice){
    computerChoice = computerPlay().toLowerCase();
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == computerChoice){
    result = "It's a tie, play again";
        playerScore++
    } else if (playerChoice == "rock" && computerChoice == "scissor"){
        result = ("You win " + playerChoice + " beats " + computerChoice);
        playerScore++
    } else if (playerChoice == "scissor" && computerChoice == "paper"){
        result = ("You win " + playerChoice + " beats " + computerChoice)
        playerScore++
    } else if (playerChoice == "paper" && computerChoice == "rock"){
        result = ("You win " + playerChoice + " beats " + computerChoice);
        playerScore++
    } else {result = "You lost because " + computerChoice + " beats " + playerChoice
        computerScore++}

    console.log(result, "\ncomputer score: " + computerScore, "\nplayer score: " + playerScore);
}


//console.log(playRound(playerChoice, computerChoice));

let playerScore = 0;
let computerScore = 0;

function game(){
for (let i = 0; i < 5; i++){
    console.log(playRound(playerChoice, computerChoice));
}
}

console.log(game());