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


    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('.image');
    
        images.forEach(image => {
            image.addEventListener('click', function() {
                // Scroll to the top of the page
                window.scrollTo({ top: 0, behavior: 'auto' });
    
                // Toggle active class for clicked image
                image.classList.toggle('active');
    
                // Toggle caption
                const caption = document.querySelector('.image-caption');
                if (image.classList.contains('active')) {
                    if (!caption) {
                        const newCaption = document.createElement('div');
                        newCaption.classList.add('image-caption');
                        newCaption.textContent = image.dataset.caption;
                        document.body.appendChild(newCaption);
                    } else {
                        caption.textContent = image.dataset.caption;
                    }
                } else {
                    if (caption) {
                        caption.remove();
                    }
                }
    
                // Toggle display for other images
                images.forEach(otherImage => {
                    if (otherImage !== image) {
                        otherImage.style.display = image.classList.contains('active') ? 'none' : 'inline-block';
                    }
                });
            });
        });
    
        // Remove image and caption when clicking outside the active image
        document.addEventListener('click', function(event) {
            if (!event.target.classList.contains('image') && !event.target.classList.contains('image-caption')) {
                const activeImage = document.querySelector('.image.active');
                if (activeImage) {
                    activeImage.classList.remove('active');
                    const caption = document.querySelector('.image-caption');
                    if (caption) {
                        caption.remove();
                    }
                    images.forEach(otherImage => {
                        otherImage.style.display = 'inline-block';
                    });
                }
            }
        });
    });
    