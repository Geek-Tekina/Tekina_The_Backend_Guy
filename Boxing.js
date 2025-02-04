// Boxing : In js primitives are converted to objects, is called boxing
// console.log(9.toString()); // this gives error as 9 is primitive and has no associative fncs

let x = 9;
console.log(x.toString()); // '9' , bcoz boxing is done 9 is converted to object

(9).toString();
// 9..toString();  these two syntax also does boxing
