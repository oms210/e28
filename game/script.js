let playerDiv = document.querySelector('#playerDiv');
let playerButton = document.querySelector('#playerButton'); 
let counter = document.querySelector('#counter');
playerButton.addEventListener('click', rollDice);

var score = 1;
var rollCounter = 0;

function rollDice() {
    rollCounter++;
    var num = Math.floor((Math.random() * 2)) % 2;
   
    if ( num == 0) {
        score++;
        playerDiv.classList.remove('red');
        playerDiv.classList.add('green');
    } else {
        playerDiv.classList.remove('green');
        playerDiv.classList.add('red');
        if (score == 0)
            score = 0;
        else
            score--;

    }
counter.innerHTML ="Counter: " + rollCounter;
    playerDiv.innerHTML = "Score: " + score;
   
}