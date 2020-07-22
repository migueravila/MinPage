var today = new Date();
var Hr = today.getHours();
// You can change your name here
var name = "Mike";
var lateTxt = "Go to Sleep! ";
var morningTxt = "Good day, great time for a coffee, ";
var afterTxt = "Good afternoon, let's build something, ";
var evenTxt = "Good Evening, ";

if (Hr >= 0 && Hr < 6) {
  document.getElementById("greetings").innerText = lateTxt + name;
} else if (Hr >= 6 && Hr < 12) {
  document.getElementById("greetings").innerText = morningTxt + name;
} else if (Hr >= 12 && Hr < 17) {
  document.getElementById("greetings").innerText = afterTxt + name;
} else {
  document.getElementById("greetings").innerText = evenTxt + name;
}
