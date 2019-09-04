//DESCRIPTION: JS FOR PIG web application
//Author: Dan Bradley

//------Variables-------------------------//
var scores = [];
var roundScore;
var currentPlayer;

var winningScore;
var diceRoll = 0;
var dice = document.querySelector('.dice');
//--------------------------------------//

//Set intial dice view to nothing
dice.style.display = 'none';

initGame();




//--------------------------EVENTS-------------------------------------//


//Action to perform when hitting Roll
document.querySelector('.btn-roll').addEventListener('click', function() {
    // Roll the dice
    diceRoll = randomWholeNumber(6);
    
    // Edit display (todo: change to function)
    dice.style.display = 'block';
    dice.src = 'imgs/dice-' + diceRoll + '.png';
    dice.textContent = diceRoll;
    
    if(!isOne(diceRoll)) {
        roundScore += diceRoll;
        document.querySelector('#current-' + currentPlayer).textContent = roundScore;
    }
    else {
        roundScore = 0;
        document.querySelector('#current-' + currentPlayer).textContent = roundScore;
        switchActivePlayer();
    }
});



//Action to stop your turn and take your points
document.querySelector('.btn-hold').addEventListener('click', function() {
   updateScore();
   displayScore();
   
   var input = document.querySelector('.final-score').value;
   
   if(input) {
       winningScore = input;
   }
   
   if(checkGameOver()) {
       document.querySelector('#name-' + currentPlayer).textContent = 'WINNER!';
       dice.style.display = 'none';
       document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner');
       document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');
       document.querySelector('.btn-roll').style.display = 'none';
       document.querySelector('.btn-hold').style.display = 'none';

   }
   
   else {
       switchActivePlayer();
   }
});



//Start a new game with the new game button
document.querySelector('.btn-new').addEventListener('click', initGame);




//---------------------FUNCTIONS----------------------------------------//



function initGame() {
    scores = [0, 0];
    roundScore = 0;
    currentPlayer = 0;
    winningScore = 100;
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.final-score').value = '';
    
}




//Combine math functions for easier output of a random number
//num = max random number
function randomWholeNumber(num) {
    return Math.floor(Math.random() * num) + 1;
}


//Return True if Dice is equal to 1
function isOne(dice) {
    return dice == 1;
}



//Change the current player
function switchActivePlayer()  {
    if(currentPlayer) {
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
    }
    else {
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
    }
    
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
}


//Update the current players score variable
function updateScore() {
    scores[currentPlayer] += roundScore;
    roundScore = 0;
    document.querySelector('#current-' + currentPlayer).textContent = roundScore;
}


//Update the display of the current player's score
function displayScore() {
    document.querySelector('#score-' + currentPlayer).textContent = scores[currentPlayer];
}



//Monitor if the game has reached the winning score
function checkGameOver() {
    return scores[currentPlayer] >= winningScore;
}



