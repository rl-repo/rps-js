const CHOICES = [0, 1, 2];

function getChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]; 
    // https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
}

function singleRound(player, cpu) {
    if (player >= 3 || player < 0) { 
        return "Invalid choice." 
    } else if(player == 0 && cpu == 2) {
        playerWin++;
        return "You win!";
    } else if(cpu == 0 && player == 2) {
        cpuWin++;
        return "You lose";
    } else if(cpu > player) {
        cpuWin++;
        return "You lose";
    } else if(player > cpu) {
        playerWin++;
        return "You win!";
    } else if(cpu == player) {
        return "It's a draw";
    }
}

function gameLoop(){
    for (let i = 0; i < 5; i++){
        playerChoice = getPlayerChoice();
        cpuChoice = getChoice();
        console.log(singleRound(playerChoice, cpuChoice));
    }

}

let playerWin = 0;
let cpuWin = 0;

let cpuChoice = getChoice();
let playerChoice = getPlayerChoice();

gameLoop();

document.getElementById("player-choice").innerHTML = playerWin;
document.getElementById("cpu-choice").innerHTML = cpuWin;


// console.log("Player")
// console.log(playerChoice)


// console.log("CPU choice");
// console.log(cpuChoice);

// console.log("Game results");
// console.log(singleRound(playerChoice, cpuChoice));

// document.getElementById("player-choice").innerHTML = singleRound(getPlayerChoice, getChoice());
