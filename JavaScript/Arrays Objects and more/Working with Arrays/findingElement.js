// find() method
// the only exception/limitation using find() method and findIndex() is they only display/get the first matching 
        //  element if there are other matchs, it doesn't display it

var users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Sarah",
  },
  {
    id: 3,
    name: "Tony",
  },
  {
    id: 4,
    name: "tim",
    type: "true",
  },
];

const findName = (name, arr) => arr.find((elem) => elem.name === name)?.name || "No doctor found";
console.log(findName("tim2", users));
console.log(findName("tim", users));

users.findIndex((elem) => elem.id === 2);

//includes() Method
// include() - tests for the presence of a value in the array and returs a true or a false

[1,2,3,4].includes(5); //---------output: false