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

// let title = document.querySelectorAll("top");
// let caption = document.getElementsByClassName('caption');

// function toggleClass(elementId) {
//     var element = document.getElementById(elementId);
//     if (element.classList.contains('toggleOn')) {
//         element.classList.remove('toggleOn');

//     } else {
//         element.classList.add('toggleOn');
//         caption.style.display = "block";
//         title.style.color = "pink";
//     }
// }

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');

    images.forEach(image => {
        image.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'auto' });
            
            // Toggle active class for clicked image
            image.classList.toggle('active');

            // Toggle caption
            const caption = document.createElement('div');
            caption.classList.add('image-caption');
            caption.textContent = image.dataset.caption;
            document.body.appendChild(caption);

            // Toggle display for other images
            images.forEach(otherImage => {
                if (otherImage !== image) {
                    otherImage.style.display = 'none';
                }
            });

            // Remove image and caption when clicking outside the active image
            if (!image.classList.contains('active')) {
                document.querySelector('.image-caption').remove();
                images.forEach(otherImage => {
                    otherImage.style.display = 'inline';
                });
            }
        });
    });
});


