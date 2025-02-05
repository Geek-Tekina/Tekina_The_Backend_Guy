// name, age, fun(), hello() are in global scopes
// test() func, nx is in function scope of fun, they are local variables and function to fun()

let name = "Aniket";
var age = 22;

function fun() {
  console.log("Hey ", name);
  var nx = 10;
  function test() {
    console.log("This is a function inside function scope");
  }
  test();
  console.log(nx);
}

function hello() {
  console.log("hiyaa !", name, "your age", age);
}

fun();
hello();

// -------------------------------------------------------------------------------------------------------
// var
console.log(num); // this also gives undefined, but no error
{
  var num = 123.123;
}
console.log(num); // bcoz of var, num becomes global

function numPlay() {
  console.log("Before declaration :", n); // this do not gives error bcoz of var
  var n = 0.123;
  console.log("After declaration ", n);
}
numPlay();

// let
{
  let x = 10;
  console.log(x);
}
console.log(x); // this gives error
