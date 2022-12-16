// OBJECTS--- allow us to hold multiple properties which maybe used to describe an entity

//Name of a Constructor Fun should always begin with CapitalLetter --- function Product(){}

//to create/instantiate the objects from the constructor function.
// use Constructor Fun along with new Keyword

//Use of Constructor fun

function Product(name, description, cost, stock) {
  this.name = name;
  this.description = description;
  this.cost = cost;
  this.stock = stock;

  this.setQuantity = function () {};
  this.getQuantity = function () {};
}
const phone = new Product("03 Phone", "Super smart phone", 1200, 20); //calling using constructor fun
var tomato = new Product("Red Tomatos", "the best tomatoes", 2, 100);

// we used constructor fun in the past ---
let today = new Date().getDay();
//new Date -- function Name & new KEyword
//.getDay() -- member method

// Constructor fun can be created using function Declaration and function expression

//using fun declaration
function User(name, age, isAdmin) {
  this.name = name;
  this.age = age;
  this.isAdmin = isAdmin;
  this.canDrive = () => (this.age >= 18 ? "Yes " : "No");
  this.accessAccounts = () => (isAdmin ? "You have access" : "Access denied..");
}
const tim = new User("tim", 49, false);
var jim = new User("jim", 33, true);

console.log("tim", tim.canDrive()); // calling a method of User function
console.log("jim", jim);
console.log("NEW JIM: ", jim.accessAccounts());

//----------------------------- constructor function using array------------------------------------------
function ColorsMain() {
  this.colorsSub = ["black", "blue", "pink"];
}
var colors1 = new ColorsMain(); // techiniacally,  we don't need paranthese as there is no need for arguments. But prettier applies it

console.log(colors1.colorsSub);

//-------------------------------Used function expression for constructor function----------------------------------------
`use strict`;

const ProductFun = function (name, description, cost, stock) {
  this.name = name;
  this.description = description;
  this.cost = cost;
  this.stock = stock;
  let revenue = 0;

  this.buy = (qty) => {
    if (qty <= this.stock) {
      this.stock -= qty; // this.stock = this.stock -qty  ------------ assignment operator
      let costOfOrder = qty * this.cost;
      revenue += costOfOrder;
      console.log(`${qty} of ${this.name}: $${costOfOrder}`);
    } else {
      console.log(`We are out of stock on ${this.name}`);
    }
  };
  this.getStock = () =>
    `Avaliable Quantiyt (${this.name}) : ${this.stock} units`;
  this.salesReport = () => `total sales for ${this.name} : $${revenue}`;
};

//calling constructor fun using the methods and new keyword

const vPhone = new ProductFun("Vphone 14 pro", `the fastest phone`, 800, 25);
let tapBookPro = new ProductFun("Tapbook Pro v2", "thiniest laptop", 139, 40);

//Actions
vPhone.buy(5); // tell the number of phones bought using this.buy from line 62
tapBookPro.buy(10);

console.log("Phone: ", vPhone.getStock());
console.log("Phone: ", vPhone.salesReport());

console.log("laptop: ", tapBookPro.getStock());
console.log("laptop: ", tapBookPro.salesReport());
