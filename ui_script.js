const CHOICES = [0, 1, 2];
//rock paper scissors


function getChoice() {
    let tempChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    console.log(tempChoice);
    return tempChoice;
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


// ----------
 
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');

const playerDisplay = document.querySelector('#player-move');
const cpuDisplay = document.querySelector('#cpu-move');



//const playerChoice = document.querySelector('.player-points');
let playerChoice = 0;
let cpuChoice = getChoice();

function changeRock () {
    playerDisplay.innerHTML = "ROCK";
    //cpuDisplay.innerHTML = "adsdsaasads";
    updateMove(cpuDisplay, cpuChoice);
    document.querySelector('.player-points').innerHTML = "Rock";
    playerChoice = 0;
    cpuChoice = getChoice();
    updateMove(cpuDisplay, 'asdasdsadasdadadadssad');
}

function changePaper () {
    playerDisplay.innerHTML = "PAPER 📜";
    document.querySelector('.player-points').innerHTML = "Paper";
    playerChoice = 1;
    updateMove(cpuDisplay, cpuChoice);
}

function changeScissor () {
    playerDisplay.innerHTML = "SCISSOR ✂";
    document.querySelector('.player-points').innerHTML = "SCISSOR";
    playerChoice = 2;
    updateMove(cpuDisplay, cpuChoice);

}

function updateMove (asdf, newMove) {
    //document.querySelector(imgWindow).innerHTML = newMove;
    asdf.innerHTML = newMove;
}


//const audio = document.querySelector(`button[class="${e.keyCode}"]`);


// rockBtn.addEventListener('click', changeRock);
// paperBtn.addEventListener('click', changePaper);
// scissorBtn.addEventListener('click', changeScissor);

// --------------
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    document.querySelector('#player-move').innerHTML = button.id;
    cpuChoice = getChoice();
    document.querySelector("#cpu-move").innerHTML = cpuChoice;
  });
});


// rockBtn.addEventListener('click', function (e) {
//     e.target.style.background = 'blue';
//     document.playerDisplay.innerHTML = "ROCK";
//     alert("hi");
//   });
  
  //document.getElementById("content").innerHTML = "whatever";

  // var myDiv = document.getElementById("divId");
  // myDiv.innerHTML = "Content To Show";
