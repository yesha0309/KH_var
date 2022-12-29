"use strict";

const waltDisneyBirthday = new Date("5 December, 1901 00:35:00");

const yearsTo = (date) => {
  const diff = (date - Date.now()) / 31536000000;
  return Math.abs(diff.toPrecision(4));
};

console.log(
  `Walt Disney was born on ${waltDisneyBirthday.toLocaleString(
    "en-IN"
  )}. That was ${yearsTo(waltDisneyBirthday)} years ago!`
);

/*

The Date Object canbe declared in four ways:
  - newDate() sets current date and time depending upon browers's time zone
  - newDate(milliseconds) which accepts single parameter indicating numeric value.
  - newDate(datastring) which accepts single parameter indicating string value
  - new Date (year, month, date, hour, minute, second, millisecond) which accepts seven arguments

*/
