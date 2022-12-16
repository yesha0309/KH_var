// FUNCTION EXPRESSION

const areaOFCircle = function (radius) {
  // this is an "Anonymous Function", as it doesn't havea  fun name
  //areaOFCircle --- is an identifier
  return Math.PI * radius ** 2;
};
console.log(areaOFCircle(20));

//--------------- getting today's date-----------------------

/* IF I move "console.log(`Today is : ${getDate()}`);" to the top, I'll get an error saying, "ReferenceError: Cannot access 'getDate' before initialization" 
    FUNCTION DECLARATION -- are hoisted at a global level
    FUNCTION EXPRESSION --- only avaliable after their declaration
*/

const getDate = function () {
  const days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  const todayFromConst = new Date().getDay();
  return days[todayFromConst];
};
console.log(`Today is : ${getDate()}`);

//-----------------------gets the temp and converts it into Celcius or Franhite ----------------------------------------------

let conTemp = function (temp, convertTo) {
  let toUnit = convertTo ?? `F`; // using nullish qualifier, setting default value to Fahrenheit, if no input provided
  let tempToConvert = Number(temp) ?? 0;

  if (toUnit === "F") {
    let fahrenheit = (tempToConvert * 9) / 5 + 32;
    return `${fahrenheit}\u{00B0}F`;
  } else {
    let celcius = ((tempToConvert - 32) * 5) / 9;
    return `${celcius}\u{00B0}C`;
  }
};

let todayTemp = 45;
console.log(conTemp(todayTemp, "C")); // gives specifed value in degree and Fahrenheit
console.log(conTemp(todayTemp, "F")); // if i remove both (todayTemp, "F")-- will give me output ---7.222222222222222°C  NaN°F
