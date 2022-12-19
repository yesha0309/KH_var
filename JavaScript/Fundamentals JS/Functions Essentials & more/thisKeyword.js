// when working outside a fun, "This" keyword serves a global scope
// inside the fun, "this" keyword may point to the global scopeif 'use strict' is not in place

`use strict`;

console.log(this); // outside

const someFunction = function () {
  console.log(this);
  return this; //inside
};
//----------------------------------------------------------------

const person = {
  name: "Tim",
  age: 19,
  profession: "teacher",
  sayHi: function () {
    //  return `I am ${person.name} and I am ${person.age}. I am a ${person.profession}`; //gives same output ---I am Tim and I am 19. I am a teacher
    return `I am ${this.name} and I am ${this.age}. I am a ${this.profession}`;
  },
  canDrive() {
    //creating fun using SHORT HAND Operator
    return this.age >= 18 ? "Yes" : "No";
  },
};
console.log(person.sayHi());
console.log(person.canDrive());

//if I add  a new fun, it can also get access to the object, spedified by "this"

person.newJob = function () {
  return `I love doing ${this.profession}`;
};
console.log(person.newJob());

//-------------------------------------------------------------------------------------------------------------
//john and sarah are objects

const john = {
  age: 35,
  gender: "M",
  weight: 79,
  height: 167,
};
const sarah = {
  age: 53,
  gender: "F",
  weight: 170,
  height: 134,
};

var calBmi = function () {
  // standalone function
  return this.weight / (this.height / 100) ** 2;
};
var calBmr = function () {
  if (this.gender === "M") {
    return 66.47 + 13.75 * this.weight + 5.003 * this.height - 6755 * this.age;
  } else {
    return 655.1 + 9.563 * this.weight + 1.85 * this.height - 4.676 * this.age;
  }
};
//console.log(calBmi()); // this gives "NaN" as both the fun doesn't have any direct refrence to the properties used while calling.

// to overcome this, we can use CALL() method.

console.log(calBmi.call(john));
console.log(calBmr.call(sarah));

// BIND METHOD
var johnBmi = calBmi.bind(john);
var sarahBrm = calBmr.bind(sarah); // binds the call method to this fun and than store output in new var
console.log(sarahBrm());
console.log(johnBmi());
