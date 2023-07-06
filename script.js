let firstOperand = '';
let secondOperand = '';
let operator = '';
let isClear = true;
let operandFlag = 0; // firstOperand flag = 0 , secondOperand flag = 1;

const screen = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const functions = document.querySelectorAll('.function');
const equalButton = document.querySelector('#equals');

// NEED TO WORK on these and the round function
const positiveNegative = document.querySelector('#negative');
const clearButton = document.querySelector('#clear');
const periodButton = document.querySelector('#period');

numbers.forEach(number => number.onclick = e => operandLoad(e));
functions.forEach(func => func.onclick = e => operatorLoad(e));
clearButton.onclick = () => resetCalc();
equalButton.onclick = () => operate();

// WORK ON RESET CALC
function resetCalc(){
  screenDisplay('0');
  firstOperand = '';
  secondOperand = '';
  operator = '';
}

function screenDisplay(value){
  screen.textContent = value;
}

// Loads the operator from the button that was clicked into the variable
function operatorLoad(event){
  if(!operator){
    operator = event.target.value;
    operandFlag = 1; // set flag for second operand
  } else if(firstOperand && secondOperand) {
    operate();
    operator = event.target.value;
  }
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
  console.log(firstOperand);
  console.log(secondOperand);
}

function operate(){
  // Returns whether first or second operand is not stored
  if(!(firstOperand && secondOperand)) { return }
  // Transform the string operands into number operands
  let first = Number(firstOperand);
  let second = Number(secondOperand);
  let answer = 0;

  // Checks which operator has been chosen and perform arithmetic
  switch(operator){
    case '+':
      answer = add(first, second);
      break;
    case '-':
      answer = subtract(first, second);
      break;
    case '*':
      answer = multiply(first, second);
      break;
    case '/':
      answer = divide(first, second);
      break;
    case '%':
      answer = remainder(first, second);
      break;
    default:
      return;
  }
  screenDisplay(answer = round(answer));
  firstOperand = answer;
  secondOperand = '';
  operator = '';
}

function add(a, b){ return a + b; }
function subtract(a, b){ return a - b; }
function divide(a, b){ return a / b; }
function multiply(a, b){ return a * b; }
function remainder(a, b){ return a % b; }

// NEED TO WORK ON ROUND
function round(a){
  return a;
}




window.onload = () => {
  screenDisplay('0');
  firstOperand = '0';
}