// Task: 1

/*
 * largest of three numbers
 */

const first = 60,
  second = 20,
  third = 100;

if (first > second) {
  if (first > third) {
    console.log("largest number is : ", first);
  }
}
if (second > first) {
  if (second > third) {
    console.log("largest number is : ", second);
  }
}
if (third > first) {
  if (third > second) {
    console.log("largest number is : ", third);
  }
}
