const sliderContainer = document.querySelector('.root');
const slides = document.querySelectorAll('.headerText');
const prevBtn = document.querySelectorAll('.leftRightBtn')[0]; // Первая кнопка
const nextBtn = document.querySelectorAll('.leftRightBtn')[1]; // Вторая кнопка
const circleBtn = document.querySelectorAll(".circle");
let currentSlide = 0;
circleBtn[0].style.opacity = "1";
circleBtn[0].style.backgroundColor = "white";

function updateSliderPosition() {
    const offset = `${-1 * currentSlide * 100}%`;
    for (let slide of slides) {
        slide.style.transform = `translateX(${offset})`;
    }
}

function updateCircleBtn() {
    circleBtn.forEach(button => {
        button.style.opacity = "0.4"; 
        button.style.backgroundColor = ""; 
    });

    circleBtn[currentSlide].style.opacity = "1"; 
    circleBtn[currentSlide].style.backgroundColor = "white"; 
}

function go_left() {
    if (currentSlide !== 0) {
        currentSlide--;
        updateSliderPosition();
        updateCircleBtn();
    }
}

function go_right() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSliderPosition();
        updateCircleBtn();
    }
}

prevBtn.addEventListener('click', go_left);
nextBtn.addEventListener('click', go_right);


circleBtn.forEach((btn, ind) => {
    btn.addEventListener("click", () => {
        currentSlide = ind;
        updateSliderPosition();
        updateCircleBtn();
    });
});

// второй слайдер

const rooteImg = document.querySelectorAll(".rooteImg");
const mainThreeLeft = document.querySelector(".mainThreeLeft");
const mainThreeRight = document.querySelector(".mainThreeRight");
const mainThreeCicle = document.querySelectorAll(".mainThreeCicle");
const mainThreeDisplay = document.querySelector(".mainThreeDisplay");

let currentRoote = 0;
mainThreeCicle[0].style.opacity = "1";


function updateSliderPositionTwo() {
    const offsetTwo = `${-1 * currentRoote * 1200}px`;
    for(let slide of rooteImg){
    slide.style.transform = `translateX(${offsetTwo})`;
    } 
}

mainThreeLeft.addEventListener('click', () => {
    if (currentRoote > 0) {
        currentRoote--;
        updateSliderPositionTwo();
        updateCircles();
    }
});

mainThreeRight.addEventListener('click', () => {
    if (currentRoote < rooteImg.length - 1) {
        currentRoote++;
        updateSliderPositionTwo();
        updateCircles();
    }
});

function updateCircles() {
    mainThreeCicle.forEach(circle => {
        circle.style.opacity = "0.4";
       
    });
    mainThreeCicle[currentRoote].style.opacity = "1";
   
}

mainThreeCicle.forEach((btn, ind) => {
    btn.addEventListener("click", () => {
        currentRoote = ind;
        updateSliderPositionTwo();
        updateCircles();
    });
});

updateSliderPositionTwo();
