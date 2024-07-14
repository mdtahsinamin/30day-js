// Task: 1

/*
* Declare the variable using var 

*/

var age = 30;
console.log("Age: ", age);

// Task: 2

/*
* Declare the variable using let 

*/

let firstName = "Muhammad";
console.log("FirstName: ", firstName);

// Task: 3

/*
* Declare the variable using const 

*/
const isText = false;
console.log("Text or not: ", isText);

// Task: 4

/*
* typeof

*/

console.log("Type of age : ", typeof age); // number
console.log("Type of name: ", typeof firstName); // string
console.log("Type of isText", typeof isText); // boolean

const arr = [1, 2, 3, 4, 5, 69];

console.log("Type of array", typeof arr); // object

const myObj = {
  name: "Tahsin",
  age: 24,
};

console.log("Type of object", typeof myObj);

// Task: 5

/*
* Re-assign

*/

firstName = "Amin";
console.log("Change the firstName value: ", firstName);

// Task: 6

/*
* Re-assign const 
* when Declare the variable using const, we can't change the value. 
* if you Declare the variable that is primitive variable as like string, boolean, number you can't change the value
* But when you Declare non-primitive value as like array, object you can change the value, for non-primitive value it takes the references

*/

const num = 5;
// num = 6; // Assignment to constant variable.
arr[2] = 3 * 6;
console.log(arr); // change the value in index 2;

myObj.name = "Tanvir";

console.log(myObj);
