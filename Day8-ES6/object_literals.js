/**
 * Task 1:  Use enhanced object literal to create an object with method and properties and log the object to the console.
 *
 */

const name = "Khushi ";
const age = 25;
const address = "UK";

const person = {
  name,
  age,
  address,
  getName() {
    return this.name;
  },
  greeting: function () {
    console.log(`Hello sir/madam ${this.name} 💝💗 `);
  },
};
person.greeting();
console.log(person);

/**
 * Task :  Create an object with computed property names based on variables and log the object to the console
 *
 */

const keys = ["name", "age", "address"];
const values = ["Tahsin", 24.5, "Inside her heart 💗"];

const person1 = {
  ...keys.reduce((obj, key, index) => ({ ...obj, [key]: values[index] }), {}),
  greeting: function () {
    console.log(`Hello sir/madam ${this.name} 💝💗 `);
  },
};

// process - 1
const result = keys.reduce((obj, key, index) => {
  return {
    ...obj, // spread it
    [key]: values[index],
  };
}, {});

console.log(person1);

// process - 2
const person2 = {
  [keys[0]]: values[0],
};
// process - 3
const obj = keys.reduce((acc, key, index) => {
  acc[key] = values[index];
  return acc;
}, {});

console.log(obj);

// object access, update

person["name"] = "Ayesha";

person.getAge = function () {
  return this.age;
};

console.log(person.getAge());
