/*
-> setTimeout(task callback fnc, time in ms (milli sec)); 
-> setTimeout returns a timeout ID, which is a numeric identifier that can be used to cancel the timeout using clearTimeout().

-> setInterval(task callback fnc, time-interval in ms (milli sec) to repeat the); 
-> it also returns a timeOutID, use clearInterval() to end.


IMPORTANT - If both setTimeout and setInterval are scheduled together, they both go into the macrotask queue, but setTimeout executes first (if it has a shorter delay or the same delay as setInterval).
*/

console.log("Start");

setTimeout(() => {
  console.log("Hello after 2 seconds!");
}, 2000); // 2000ms = 2 seconds

console.log("End");

// const timeoutId = setTimeout(() => {
//   console.log("This will not be printed!");
// }, 3000);

// console.log("Timeout ID:", timeoutId); // Example: Timeout ID: 1

// clearTimeout(timeoutId); // Cancels the timeout before it executes

// ------------------------------------------------------------------------------------

let count = 1;

const intervalId = setInterval(() => {
  console.log(`Message ${count}`);
  count++;

  if (count > 5) {
    clearInterval(intervalId); // Stops the interval after 5 executions
  }
}, 1000); // Runs every 1 second
