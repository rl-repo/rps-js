// UI Scripts
//⛰🏔🌋🗻
//📰📃📜📄
//✂

const container = document.querySelector('.player-move');

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');


const playerDisplay = document.querySelector('#player-move');

function changeRock () {
    playerDisplay.innerHTML = "ROCK";
}

function changePaper () {
    playerDisplay.innerHTML = "PAPER 📜";
}
function changeScissor () {
    playerDisplay.innerHTML = "SCISSOR ✂";
}


rockBtn.addEventListener('click', changeRock);
paperBtn.addEventListener('click', changePaper);
scissorBtn.addEventListener('click', changeScissor);

// rockBtn.addEventListener('click', function (e) {
//     e.target.style.background = 'blue';
//     document.playerDisplay.innerHTML = "ROCK";
//     alert("hi");
//   });
  
  //document.getElementById("content").innerHTML = "whatever";

  // var myDiv = document.getElementById("divId");
  // myDiv.innerHTML = "Content To Show";
