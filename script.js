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

var linkURL = "https://aobachymtee.carrd.co";

creatorLink.addEventListener("click", function() {

  window.location.href = linkURL;

});

// Popup

var popup = document.getElementById("popup");

var popupLink = document.getElementById("popup-link");

var closePopup = document.getElementsByClassName("close")[0];

popupLink.addEventListener("click", function(event) {

  event.preventDefault(); // Prevent the default link behavior

  popup.style.display = "block";

});

closePopup.addEventListener("click", function() {

  popup.style.display = "none";

});

window.addEventListener("click", function(event) {

  if (event.target == popup) {

    popup.style.display = "none";

  }

});

// Rest of your existing JavaScript code


