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




// function toggle(button) {
//     if (button.id == "tempRock") {
//         console.log("tempRock")
//     }
//     console.log(button);
//     button.parentElement.classList.toggle('hidden'); 
//     //Adds hidden class, and on click enables css
//   }
  


function getImg(move) {
    const rock = document.getElementById("rock_img");
    const paper = document.getElementById("paper_img");
    const scissor = document.getElementById("scissor_img");
    switch(move) {
        case "rock":
            return[paper.style.display = "none", 
            scissors.style.display = "none", 
            rock.style.display = "flex"];

            //return rock.style.display = "flex";
        case "paper":
            return [paper.style.display = "flex", 
            scissors.style.display = "none", 
            rock.style.display = "none"];
        case "scissor":
           return scissor.style.display = "flex";
        }
}

var x1 = document.getElementById("rock_img");
var x2 = document.getElementById("paper_img");
var x3 = document.getElementById("scissor_img");

let tempButton = document.getElementById("rock");
tempButton.addEventListener('click', function() {
    if (x1.style.display == "none") {
        x1.style.display = "block";
        x2.style.display = "none";
        x3.style.display = "none";
    } //else {
       // x1.style.display = "none";
   // }
});


let tempButton2 = document.getElementById("paper");
tempButton2.addEventListener('click', function() {
    if (x2.style.display == "none") {
        x1.style.display = "none";
        x2.style.display = "block";
        x3.style.display = "none";
    } //else {
        //x2.style.display = "none";
   // }
});

let tempButton3 = document.getElementById("scissor");
tempButton3.addEventListener('click', function() {
    if (x3.style.display == "none") {
        x1.style.display = "none";
        x2.style.display = "none";
        x3.style.display = "block";
    } //else {
        //x3.style.display = "none";
    //}
});

// --------------
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    // Changes filler text
    //document.querySelector('#player-move').innerHTML = button.id;

//    let tempImg = document.querySelector(`#${button.id}_img`);
    //tempImg.classList.toggle('hidden');

    //console.log(`#${button.id}_img`);
    cpuChoice = getChoice();
    document.querySelector("#cpu-move").innerHTML = convertNumToMove(cpuChoice);

    playerMove = convertChoice(button.id);
    let temp = singleRound(playerMove, cpuChoice);
    addItem(temp);

    document.querySelector("#player-points").innerHTML = playerWin;
    document.querySelector("#CPU-points").innerHTML = cpuWin;
  });
});


// const rockButton = document.querySelector('.buttons #rock');
// rockButton.addEventListener('click', () => {
//     console.log("clicked");

// });





//const audio = document.querySelector(`button[class="${e.keyCode}"]`);

