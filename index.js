"use strict";

// 1. Написати функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).
// Значення для перевірки функції вводить користувач.

const userNum = Number(prompt("write number"));

function checkUserNum(value) {
  return value % 2 === 0;
}
const showUserNum = function (value) {
  if (checkUserNum(value)) {
    return "even";
  } else {
    return "odd";
  }
};
let result = showUserNum();
console.log(result);

// ------------------------------------------------------------

// 2. Написати функцію, яка приймає два аргументи і, якщо аргументи одного типу, то повертає той, який має більше значення (якщо значення рівні - повертаємо null), інакше(якщо різного типу) теж повертає null.

let argum1 = 66;
let argum2 = 55;

const getHighestArg = function (argum1, argum2) {
  if (argum1 === argum2) {
    return null;
  }
  if (typeof argum1 === typeof argum2) {
    if (argum1 < argum2) {
      return argum2;
    }
    return argum1;
  }
  return null;
};
console.log(getHighestArg(argum1, argum2));
