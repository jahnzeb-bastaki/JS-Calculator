let firstOperand = '';
let secondOperand = '';
let operator = '';
let isClear = true;
let operandFlag = 0; // firstOperand flag = 0 , secondOperand flag = 1;

const screen = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const functions = document.querySelectorAll('.function');
const positiveNegative = document.querySelector('#negative');
const clearButton = document.querySelector('#clear');
const periodButton = document.querySelector('#period');
const equalButton = document.querySelector('#equals');

numbers.forEach(number => number.onclick = e => operandLoad(e));
functions.forEach(func => func.onclick = e => operatorLoad(e));
clearButton.onclick = () => resetCalc();

function resetCalc(){
  screenDisplay('0');
  firstOperand = '';
  secondOperand = '';
  operator = '';
}

function screenDisplay(value){
  screen.textContent = value;
}

function operatorLoad(e){
  console.log(e.target.value);
}

function operandLoad(event){
  // if operandFlag = firstOperand and there is no operator, 
  // this means that the calc is in the starting position
  //
  // but if the operandFlag is set to 1, that means we need to start
  // appending to the secondOperand
  if(!operandFlag && !operator){
    if(firstOperand == '0' && !operator)
      screenDisplay(firstOperand = event.target.value);
    else
      screenDisplay(firstOperand += event.target.value);
  } else if(operandFlag){
    screenDisplay(secondOperand += event.target.value);
  }
}




window.onload = () => {
  screenDisplay('0');
  firstOperand = '0';
}