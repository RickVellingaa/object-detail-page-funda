let heartAnim = document.querySelector('.heart-animation')
let heartColor = document.querySelector('.fa-heart')

heartAnim.addEventListener('click', heartAnimation);

const calculateHeight = () => {
  return '1.2em';
}

function heartAnimation(event) {
  heartAnim.style.setProperty('--height', calculateHeight());
  heartColor.style.color = "red";
  event.preventDefault();
}

function ReadMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Lees meer";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Lees minder";
    moreText.style.display = "inline";
  }
}

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function (event) {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  event.preventDefault();
}

img1.onclick = function (event) {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  event.preventDefault();
}

img2.onclick = function (event) {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  event.preventDefault();
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

modal.onclick = function () {
  modal.style.display = "none";
}