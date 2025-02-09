"use strict";

let theTekst = "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";

const ord = theTekst.split(" "); //split string mehtod
console.log(ord[(6, 13)]);

console.log(theTekst.replaceAll("ord", "ting")); //repalce all string mehtod
