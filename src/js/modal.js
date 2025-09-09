const userName = document.querySelector(".header__span");
console.log(userName);

const formRef = document.querySelector(".modal__form");
console.log(formRef);

const inputRef = document.querySelector(".modal__input");
console.log(inputRef);

const backdropRef = document.querySelector(".backdrop");

const modalSubmit = document.querySelector(".modal__btn");
console.log(modalSubmit);

const modalClose = document.querySelector(".button__close");
console.log(modalClose);

const modal = document.querySelector(".modal");

modalClose.addEventListener("click", () => {
    backdropRef.classList.add("is-hidden");
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
