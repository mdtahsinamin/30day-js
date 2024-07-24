/**
 *
 * Task 1 : this
 *
 */

const Book = {
  title: "Tahsin Homes",
  author: "Md. Tahsin Amin",
  year: 2019,
  getAllInformation() {
    return `Title : ${this.title} Year: ${this.year}`;
  },
};

console.log(Book.getAllInformation());
