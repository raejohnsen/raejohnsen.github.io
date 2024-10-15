let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let endImg = document.getElementById('endImg');

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


img1.onmouseover = function(){
    changeImage(img1, "sources/img1color.png");
}

img1.onmouseout = function(){
    changeImageWithDelay(img1, "sources/img1.png", 2000); // 1-second delay
}

img2.onmouseover = function(){
    changeImage(img2, "sources/img2color.png");
}

img2.onmouseout = function(){
    changeImageWithDelay(img2, "sources/img2.png", 2000); // 1-second delay
}

endImg.onmouseover = function(){
    changeImage(endImg, "sources/endImgcolor.png");
}

endImg.onmouseout = function(){
    changeImageWithDelay(endImg, "sources/endimg.png", 2000); // 1-second delay
}