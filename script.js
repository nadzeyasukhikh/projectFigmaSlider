class MySlider {
    constructor(slideSelector, leftBtnSelector, rightBtnSelector, circleBtnSelector){
      this.slides = document.querySelectorAll(slideSelector);
      this.leftBtn = document.querySelector(leftBtnSelector);
      this.rightBtn = document.querySelector(rightBtnSelector);
      this.circles = document.querySelectorAll(circleBtnSelector);

      this.currentSlide = 0;
      this.init();
    }

    updateSlider() {
        const offset = `${-1 * this.currentSlide * 100}%`;
        for(let slide of this.slides) {
            slide.style.transform = `translateX(${offset})`
        }
    }
    updateCircleBtn() {
        this.circles.forEach(button => button.style.opacity = "0.4");
        this.circles[this.currentSlide].style.opacity = "1";
    }
    goLeft() {
        if (this.currentSlide !== 0) {
            this.currentSlide--;
            this.updateSlider();
            this.updateCircleBtn();
        }
}
goRight() {
    if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++;
        this.updateSlider();
        this.updateCircleBtn();
    }

}

init() {
    this.circles[0].style.opacity = "1";

    this.leftBtn.addEventListener('click', () => this.goLeft());
    this.rightBtn.addEventListener('click', () => this.goRight());

    this.circles.forEach((btn, ind) => {
        btn.addEventListener("click", () => {
            this.currentSlide = ind;
            this.updateSlider();
            this.updateCircleBtn();
        });
    });
}
}

const slide1 = new MySlider(".headerText", ".leftBtn", ".rightBtn",".circle" );
const slide2 = new MySlider(".rooteImg", ".mainThreeLeft", ".mainThreeRight", ".mainThreeCicle" )
const slide3 = new MySlider(".rootFourDisplay", ".mainFourLeft", ".mainFourRight", ".mainFourCicle")







