`use strict`;

//-------------------------- sperating string from array using forEach()------------------------

const books = [
  "the lord of the rings",
  "deception",
  "digital fortree",
  "freakonomics",
];
// books.forEach(function (elem, index) { ---------------instead of this
//   console.log(elem.split(" ").reverse().join(""));
// });
//or use a call back fun seperatly
const flipTitles = function (elem, index) {
  console.log(elem.split(" ").reverse().join(""));
};
books.forEach(flipTitles);

//---------------------reusing csv to array -------------------------------
const users = ` Lorem_ipsum,dolor_sit,amet_consectetur,adipisicing_elit
1,Evenietassumenda,minus,reiciendis,voluptates, 
2,iusto dolorum quibusdam, voluptasminima harum aliquid expedita nostrum, 
3,consectetur corporis veritatistotam illo architecto facere, 
4,  perferendis rerum provident nobis quia.Architecto dignissimos expedita voluptates cum eligendi iure, culpaunde, 
5,  quo sit magnam illo soluta quas quae? `;

const csvToArray = (csv) => {
  let output = [];
  csv.split('\n').forEach((row) => output.push(row.split(',')));
  console.log(output);
  return output;
};
csvToArray(users);

//getting the value from the first colum as index and the rest columns as data --or converting to an object

const convertToObj = (arr) => {
  let output = [];
  arr.forEach((elem, index) => {
    //skip index 0
    if (index !== 0) {
      let obj = {};
      elem.forEach((elem, index) => {
        //---- here the elem and index are not refrenced to the elem and index on line 32
        obj[arr[0][index]] = elem;
      });
      output.push(obj);
      // console.log("output4: ", output);
    }
  });
  // console.log("output5: ", output);
  return output;
};

let csvToObj = convertToObj(csvToArray(users));
//console.log("csv to obj: ", csvToObj);
// console.log("csv to array: ", csvToArray(users));
