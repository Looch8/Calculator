"use strict";

// Stored values
let displayValue = ``;

let preOperant = 0;
let postOperant = ``;

let operation;

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
  displayValue += number;
  display.textContent = displayValue;
  console.log(displayValue);
}

// Operator button click event handler
function operatorClick() {
  operators.forEach((btn) => {
    btn.addEventListener(`click`, (e) => {
      handleOperator(e.target.textContent);
      if (
        e.target.textContent == `+` ||
        e.target.textContent == `-` ||
        e.target.textContent == `*` ||
        e.target.textContent == `/`
      ) {
        console.log(`operator key pressed`);
      }
      // function call for equals
      else if (e.target.textContent == `=`) {
        operate();
      }
    });
  });
}
operatorClick();

// function to store number when operator button is clicked
function handleOperator(operator) {
  preOperant = displayValue;
  console.log(operator);
  console.log(preOperant);
}

console.log(displayValue);
console.log(preOperant);
