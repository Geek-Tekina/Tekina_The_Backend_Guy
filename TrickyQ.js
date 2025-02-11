// 1.
console.log(typeof typeof 21); // string
// 2.
console.log(-4 || 5); // -4, as -4 is also a truthy value
// 3.
console.log(2 > 1 && "Tekina"); // Tekina
// 4.
console.log(console.log(10)); // console log returns undefines as well, 10 undefined
// 5.
console.log(NaN === NaN); // false, as NaN is not comparable to any thing in jS not itself also.
// comment one out of 6 and 7 then run to understand the difference
// 6.
function test() {
  for (var i = 0; i < 3; ++i) {
    setTimeout(function exec() {
      console.log(`i : ${i}`); // i : 3 - 3 times
    }, i * 1000);
  }
}
test();
// 7.
function test2() {
  for (let i = 0; i < 3; ++i) {
    setTimeout(function exec() {
      console.log(`i : ${i}`); // i : 0, i : 1, i : 2
    }, i * 1000); // this is because that every for iteration creates a new block scope and each i is different
  }
}
test2();
