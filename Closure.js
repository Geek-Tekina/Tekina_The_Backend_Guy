function todo(task) {
  console.log("Start of todo fnc");

  setTimeout(function fun() {
    console.log("Completed", task);
  }, 5000);

  console.log("End of todo fnc");
}

console.log("Start of program");

todo("Assignments");

console.log("End of program");
/* so how this task variable is accessed even after todo function is excetued ?
    this is because of closure, the function remembers it's lexical scope 
*/
