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