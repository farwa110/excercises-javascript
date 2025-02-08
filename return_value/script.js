// function greeting(firstName) {
//   //function
//   let returnValue = `Hello ${firstName}`; //return value variable
//   return returnValue;
// }
// // const result = greeting("klaus");
// // console.log(result);

// ///console.log
// console.log(greeting); this was before as i have not addede result in console.log.

function greeting(firstName) {
  let returnValue = `Hello ${firstName}`; // return value
  return returnValue; // Function stops here and sends back the value
}

const result = greeting("Klaus"); // The function returns "Hello Klaus" and stores it in `result`
console.log(result); // Output: Hello Klaus
