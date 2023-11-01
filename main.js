const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlider = 0;

rightBtn.addEventListener("click", () => {
  activeSlider++;

  if (activeSlider > slides.length - 1) {
    activeSlider = 0;
  }
  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlider--;

  if (activeSlider < 0) {
    activeSlider = slides.length - 1;
  }
  setBgToBody();
  setActiveSlide();
});

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlider].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    slides[activeSlider].classList.add("active");
  });
}

/**
 ** Initial Function
 */
setBgToBody();
