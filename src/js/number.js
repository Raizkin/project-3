let secretNumber = Math.floor(Math.random() * 15) + 1;

const form = document.querySelector('.number__form');
const input = document.querySelector('.number__input');
const message = document.querySelector('.number__subtitle-first');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const guess = Number(input.value); 

  if (isNaN(guess)) {
    message.textContent = 'Будь ласка, введіть число!';
    message.style.color = 'red';
    return;
  }

  if (guess === secretNumber) {
    message.textContent = `Вітаю, ви вгадали число! (${secretNumber})`;
    message.style.color = 'green';

    secretNumber = Math.floor(Math.random() * 100) + 1;
  } else if (guess < secretNumber) {
    message.textContent = 'Загадане число більше!';
    message.style.color = 'orange';
  } else {
    message.textContent = 'Загадане число менше!';
    message.style.color = 'orange';
  }

//   input.value = '';
});
