//FUNCTION DECLARATION / FUNCTION DEFINITION

// FUNCTION are HOSITED.. Means even if we write the function at the end and call it earlier,
//it will still work

function computeReactStats(length, width) {
  let areaRect = Number(length) * Number(width);
  let preriRect = 2 * (Number(length) + Number(width));
  console.log(`Area : ${areaRect}`);
  console.log(`Perimeter:  ${preriRect}`);
  //return areaRect, preriRect;
}

let rectALength = 25;
let rectAWidth = 30;
computeReactStats(rectALength, rectAWidth);

let rectBLength = 120;
let rectBWidth = 375;
computeReactStats(rectBLength, rectBWidth);

// console.log(`Area : ${areaRect}`);
// console.log(`Perimeter:  ${preriRect}`);

//----------------------------diff example-----------------------
console.log(computePayable(2500)); // HOISTED
console.log(computePayable(200));

function computePayable(cost) {
  let diccount = Number(cost) < 1000 ? 0 : 10;
  //   let totalCost = cost - cost * (diccount / 100); ---- can also be re-written as
  //   return totalCost;
  return cost - cost * (diccount / 100);
  console.log(`testing that this won't be displayed as it is after the return`);
}

// ------------------ example 2 ------------------------------------------
let point1 = {
  x: 5,
  y: 10,
};
let point2 = {
  x: 15,
  y: 20,
};
function calDist(p1, p2) {
  return Math.hypot(p2.x - p1.x, p2.y - p1.y); // Math.hypot(), cal distance/hypotnues bet two pnts
}
console.log(`This is the distance between 2: ${calDist(point1, point2)}`);

// FUNCTION CONSTRUCTOR
let point3 = {
  x: 5,
  y: 10,
};
let point4 = {
  x: 15,
  y: 20,
};
const calDis2 = new Function(
  `p1`,
  `p2`,
  `return Math.hypot(p2.x - p1.x, p2.y - p1.y)`
);
console.log(`using function constructor ${Number(calDis2(5, 10))}`);
//which is equal to
function calDis3(p1, p2) {
  return Math.hypot(p2.x - p1.x, p2.y - p1.y);
}
console.log(`using fun ${calDis3}`);

// ------------------------prism example-------------------------------------
("use strict");

let tempInFahrenheit = 77;
console.log(
  `${tempInFahrenheit} degrees Fahrenheit is `,
  toCelsius(tempInFahrenheit),
  "degrees Celsius"
);

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
