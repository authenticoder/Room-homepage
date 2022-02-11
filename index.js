const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const heroImages = document.querySelectorAll('.hero-image');
const heroTexts = document.querySelectorAll('.text');
const hamburger = document.querySelector('div.one');
const logo = document.querySelector('div.two.jadeed');
const logos = document.querySelector('div.logos');
const nav = document.querySelector('nav');
const x = document.querySelector('ul > div.first');
console.log(logo);

let currentlySelected = 0;

prevBtn.addEventListener('click', function() {
    nextBtn.disabled = false;
    heroImages[currentlySelected].classList.remove('active');
    heroTexts[currentlySelected].classList.remove('active');
    currentlySelected--;
    heroImages[currentlySelected].classList.add('active');
    heroTexts[currentlySelected].classList.add('active');

    if (currentlySelected === 0) {
        prevBtn.disabled = true;
    }
})

nextBtn.addEventListener('click', function() {
    prevBtn.disabled = false;
    heroImages[currentlySelected].classList.remove('active');
    heroTexts[currentlySelected].classList.remove('active');
    currentlySelected++;
    heroImages[currentlySelected].classList.add('active');
    heroTexts[currentlySelected].classList.add('active');
    
    if (currentlySelected + 1 === heroImages.length) {
        nextBtn.disabled = true;
    }
})

hamburger.addEventListener('click', function() {
    logo.setAttribute("style", "display: none");
    logos.setAttribute("style", "display: none");
    nav.setAttribute("style", "display: block");
})

x.addEventListener('click', function() {
    nav.setAttribute("style", "display: none");
    logos.setAttribute("style", "display: flex");
})