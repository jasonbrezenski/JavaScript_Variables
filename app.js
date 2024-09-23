console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
let lastName;
var age;

// Exercise 2
const firstName = "Jason";
lastName = "Brezenski";
age = 47;

// Exercise 3
let language = "JavaScript";
let createdYear = 1995;
let isCaseSensitive = true;

//Exercise 4
let price = 19.99;
let isOnSale = false;
let salePercentage = 15;
let stock = 0;
let inStock = false;
let selectedSize = "M";

//Exercise 5
let title = "Name of the Wind";
let author = "Patrick Rothfuss";
let pageCount = 722;
let bookmark =  456;
let hasRead = true;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(language);
console.log(createdYear);
console.log(isCaseSensitive);

console.log(`${author} wrote "${title}" in ${createdYear}, it is a large book with ${pageCount} total pages.`)

let response = prompt("Thanks for visiting our site, what is your name?")
alert(`Hello ${response}!`)
