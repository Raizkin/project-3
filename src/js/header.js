import moon from "../img/moon.png";
import sun from "../img/sun.png";

const buttonRef = document.querySelector(".header__btn");
console.log(buttonRef);

const tumblerRef = document.querySelector(".header__tumbler");
console.log(tumblerRef);

const imageRef = document.querySelector(".header__image");
console.log(imageRef);

buttonRef.addEventListener("click", () => {
    buttonRef.classList.toggle("active");
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    console.log(isDark);
    if(isDark) {
        imageRef.src = moon;
    } else {
        imageRef.src = sun;
    }
});