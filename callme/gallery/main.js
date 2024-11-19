// Array of photo URLs
      const photoArray = [
        'sources/acme.png',
        'sources/yellowswatch.png',
        'sources/keychain.png',
        'sources/aftersun.png',
        'sources/snoopy.png'
      ];
  
      // Function to shuffle the photo array
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
  
      // Function to randomly position photos on the page
      function placePhotos() {
        const shuffledPhotos = shuffleArray(photoArray); // Shuffle the photo order
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
  
        shuffledPhotos.forEach(url => {
          const img = document.createElement('img');
          img.src = url;
          img.className = 'photo';
          img.style.width = '150px'; // Adjust photo size as needed
          img.style.left = Math.random() * (windowWidth - 150) + 'px';
          img.style.top = Math.random() * (windowHeight - 150) + 'px';
          document.body.appendChild(img);
        });
      }
  
      // Initialize placement of photos
      placePhotos();
  
      // Reposition photos when the window is resized
      window.addEventListener('resize', () => {
        document.body.innerHTML = ''; // Clear existing images
        placePhotos();
      });