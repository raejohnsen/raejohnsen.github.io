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

let caption = document.getElementsByClassName('caption');


function toggleClass(elementId) {
    var element = document.getElementById(elementId);
    if (element.classList.contains('toggleOn')) {
        element.classList.remove('toggleOn');
        

    } else {
        element.classList.add('toggleOn');
        caption.style.display="block";
    }
}


// function toggleClass() {
//   var element = document.getElementById("green");
//   element.classList.toggle("toggleOn");
// }

// function toggleClass() {
//   var element = document.getElementById("construct");
//   element.classList.toggle("toggleOn");
// }
// function toggleClass() {
//   var element = document.getElementById("jacobs");
//   element.classList.toggle("toggleOn");
// }
// function toggleClass() {
//   var element = document.getElementById("paper");
//   element.classList.toggle("toggleOn");
// }
// function toggleClass() {
//   var element = document.getElementById("nasa");
//   element.classList.toggle("toggleOn");
// }
// function toggleClass() {
//   var element = document.getElementById("posters");
//   element.classList.toggle("toggleOn");
// }
// function toggleClass() {
//   var element = document.getElementById("belafonte");
//   element.classList.toggle("toggleOn");
// }

// let greenImg = document.getElementById("green");
// greenImg.addEventListener("click", function() {;
//     greenImg.style.width = "100vw";
//     greenImg.style.height = "auto";
//     greenImg.style.zIndex = "9998";
//     greenImg.style.position = "absolute";
// });

// let constructImg = document.getElementById("construct");
// constructImg.addEventListener("click", function() {;
//     constructImg.style.width = "100vw";
//     constructImg.style.height = "auto";
//     constructImg.style.top = "110px";
//     constructImg.style.zIndex = "9998";
//     constructImg.style.position = "absolute";
// });

// let jacobsImg = document.getElementById("jacobs");
// jacobsImg.addEventListener("click", function() {;
//     jacobsImg.style.width = "100vw";
//     jacobsImg.style.height = "auto";
//     jacobsImg.style.top = "110px";
//     jacobsImg.style.zIndex = "9998";
//     jacobsImg.style.position = "absolute";
// });

// function getPics() {} //just for this demo
// const imgs = document.querySelectorAll('.gallery img');
// const fullPage = document.querySelector('#fullpage');

// imgs.forEach(img => {
//   img.addEventListener('click', function() {
//     fullPage.style.backgroundImage = 'url(' + img.src + ')';
//     fullPage.style.display = 'block';
//     image.style.display = 'fixed';
//   });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const targetDiv = document.getElementById('targetDiv');
//     const images = document.querySelectorAll('.image');
  
//     images.forEach(image => {
//       image.addEventListener('click', function() {
//         toggleVisibility(targetDiv);
//       });
//     });

//     fullPage.addEventListener('click', function() {
//         targetDiv.style.display = 'flex';
//     });
  
//     function toggleVisibility(element) {
//       if (element.style.display === 'none') {
//         element.style.display = 'block';
//       } else {
//         element.style.display = 'none';
//       }
//     }
//   });