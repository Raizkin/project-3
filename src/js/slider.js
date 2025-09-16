const track = document.querySelector(".team-slider__track");
const slides = document.querySelectorAll(".team-slider__slide");
const btnPrev = document.querySelector(".team-slider__btn--prev");
const btnNext = document.querySelector(".team-slider__btn--next");
const dotsContainer = document.querySelector(".team-slider__dots");

let currentSlide = 0;
const totalSlides = slides.length;

// создаём точки
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("team-slider__dot");
  if (i === 0) dot.classList.add("active");
  dot.dataset.index = i;
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".team-slider__dot");

function updateSlider() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot, i) =>
    dot.classList.toggle("active", i === currentSlide)
  );
}

btnNext.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
});

btnPrev.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
});

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    currentSlide = parseInt(dot.dataset.index);
    updateSlider();
  });
});