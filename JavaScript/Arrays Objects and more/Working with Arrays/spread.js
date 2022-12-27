// rest -- collects multiple values into one variable
// spread -- spreads a varible into multiple values


//cloning an Array
 const items = ["mouse", "cable", "microphone"];
 //let itemsCopy = items;

 //to avoid/overcome this, we use spread
 let itemsCopy = [...items]; // ---- this is spread

 itemsCopy.push("USB"); //this will push items into the main array as well
 // as itemsCopy is just a refrence to the main item array

 console.log(`ITEMS: ${items}`);
 console.log(`ITEMS COPY: ${itemsCopy}`);


 //---------------concatenate multiple array using spread--------------------
 //toDo App

 var Task = function (title){ // var Task is captial as it is a Constructor function
    this.title = title ?? "My Tasks";
    this.taskList = [];
    this.showTask = function() {
        console.log(`--------${title}------------`);//they did, this.title, I am testing
        this.taskList.forEach((item, index) =>
            console.log(`${index + 1}.${item}`) // +1, so that index shows 1 in the output 
        );
    };
    this.add = function(item){
        this.taskList = [item, ...this.taskList]; // this will prepend the newly added items at the top of the list/array
    };
 };

 let myTasks = new Task ("Name of title");
 myTasks.add("Book movie tickets");
 myTasks.add("send UX development proposal");
 myTasks.showTask();

 //use of declaring a constructor function is that I can create a new object and that would be a spreate list

 let shopping = new Task ("Shopping title list");
 shopping.add("Vegs");
 shopping.add("fruits");
 shopping.showTask();

 //-------------------comparing 2 numbers using spread-----------------------

 let numArray = [
    [2,4],
    [55,23],
    [88,95],
    [56,1]
 ];

 const isGreater =(a,b) => a >b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`;
 numArray.forEach((newList) => console.log(isGreater(...newList)));