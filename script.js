let firstOperand = '';
let secondOperand = '';
let operator = '';
let isClear = true;
let operandFlag = 0; // firstOperand flag = 0 , secondOperand flag = 1;

const screen = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const functions = document.querySelectorAll('.function');
const equalButton = document.querySelector('#equals');
const positiveNegative = document.querySelector('#negative');
const clearButton = document.querySelector('#clear');

// NEED TO WORK on these and the round function
const periodButton = document.querySelector('#period');

numbers.forEach(number => number.onclick = e => operandLoad(e));
functions.forEach(func => func.onclick = e => operatorLoad(e));
clearButton.onclick = () => resetCalc();
equalButton.onclick = () => operate();
positiveNegative.onclick = () => isNegative();
periodButton.onclick = () => addPeriod();

function addPeriod(){
  if(operandFlag){
    if(secondOperand.includes('.')){return}
    if(secondOperand){
      screenDisplay(secondOperand = secondOperand + '.');
    } else {
      screenDisplay(secondOperand = '0.');
    }
  } else {
    if(firstOperand.includes('.')){return}
    if(firstOperand){
      screenDisplay(firstOperand = firstOperand + '.');
    } else {
      screenDisplay(firstOperand = '0.');
    }
  }
}

function isNegative(){
  if(operandFlag){
    if(secondOperand.charAt(0) == '-'){
      screenDisplay(secondOperand = secondOperand.slice(1));
    } else {
      screenDisplay(secondOperand = '-' + secondOperand);
    }
  } else {
    if(firstOperand.charAt(0) == '-'){
      screenDisplay(firstOperand = firstOperand.slice(1));
    } else {
      screenDisplay(firstOperand = '-' + firstOperand);
    }
  }
}

// WORK ON RESET CALC
function resetCalc(){
  screenDisplay('0');
  firstOperand = '0';
  secondOperand = '';
  operator = '';
  operandFlag = 0;
}

function screenDisplay(value){
  value = value.toString();
  if(value > 10){
    screen.textContent = value.slice(0, 10);
  } else {
    screen.textContent = value;
  }
}

// Loads the operator from the button that was clicked into the variable
function operatorLoad(event){
  if(firstOperand && secondOperand) {
    operate();
    operator = event.target.value;
    //console.log('Operands are loaded: ' + operator)
    return;
  }
  operator = event.target.value;
  operandFlag = 1; // set flag for second operand
  //console.log('Operands are not loaded: ' + operator)
}

function operandLoad(event){
  // if operandFlag = firstOperand and there is no operator, 
  // this means that the calc is in the starting position
  //
  // but if the operandFlag is set to 1, that means we need to start
  // appending to the secondOperand
  if(!operandFlag && !operator){
    if(firstOperand == '0' && !operator){
      screenDisplay(firstOperand = event.target.value);
    } else if (firstOperand == '-0'){
      screenDisplay(firstOperand = firstOperand.replace('0', event.target.value));
    } else {
      screenDisplay(firstOperand += event.target.value);
    }
  } else if(operandFlag){
    if(secondOperand == '0')
      return;
    screenDisplay(secondOperand += event.target.value);
  }

  if(firstOperand.length > 10){
    firstOperand = firstOperand.slice(0, 10);
  }

  if(secondOperand.length > 10){
    secondOperand = secondOperand.slice(0,10);
  }
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
  answer = round(8, answer);
  if(answer > 9999999999)
    answer = answer.toExponential();
  screenDisplay(answer);
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
function round(places, num){
  return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}




window.onload = () => {
  screenDisplay('0');
  firstOperand = '0';
}