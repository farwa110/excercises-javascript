const str = "farwa";

console.log(str.length); // Output: 5

console.log(str.substring(2, 3)); // i use sub string by writing the index number as it shows the first index letter not the last one

console.log(
  str.substring(0, 1).toUpperCase() + // First character in lowercase
    str.substring(1, 3).toLowerCase() + // Character at index 3 in uppercase
    str.substring(3, 4).toLowerCase() + //last character in lowercase
    str.substring(4, 5).toLowerCase() +
    str.substring(5).toLowerCase()
);

//************************************************** Another example****************************************************************************************************************/

const magician = "mr harry james potter";

console.log(magician.length);

console.log(
  magician.substring(0, 1).toUpperCase() + //M capatialize
    magician.substring(1, 3).toLowerCase() + // r and gap lowercase
    magician.substring(3, 4).toUpperCase() + //H capitalize from harry
    magician.substring(4, 8).toLowerCase() + // arry lowercase
    " " + // Add space here
    magician.substring(9, 10).toUpperCase() + // J capitalize from James
    magician.substring(10, 14).toLowerCase() + // ames lowercase
    "" + //add space here between harry n James n potter
    magician.substring(14, 16).toUpperCase() + //P capatalize from potter
    magician.substring(16, 21).toLowerCase() //otter lowercase from potter
  // magician.substring(21).toLowerCase()
);
