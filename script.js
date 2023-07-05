let firstOperand = '';
let secondOperand = '';
let operator = '';
let display = '0';

const screen = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const functions = document.querySelectorAll('.function');
const positiveNegative = document.querySelector('#negative');
const clearButton = document.querySelector('#clear');





window.onload = () => {
  screen.innerHTML = display;
  firstOperand = 0;
}