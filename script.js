// select all images
const images = document.querySelectorAll(".gallery img");

// loop through images
images.forEach(function(img) {

    // when image is clicked
    img.addEventListener("click", function() {

        // open image in new tab (simple feature)
        window.open(img.src);

    });

});