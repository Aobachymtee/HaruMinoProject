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


// Announcement Modal

var announcementModal = document.getElementById("announcement-modal");

var announcementLink = document.getElementById("announcement-link");

var closeAnnouncement = document.getElementsByClassName("close")[0];

announcementLink.addEventListener("click", function(event) {

  event.preventDefault(); // Prevent the default link behavior

  announcementModal.style.display = "block";

});

closeAnnouncement.addEventListener("click", function() {

  announcementModal.style.display = "none";

});

window.addEventListener("click", function(event) {

  if (event.target === announcementModal) {

    announcementModal.style.display = "none";

  }

});

// Background Music
var backgroundMusic = document.getElementById("background-music");
var pauseButton = document.getElementById("pause-button");

document.addEventListener("DOMContentLoaded", function() {
  backgroundMusic.play();
});

pauseButton.addEventListener("click", function() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    pauseButton.textContent = "Pause Music";
  } else {
    backgroundMusic.pause();
    pauseButton.textContent = "Play Music";
  }
});
