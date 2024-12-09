const slider = document.querySelector('.slider');
const dots = document.querySelector('.dots');
const arrDots = Array.from(dots.children);
const slides = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

let slideNo = 0;

// Function to reset and trigger animation for the side-content
const triggerAnimation = (slide) => {
    const sideContent = slide.querySelector('.side-content');
    // Remove the animation and trigger a reflow to reset it
    sideContent.style.animation = 'none';
    sideContent.offsetHeight; // Trigger reflow to reset the animation
    sideContent.style.animation = 'slide 0.9s ease-in-out forwards'; // Reapply the animation
};

// Function to go to the next slide
const nextSlide = () => {
    if (slideNo >= slides.length) {
        slideNo = 0;
    }
    slideNo++;
    slides.forEach((s, i) => {
        if (i === slideNo - 1) {
            s.classList.add('active');
            arrDots[i].classList.add('active');
            triggerAnimation(s); // Trigger the animation when this slide is active
        } else {
            s.classList.remove('active');
            arrDots[i].classList.remove('active');
        }
    });
};

// Set up automatic slide change every 2.5 seconds
let si = setInterval(nextSlide, 2500);

// Pause the slideshow when mouse hovers over the slider
slider.addEventListener('mouseover', () => {
    clearInterval(si);
});

// Restart the slideshow when mouse leaves the slider
slider.addEventListener('mouseout', () => {
    si = setInterval(nextSlide, 2500);
});

// Handle dot click to go to specific slide
arrDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        slideNo = i;
        slides.forEach((s, j) => {
            if (j === i) {
                s.classList.add('active');
                arrDots[j].classList.add('active');
                triggerAnimation(s); // Trigger the animation when this slide is active
            } else {
                s.classList.remove('active');
                arrDots[j].classList.remove('active');
            }
        });
    });
});

// Handle arrow left click to go to previous slide
arrowLeft.addEventListener('click', () => {
    slideNo--;
    if (slideNo < 0) {
        slideNo = slides.length - 1;
    }
    slides.forEach((s, i) => {
        if (i === slideNo) {
            s.classList.add('active');
            arrDots[i].classList.add('active');
            triggerAnimation(s); // Trigger the animation when this slide is active
        } else {
            s.classList.remove('active');
            arrDots[i].classList.remove('active');
        }
    });
});

// Handle arrow right click to go to next slide
arrowRight.addEventListener('click', () => {
    slideNo++;
    if (slideNo >= slides.length) {
        slideNo = 0;
    }
    slides.forEach((s, i) => {
        if (i === slideNo) {
            s.classList.add('active');
            arrDots[i].classList.add('active');
            triggerAnimation(s); // Trigger the animation when this slide is active
        } else {
            s.classList.remove('active');
            arrDots[i].classList.remove('active');
        }
    });
});
