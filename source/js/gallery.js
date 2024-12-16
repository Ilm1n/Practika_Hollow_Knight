const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevSlide');
const nextButton = document.getElementById('nextSlide');
const infoText = document.querySelector('.slider-info');

let currentSlide = 0;

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });

    infoText.textContent = `${currentSlide + 1} из ${slides.length}`
    prevButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === slides.length - 1;
}

function goToPrevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
}

function goToNextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlider();
    }
}

prevButton.addEventListener('click', goToPrevSlide);
nextButton.addEventListener('click', goToNextSlide);

updateSlider();