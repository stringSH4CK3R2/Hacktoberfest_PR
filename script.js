var caption = document.getElementById("caption");

function popup() {
var txt;
  var name = prompt("Please enter your name:", "Harry Potter");
  if (name != null && name != "") {
    caption.innerHTML = "Hi, "+ name;
  }
}