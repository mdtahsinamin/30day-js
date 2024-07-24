/**
 * Task 1: for .. in
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

for (let key in Book) {
  console.log(Book[key]);
}

/**
 * Task 2: Object.keys
 *
 */

const keysOfObject = Object.keys(Book);

console.log(keysOfObject); // return a array

const valuesOfObject = Object.values(Book);
console.log(valuesOfObject);
