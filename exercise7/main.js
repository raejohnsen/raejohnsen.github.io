let colors = ["#ff1414", "#ff9600", "#ffd859", "#ccff00", "#80ff92", "#42e9f5", "#0092ff", "#0031ff", "#5600ff", "#c189ff", "#ff89f0", "#ff0078", "#ffffff"];

let doxie = document.getElementById("doxie");
let buttonInput = document.getElementById("button");
let sliderInput = document.getElementById("slider");

function newColor(){
    let randomColor = Math.floor(Math.random() * colors.length);
    doxie.style.borderColor = colors[randomColor];
}

function newWidth(){
    doxie.style.borderWidth = sliderInput.value + "px";
}