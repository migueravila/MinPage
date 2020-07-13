window.onload = displayClock();
function displayClock() {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var d = new Date();
  var mm = monthNames[d.getMonth()];
  var dd = d.getDate();
  var min = (mins = ("0" + d.getMinutes()).slice(-2));
  var hh = d.getHours();

  document.getElementById("month").innerText = mm + " ";
  document.getElementById("day").innerText = dd;
  document.getElementById("separator1").innerHTML = " - ";
  document.getElementById("hour").innerText = hh;
  document.getElementById("separator2").innerHTML = " : ";
  document.getElementById("minutes").innerText = min;
  setTimeout(displayClock, 1000);
}
