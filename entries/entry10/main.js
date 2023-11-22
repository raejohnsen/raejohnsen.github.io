function redpilled() {
console.log("Chosen the red pill");
  }
  
  let redbutton = document.querySelector(".redbutton"); document.querySelector(".redpill");
  redbutton.addEventListener("click", redpilled);

let body = document.body;

function redpilled() {
  body.classList.add("redlight");
  whole.classList.add("buttonOn");
}

function bluepilled() {
  console.log("Chosen the blue pill");
}
  let bluebutton = document.querySelector(".bluebutton"); document.querySelector(".bluepill");
  bluebutton.addEventListener("click", bluepilled);

function bluepilled() {
  body.classList.add("bluelight");
  whole.classList.add("buttonOn");
  document.querySelector("bluetext");
}

let wrapperred = document.querySelector(".wrapperred");
redbutton.addEventListener("click", function(redtext) {
  console.log(redtext, redtext.target);
  let newItem = document.createElement("div");
  newItem.classList.add("new-content");
  newItem.innerHTML = "The red pill represents the choice to confront the harsh and uncomfortable truth, no matter how difficult or unsettling it may be. Taking the red pill means waking up to the real world, which is a dystopian future where humans are enslaved by machines that use their bodies as an energy source. The simulated reality that most people perceive as the real world is, in fact, the Matrix, a computer-generated dream designed to keep humans docile and unaware. Choosing the red pill is an act of rebellion, a willingness to face the truth and break free from the illusion.";
  wrapperred.appendChild(newItem);
});

let wrapperblue = document.querySelector(".wrapperblue");
bluebutton.addEventListener("click", function(bluetext) {
  console.log(bluetext, bluetext.target);
  let newItem = document.createElement("div");
  newItem.classList.add("new-content");
  newItem.innerHTML = "The blue pill, on the other hand, symbolizes the choice to remain in blissful ignorance and continue living in the simulated reality created by the machines. Taking the blue pill means rejecting the truth and staying within the comforting illusion of the Matrix. It represents a decision to maintain a false sense of security and normalcy, even though it is not real. The blue pill is associated with conformity and a desire to avoid the challenges and uncertainties that come with acknowledging and confronting the truth.";
  wrapperblue.appendChild(newItem);
});