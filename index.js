
const startBtn = document.getElementById("startGame");
let computerChoice = "ROCK";
const ROCK = "ROCK";
const SCISSORS = "SCISSORS";
const PAPER = "PAPER";
let winner = "";

// ROCK  SCISSORS = 
// PAPER  ROCK
// SCISSORS PAPER
// declare //function expression
let determineWinner = function(cChoice, pChoice){
    // and && or ||
    if(
        (pChoice === ROCK && cChoice===SCISSORS)||
        (pChoice ===PAPER && cChoice === ROCK) ||
        (pChoice ===SCISSORS && cChoice === PAPER)

    ){
        winner = "PLAYER WINS";
     
    }
    else if(cChoice === pChoice){
        winner = "Draw";
       
    }
    else{
        winner = "COMPUTER WINS";
       
    }
    return winner;
}

function start(){
    let playerChoice = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`).toUpperCase();
    // random 0-1
    // 0.33 ROCK 0.66 PAPER SCI
    let randomNumber = Math.random();
    if(randomNumber<0.33){
        computerChoice = ROCK;
        // 
    }
    else if(randomNumber<0.66){
        computerChoice = PAPER;
    }
    else{
        computerChoice = SCISSORS;
    }
   let result =  determineWinner(computerChoice, playerChoice);
   console.log(result);
}
startBtn.addEventListener("click",start);

// expression: statement
let a = 90+90;
let b = function (){
    console.log(90+90);
}
if(3===2 || 9===9){
    console.log("HI");
}
else{
    console.log("goodbye")
}
b();
// hoisting
// declaration


