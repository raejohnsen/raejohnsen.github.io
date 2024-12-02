document.addEventListener('scroll', function () {
    const images = document.querySelectorAll('.image1');
    const windowHeight = window.innerHeight; // Height of the viewport
    const scrollPosition = window.scrollY; // Current scroll position
  
    images.forEach((image, index) => {
      const sectionHeight = windowHeight; // Height of each section
      const sectionStart = index * sectionHeight; // Start of this section
      const sectionEnd = sectionStart + sectionHeight; // End of this section
  
      // Check if the current scroll position is within the section for this image
      if (scrollPosition >= sectionStart && scrollPosition < sectionEnd) {
        image.style.opacity = 1; // Fully visible
      } else {
        image.style.opacity = 0; // Fully hidden
      }
    });
  });
  
  document.addEventListener('scroll', function () {
    const images = document.querySelectorAll('.image2');
    const windowHeight = window.innerHeight; // Height of the viewport
    const scrollPosition = window.scrollY; // Current scroll position
  
    images.forEach((image, index) => {
      const sectionHeight = windowHeight; // Height of each section
      const sectionStart = index * sectionHeight; // Start of this section
      const sectionEnd = sectionStart + sectionHeight; // End of this section
  
      // Check if the current scroll position is within the section for this image
      if (scrollPosition >= sectionStart && scrollPosition < sectionEnd) {
        image.style.opacity = 1; // Fully visible
      } else {
        image.style.opacity = 0; // Fully hidden
      }
    });
  });
  