// looping through an array

`use strict`;

var numArray = [
  {
    x: 1,
    y: 3,
  },
  {
    x: 5,
    y: 21,
  },
  {
    x: 245,
    y: 93,
  },
  {
    x: 42,
    y: 400,
  },
  {
    x: 12,
    y: 243,
  },
];

const multiNums = (obj) => obj.x * obj.y;
for (let n = 0; n < numArray.length; n++) {
  console.log(
    `${numArray[n].x} x ${numArray[n].y} = ${multiNums(numArray[n])}`
  );
}

//----------------------------looping through nested arrays----------------------------------------
const stuff = [
  ["apple", "banana", "kiwi", "Mango"],
  ["lettuce", "celery", "potato", "onion"],
];
for (let m = 0; m < stuff.length; m++) {
  for (let n = 0; n < stuff[m].length; n++) {
    console.log(stuff[m][n]);
  }
}
