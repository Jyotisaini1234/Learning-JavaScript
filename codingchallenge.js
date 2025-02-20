var massMark = 85;//kg
var heightMark = 1.59;//meters

var massJohn = 90;
var heightjhon = 1.98;

var BMIMark = massMark/(heightMark * heightMark);
var BMIJohn = massJohn/(heightjhon * heightjhon);
console.log(BMIMark,BMIJohn);

var markHigherBMI = BMIMark <BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s ' * markHigherBMI);