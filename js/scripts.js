$(document).ready(function() {
  $("form#Tracking_Suggester").submit(function(event) {
    event.preventDefault();
    var logicType = $("input[name=logicType]:checked").val();
    var workType = $("input[name=workType]:checked").val();
    var runTime = $("input[name=runTime]:checked").val();
    var enviroment = $("input[name=enviroment]:checked").val();
    var company = $("input[name=company]:checked").val();

      if (logicType === "frontEnd") {
        $('#choice1').hide();
        $('#choice2').hide();
        $('#choice3').hide();
        $('#choice4').hide();
        $('#choice5').show();
      }
      else if ( (logicType === "backEnd") && (workType === "pHP") ){
        $('#choice1').hide();
        $('#choice2').hide();
        $('#choice3').hide();
        $('#choice4').show();
        $('#choice5').hide();
      }
      else if ( (logicType === "backEnd") && (workType === "rest") && (runTime === "interpreted") ) {
        $('#choice1').hide();
        $('#choice2').hide();
        $('#choice3').show();
        $('#choice4').hide();
        $('#choice5').hide();

      }
      else if ( (logicType === "backEnd") && (workType === "rest")&& (runTime === "compiled") && (enviroment === "java") ) {
        $('#choice2').hide();
        $('#choice2').show();
        $('#choice3').hide();
        $('#choice4').hide();
        $('#choice5').hide();
      }
      else if ( (logicType === "backEnd") && (workType === "rest")&& (runTime === "compiled") && (enviroment === "cSharp") ) {
        $('#choice2').show();
        $('#choice2').hide();
        $('#choice3').hide();
        $('#choice4').hide();
        $('#choice5').hide();
      }
      else {
        $('#choice1').show();
        $('#choice2').hide();
        $('#choice3').hide();
        $('#choice4').hide();
        $('#choice5').hide();
        $('#choice6').hide();
      }
  });
});
