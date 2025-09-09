let yearInput = document.getElementById('yearInput');
let btn = document.getElementById('checkBtn');
let res = document.getElementById('res');

function checkYear() {
  let year = yearInput.value.trim();

  res.className = '';

  if (year === '') {
    res.innerText = 'Введіть рік!';
    res.classList.add('error');
    return;
  }

  year = parseInt(year);

  if (isNaN(year)) {
    res.innerText = 'Це не число';
    res.classList.add('error');
  } else {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      res.innerText = 'Ви народилися у високосний рік!';
      res.classList.add('success');
    } else {
      res.innerText = 'Це не високосний рік.';
      res.classList.add('error');
    }
  }
}

btn.addEventListener('click', checkYear);
