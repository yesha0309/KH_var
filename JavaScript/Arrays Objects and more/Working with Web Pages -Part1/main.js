"use strict";

const getTime = () => new Date().toTimeString();

const greetMe = function () {
  console.log(`Hey! The time is ${getTime()}`);
};
