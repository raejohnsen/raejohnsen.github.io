let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

// Show initial slide
showSlide(slideIndex);

// Handle navigation
document.addEventListener('keydown', handleKeydown);

function handleKeydown(e) {
  if (e.key === 'ArrowLeft') {
    showSlide(slideIndex - 1);
  } else if (e.key === 'ArrowRight') {
    showSlide(slideIndex + 1);
  } else if (e.key === 'Escape') {
    closeFullscreen();
  }
}

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  slideIndex = index;

  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });

//   // Toggle fullscreen mode
//   if (document.fullscreenElement) {
//     closeFullscreen();
//   } else {
//     openFullscreen();
//   }
// }

// function openFullscreen() {
//   const elem = document.getElementById('fullscreen-slideshow');
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//   } else if (elem.mozRequestFullScreen) { /* Firefox */
//     elem.mozRequestFullScreen();
//   } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) { /* IE/Edge */
//     elem.msRequestFullscreen();
//   }
// }

// function closeFullscreen() {
//   if (document.exitFullscreen) {
//     document.exitFullscreen();
//   } else if (document.mozCancelFullScreen) { /* Firefox */
//     document.mozCancelFullScreen();
//   } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
//     document.webkitExitFullscreen();
//   } else if (document.msExitFullscreen) { /* IE/Edge */
//     document.msExitFullscreen();
//   }
}
