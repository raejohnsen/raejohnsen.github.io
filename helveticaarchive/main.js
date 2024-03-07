window.addEventListener('scroll', function() {
    var elements = document.getElementsByClassName('coloredElement');
    var scrollPosition = window.scrollY;

    // Iterate over all elements with the class 'coloredElement'
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        // Adjust scroll position value as needed
        if (scrollPosition >= 13) { // Change color at scroll position 200px
            element.classList.add('color-change');
        } else {
            element.classList.remove('color-change');
        }
    }
});

function getPics() {} //just for this demo
const imgs = document.querySelectorAll('.gallery img');
const fullPage = document.querySelector('#fullpage');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
    image.style.display = 'fixed';
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const targetDiv = document.getElementById('targetDiv');
    const images = document.querySelectorAll('.image');
  
    images.forEach(image => {
      image.addEventListener('click', function() {
        toggleVisibility(targetDiv);
      });
    });

    fullPage.addEventListener('click', function() {
        targetDiv.style.display = 'flex';
    });
  
    function toggleVisibility(element) {
      if (element.style.display === 'none') {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    }
  });