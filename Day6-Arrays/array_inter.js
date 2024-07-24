/**
 * Task 1 : map method
 */

let arr = [4, 8, 10, 12, 14, 16, 18];

const doubleOfEveryElement = arr.map((elt) => elt * 2);

console.log(doubleOfEveryElement);

/**
 * Task 2 : filter method
 */

arr = [5, 7, 10, 12, 14, 19, 150];

const evenElt = arr.filter((elt) => elt % 2 === 0);

console.log(evenElt);

/**
 * Task 3 : reduce method
 */

const totalSum = arr.reduce((acc, cur) => (acc += cur), 0);

console.log(totalSum);
