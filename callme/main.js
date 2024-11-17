let images = [
    "sources/greenswatch.png",
    "sources/fightergroup.png",
    "sources/asteroid3.png"
];

let image = document.getElementById("hero");

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    image.src = images[randomIndex];
}

setInterval(changeImage, 1000);