let myArray = new Array("Apple", "banana", "Mango"); // --- creating array using Array Constructor
console.log(myArray); // --[ 'Apple', 'banana', 'Mango' ]

let numArray = new Array(10);
console.log(numArray); // ------[ <10 empty items> ]
// --- it creats arrays of 10 length without any values
//----- to solve this we add numArray.length
console.log(numArray.length); // ---- 10

// we can instead use an Array constructor and Array.of() method to solve this issue

let numArray1 = Array.of(30);
console.log(numArray1); // -- [30]

// -------------------array.from()------------------------

const randomNums = (count) =>
  Array.from(new Array(count), (elem) => parseInt(Math.random() * 10000));
// ----------parseInt - converts decimal to whole number
console.log(randomNums(10));


//-----------------prism - generating * pattern-------------------
'use strict';

const genStars = (count) => Array.from(Array(count), () => '*');

for (let i = 1; i <= 6; i++) {
  console.log(genStars(i));
}

for (let i = 6; i >= 1; i--) {
  console.log(genStars(i));
}
