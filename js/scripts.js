$(document).ready(function() {
  $("#word").submit(function(event) {
    event.preventDefault();
    var string = $("input#sentence").val().toLowerCase();
    var pieces = string.split("");
    var currentLetter = "";
    var results = "";

    for (var i = 0; i < pieces.length; i++) {
      currentLetter = pieces[i];
      if (currentLetter === "a") {
        currentLetter = "-";
      } else if (currentLetter === "e") {
        currentLetter = "-";
      } else if (currentLetter === "i") {
        currentLetter = "-";
      } else if (currentLetter === "o") {
        currentLetter = "-";
      } else if (currentLetter === "u") {
        currentLetter = "-";
      } else {
        currentLetter = currentLetter;
      }
      results = results + currentLetter;
    };

    $("#quiz").text(results);
    $("#puzzle").show();
    $("#word").hide();
  });

  $("#click").click(function(event) {
    var stringInitial = $("input#sentence").val();
    $("#original").text(stringInitial);
    $("#answer").show();
  });

});
