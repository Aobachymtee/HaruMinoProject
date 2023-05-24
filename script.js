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

// YouTube Video Player
var player;
var videoId = "SKbutknpQ_I"; // Replace with your YouTube video ID

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    videoId: videoId,
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 0,
      showinfo: 0,
      mute: 1,
      modestbranding: 1
    },
    events: {
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();

  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function() {
    if (event.target.isMuted()) {
      event.target.unMute();
      pauseButton.textContent = "Pause Music";
    } else {
      event.target.mute();
      pauseButton.textContent = "Play Music";
    }
  });
}
