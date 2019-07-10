// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function logic (){
  let babies = 'All babies are illogical.'
  console.log("It's a baby");

function moreLogic(){
  let crocodile = 'Nobody is despised who can manage a crocodile.'
  console.log('it can manage a crocodile');

function mostLogic(){
  let person = 'Illogical persons are dispised.'
  console.log('it is despised')
}
mostLogic();
}
moreLogic();
}
let closure = logic();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
