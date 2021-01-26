window.addEventListener('load', function() {
    document.getElementById('load-overlay').style.opacity = 0;
});

let defaultDuration = 1200; // ms
let edgeOffset = 110; // px
zenscroll.setup(defaultDuration, edgeOffset);
