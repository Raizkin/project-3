let secretNumber = Math.floor(Math.random() * 15) + 1;

const form = document.querySelector('.number__form');
const input = document.querySelector('.number__input');
const message = document.querySelector('.number__subtitle-first');

function newGame() {
  secretNumber = Math.floor(Math.random() * 15) + 1; 
  input.value = '';
  setTimeout(() => {
    message.textContent = 'Нова гра! Спробуйте вгадати число.';
    message.style.color = 'black';
  }, 2500); 
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const guess = Number(input.value);

  if (isNaN(guess) || guess < 1 || guess > 15) {
    message.textContent = 'Будь ласка, введіть число від 1 до 15!';
    message.style.color = 'red';
    return;
  }

  if (guess === secretNumber) {
    message.textContent = `Вітаю, ви вгадали число! (${secretNumber}) 🎉`;
    message.style.color = 'green';
    newGame(); 
  } else if (guess < secretNumber) {
    message.textContent = 'Загадане число більше!';
    message.style.color = 'orange';
  } else {
    message.textContent = 'Загадане число менше!';
    message.style.color = 'orange';
  }
});
