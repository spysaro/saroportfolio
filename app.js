$(document).ready(function () {
    // Function to handle scrolling
    $(window).scroll(function () {
        // Check if window is scrolled more than 550px
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }
    });

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        // Check if the link has a hash value
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store the hash value
            var hash = this.hash;

            // Use jQuery's animate() method for smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add hash (#) to URL when done scrolling
                window.location.hash = hash;
            });
        }
    });
});
