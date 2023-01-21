// FUNCTION DECLARATION

//SYNTAX- function functionName(pair of parameters / Arguments)
function computeArea(length, width) {
  return length * width;
}
computeArea(25, 10); //execute fun using functionName

// ------------------------------------------- Difference FUNCTION DECLARATION and FUNCTION EXRESSION ------------------------------------

/* FUNCTION DECLARATION */
function addNumbers(a, b) {
  return a + b;
}

/* FUNCTION EXRESSION */
const addNumbers = function (a, b) {
  return a + b;
};

/* ARROW Function */ // Arrow fun are equivalent to Function Expression in many ways
const addNumbers = (a, b) => a + b;

//-------------------------------from ralph----------------------------------------
// declaration
function addFive(number) {
  return number + 5;
}

// expression
let addFive = function (number) {
  return number + 5;
};

// Arrow function
let addFive = (number) => number + 5;
