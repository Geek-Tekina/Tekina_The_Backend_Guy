### Tekina The Backend Guy

---

#### Day 1

- Learnt about roles of a backend guy.
- The importance of concepts is very huge in industry.
- Check StackShare.io website.
  ##### Topics Covered
  - Hello World in Js cum Node
  - Data types & Variables
  - Operators

---

#### Day 2

- There are 4 pillars of JS - `Coercion`, `Scopes`, `Async Features of JS` and` Class and objects`.

  ##### Topics Covered

  - Conditional Statements, break, continue, switch
  - Functions ( a fnc returns `undefined` by default in JS)
  - Coercion and abstract operations - https://262.ecma-international.org/#sec-abstract-operations
  - Read about `Add, Minus operators` and See `ToNumber(), ToString()` abstract operatoins.
  - See case where number - object, number + object is there !! and two fncs `toString() and valueOf()`
  - NaN

---

#### Day 3

- Revised Coercion

  ##### Topics Covered

  - `ToPrimitive()` and inbuilt two functions for obj in JS - 1. `toString()` 2. `valueOf()`
  - `ToBoolean()` abstract operator
  - `==` and `===` operators

---

#### Day 4

- Abstract Equality in detail.
- `NaN` Not a Number - It is the only primitive that does not follows identity property and is not equal to itself.

---

#### Day 5

- `isNan()` function checks for anything that is not a number and returns true, a string passed will also be called NAN by this function.
  Solution : Use `Number.isNan()` this always gives true only when true is passed.
- Boxing

---

#### Day 6

##### Topics Covered

- Scopes in JS - 3 types, global, function and block
- let, var and const
- Auto Globals `(work only for declarations in excecution phase)`
- If you don't want your code to create auto globals, `"use strict";` is used.
- Lexical Scpoing
- Hoisting - `this is because of compilation phase (where scopes are assgined to variables and functions ), where all the formal declarations are first seen in this phase, and then in excution phase, it is available in complete scope`
- IIFE - Immediately Invoked Function expression
  ```js
  (function () {
    // code inside the function
  })();
  ```

---

#### Day 7

- `Function Expressions` - 2 types Named and Anonymous

---

#### Day 8

- `setTimeout() and setInterval()` fncs
- Closures

---

#### Day 9

- Async Nature of JS
- Node Runtime and features
- Event Loop and Code excetion in Node Runtime
- Callback queues, micro and macro queues

---

#### Day 10

- Behaviour of console.log()
- Website for visuallizing Event loop - `http://latentflip.com/loupe/?code=Cgpjb25zb2xlLmxvZygiUGFydCBBIik7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVvdXQoKSB7CiAgICBjb25zb2xlLmxvZygiUGFydCBDIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIlBhcnQgQSIpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D`
- Disadvantages of Callbacks
  - Call back hell
  - Has `Inversion Of Control` (IOC Principle) problem, we do not have control over our callback fnc, we depend upon the internal implementation where out callback is being called.
- console.log() with obj in browser - unexpected behaviour
- `Promises`

---

#### Day 11

- Creation of Promises

---
