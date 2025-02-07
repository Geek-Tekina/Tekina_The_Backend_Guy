// Fnc Expressions are not hoisted.
// 2 types

// anonymous

var x = function () {
  console.log("I am anonymous function expression !!"); // these are not preferred and are not a good coding practise as they are hard to debug.
};

x();

// named
const greet = function sayHello(name) {
  return `Hello, ${name}!`;
};

console.log(greet("Aniket")); // Output: Hello, Aniket!
