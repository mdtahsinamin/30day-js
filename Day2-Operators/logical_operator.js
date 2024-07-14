// Task: 1

/*
* use  && 

*/

const a = 100;
const b = 500;

if (b > a && b % a === 0) {
  console.log(`${b} is greater than ${a}`);
} else {
  console.log(`${b} is less than ${a}`);
}

// Task: 2

/*
* use  || 

*/

const first = 1506;
const second = 100;
const isTrue = false;

if (second >= first || !isTrue) {
  console.log("Hi Programmer");
} else {
  console.log("Bye Programmer");
}

// Task: 3

/*
* use  !

*/

let isToggle = false;

let clickTheButton = false;

if (!clickTheButton) {
  console.log("Please click the button");
  clickTheButton = !clickTheButton;
  isToggle = !isToggle;
}
if (clickTheButton) {
  isToggle = !isToggle;
  console.log("You Toggle it 😊");
}
