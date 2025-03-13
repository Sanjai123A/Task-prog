let index = 0;

function showSlide(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (n >= totalSlides) {
        index = 0;
    } else if (n < 0) {
        index = totalSlides - 1;
    } else {
        index = n;
    }

    const newTransform = -index * 100 + '%';
    slides.style.transform = 'translateX(' + newTransform + ')';
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

// Auto slide every 3 seconds
setInterval(() => {
    nextSlide();
}, 3000);
