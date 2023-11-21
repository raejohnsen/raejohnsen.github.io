// function redpilled() {
//     console.log("Chosen the red pill");
//   }
  
//   let redbutton = document.querySelector(".redpill",".redtext");
//   redbutton.addEventListener("click", redpilled);

// let body = document.body;

// function redpilled() {
//   body.classList.toggle("redlight");
//   whole.classList.add("buttonOn");
//   document.querySelector("redtext").style.opacity="1";
// }

let body = document.body;

function redpilled() {
  console.log("Chosen the red pill");
}
  let redbutton = document.querySelector(".redpill",".redtext");
  redbutton.addEventListener("click", redpilled);

function redpilled() {
  body.classList.toggle("redlight");
  whole.classList.add("buttonOn");
  document.querySelector("redtext").style.opacity="1";
}

function bluepilled() {
  console.log("Chosen the blue pill");
}
  let bluebutton = document.querySelector(".bluepill",".bluetext");
  bluebutton.addEventListener("click", bluepilled);

function bluepilled() {
  body.classList.toggle("bluelight");
  whole.classList.add("buttonOn");
  document.querySelector("bluetext").style.opacity="1";
}