var scores, roundscore, activePlayer, dice;

scores = [0,0];
roundscore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('#current' + activePlayer).textContent = "dice";
//document.querySelector('#current' + activPlayer).innerHTML = '<em>' + dice + '<em>';

var x = document.querySelector('#score-0').textContent;
console.log(x);

document.querySelector('.dice').styele.display = 'none';

document.querySelector('.btn-roll').addEventListener('click',function(){
    var dice = Math.floor(Math.random() * 6) + 1;
    
}

