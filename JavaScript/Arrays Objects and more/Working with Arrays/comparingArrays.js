/*
    there can be 2 senarios while comparing 2 arrays
    1) When the 2 arrays are similar in length and the elements are placed in the same order
        array1 = [1,2,3,4,5]
        array2 = [1,2,3,4,5]
    2) When the 2 arrays are similar in length but the elements are placed in different order
        array1 = [1,3,2,5,4]
        array2 = [1,2,3,4,5]
*/

//---------IDENTICAL ARRAYS ----------------
let arrA = [
  1,
  2,
  3,
  1,
  31,
  93,
  {
    id: 1,
  },
  "Hello",
];
let arrB = [
  1,
  2,
  3,
  1,
  31,
  93,
  {
    id: 1,
  },
  "Hello",
];

const isIdentical = (arrA, arrB) =>
  JSON.stringify(arrA) === JSON.stringify(arrB);
console.log(
  `Array A ${isIdentical(arrA, arrB) ? "is" : "isNot"}equal to Array B`
);

//--------------- array with same content but with different positions------------------------
let arrC = [
  1,
  2,
  3,
  1,
  31,
  93,
  {
    id: 1,
  },
  "Hello",
];
let arrD = [
  1,
  2,
  3,
  {
    id: 1,
  },
  1,
  31,
  "Hello",
  93,
];

const hasSameContent = (arrF, arrG) => {
  // converting it into a string
  let stringC = arrF.map((el) => JSON.stringify(el));
  let stringD = arrG.map((el) => JSON.stringify(el));

  return [
    arrC.length === arrD.length,
    ...stringC.map((el) => stringD.includes(el)),
    ...stringD.map((el) => stringC.includes(el)),
  ].every((el) => el);
};

console.log(
  hasSameContent(arrC, arrD)
    ? `Both arrays has identical content`
    : `Non identical content`
);
