document.addEventListener('scroll', function () {
    const images = document.querySelectorAll('.image');
    const windowHeight = window.innerHeight; // Height of the viewport
    const scrollPosition = window.scrollY; // Current scroll position
  
    images.forEach((image, index) => {
      const sectionHeight = windowHeight; // Height of each section
      const sectionStart = index * sectionHeight * 0.6; // Start of this section
      const sectionEnd = sectionStart + sectionHeight * 0.6; // End of this section
  
      // Check if the current scroll position is within the section for this image
      if (scrollPosition >= sectionStart && scrollPosition < sectionEnd) {
        image.style.opacity = 1; // Fully visible
      } else {
        image.style.opacity = 0; // Fully hidden
      }
    });
  });
  