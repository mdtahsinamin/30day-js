/**
 * Task 1 : add method to the book object that returns a string
 */

const Book = {
  title: "Tahsin Homes",
  author: "Md. Tahsin Amin",
  year: 2019,

  getBookTitle() {
    return this.title;
  },
  setBookPublishYear(year) {
    this.year = year;
  },
};

console.log(`Book's title : `, Book.getBookTitle());

/**
 * Task 2 : add method to takes the parameters and update the books year
 */

Book.setBookPublishYear(2024);
console.log(`Book's published  : `, Book.year);
