let sam = document.getElementById("sam");
let ahmed = document.getElementById("ahmed");
let d396 = document.getElementById("d396");
let bueno = document.getElementById("bueno");
let aguila = document.getElementById("aguila");
let manayeyo = document.getElementById("manayeyo");

// Function to change the image source with a fade-out and fade-in effect
function changeImage(element, newSrc) {
    // Apply fade-out effect
    element.classList.add("fade-out");

    // After the fade-out animation completes, change the src and fade it back in
    setTimeout(function() {
        element.src = newSrc;
        element.classList.remove("fade-out");
    }, 500); // The timeout matches the duration of the fade-out transition (0.5s)
}

// Function to change the image source with a delay
function changeImageWithDelay(element, newSrc, delay) {
    // Add a delay before changing the image back
    setTimeout(function() {
        changeImage(element, newSrc);
    }, delay);
}

// sam image
sam.onmouseover = function(){
    changeImage(sam, "sources/samcolor.jpg");
}

sam.onmouseout = function(){
    changeImageWithDelay(sam, "sources/sam.png", 2000); // 1-second delay
}

// ahmed image
ahmed.onmouseover = function(){
    changeImage(ahmed, "sources/ahmedcolor.jpg");
}

ahmed.onmouseout = function(){
    changeImageWithDelay(ahmed, "sources/ahmed.png", 2000); // 1-second delay
}

// d396 image
d396.onmouseover = function(){
    changeImage(d396, "sources/d396color.jpg");
}

d396.onmouseout = function(){
    changeImageWithDelay(d396, "sources/396.png", 2000); // 1-second delay
}

// bueno image
bueno.onmouseover = function(){
    changeImage(bueno, "sources/buenocolor.jpg");
}

bueno.onmouseout = function(){
    changeImageWithDelay(bueno, "sources/bueno.png", 2000); // 1-second delay
}

// aguila image
aguila.onmouseover = function(){
    changeImage(aguila, "sources/aguilacolor.jpg");
}

aguila.onmouseout = function(){
    changeImageWithDelay(aguila, "sources/aguila.png", 2000); // 1-second delay
}

// manayeyo image
manayeyo.onmouseover = function(){
    changeImage(manayeyo, "sources/manayeyocolor.jpg");
}

manayeyo.onmouseout = function(){
    changeImageWithDelay(manayeyo, "sources/manayeyo.png", 2000); // 1-second delay
}
