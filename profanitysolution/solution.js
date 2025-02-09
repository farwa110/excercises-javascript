"use strict";

// Array of curse words to replace
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

// Original sentence
let sentence = "Programmeringer er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning.";

// Function to replace curse words
function replaceCurseWords() {
  let updatedSentence = sentence;
  curseWords.forEach((word) => {
    updatedSentence = updatedSentence.replaceAll(word.bad, word.good);
  });
  return updatedSentence;
}

// Step 3: Check if any curse words exist
document.getElementById("myButton").addEventListener("click", function () {
  // Check if there are any bad words in the sentence
  const containsCurseWords = curseWords.some((word) => sentence.includes(word.bad));

  if (!containsCurseWords) {
    // If no bad words, show the dialog
    const dialog = document.getElementById("noBadWordsDialog");
    dialog.showModal(); // This will display the dialog
  } else {
    // Replace the bad words with the good ones
    let updatedSentence = replaceCurseWords();
    document.getElementById("text").innerText = updatedSentence; // Update the paragraph text
  }
});
