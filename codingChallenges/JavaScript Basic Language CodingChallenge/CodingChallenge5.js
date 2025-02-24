var jhon = {
    fullName: 'Jhon Smith',
    bills: [124, 46, 268, 180, 42],
    calctips: function(){
        this.tips= [];
        this.finalValues = [];
    
        for (var i = 0; i < this.bills.length; i++)
        {
           //Detiremins percentage based on tipping rules
           var percentage;
           var bill = this.bills[i];

           if (bill < 50){
            percentage = .2;
           }else if (bill >= 50 && bill < 200) 
            {
               percentage = .15;
           } else {
                 percentage = .1;
           }
        
           // Add results to the corresponding arrays
           this.tips[i] = bill * percentage;
           this.finalValues[i] * bill + bill * percentage
        }
    }
};

jhon.calctips();
console.log(jhon);


var Mark  = {
    fullName: 'Mark Smith',
    bills: [124, 475, 110, 45],
    calctips: function(){
        this.tips= [];
        this.finalValues = [];
    
        for (var i = 0; i < this.bills.length; i++)
        {
           //Detiremins percentage based on tipping rules
           var percentage;
           var bill = this.bills[i];

           if (bill < 100){
            percentage = .2;
           }else if (bill >= 100 && bill < 300) 
            {
               percentage = .1;
           } else {
                 percentage = .25;
           }
        
           // Add results to the corresponding arrays
           this.tips[i] = bill * percentage;
           this.finalValues[i] * bill + bill * percentage
        }
    }
};

function calcAverage(tips){
    var sum = 0;
    for (var i = 0; i < tips.length; i++){
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

//Do the calculations

jhon.calctips();
Mark.calctips();
console.log(jhon,Mark);

jhon.average = calcAverage(jhon.tips);
Mark.average = calcAverage(Mark.tips);
console.log(jhon, Mark);

if (jhon.average > Mark.average){
    console.log(jhon.fullName + '\'s family pays higher tips, with an average of $' + jhon.average);
} else if (Mark.average > jhon.average){
    console.log(Mark.fullName + '\'s family pays higher tips, with an average of $' + Mark.average);
}else {
    console.log("both family are same pays of $");
}
