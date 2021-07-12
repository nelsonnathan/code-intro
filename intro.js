// boilerplate nonsense
const readline = require('readline');

console.log('hello, world!')
//creating variables with different data types
const firstName = 'Nathan';
let age = 22;

console.log(firstName, age);

const isCool = true;

let powerLevel;

console.log(powerLevel)

//numbers

let x = 4;
let favNum = 4;

console.log(favNum / x)

//strings

let favRobot = 'Voltron';
let favDino = 'T-Rex';

console.log(`${favRobot} would totally kick ${favDino}'s butt!`)

//user input
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  reader.question("Enter a number to see if it's Adam's favorite: ", function(num){
      if (+num === 12) {
          console.log("That's Adam's favorite!")
      } else {
          console.log("Womp womp, thanks for playing!")
      }
      reader.close();
  })