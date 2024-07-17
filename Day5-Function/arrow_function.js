// Task: 1

/*
 * write a arrow function to calculate the sum of two number
 */

const sumOfTwoNumber = (a, b) => a + b;

console.log("Sum of two number", sumOfTwoNumber(10, 50));

// Task: 2

/*
 * write a arrow function to check if a string contains a specific character
 */

const containsSpecificCharacter = (str, char) => {
  const isContain = str.includes(char);

  return isContain;
};

console.log(containsSpecificCharacter("@Tahsin", "@"));

