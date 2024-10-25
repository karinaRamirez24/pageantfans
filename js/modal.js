function mostrarModal() {
    document.getElementById("modalContainer").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modalContainer").style.display = "none";
}

/// CODIGO DE SLIDER ///

let slideIndex = 1;

function showSlides(n) {
    let i;
    const slides = document.querySelector('.slides');
    const dots = document.getElementsByClassName('dot');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (n > totalSlides) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = totalSlides;
    }

    slides.style.transform = `translateX(${-100 * (slideIndex - 1)}%)`;

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    dots[slideIndex - 1].classList.add('active');
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function addDots() {
    const dotsContainer = document.getElementById('dots');
    const totalSlides = document.querySelectorAll('.slide').length;

    for (let i = 1; i <= totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('onclick', `currentSlide(${i})`);
        dotsContainer.appendChild(dot);
    }

    dotsContainer.children[slideIndex - 1].classList.add('active');
}

addDots();

showSlides(slideIndex);