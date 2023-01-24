// Experiences Carousel

const expTrack = document.querySelector('.exp-carousel__track');
const expSlides = Array.from(expTrack.children);

console.log(expSlides)

const expNextButton = document.querySelector('.exp-carousel__button--right');
const expPrevButton = document.querySelector('.exp-carousel__button--left');
const expDotsNav = document.querySelector('.exp-carousel__nav');
const expDots = Array.from(expDotsNav.children);

const expSlideWidth = expSlides[0].getBoundingClientRect().width;



// arrange slides next to one another

const expSetSlidePosition = (slide, index) => {

    slide.style.left = expSlideWidth * index + 'px';

}

expSlides.forEach(expSetSlidePosition);

const expMoveToSlide = (track, currentSlide, targetSlide) => {

    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('exp-current-slide');
    targetSlide.classList.add('exp-current-slide');

}

const expUpdateDots = (currentDot, targetDot) => {

    currentDot.classList.remove('exp-current-slide');
    targetDot.classList.add('exp-current-slide');

}

const expHideShowArrows = (slides, prevButton, nextButton, targetIndex) => {

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

expPrevButton.addEventListener('click', e => {

    const currentSlide = expTrack.querySelector('.exp-current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = expDotsNav.querySelector('.exp-current-slide');
    const prevDot = currentDot.previousElementSibling;
    prevIndex = expSlides.findIndex(slide => slide === prevSlide);

    expMoveToSlide(expTrack, currentSlide, prevSlide);

    expUpdateDots(currentDot, prevDot);

    expHideShowArrows(expSlides, expPrevButton, expNextButton, prevIndex);

}) 

// when I click right, move slides to the right

expNextButton.addEventListener('click', e => {

    const currentSlide = expTrack.querySelector('.exp-current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = expDotsNav.querySelector('.exp-current-slide');
    const nextDot = currentDot.nextElementSibling;
    nextIndex = expSlides.findIndex(slide => slide === nextSlide);

    expMoveToSlide(expTrack, currentSlide, nextSlide);

    expUpdateDots(currentDot, nextDot);

    expHideShowArrows(expSlides, expPrevButton, expNextButton, nextIndex);

})

// when I click the nav indicators, move to selected slide

expDotsNav.addEventListener('click', e => {

    // what indicator did we click
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = expTrack.querySelector('.exp-current-slide');
    const currentDot = expDotsNav.querySelector('.exp-current-slide');
    const targetIndex = expDots.findIndex(dot => dot === targetDot);
    const targetSlide = expSlides[targetIndex];

    expMoveToSlide(expTrack, currentSlide, targetSlide);

    expUpdateDots(currentDot, targetDot);

    expHideShowArrows(expSlides, expPrevButton, expNextButton, targetIndex);

})

// Projects Carousel

const projTrack = document.querySelector('.proj-carousel__track');
const projSlides = Array.from(projTrack.children);

console.log(projSlides)

const projNextButton = document.querySelector('.proj-carousel__button--right');
const projPrevButton = document.querySelector('.proj-carousel__button--left');
const projDotsNav = document.querySelector('.proj-carousel__nav');
const projDots = Array.from(projDotsNav.children);

const projSlideWidth = projSlides[0].getBoundingClientRect().width;



// arrange slides next to one another

const projSetSlidePosition = (slide, index) => {

    slide.style.left = projSlideWidth * index + 'px';

}

projSlides.forEach(projSetSlidePosition);

const projMoveToSlide = (track, currentSlide, targetSlide) => {

    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('proj-current-slide');
    targetSlide.classList.add('proj-current-slide');

}

const projUpdateDots = (currentDot, targetDot) => {

    currentDot.classList.remove('proj-current-slide');
    targetDot.classList.add('proj-current-slide');

}

const projHideShowArrows = (slides, prevButton, nextButton, targetIndex) => {

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

projPrevButton.addEventListener('click', e => {

    const currentSlide = projTrack.querySelector('.proj-current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = projDotsNav.querySelector('.proj-current-slide');
    const prevDot = currentDot.previousElementSibling;
    prevIndex = projSlides.findIndex(slide => slide === prevSlide);

    projMoveToSlide(projTrack, currentSlide, prevSlide);

    projUpdateDots(currentDot, prevDot);

    projHideShowArrows(projSlides, projPrevButton, projNextButton, prevIndex);

}) 

// when I click right, move slides to the right

projNextButton.addEventListener('click', e => {

    const currentSlide = projTrack.querySelector('.proj-current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = projDotsNav.querySelector('.proj-current-slide');
    const nextDot = currentDot.nextElementSibling;
    nextIndex = projSlides.findIndex(slide => slide === nextSlide);

    projMoveToSlide(projTrack, currentSlide, nextSlide);

    projUpdateDots(currentDot, nextDot);

    projHideShowArrows(projSlides, projPrevButton, projNextButton, nextIndex);

})

// when I click the nav indicators, move to selected slide

projDotsNav.addEventListener('click', e => {

    // what indicator did we click
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = projTrack.querySelector('.proj-current-slide');
    const currentDot = projDotsNav.querySelector('.proj-current-slide');
    const targetIndex = projDots.findIndex(dot => dot === targetDot);
    const targetSlide = projSlides[targetIndex];

    projMoveToSlide(projTrack, currentSlide, targetSlide);

    projUpdateDots(currentDot, targetDot);

    projHideShowArrows(projSlides, projPrevButton, projNextButton, targetIndex);

})