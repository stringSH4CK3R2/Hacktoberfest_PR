var msg = document.getElementById("msg");

function popup() {
var txt;
  var person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    msg.innerHTML = "SOMETHING WENT WRONG"
  } else {
    txt = "Hello " + person + "! How are you today?";
    msg.innerHTML = "Hi, "+ person;
  }
}