$(document).ready(function() {
  $("#word").submit(function(event) {
    event.preventDefault();
    var string = $("input#sentence").val().toLowerCase();
    var results = [];
    for (var i = 0; i < string.length; i++) {
      if (string[i] === "i") {
        results += string[i].replace(string[i], "-");
      } else {
        results += string[i];
      }
    };
    $("#quiz").text(results);
    $("#puzzle").show();
    $("#word").hide();
  });
});
