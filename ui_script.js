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
 


const playerDisplay = document.querySelector('#player-move');
const cpuDisplay = document.querySelector('#cpu-move');


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

function convertNumToMove (choice) {
    switch(choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

// Updates ul
function addItem(result){
        var li = document.createElement("LI");  
        li.innerHTML = result;
        liHist.appendChild(li);
}



//</script><input type="button" id="btnAdd" value="Add" onclick="addItem()">


//const playerChoice = document.querySelector('.player-points');
let playerChoice = 0;
let cpuChoice = getChoice();
let liHist = document.querySelector("#li-hist");

// --------------
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    document.querySelector('#player-move').innerHTML = button.id;

    cpuChoice = getChoice();
    document.querySelector("#cpu-move").innerHTML = convertNumToMove(cpuChoice);

    playerMove = convertChoice(button.id);
    let temp = singleRound(playerMove, cpuChoice);
    addItem(temp);

    docuemnt.querySelector('.player-points').innerHTML = "asdadsas";
  });
});




//const audio = document.querySelector(`button[class="${e.keyCode}"]`);

