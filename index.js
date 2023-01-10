const track = document.querySelector('.exp-carousel__track');
const slides = Array.from(track.children);

console.log(slides)

const nextButton = document.querySelector('.exp-carousel__button--right');
const prevButton = document.querySelector('.exp-carousel__button--left');
const dotsNav = document.querySelector('.exp-carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;



// arrange slides next to one another

const setSlidePosition = (slide, index) => {

    slide.style.left = slideWidth * index + 'px';

}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {

    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('exp-current-slide');
    targetSlide.classList.add('exp-current-slide');

}

const updateDots = (currentDot, targetDot) => {

    currentDot.classList.remove('exp-current-slide');
    targetDot.classList.add('exp-current-slide');

}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {

    if(targetIndex === 0) {

        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');

    } else if(targetIndex === slides.length - 1) {

        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');

    } else {

        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');

    }

}

// when I click left, move slides to the left

prevButton.addEventListener('click', e => {

    const currentSlide = track.querySelector('.exp-current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.exp-current-slide');
    const prevDot = currentDot.previousElementSibling;
    prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);

}) 

// when I click right, move slides to the right

nextButton.addEventListener('click', e => {

    const currentSlide = track.querySelector('.exp-current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.exp-current-slide');
    const nextDot = currentDot.nextElementSibling;
    nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);

    hideShowArrows(slides, prevButton, nextButton, nextIndex);

})

// when I click the nav indicators, move to selected slide

dotsNav.addEventListener('click', e => {

    // what indicator did we click
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = track.querySelector('.exp-current-slide');
    const currentDot = dotsNav.querySelector('.exp-current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    updateDots(currentDot, targetDot);

    hideShowArrows(slides, prevButton, nextButton, targetIndex);

})