$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var blanks = ["fav1", "fav2", "fav3"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#favlist").show();

    event.preventDefault();
  });
});
