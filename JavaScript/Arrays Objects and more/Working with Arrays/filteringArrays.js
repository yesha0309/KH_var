/* FILTER() Method 
    -doesn't mutute the array
    -filters all the elemets matching the filter condition
    -unlike find() method, which only finds the first relevant match

    stockReport.findIndex((element, index) => element.cost >250);
    - returns a new array
*/

//--------------------finding even/odd numbers using FILTER()--------------------
let numArray = [34, 78, 94, 063, 34, 979, 12, 879, 977];
var evenNums = numArray.filter((elements) => elements % 2 === 0);
var oddNums = numArray.filter((elements) => elements % 2 !== 0);

console.log("EVEN: ", evenNums);
console.log("ODD: ", oddNums);

//-----------------------prism-----------------------------------
("use strict");

const users = [
  {
    name: "John M",
    isVerified: true,
  },
  {
    name: "Jane S",
    isVerified: false,
  },
  {
    name: "Wanda M",
    isVerified: true,
  },
  {
    name: "Tony S",
    isVerified: false,
  },
  {
    name: "Emilio Q",
    isVerified: true,
  },
  {
    name: "Jonathan W",
    isVerified: false,
  },
];

const isVerified = users
  .filter(({ isVerified }) => isVerified)
  .map(({ name }) => name);

const notVerified = users
  .filter(({ isVerified }) => !isVerified)
  .map(({ name }) => name);

console.log(`Verified: ${isVerified}`);
console.log(`Not Verified: ${notVerified}`);
