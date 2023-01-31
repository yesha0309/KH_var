let red = document.querySelector(".red");
let cyan = document.querySelector(".cyan");
let violet = document.querySelector(".violet");
let orange = document.querySelector(".orange");
let pink = document.querySelector(".pink");

let center = document.querySelector(".center");

let getBackgroundColor = (selectedElement) => {
  return getComputedStyle(selectedElement).backgroundColor;
};
let updatedColor = (e, color) => {
  return e.addEventListener("mouseenter", () => {
    center.style.backgroundColor = color;
  });
};

let colorElem = [red, cyan, violet, orange, pink];
colorElem.forEach((e) => {
  updatedColor(e, getBackgroundColor(e));
});
























// var $Osc = {
//   hover: function (event) {
//     event.target.style.backgroundColor = "red";
//   },
//   out: function (event) {
//     event.target.style.backgroundColor = "white";
//   },
// };
// var $OscElement = document.getElementsByClassName("red")[0];
// $OscElement.addEventListener("mouseover", $Osc.hover, false);
// $OscElement.addEventListener("mouseout", $Osc.out, false);

// var abc = {
//   hover: function (event) {
//     event.target.style.backgroundColor = "cyan";
//   },
//   out: function (event) {
//     event.target.style.backgroundColor = "white";
//   },
// };
// var abcElement = document.getElementById("color cyan");
// abcElement.addEventListener("mouseover", abc.hover, false);
// abcElement.addEventListener("mouseout", abc.out, false);

// var violet = {
//   hover: function (event) {
//     event.target.style.backgroundColor = "violet";
//   },
//   out: function (event) {
//     event.target.style.backgroundColor = "white";
//   },
// };
// var violetElement = document.getElementById("color violet");
// violetElement.addEventListener("mouseover", violet.hover, false);
// violetElement.addEventListener("mouseout", violet.out, false);

// var orange = {
//   hover: function (event) {
//     event.target.style.backgroundColor = "orange";
//   },
//   out: function (event) {
//     event.target.style.backgroundColor = "white";
//   },
// };
// var orangeElement = document.getElementById("color orange");
// orangeElement.addEventListener("mouseover", orange.hover, false);
// orangeElement.addEventListener("mouseout", orange.out, false);

// var pink = {
//   hover: function (event) {
//     event.target.style.backgroundColor = "pink";
//   },
//   out: function (event) {
//     event.target.style.backgroundColor = "white";
//   },
// };
// var pinkElement = document.getElementById("color pink");
// pinkElement.addEventListener("mouseover", pink.hover, false);
// pinkElement.addEventListener("mouseout", pink.out, false);

// const colorChange = document.getElementsByClassName("color-hover");

// //adding as I got scripts.js:4 Uncaught TypeError: colorChange.addEventListener is not a function
// var numCon = colorChange.length;

// function showColor() {
//   var place = document.getElementsByClassName("color-hover");
//   var colorBox = document.
//   //var colorBox = document.createElement("textarea");
//   //place.appendChild(colorBox);
// }
// for (var i = 0; i < numCon; i++) {
//   colorChange[i].addEventListener("click", showColor, false);
// }

// // This handler will be executed only once when the cursor
// colorChange.addEventListener(
//   "mouseenter",
//   (event) => {
//     event.target.style.color = "yellow";

//     setTimeout(() => {
//       event.target.style.color = "";
//     }, 500);
//   },
//   false
// );

// // This handler will be executed only once when the cursor
// colorChange.addEventListener(
//   "mouseover",
//   (event) => {
//     event.target.style.color = "blue";

//     setTimeout(() => {
//       event.target.style.color = "";
//     }, 500);
//   },
//   false
// );

// addEventListener('mouseover', (event)=>{
//     onmouseover = (event) => {

//     }
// });

// var element = document.getElementsByClassName("color red");
// element.addEventListener("mouseover", function () {
//   console.log("Event triggered");
// });

// var event = new MouseEvent("mouseover", {
//   view: window,
//   bubbles: true,
//   cancelable: true,
// });

// element.dispatchEvent(event);
