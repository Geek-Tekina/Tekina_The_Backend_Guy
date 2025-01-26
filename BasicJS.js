console.log("Hey I am going to be a good backend guy !");
// -------------------------------------------------------------------------------------
// data types
console.log(12, 23.2, 3 / 4); // numbers
console.log("Hey", "Hey", `Hey`, "a"); // string (character is also string in js)
console.log(false); // boolean
console.log(undefined); // undefined and null
console.log(null);
console.log({ name: "Aniket" }); // onject (key - value pair)
console.log(Symbol(`Hello`)); // symbol

// 0 and -0 in js is a concept
console.log(0, -0);
console.log(typeof "A"); // type of : returns a string based on data type passed to it

process.stdout.write("Hey");
process.stdout.write("Peeps\n\n"); // this to write without a line break in node

// -------------------------------------------------------------------------------------
// variables
let a = 10;
var b = "Hello";
const pi = 3.14;

// Functions
function add(a, b) {
  return a + b;
}
console.log(add(4, 5));

var x = console.log; // we can store functions as well
x("Hey");
