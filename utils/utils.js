//utils math random function for rock paper game ,its used as a library of function which can be re-used so we export them.
// i have removed dom content loaded and function getcomp choice as i export it from here and domcontent and use strict i am not using because i have added
// script module so now i donot need it...

const choices = ["rock", "paper", "scissors"];
export function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}
