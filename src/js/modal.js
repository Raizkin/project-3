const userName = document.querySelector(".header__span");
const formRef = document.querySelector(".modal__form");
const inputRef = document.querySelector(".modal__input");
const backdropRef = document.querySelector(".backdrop");
console.log(backdropRef);

const modalSubmit = document.querySelector(".modal__btn");
const modalClose = document.querySelector(".button__close");
const modal = document.querySelector(".modal");

modalClose.addEventListener("click", () => {
    backdropRef.classList.add("is-hidden");
    backdropRef.style.display = "none";
});

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
     event.preventDefault();
         let user = inputRef.value.trim();
    if(isNaN(user)) {
        userName.textContent = user;
        inputRef.value = "";
        backdropRef.classList.add("is-hidden");
    } else{
        alert("Ви ввели не коректні дані!")
        inputRef.value = "";
        userName.textContent = "User";
    }
}
