const inputFirst = document.querySelector('.calculator__input-first');
const inputSecond = document.querySelector('.calculator__input-second');
const resultInput = document.querySelector('.calculator__input-third');

const btnPlus = document.querySelector('.calculator__btn-plus');
const btnMinus = document.querySelector('.calculator__btn-minus');
const btnMultiply = document.querySelector('.calculator__btn-multiply');
const btnDivide = document.querySelector('.calculator__btn-divide');
const btnEquals = document.querySelector('.calculator__btn-eqveals');

let selectedOperator = null;

btnPlus.addEventListener('click', () => (selectedOperator = '+'));
btnMinus.addEventListener('click', () => (selectedOperator = '-'));
btnMultiply.addEventListener('click', () => (selectedOperator = '*'));
btnDivide.addEventListener('click', () => (selectedOperator = '/'));

btnEquals.addEventListener('click', () => {
  const num1 = parseFloat(inputFirst.value);
  const num2 = parseFloat(inputSecond.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultInput.value = 'Помилка: введіть числа';
    return;
  }

  let result;
  switch (selectedOperator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        resultInput.value = 'Помилка! На 0 ділити не можна!'
        return
      }
      result = num1 / num2
      break
    default:
      resultInput.value = 'Виберіть оператор';
      return
  }

  resultInput.value = result;
});
