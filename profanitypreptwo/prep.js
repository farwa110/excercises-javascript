"use strict";

let sentence = "Jeg er en tekst der skal findes ord i";

const word = "ord";

console.log(`The word "${word}" ${sentence.includes(word) ? "is" : "is not"} in the sentence`);

const wordsToCheckFor = ["ord", "tekst"];
console.log(wordsToCheckFor.some((word) => sentence.includes(word)));

//some()only works on array not on strings//
//wordsToCheckFor.some(...) → Loops through each word in the array.
//  word => theText.includes(word) → Checks if theText contains that word.
//  some() → Returns true if at least one word is found in theText, otherwise false.
