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
      "This is the left page!";
    toggle = 1;
  } else {
    document.getElementById('heading').innerHTML = 
      "This page is to the left!";
    toggle = 0;
  }
}

function input() {
  var text = document.getElementById('textbox').value;
  console.log(text);
  if (text.match(/\S/)) {
  } else {
    return false;
  }
  console.log(text);
  urltail = encodeURIComponent(text);
  window.location.href = "/inp_out/" + urltail;
}

function reset() {
  window.location.href = "/reset";
}

function tick(text) {
  console.log(text);
}

function left() {
  page = window.location.pathname;
  if (page == "/one") {
    page = 0;
  }
  if (page == "/") {
    page = 1
  }
  if (page == "/two") {
    page = 2;
  }

  if (page == 1) {
    window.location.href = "/one";
    document.getElementById("left").disabled = true;
    page = 0
  } else {
    if (page == 2) {
      window.location.href = "/";
      document.getElementById("right").disabled = false;
      page = 1
    }
  }
}

function right() {
  page = window.location.pathname;
  if (page == "/one") {
    page = 0;
  }
  if (page == "/") {
    page = 1
  }
  if (page == "/two") {
    page = 2;
  }

  if (page == 0) {
    window.location.href = "/";
    page = 1
  } else { 
    if (page == 1) {
      window.location.href = "/two";
      document.getElementById("right").disabled = true;
      page = 2
    }
  }
}
