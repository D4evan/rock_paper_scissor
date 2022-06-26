const myArray = ["rock", "paper", "scissor"];


function computerPlay(){
return myArray[Math.floor(Math.random()*myArray.length)];
}


let computerChoice = computerPlay();
let playerChoice //= prompt("Rock, Paper or scissor?");


function playRound(playerChoice, computerChoice){
    computerChoice = computerPlay().toLowerCase();
    playerChoice = prompt("Rock, Paper or scissor?").toLowerCase();
    if (playerChoice == computerChoice){
    result = "It's a tie, play again";
    } else if (playerChoice == "rock" && computerChoice == "scissor"){
        result = ("You win " + playerChoice + " beats " + computerChoice);
        playerScore++
    } else if (playerChoice == "scissor" && computerChoice == "paper"){
        result = ("You win " + playerChoice + " beats " + computerChoice)
        playerScore++
    } else if (playerChoice == "paper" && computerChoice == "rock"){
        result = ("You win " + playerChoice + " beats " + computerChoice);
        playerScore++
    } else if (
        (computerChoice === 'rock' && playerChoice === 'scissor') ||
        (computerChoice === 'scissor' && playerChoice === 'paper') ||
        (computerChoice === 'paper' && playerChoice === 'rock')
    ){result = "You lost because " + computerChoice + " beats " + playerChoice
    computerScore++} else {result = "Choice not valid, you lost your turn"}
        

    console.log(result, "\ncomputer score: " + computerScore, "\nplayer score: " + playerScore);
}

let playerScore = 0;
let computerScore = 0;

function game(){
for (let i = 0; i < 5; i++){
    console.log(playRound(playerChoice, computerChoice));
}
}

function score(playerScore, computerScore){
    if (playerScore > computerScore){
        return "Player wins with "+playerScore+" points, "+"congratulations!"
    } else {return "Computer wins with "+computerScore+" points, "+"better luck next time!"}
}

console.log(game());
console.log(score(playerScore, computerScore));