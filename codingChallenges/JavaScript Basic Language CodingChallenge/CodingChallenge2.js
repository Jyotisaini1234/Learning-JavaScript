

var scoreJhon = (116 + 94 + 123) / 3;
var scoreMike = (116 + 95 + 123) / 3;
var scoreMary = (118 + 115 + 123) / 3;
console.log(scoreJhon, scoreMike, scoreMary);


if (scoreJhon > scoreMike && scoreJhon > scoreMary){
    console.log("Jhon/'s team wins with" + scoreJhon + " points");
}else if (scoreMike > scoreJhon && scoreMike > scoreMary){
    console.log("Mike/'s team wins with " + scoreMike + " points");
}else if (scoreMary > scoreJhon && scoreMary > scoreMike){
    console.log("Mary/'s team wins with " + scoreMary + " points");
}else {
    console.log("There is a draw");
}









/*
if (scoreJhon > scoreMike){
    console.log(" Jhon\s team wins with " + scoreJhon + " points ");
}else if (scoreMike > scoreJhon){
    console.log(" Mike\s team wins with " + scoreMike + " points ");
}else{
    console.log(" There is a draw ");
}

*/
