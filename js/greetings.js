var today = new Date();
var curHr = today.getHours();
var name = "Henry";

if (curHr >= 0 && curHr < 6) {
  document.getElementById("greetings").innerText = "Go to Sleep!" + name + "?";
} else if (curHr >= 6 && curHr < 12) {
  document.getElementById("greetings").innerText =
    "Good Day, great time for a coffee, " + name;
} else if (curHr >= 12 && curHr < 17) {
  document.getElementById("greetings").innerText =
    "Good Afternoon, good time for work! " + name;
} else {
  document.getElementById("greetings").innerText =
    "Good Evening let's build something, " + name;
}
