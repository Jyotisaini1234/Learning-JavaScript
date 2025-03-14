var scores,roundsScore,activePlayer,dice;
scores = [0,0];
roundsScore = 0;
activePlayer = 0;


document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function(){
    // 1. Random Number
  var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector('.dice'); 
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.jpg';
    // Update the round score IF  the rolled number was NOT a 1
   if (dice !== 1){
    // add score 
    roundsScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundsScore;
   }else {
    // Next player
    nextPlayer();  
}

});


document.querySelector('.btn-hold').addEventListener('click', function(){
  // Add CURRRENT score to Global score
  scores[activePlayer] += roundsScore;

  // Update the UI
 document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

 // Check if player won the game
if (scores[activePlayer] >= 20){
  document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
  document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
}else {
  nextPlayer();
}
 // Next player
 nextPlayer();
});

function nextPlayer(){
// Next player
activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
roundsScore = 0;


document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');

 //document.querySelector('.player-0-panel').classList.remove('active');
 //document.querySelector('.player-1-panel').classList.add('active');
 
 document.querySelector('.dice').style.display = 'none';  

}

//document.querySelector('#current-' + activePlayer).textContent = dice; 
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;
//console.log(x);
 