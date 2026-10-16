const calculator = document.querySelector('.calculator');
const resultElem = document.querySelector('.result');
const first = document.getElementById('firstNumber');
const second = document.getElementById('secondNumber');
const clear = document.getElementById('clear');

const inputHandler = (e) => {
  const sum = Number(first.value) + Number(second.value);
  resultElem.textContent = '';
  resultElem.insertAdjacentHTML('beforeend', sum);
};

const formHandler = () => {
  resultElem.textContent = '';

  setTimeout(() => {
    console.log('Form has been reset! All child values cleared to defaults.');

    console.log(first.value);
    console.log(second.value);
  }, 0);
};

calculator.addEventListener('input', inputHandler);
calculator.addEventListener('reset', formHandler);
