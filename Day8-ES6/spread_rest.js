/**
 * Task 1:  spread operator
 *
 */

const arr = [4, 7, 8, 9, 10];
const brr = [7, 8, 2, 1, 6, 9];

const newArray = [...arr, ...brr];

console.log(newArray);

/**
 * Task 2:  rest operator
 *
 */

const sum = (...rest) => {
  return rest.reduce((acc, cur) => acc + cur, 0);
};

console.log(sum(...arr));
