var scores, roundscore, activePlayer, dice;

scores = [0,0];
roundscore = 0;
activePlayer = 0;

//dice = Math.floor(Math.random()*6) + 1;
//console.log(dice);

 //document.querySelector('#current-' + activePlayer).textContent - dice;
//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;
//console.log(x);

// document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){
    //1. Random number
    dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    //3. Update the round score If the rolled number was NOT a 
    if (dice !== 1){
        //add score
        roundscore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundscore;
        
    } else {
        //Next player
        nextPlayer();
    }
});

 document.querySelector('.btn-hold').addEventListener('click', function(){
        //Add Current score to global score
       scores[activePlayer] += roundscore; 

    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


    // Check if player won the game
 
    // Next player 
    nextPlayer();

     
   
    nextPlayer();

 });

  


 function nextPlayer(){
    // Next player 
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundscore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    
    document.querySelector('.dice').style.display = 'none';

 }