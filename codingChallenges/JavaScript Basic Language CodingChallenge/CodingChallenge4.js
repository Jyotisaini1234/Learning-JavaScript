var Jhon ={
    fullName: 'Jhon Smith',
    mass: 85,
    height:1.95,
    calcBMI: function() {
        this.bmi =this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var Mark ={
    fullName: 'Mark Smith',
    mass: 110,
    height:1.00,
    calcBMI: function(){
        this.bmi =this.mass / (this.height * this.height);
        return this.bmi;
    }
}
Jhon.calcBMI();
Mark.calcBMI();
console.log(Jhon,Mark);

if (Jhon.calcBMI() > Mark.calcBMI()){
    console.log(Jhon.fullName + " has a higher BMI of " + JhonBMI);
}else if (Mark.BMI > Jhon.BMI){
    console.log(Mark.fullName + 'has a higher BMI of '+ Mark.BMI);
}else{
    console.log("They have the same BMI");
}