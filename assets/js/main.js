// Loading Page
$(document).ready(function() {
    $('#load-overlay').css('opacity', '0');
});


// Zenscroll Settings
let defaultDuration = 1200; // ms
let edgeOffset = 110; // px
zenscroll.setup(defaultDuration, edgeOffset);


// Disable scroll restoration
// history.scrollRestoration = 'manual';


// Back to Top Icon Fade
// https://stackoverflow.com/a/37293571
let $btn = $('.back-to-top'),
    isGoingToTop = false; // Prevents button flashing as scrolling up

(function() {
    $(window).scroll(function() {
        toggleBackToTop();
    });
    // Show and hide back to top button 
    function toggleBackToTop() {
        let offset = 100, // Offset position when to show
            scrollTop = 0;
        
        scrollTop = $(window).scrollTop();
        
        if (scrollTop >= offset && !isGoingToTop) {
            $btn.fadeIn();
        } else {
            $btn.fadeOut();
            if (scrollTop == 0) {
                isGoingToTop = false;
            }
        }
    }
})();


// Hide the button when clicked
$btn.click(function() {
    $btn.fadeOut();
    isGoingToTop = true;
});
