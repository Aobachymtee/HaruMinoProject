var images = [

  "Không Có Tiêu Đề1_20230523153035.png",

  "Passionate_Talk!.png",

  "IMG_3437.png"

];

var imageIndex = 0;

var imageElement = document.getElementById("image");

function changeImage() {

  imageIndex = (imageIndex + 1) % images.length;

  imageElement.src = "images/" + images[imageIndex];

}

setInterval(changeImage, 20000);

var creatorLink = document.getElementById("creator-link");

// Replace "https://example.com/creator-link" with the actual link you want to navigate to

var linkURL = "aobachymtee.carrd.co";

creatorLink.addEventListener("click", function() {

  window.location.href = linkURL;

});



