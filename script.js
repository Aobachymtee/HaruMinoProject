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

// Modal

var modal = document.getElementById("popup-modal");

var modalLink = document.getElementById("popup-link");

var close = document.getElementsByClassName("close")[0];

modalLink.addEventListener("click", function(event) {

  event.preventDefault(); // Prevent the default link behavior

  modal.style.display = "block";

});

close.addEventListener("click", function() {

  modal.style.display = "none";

});

window.addEventListener("click", function(event) {

  if (event.target == modal) {

    modal.style.display = "none";

  }

});

// Rest of your existing JavaScript code
