var toggle = 0;

function startTime() {
  var sheet = document.createElement('style');
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var output = [];
  m = checkTime(m);
  s = checkTime(s);
  if (h > 12) {
    h = h - 12;
    document.getElementById('txt').innerHTML =
      h + ":" + m + ":" + s + "  pm";
    var t = setTimeout(startTime, 500); 
  }
  else {
    document.getElementById('txt').innerHTML =
      h + ":" + m + ":" + s + "  am ";
    var t = setTimeout(startTime, 500);                
  }
}
function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}
function buttonpress() {
  if (toggle == 0) {
    document.getElementById('heading').innerHTML =
      "Thanks!";
    toggle = 1;
  } else {
    document.getElementById('heading').innerHTML = 
      "Welcome! Please press the button below.";
    toggle = 0;
  }
}
