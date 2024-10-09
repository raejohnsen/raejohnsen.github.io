dragElement(document.getElementById("red"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("blue"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("black"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

let redLink = document.getElementById("deli");
let blueLink = document.getElementById("love");
let blackLink = document.getElementById("map");

redLink.onmouseover = function(){
  document.body.style.backgroundImage = "url('sources/redshelves.jpeg')";
  redLink.style.color = "white";
}

redLink.onmouseout = function(){
  document.body.style.backgroundImage = "url('sources/blackshelves.jpeg')";
  redLink.style.color = "#b80000";
}

blueLink.onmouseover = function(){
  document.body.style.backgroundImage = "url('sources/blueshelves.jpeg')";
  blueLink.style.color = "white";
}

blueLink.onmouseout = function(){
  document.body.style.backgroundImage = "url('sources/blackshelves.jpeg')";
  blueLink.style.color = "#2b42ba";
}

blackLink.onmouseover = function(){
  document.body.style.backgroundImage = "url('sources/delicutouts3.jpeg')";
  blackLink.style.color = "#black";
}

blackLink.onmouseout = function(){
  document.body.style.backgroundImage = "url('sources/blackshelves.jpeg')";
  blackLink.style.color = "white";
}

let checkout = document.getElementById("button");
let clear = document.getElementById("clear");
let bigDeli = document.getElementById("bigdeli");
let bigLove = document.getElementById("biglove");
let bigMap = document.getElementById("bigmap");

checkout.onclick = function() {
  if (clear.style.display === "block") {
    clear.style.display = "none";
    bigDeli.style.display = "none";
    bigLove.style.display = "none";
    bigMap.style.display = "none";
    red.style.display = "block";
    redLink.style.display = "block";
    blue.style.display = "block";
    blueLink.style.display = "block";
    black.style.display = "block";
    blackLink.style.display = "block";
  } else {
    clear.style.display = "block";
    bigDeli.style.display = "block";
    bigLove.style.display = "block";
    bigMap.style.display = "block";
    red.style.display = "none";
    redLink.style.display = "none";
    blue.style.display = "none";
    blueLink.style.display = "none";
    black.style.display = "none";
    blackLink.style.display = "none";
  }
};