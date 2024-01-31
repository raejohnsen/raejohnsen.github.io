
// let body = document.body;
// let headline = document.querySelector("h1");
// let headlines = document.querySelectorAll("h1");

// console.log(headline);
// console.log(headlines);



// function addRed() {

//     headlines.forEach(function (headline) {
//       headline.classList.add("red");
//     })
//   }
//   addRed();


// let body = document.body;
// let headlines = document.querySelectorAll("h1");

// console.log(headlines);

// // uses forEach to loop through all of the headlines
// headlines.forEach(function(headline) {
//   // add an event listener to each individual headline
//   headline.addEventListener('click', function (event) {
//     // toggle the red class on this headline
//     headline.classList.toggle("red");
//   });
// });


// let blobs = document.querySelectorAll(".blob");
//   let container = document.querySelector(".wrapper");
//   // place our blobs randomly
//   blobs.forEach(function (blob) {
//     blob.style.right = (100 * Math.random()) + '%';
//     blob.style.top = (100 * Math.random()) + '%';
//   });
//   container.addEventListener("click", function (event) {
//     if (event.target.classList.contains("blob")) {
//       event.target.remove();
//     }
//   });



let button = document.querySelector(".button");
let colors = ["#255c34", "#726756", "#703a56", "#953e00"];
let body = document.querySelector("body");

function newColor() {
  let randIndex = Math.floor(Math.random() * colors.length);
  let randColor = colors[randIndex];
  body.style.backgroundColor = randColor;
}

button.addEventListener("click", newColor);
