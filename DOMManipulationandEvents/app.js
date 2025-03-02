var scores, roundscore, activePlayer, dice;

scores = [0,0];
roundscore = 0;
activePlayer = 1;

dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('#current' + activePlayer).textContent = dice;