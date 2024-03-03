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