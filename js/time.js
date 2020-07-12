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
  var min = mins = ('0'+d.getMinutes()).slice(-2);;
  var hh = d.getHours();

  let time = mm + " " + dd + "  -  " + hh + ":" + min;

  document.getElementById("time").innerText = time;
  setTimeout(displayClock, 1000);
}
