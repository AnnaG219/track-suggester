$(document).ready(function() {
  $("form#submit_info").submit(function(event) {
    event.preventDefault();
    var logicType = ($("logicType").val())
    var workType = ($("typing").val());
    var java = ($("workType").val());
    var enviroment = ($("enviroment").val())
    var company = ($("company").val())

      if (logicType === "frontEnd") {
        $('#choice1').hide();
        $('#choice2').hide();
        $('#choice3').hide();
        $('#choice4').hide();
        $('#choice5').show();
      }
      else if (logicType === "backEnd" && workType === "pHP" ) {
        $('#choice1').hide();
        $('#choice2').hide();
        $('#choice3').hide();
        $('#choice4').show();
        $('#choice5').hide();
      }
      else if (logic type === "backEnd" && workType === "rest" && runTime === "interpreted") {
        $('#choice1').hide();
        $('#choice2').hide();
        $('#choice3').show();
        $('#choice4').hide();
        $('#choice5').hide();

      }
      else if (logic type === "backEnd" && workType === "rest" && runTime === "compiled" && enviroment === "java") {
        $('#choice2').hide();
        $('#choice2').show();
        $('#choice3').hide();
        $('#choice4').hide();
        $('#choice5').hide();
      }
      else (logic type === "backEnd" && workType === "rest" && runTime === "compiled" && enviroment === "cSharp" && company === "cSharp" ) {
        $('#choice1').show();
        $('#choice2').hide();
        $('#choice3').hide();
        $('#choice4').hide();
        $('#choice5').hide();
      }
  });
});
