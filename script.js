"use strict";

let displayValue = 0;

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

// Function to handle button click
numberButtons.forEach((btn) => {
  btn.addEventListener(`click`, (e) => {
    handleNumber(e.target.textContent);
  });
});
function handleNumber(number) {
  console.log(number);
}
