let num = parseInt(prompt("Enter the number of rounds you want to play (1-5):"));
function getComputerChoice(){
    let num=Math.random();
    if (num > 0.6){
        return "rock";
    }
    else if ( num > 0.3 ){
        return "paper";
    }
    else {
        return "scissor";
    }
}
function getHumanChoice(){
    let choice=prompt("Enter your choice:");
    return choice;
}
let humenscore=0;
let computerscore=0;
function playround(humanchoice,computerchoice){
    let validChoices = ["rock", "paper", "scissor"];
    if (!validChoices.includes(humanchoice.toLowerCase())) {
        return "Invalid choice! Please choose rock, paper, or scissor.";
    }
    if ( humanchoice.toLowerCase()==="rock" && computerchoice==="scissor"){
        humenscore++;
        return("You win, Rock beats Scissors");
        
    }
    else if (humanchoice.toLowerCase()==="scissor" && computerchoice==="paper"){
        humenscore++;
        return("You win, Scissor beats Paper");
    }
     else if (humanchoice.toLowerCase()==="paper" && computerchoice==="rock"){
        humenscore++;
        return("You win, Paper beats rock");
    }
    else if (humanchoice.toLowerCase()===computerchoice){
        return("Draw");
    }
    else {
        computerscore++
        return(`You Lose, ${computerchoice} beats ${humanchoice}`)
    }
}

for ( let i=0; i<num; i++){
        const humanselection=getHumanChoice();
        const computerselection=getComputerChoice();
       alert(playround(humanselection,computerselection));
    }
console.log(`Human Score: ${humenscore}`);
console.log(`Computer Score: ${computerscore}`);
if (humenscore > computerscore){
    alert("You win the game!");
}
else if (humenscore < computerscore){
    alert("You lose the game!");
} else {
    alert("The game is a draw!");
}