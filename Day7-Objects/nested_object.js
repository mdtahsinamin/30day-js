/**
 * Task 1 : A Nested object representing a library with properties
 */

const Library = {
  name: "National Library",
  books: [
    { title: "Tahsin Homes", author: "Md. Tahsin Amin", year: 2019 },
    { title: "Tanzir Homes", author: "Md. Tanzir Amin", year: 2019 },
    { title: "Tanvir Homes", author: "Md. Tanvir Amin", year: 2019 },
  ],
};

console.log(Library);

/**
 * Task 2 : Access and log the name of the library and titles of all of the books
 */

console.log(Library.name);

Library.books.forEach((book) => console.log(book.title));
