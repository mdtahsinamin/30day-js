/**
 * Task 1: Create an two-dimensional array
 * */

const arr = [
  [1, 4, 7, 8],
  [8, 9, 4, 6],
  [7, 5, 7, 6],
];

console.log(arr);

/**
 * Task 2: access two-dimensional array
 * */

for (let i = 0; i < arr.length; i++) {
  let j = arr[i].length;

  for (let k = 0; k < j; k++) {
    console.log(arr[i][k]);
  }
}
