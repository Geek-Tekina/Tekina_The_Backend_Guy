function outer() {
  function hello() {
    makeVar = "hi"; // here auto global is created, and makeVar is automatically considered in global scope
    console.log(makeVar);
  }
  hello();
  console.log(makeVar); // see
}
outer();
console.log(makeVar); // see, magic
