/* backend ---------*/
var userUnluckyResponses = [];
var userFutureResponses = [];
var result;

// function Input(length) {
//   this.length = length;
// }

Input.prototype.getOutput = function() {
  if(userUnluckyResponses.length <= 5){
    result = "response1";
  }
}




/* frontend ---------*/
$(document).ready(function() {
  $("form#smella-survey").submit(function(event){
    event.preventDefault();

    $("input:checkbox[name=unlucky]:checked").each(function(){
      var unlucky = $(this).val();
      userUnluckyResponses.push(unlucky);
    });

    $("input:checkbox[name=future]:checked").each(function(){
      var futureResponses = $(this).val();
      userFutureResponses.push(futureResponses);
    });

    if(response === "response1"){
      $("span#response1").show();
    }



  });

});
