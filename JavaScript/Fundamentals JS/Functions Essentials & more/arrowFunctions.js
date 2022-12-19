// shorter syntax for expressing functions
const addNumbers = (a, b) => a + b;

// can be applied to const or Var and which are equivalent to fun expression  in many ways
// => known as fat arrow

/* FUNCTION DECLARATION */
function areaOfRect(l, w) {
  return Number(l) * Number(w);
}
/* FUNCTION EXRESSION */
var periOfRect = function (l, w) {
  return 2 * (Number(l) + Number(w));
};
/* ARROW FUNCTION */
const periOfRect1 = (l, w) => 2 * (Number(l) + Number(w));

console.log("Fun declaration: ", areaOfRect(5, 9));
console.log("Fun expression: ", periOfRect(2, 7));
console.log("arrow fun: ", periOfRect1(3, 9));

//-----------------------------RETURNING OBJECT USING ARROW FUNCTION --------------------------------------------

const newUser = (name, age, isAdmin) => ({
  //   name: name,
  //   age: age,
  //   isAdmin: isAdmin,

  name, // is object properties are named as variables, we can just use this instead
  age,
  isAdmin,
});

let john = newUser("Jim", 22, true);
console.log("john", john);

//-----------------------ARROW fun using CONTEXT and THIS Keyword--------------------------------------

// arrow fun don't create context of its own for this keyword
// instead they user context of its owner/parent

//call or bind method have no effect on an arrow fun
const myArrowFun = () => {
  return this;
};
console.log(myArrowFun());
