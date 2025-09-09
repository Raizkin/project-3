
const secondsInput = document.querySelector(".time__inp");
const calcBtn = document.querySelector(".time__btn");
const outputText = document.querySelector(".time__text");

function calculateTime() {
  let seconds = parseInt(secondsInput.value);

  if (isNaN(seconds) || seconds < 0) {
    outputText.textContent = "Введіть правильне число!";
    return;
  }

  let days = Math.floor(seconds / (24 * 3600));
  seconds %= 24 * 3600;

  let hours = Math.floor(seconds / 3600);
  seconds %= 3600;

  let minutes = Math.floor(seconds / 60);
  seconds %= 60;

  const h = hours.toString().padStart(2, "0");
  const m = minutes.toString().padStart(2, "0");
  const s = seconds.toString().padStart(2, "0");

  let result = days > 0 ? `${days} дн. ${h}:${m}:${s}` : `${h}:${m}:${s}`;
  outputText.textContent = result;
}


calcBtn.addEventListener("click", calculateTime);


secondsInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    calculateTime();
  }
});