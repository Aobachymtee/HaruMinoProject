var images = [

  "image1.jpg",

  "image2.jpg",

  "image3.jpg"

];

var imageIndex = 0;

var imageElement = document.getElementById("image");

function changeImage() {

  imageIndex = (imageIndex + 1) % images.length;

  imageElement.src = "images/" + images[imageIndex];

}

setInterval(changeImage, 20000);
