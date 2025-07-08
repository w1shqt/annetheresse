// Floating carousel logic
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-img');
function updateCarousel() {
    slides.forEach((img, i) => {
        img.classList.remove('active', 'left', 'right');
        if (i === currentSlide) {
            img.classList.add('active');
        } else if (i === (currentSlide === 0 ? slides.length - 1 : currentSlide - 1)) {
            img.classList.add('left');
        } else if (i === (currentSlide === slides.length - 1 ? 0 : currentSlide + 1)) {
            img.classList.add('right');
        }
    });
}
function nextSlide() {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateCarousel();
}
setInterval(nextSlide, 4000);
updateCarousel();