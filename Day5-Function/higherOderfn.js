// Task: 1

/*
 * write a higher order function that takes a function and a number and calls the function that many times
 */

const greetingMessage = () => {
  console.log("Hello world");
};

const myHOF = (fn, num) => {
  while (num--) {
    fn();
  }
};

myHOF(greetingMessage, 5);

// Task: 2

/*
 * write a higher order function that takes a two function and a value , applies the first function to the value and then applies the second function to the result;
 */

const square = (num) => num * num;

const calOfWorld = (num) => (num * (num + 1)) / 2;

const secondHOF = (fn_1, fn_2, num) => {
  const result = fn_1(num);

  console.log("square:", result);

  return fn_2(result);
};

console.log("The result : ", secondHOF(square, calOfWorld, 7));
