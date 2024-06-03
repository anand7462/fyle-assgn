function changeImage(imageSrc) {
    document.getElementById('displayImage').src = imageSrc;
}

let slideIndex = 1;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const totalSlides = document.querySelectorAll('.slide').length - 2; // Adjust for the duplicate slides

function showSlides(index) {
    if (index > totalSlides) {
        slideIndex = 1;
    } else if (index < 1) {
        slideIndex = totalSlides;
    } else {
        slideIndex = index;
    }

    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(${-slideIndex * (100 / totalSlides)}%)`;

    dots.forEach((dot, i) => dot.classList.toggle('active', i === slideIndex - 1));
}

function currentSlide(index) {
    showSlides(index);
}

slides.addEventListener('transitionend', () => {
    if (slideIndex === totalSlides + 1) {
        slides.style.transition = 'none';
        slideIndex = 1;
        slides.style.transform = `translateX(${-slideIndex * (100 / totalSlides)}%)`;
        setTimeout(() => slides.style.transition = 'transform 0.5s ease-in-out', 0);
    } else if (slideIndex === 0) {
        slides.style.transition = 'none';
        slideIndex = totalSlides;
        slides.style.transform = `translateX(${-slideIndex * (100 / totalSlides)}%)`;
        setTimeout(() => slides.style.transition = 'transform 0.5s ease-in-out', 0);
    }
});

setInterval(() => {
    showSlides(slideIndex + 1);
}, 3000);

showSlides(slideIndex);