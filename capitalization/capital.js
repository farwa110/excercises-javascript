const str = "farwa";

console.log(str.length); // Output: 5

console.log(str.substring(2, 3)); // i use sub string by writing the index number as it shows the first index letter not the last one

console.log(
  str.substring(0, 2).toLowerCase() + // First character in lowercase
    str.substring(2, 3).toUpperCase() + // Character at index 3 in uppercase
    str.substring(3, 5).toLowerCase() + //last character in lowercase
    str.substring(5).toLowerCase()
);
//concentating strings  together
console.log(str.substring(0, 2).toLowerCase() + str.substring(2, 3).toLowerCase() + str.substring(3, 4).toUpperCase() + str.substring(4).toLowerCase());

console.log(str.substring(0, 2).toLowerCase() + str.substring(2, 3).toLowerCase() + str.substring(3, 4).toLowerCase() + str.substring(4).toUpperCase());

//console.log(
console.log(str.substring(0, 2).toLowerCase() + str[2].toUpperCase() + str.substring(3).toLowerCase()); //anden måde at gøre
