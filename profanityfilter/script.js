"use strict";

// Array of words to be replaced
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

// Function to replace bad words and highlight good words
function replaceCurseWords() {
  let textElement = document.getElementById("text");
  let currentSentence = textElement.innerText; // Get the current text from <p>

  // console.log(replaceCurseWords);

  // Check if the text contains any bad words
  const containsCurseWords = curseWords.some((word) => currentSentence.includes(word.bad));

  if (!containsCurseWords) {
    // If no bad words are found, show the dialog
    document.getElementById("noBadWordsDialog").showModal();
  } else {
    // Replace bad words with good words and wrap them in a span for styling
    let updatedSentence = currentSentence;
    curseWords.forEach((word) => {
      updatedSentence = updatedSentence.replaceAll(word.bad, `<span class="good-word">${word.good}</span>`);
    });

    // Update the paragraph with the modified text
    textElement.innerHTML = updatedSentence;
  }
}

// Add event listener to the button
document.getElementById("myButton").addEventListener("click", replaceCurseWords);

// "use strict";
// //array
// const curseWords = [
//   { bad: "var", good: "const" },
//   { bad: "float", good: "grid" },
//   { bad: "marquee", good: "just don't" },
// ];

// //this is a string
// let sentence = "Programmeringer er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning.";

// console.log(sentence.includes("var"));
// console.log(sentence.includes("float"));
// console.log(sentence.includes("marquee"));

// console.log(sentence.replaceAll("var", "const"));
// console.log(sentence.replaceAll("float", "grid"));
// console.log(sentence.replaceAll("marquee", "just don't"));

// //new variable with replaced by good words
// let updatedSentence = sentence.replaceAll("var", "const").replaceAll("float", "grid").replaceAll("marquee", "just don't");

// console.log(updatedSentence); // Updated sentence with all replacements

// //step3
// // Check if any "bad" word exists in the sentence
// const containsCurseWords = curseWords.some((word) => sentence.includes(word.bad));

// if (!containsCurseWords) {
//   // If no bad words are found, show the dialog
//   const dialog = document.querySelector("dialog");
//   dialog.textContent = "No bad words found! The sentence is already clean!";
//   dialog.showModal(); // This will display the dialog
// } else {
//   // Proceed to replace the bad words with good ones
//   let updatedSentence = sentence;
//   curseWords.forEach((word) => {
//     updatedSentence = updatedSentence.replaceAll(word.bad, word.good);
//   });

//   console.log(updatedSentence); // Display the updated sentence after replacement
// }
// //step4

// document.getElementById("text").innerText = updatedSentence;

// //step5
// document.getElementById("myButton").addEventListener("click", function () {
//   // Step 1: Replace bad words
//   let updatedSentence = sentence;
//   curseWords.forEach((word) => {
//     updatedSentence = updatedSentence.replaceAll(word.bad, word.good);
//   });

//   // Step 2: Update the paragraph text
//   document.getElementById("text").innerText = updatedSentence;
// });
