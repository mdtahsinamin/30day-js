// Task: 1

/*
 * print from 1 to 5
 */

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

// Task: 2

/*
 * Factorial
 */

let factorial = 1;

let num = 5;
do {
  factorial *= num;
  num--;
} while (num > 0);

console.log("Factorial: ", factorial);
