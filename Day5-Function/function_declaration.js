// Task: 1

/*
 * write a function to check if a number is even or odd log the result to the console
 */

function isEven(num) {
  if (num % 2 === 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
}

isEven(5);

// Task: 2

/*
 * write a function to calculate the square of a number and return the result

*/

function square(num) {
  return num * num;
}

console.log("The square : ", square(10));
