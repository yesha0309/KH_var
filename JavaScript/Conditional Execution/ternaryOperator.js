//expression ? operandIfTruthy : operandIfFalsy -----Ternary Operation
// can be used instead of if else.. elseif .. else if

let temp = 25;
let feelTemp = temp >= 25 ? "warm" : "cood";

let = 2000;
let dis = cost < 1000 ? 0 : 10;
let totCost = cost - cost * (dis / 100);

//----------------multiple ternany--------------------
let today = new Date().getDay();

let day =
  today === 0
    ? "Sunday"
    : today === 1
    ? "Monday"
    : today === 2
    ? "Tuesday"
    : "not a real day";
