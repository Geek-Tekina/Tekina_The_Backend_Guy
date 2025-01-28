// --------------------------------Coercion Examples------------------------------------------
// for better explanantion see ECMA docs dor Minus and Add operator, ToNumber() and ToString() abstract op
// 1.
console.log("O/p ", 1 + "1"); // 11
console.log("O/p ", "1" + "1"); // 11
console.log("O/p ", 1 - "1"); // 0
console.log("O/p ", "1" - 1); // 0
console.log("O/p ", "1" - "1"); // 0  - Coercion

// 2.
console.log("O/p ", 1 - "abc"); // NaN (not a number)

// 3.
console.log("O/p ", true - 7);
console.log("O/p ", true + 7); // as there is no string, so conversion is only for number true -> 1
console.log("O/p ", true + "1"); // now as one is string so true is converted to "true" then concatenation is done

// 4.
console.log("O/p ", [0] - 2); // toNumber([0]) = 0, so -2
console.log("O/p ", [null] - 2); // -2

// 5.
console.log(
  "O/p ",
  2 -
    {
      a: "10", // as this is an obj, ToPrimitive() is called, then valueOf() is called (bcoz operation is minus, so hint is "Number") hence 10 is returned
      valueOf() {
        return 10;
      },
    }
); // so this is a case of number - object. See docs for ToNumber(object), here two functions can be declared and they are called in different order as per the hint. Fnc - 1. valueof() & 2. toString() [they r not abstract ops, they are in-built functions which can be overwritten by us]

// 6.
console.log(
  "O/p ",
  2 -
    {
      a: "10",
      valueOf() {
        return {};
      },
      toString() {
        return "10"; // here as valueOf is not giving any primitive value, so toString() is called i.e "10"
      },
    }
);

// 7.
console.log("O/p ", 45 + { a: 10 }); // 45[object Object] - this is bcz objects when converted to string are given a default string [object Object]
console.log(
  "O/p ",
  45 +
    {
      a: 10,
      toString() {
        return "I am now defined toString fnc"; // now here obj -> number, then valueOf() is called as it is not primitive then toString() is called -> 45 + "I am now defined toString fnc"
      },
    }
);

// 8.
a = { x: 10 };
console.log("O/p ", a.toString()); // [object Object] , inbuilt toString() fnc

// 9.
console.log("O/p ", "123" + 123); // here 123 is called on ToString(123)
console.log("O/p ", "123" - 100); // here "123" is called on ToNumber("123")

// 10.
console.log("O/p ", "0xaf" - 1); // here Oxaf is a valid hexadecimal number - 175

// 11.
console.log("O/p ", [1, 2, 3] + "Hey"); // here ToString abstract op is called, [1,2,3] -> "1,2,3"

// 12
console.log(
  "O/p ",
  10 ==
    {
      a: 12,
      valueOf() {
        return 10; // this is true, as ToPrimitive() is called on obj, and then valueOf() is called
      },
    }
);

//13
console.log(
  "O/p ",
  "12" ==
    {
      a: 21,
      toString() {
        return "12"; // false, as valueOf() is called first
      },
      valueOf() {
        return 11;
      },
    }
);

// 14.
console.log(
  "O/p ",
  12 ==
    {
      a: 21,
      toString() {
        return "12"; // true
      },
      valueOf() {
        return 12;
      },
    }
);
// --------------------------------Coercion Examples------------------------------------------
