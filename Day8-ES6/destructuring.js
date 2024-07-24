/**
 * Task 1:  destructing to extract the first and second element
 *
 */

const arr = [1, 8, 9, 4, 5, 6];
const [first, second] = arr;

console.log(first, second);

/**
 * Task 2:  destructing from object
 *
 */

const Book = {
  title: "Tahsin Homes",
  author: "Md. Tahsin Amin",
  year: 2019,
};

const { title, author, year } = Book;

console.log({ title, author, year });
