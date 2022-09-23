const CHOICES = [0, 1, 2];
//rock paper scissors
let playerWin = 0;
let cpuWin = 0;

function getChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
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

// ----------

function convertChoice (choice) {
    switch(choice) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissor":
            return 2;
    }
}

// ----------

function convertNumToMove (choice) {
    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}

// Updates ul
function addItem(result){
        var li = document.createElement("LI");  
        li.innerHTML = result;
        liHist.appendChild(li);
}


//const playerChoice = document.querySelector('.player-points');
let playerChoice = 0;
let cpuChoice = getChoice();

const playerDisplay = document.querySelector('#player-move');
const cpuDisplay = document.querySelector('#cpu-move');


let liHist = document.querySelector("#li-hist");

// -----
var c1 = document.getElementById("cpu_rock_img");
var c2 = document.getElementById("cpu_paper_img");
var c3 = document.getElementById("cpu_scissor_img");

function changeCpuImg (move){
    if (move == "rock"){
        if (c1.style.display == "none") {
            c1.style.display = "block";
            c2.style.display = "none";
            c3.style.display = "none";
        }
    } else if (move == "paper"){
        if (c2.style.display == "none") {
            c1.style.display = "none";
            c2.style.display = "block";
            c3.style.display = "none";
        } 
    } else {
        if (c3.style.display == "none") {
            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "block";
        } 
    }
}


// Simplify this
var x1 = document.getElementById("rock_img");
var x2 = document.getElementById("paper_img");
var x3 = document.getElementById("scissor_img");

let tempButton = document.getElementById("rock");
tempButton.addEventListener('click', function() {
    if (x1.style.display == "none") {
        x1.style.display = "block";
        x2.style.display = "none";
        x3.style.display = "none";
    }
});

let tempButton2 = document.getElementById("paper");
tempButton2.addEventListener('click', function() {
    if (x2.style.display == "none") {
        x1.style.display = "none";
        x2.style.display = "block";
        x3.style.display = "none";
    } 
});

let tempButton3 = document.getElementById("scissor");
tempButton3.addEventListener('click', function() {
    if (x3.style.display == "none") {
        x1.style.display = "none";
        x2.style.display = "none";
        x3.style.display = "block";
    }
});


// --------------
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    
    if (cpuWin + playerWin == 5) {
        alert("No more games");
        tempButton1.disabled = true;
        tempButton2.disabled = true;
        tempButton3.disabled = true;
    }


    cpuChoice = getChoice();
    cpuChoice2 = convertNumToMove(cpuChoice);
    changeCpuImg(cpuChoice2);

    playerMove = convertChoice(button.id);
    let temp = singleRound(playerMove, cpuChoice);
    addItem(temp);

    document.querySelector("#player-points").innerHTML = playerWin;
    document.querySelector("#CPU-points").innerHTML = cpuWin;
  });
});



//const audio = document.querySelector(`button[class="${e.keyCode}"]`);

