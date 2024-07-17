// Task: 1

/*
 * write a arrow function to calculate the product of two number with default value
 */

const productOfTwoParameters = (a, b = 1) => a * b;

console.log("Product: ", productOfTwoParameters(10));

// Task: 2

/*
 * write a arrow function return greeting
 */

const greetingMessage = (name, age = 20) => {
  return `Happy birthday to you ${name} your age now: ${age} !`;
};

console.log(greetingMessage("Tarit", 26));
