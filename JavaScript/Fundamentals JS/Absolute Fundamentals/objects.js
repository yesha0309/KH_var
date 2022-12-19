//objects are structural dataType
/*Eg of object
        -- Cat is an object
        -- eyes, colors.. are properties*/

/* ---------------> cat is an OBJECT
    --------------> color, breed, eyeColor, white, Bright Blue are PROPERTIES
    --------------> breed, color, eyeColor are PROPERTY 
    --------------> white, Bright Blue , Persian are VALUE
    cat ={ 
        color: 'white';                                
        breed: 'Persian'
        eyeColor: 'Bright Blue'
    }
*/
var sentiel = {
  name: "Sentiel Design\u{2122}",
  employeeCount: 50,
  city: "Tokyo",
  country: "Japan",
  isListed: false,
};
typeof sentiel;

console.log(object.propertyName); //-----> fetches the value
console.log(sentiel.employeeCount); // -----> output is 50
console.log(sentiel["city"]); //-------> output is Tokyo

//This is useful when,
var propName = "employeeCount"; //this employeeCount is the same var declared in line 18
console.log(sentiel[propName]);

sentiel.stockSymbol = "SDJ"; // can be used to add new property
sentiel.isListed = true; // can be used to modify/update the existing property
sentiel.country = "USA";
delete sentiel.country; // will delete a property

console.log(sentiel);
/* OUTPUT
                {
                    name: 'sentiel Design™',
                    employeeCount: 50,
                    city: 'Tokyo',
                    country: 'Japan',
                    isListed: true,
                    stockSymbol: 'SDJ'
                    }
             */

//--------------------OBJECT CONSTRUCTOR--------------------------------
var currencies = new Object();
currencies["Japan"] = "Yen";
currencies["USA"] = "USD Doller";

console.log(currencies);
console.log(
  `The currencies of ${sentiel.country} is ${currencies[sentiel.country]}`
);
//if i change sentiel.country = "USA"; than the output will be dynamically updated to 'The currencies of USA is USD Doller'

//----------------------------NESTED OBJECTS------------------------------

var sentiel = {
  name: "Sentiel Design\u{2122}",
  employeeCount: 50,
  location: {
    city: "Tokyo",
    country: "Japan",
  },
  isListed: false,
};

//----------------------------- PASS BY VALUE--------------------------------
var fruit = "apple";
var pie = fruit;
pie = walnut; // reassigning pie var

console.log(`Fruit: ${fruit}`); //output--- 'Fruit: Apple'
console.log(`Pie: ${pie}`); // output -- 'Pie: Walnut'

var sentiel = {
  name: "Sentiel Design\u{2122}",
  employeeCount: 50,
  location: {
    city: "Tokyo",
    country: "Japan",
  },
  isListed: false,
};

var john = {
  name: "John Mockery",
  age: 23,
  designation: "Sr Designer",
  organization: sentiel.name,
  address: sentiel.location,
};
var sarah = {
  name: "Sarah Rice",
  age: 27,
  designation: "UX Architect",
  organization: sentiel.name,
  address: sentiel.location,
};

console.log(john);
console.log(sarah); // will give the same output as above

john.address.city = "Osaka"; // will update the city from to Osaka for both John and Sarah, due to refrence and updated value
