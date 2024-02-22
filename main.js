
// the below color randomization/hover JS is sourced from ChatGPT

      document.addEventListener("DOMContentLoaded", function() {
          const colors = ["#D3FF87", "#FF87D3", "#87FFB6", "#FF004F", "#E4B7FF", "#B7FFFA", "#ffa591"];
          
          function getRandomColor() {
            return colors[Math.floor(Math.random() * colors.length)];
          }
        
          const randomColor = getRandomColor(); // Get a random color once
        
          const colorElement = document.querySelector('.color');
          const linkElements = document.querySelectorAll('.link'); // Select all elements with class "link"
        
          // Apply the same random color to both elements
          colorElement.style.color = randomColor;
          linkElements.forEach(function(linkElement) {
            const originalColor = window.getComputedStyle(linkElement).color;
            linkElement.dataset.originalColor = originalColor; // Store original color
            linkElement.addEventListener('mouseover', function() {
              this.style.color = randomColor;
            });
            linkElement.addEventListener('mouseout', function() {
              this.style.color = originalColor; // Reset color on mouseout
            });
          });
        });