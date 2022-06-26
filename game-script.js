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
    } else if (playerChoice == "rock" && computerChoice == "scissor"){
        result = ("You win " + playerChoice + " beats " + computerChoice)
    } else if (playerChoice == "scissor" && computerChoice == "paper"){
        result = ("You win " + playerChoice + " beats " + computerChoice)
    } else if (playerChoice == "paper" && computerChoice == "rock"){
                result = ("You win " + playerChoice + " beats " + computerChoice);
    } else {result = "You lost because " + computerChoice + " beats " + playerChoice}
    console.log(result);
}


console.log(playRound(playerChoice, computerChoice));
