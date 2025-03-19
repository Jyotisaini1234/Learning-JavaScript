//Budget Controller

var budgetController = (function() {
    
    // Some Code

})();

//UI Controller
var UIController = (function(){

    // Some Code

})();

// Global APP Controller
var controller = (function(budgetCtrl,UICtrl){

  document.querySelector('add_btn').addEventListener('click',function(){
    console.log('Button was click');
  })
})(budgetController,UIController);