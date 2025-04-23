let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function mostrarSlide(index) {
  if (index >= totalSlides) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = totalSlides - 1;
  } else {
    slideIndex = index;
  }
  const offset = -slideIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

function mudarSlide(n) {
  mostrarSlide(slideIndex + n);
}

// Transição automática a cada 5 segundos
setInterval(() => {
  mudarSlide(1);
}, 10000);

mostrarSlide(0);