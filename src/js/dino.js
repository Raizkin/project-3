const dino = document.getElementById('avatar');
const cactus = document.getElementById('cactus');
const startBtn = document.getElementById('startBtn');

let isJumping = false;
let gameStarted = false; // 🚀 прапорець чи гра вже почалась
let timerId;

function jump() {
  if (isJumping) return;
  isJumping = true;

  let position = 0;
  let upInterval = setInterval(() => {
    if (position >= 120) {
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 5;
          dino.style.bottom = position + 'px';
        }
      }, 20);
    } else {
      position += 5;
      dino.style.bottom = position + 'px';
    }
  }, 20);
}

document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    event.preventDefault();
    if (gameStarted) {
      jump();
    }
  }
});

function moveCactus() {
  let cactusPosition = 800;
  timerId = setInterval(() => {
    if (cactusPosition < -60) {
      cactusPosition = 800;
    }

    cactusPosition -= 5;
    cactus.style.left = cactusPosition + 'px';

    let dinoBottom = parseInt(window.getComputedStyle(dino).bottom);
    if (cactusPosition < 100 && cactusPosition > 50 && dinoBottom < 50) {
      alert('Game Over!');
      clearInterval(timerId);
      gameStarted = false; // 🚀 після поразки можна перезапустити
    }
  }, 20);
}

// 🚀 запуск гри тільки після кліку на кнопку
startBtn.addEventListener('click', () => {
  if (!gameStarted) {
    gameStarted = true;
    moveCactus();
  }
});
