
const slides = document.querySelectorAll('.headerText');
const prevBtn = document.querySelector('.leftBtn');
const nextBtn = document.querySelector('.rightBtn'); 
const circleBtn = document.querySelectorAll(".circle");
let currentSlide = 0;
circleBtn[0].style.opacity = "1";
circleBtn[0].style.backgroundColor = "white";

function updateSliderPosition(slides, currentSlide) {
    const offset = `${-1 * currentSlide * 100}%`;
    for (let slide of slides) {
        slide.style.transform = `translateX(${offset})`;
    }
}

function updateCircleBtn(circleBtn, currentSlide) {
    circleBtn.forEach(button => {
        button.style.opacity = "0.4"; 
    });

    circleBtn[currentSlide].style.opacity = "1"; 
     
}

function go_left() {
    
    if (currentSlide !== 0) {
        currentSlide--;
        updateSliderPosition(slides, currentSlide);
        updateCircleBtn(circleBtn, currentSlide);
    }
}

function go_right() {
    
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSliderPosition(slides, currentSlide);
        updateCircleBtn(circleBtn, currentSlide);
    }
}

prevBtn.addEventListener('click',go_left);
nextBtn.addEventListener('click', go_right);


circleBtn.forEach((btn, ind) => {
    btn.addEventListener("click", () => {
        currentSlide = ind;
        updateSliderPosition(slides, currentSlide);
        updateCircleBtn(circleBtn, currentSlide);
    });
});

// второй слайдер

const rooteImg = document.querySelectorAll(".rooteImg");
const mainThreeLeft = document.querySelector(".mainThreeLeft");
const mainThreeRight = document.querySelector(".mainThreeRight");
const mainThreeCicle = document.querySelectorAll(".mainThreeCicle");


let currentRoote = 0;
mainThreeCicle[0].style.opacity = "1";

function goLeft() {
    
    if (currentRoote !== 0) {
        currentRoote--;
        updateSliderPosition(rooteImg, currentRoote);
        updateCircleBtn(mainThreeCicle, currentRoote);
    }
}

function goRight() {
    
    if (currentRoote < rooteImg.length - 1) {
        currentRoote++;
        updateSliderPosition(rooteImg, currentRoote);
        updateCircleBtn(mainThreeCicle, currentRoote);
    }
}
mainThreeLeft.addEventListener('click', goLeft)
mainThreeRight.addEventListener('click', goRight)
   



mainThreeCicle.forEach((btn, ind) => {
    btn.addEventListener("click", () => {
        currentRoote = ind;
        updateSliderPosition(rooteImg, currentRoote);
        updateCircleBtn(mainThreeCicle, currentRoote)
    });
});




// третий слайдер

const rootFourDisplay = document.querySelectorAll(".rootFourDisplay"); // Change to querySelectorAll
const mainFourLeft = document.querySelector(".mainFourLeft");
const mainFourRight = document.querySelector(".mainFourRight");
const mainFourCicle = document.querySelectorAll(".mainFourCicle");

let currentFourRoot = 0;
mainFourCicle[0].style.opacity = "1";

function goLeftFour() {
    if (currentFourRoot !== 0) {
        currentFourRoot--;
        updateSliderPosition(rootFourDisplay, currentFourRoot);
        updateCircleBtn(mainFourCicle, currentFourRoot);
    }
}

function goRightFour() {
    if (currentFourRoot < rootFourDisplay.length - 1) { 
        currentFourRoot++;
        updateSliderPosition(rootFourDisplay, currentFourRoot);
        updateCircleBtn(mainFourCicle, currentFourRoot);
    }
}

mainFourLeft.addEventListener('click', goLeftFour);
mainFourRight.addEventListener('click', goRightFour);

mainFourCicle.forEach((btn, ind) => {
    btn.addEventListener("click", () => {
        currentFourRoot = ind;
        updateSliderPosition(rootFourDisplay, currentFourRoot);
        updateCircleBtn(mainFourCicle, currentFourRoot);
    });
});
