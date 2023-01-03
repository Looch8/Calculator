"use strict";

//DOM elements
const buttons = document.querySelectorAll(`.buttons`);
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
buttons.addEventListener(`click`, function (e) {
  if (e.target && e.target.class == "btn-1") {
    console.log(e.target.class + "was clicked");
  }
});
