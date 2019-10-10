// navigation
document.querySelector('#nav').innerHTML = document.querySelector('noscript').innerText;
const button = document.createElement('button');
button.id = 'site_nav_button';
button.innerHTML = '&times;';
// button.setAttribute('aria-label', 'close navigation');
document.querySelector('.site__navigation').prepend(button);
document.querySelector('.site__navigation').style = 'display: none';

const openNav = (display, opacity) => {
  document.querySelector('.site__navigation').style = opacity;
  setTimeout(() => {document.querySelector('.site__navigation').style = display}, 10);
};
const closeNav = (display, opacity) => {
  document.querySelector('.site__navigation').style = opacity;
  setTimeout(() => {document.querySelector('.site__navigation').style = display}, 500);
};
document.querySelector('#main_nav').addEventListener('click', (event) => {
  document.querySelector('.site__navigation').classList.toggle('open');
  openNav('display: block;','opacity: 0;');
  // document.querySelector('#site_nav_button').focus();
  event.preventDefault();
});
document.querySelector('#site_nav_button').addEventListener('click', (event) => {
  document.querySelector('.site__navigation').classList.toggle('open');
  closeNav('display: none;','opacity: 0;');
  // document.querySelector('#main_nav').focus();
  event.preventDefault();
});


//carousel
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel__slides");
  var dots = document.getElementsByClassName("carousel__dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" carousel__active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " carousel__active";
}

// gallery
function gallery(image) {
  const img = document.createElement('img');
  img.src = image;
  document.querySelector('#galleryStage').classList.toggle('open');
  document.querySelector('#galleryStage').prepend(img);
  document.querySelector('#galleryStage').addEventListener('click', revealGallery);
  event.preventDefault();
}

const revealGallery = (event) => {
  document.querySelector('#galleryStage').classList.toggle('open');
  document.querySelector('#galleryStage').removeEventListener('click', revealGallery);
  document.querySelector('#galleryStage img').remove();
}
