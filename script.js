// scripts.js

let currentIndex = 0;

function showImage(index) {
  const gallery = document.querySelector('.gallery');
  const images = document.querySelectorAll('.gallery-image');
  const totalImages = images.length;

  if (index >= totalImages) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalImages - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100; // Adjust the offset to show the current image
  gallery.style.transform = `translateX(${offset}%)`;
}

function nextImage() {
  showImage(currentIndex + 1);
}

function prevImage() {
  showImage(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
  showImage(currentIndex);
});
