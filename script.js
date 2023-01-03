"use strict";

// Stored values
let displayValue = ``;

let preNumber = ``;
let postNumber = ``;
let operator = ``;

const currentDisplayNumber = document.querySelector(`.currentNumber`);
const previousDisplayNumber = document.querySelector(`.previousNumber`);

//DOM elements
const numberButtons = document.querySelectorAll(`.number`);
const operators = document.querySelectorAll(`.operator`);

const display = document.querySelector(`.display`);

// functions for math operators
const add = function (x, y) {
  return x + y;
};
const subtract = function (x, y) {
  return x - y;
};
const multiply = function (x, y) {
  return x * y;
};
const divide = function (x, y) {
  return x / y;
};

// Function that takes an operator and 2 numbers and then calls one of the operator functions on the numbers
function operate(operator, num1, num2) {
  if (operator === `+`) {
    return add(num1, num2);
  } else if (operator === `-`) {
    return subtract(num1, num2);
  } else if (operator === `*`) {
    return multiply(num1, num2);
  } else if (operator === `/`) {
    return divide(num1, num2);
  }
}

console.log(operate(`-`, 7, 3));

// Number button click event handler
numberButtons.forEach((btn) => {
  btn.addEventListener(`click`, (e) => {
    handleNumber(e.target.textContent);
  });
});

// Function to handle number button clicks
function handleNumber(number) {
  preNumber += number;
  currentDisplayNumber.textContent = preNumber;
  console.log(preNumber);
}

// Operator button click event handler
function operatorClick() {
  operators.forEach((btn) => {
    btn.addEventListener(`click`, (e) => {
      handleOperator(e.target.textContent);
      if (
        e.target.id == `add` ||
        e.target.textContent == `-` ||
        e.target.textContent == `*` ||
        e.target.textContent == `/`
      ) {
        preNumber = displayValue;
        display.textContent = e.target.textContent;
        console.log(preNumber);
      }
      // function call for equals
      if (e.target.textContent == `=`) {
        operate(operation);
      }
    });
  });
}
operatorClick();

// function to store number when operator button is clicked
function handleOperator(operator) {
  preNumber = displayValue;
  console.log(operator);
}

console.log(displayValue);
