$("#submitbutton").click(function(event) {
  var text = $("#emailtext").val();
  $("#emailtext").val("");
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
