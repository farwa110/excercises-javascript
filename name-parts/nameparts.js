"use strict";

const str = "Peter Heronimous Lind";

console.log(str.substring(0, str.indexOf(" ")) + "_"); // First name + "_"
console.log(str.substring(str.indexOf(" ") + 1, str.lastIndexOf(" ")) + "_"); // Middle name + "_"
console.log(str.substring(str.lastIndexOf(" ") + 1) + "_"); // Last name + "_"

const fullName = "Albus Percival Wulfric Brian Dumbledore";

const firstNameOne = "Albus"; // Added const
const middleNameTwo = "Percival Wulfric Brian"; //  Added const
const lastNameThree = "Dumbledore"; //  Added `const

console.log(fullName.substring(0, fullName.indexOf(" ")) + "_"); // First name + "_"
console.log(fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" ")) + "_"); // Middle name(s) + "_"
console.log(fullName.substring(fullName.lastIndexOf(" ") + 1) + "_"); // Last name + "_"

// console.log("_" + str.substring(str.indexOf(" firstName "), 1, str.lastIndexOf("lastName")) + "");
// console.log(str.substring(0, str.indexOf(" ")) + "_");
// console.log(str.substring(str.indexOf(" ") + 1, str.lastIndexOf(" ")));
// // console.log(str.substring(str.lastIndexOf(" "))); // here is space before Lind
// console.log(str.substring(str.lastIndexOf(" ")).trim()); //use trim at the end to remove space before Lind

// const firstNameOne = fullName.substring(0, fullName.indexOf(" ")); // Extract first name
// const middleNameTwo = fullName.substring(fullName.indexOf(" "), fullName.lastIndexOf(" ")).trim(); // Extract middle name(s)
// const lastNameThree = fullName.substring(fullName.lastIndexOf(" ")).trim(); // Extract last name

// console.log("_" + firstNameOne + "_");
// console.log("_" + middleNameTwo + "_");
// console.log("_" + lastNameThree + "_");
