"use strict";

// Stored values
let preNumber = ``;
let currentNumber = ``;
let operator = ``;

//DOM elements
const currentDisplayNumber = document.querySelector(`.currentNumber`);
const previousDisplayNumber = document.querySelector(`.previousNumber`);

const numberButtons = document.querySelectorAll(`.number`);
const operators = document.querySelectorAll(`.operator`);

const display = document.querySelector(`.display`);

const equals = document.querySelector(`.equals`);
equals.addEventListener(`click`, calculate);

const clear = document.querySelector(`.clear`);
clear.addEventListener(`click`, clearNumber);

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

// Number button click event handler
numberButtons.forEach((btn) => {
  btn.addEventListener(`click`, (e) => {
    handleNumber(e.target.textContent);
  });
});

// Function to handle number button clicks
function handleNumber(number) {
  currentNumber += number;
  currentDisplayNumber.textContent = currentNumber;
}

// Operator button click event handler
operators.forEach((btn) => {
  btn.addEventListener(`click`, (e) => {
    handleOperator(e.target.textContent);
    operator = e.target.textContent;
  });
});

// function to store number when operator button is clicked
function handleOperator(op) {
  operator = op;
  preNumber = currentNumber;
  previousDisplayNumber.textContent = preNumber + ` ` + operator;
  currentNumber = "";
  currentDisplayNumber.textContent = "";
}

function calculate() {
  preNumber = Number(preNumber);
  currentNumber = Number(currentNumber);

  if (operator === `+`) {
    preNumber += currentNumber;
  } else if (operator === `-`) {
    preNumber -= currentNumber;
  } else if (operator === `*`) {
    preNumber *= currentNumber;
  } else if (operator === `/`) {
    preNumber /= currentNumber;
  }
  previousDisplayNumber.textContent = ``;
  currentDisplayNumber.textContent = preNumber;
}

function clearNumber() {
  preNumber = ``;
  currentNumber = ``;
  previousDisplayNumber.textContent = ``;
  currentDisplayNumber.textContent = `0`;
}
