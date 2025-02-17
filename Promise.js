// they are special JS objects, that are returned from a async task / fnc. They are also called as Readibility Enhancers.
// They are used to handle async operations in JS. They are used to handle multiple async operations.

// creating a Promise

function fetchData() {
  return new Promise((resolve, reject) => {
    // promise constructor takes a callback function with 2 args resolve and reject
    for (var i = 0; i < 1000000000; ++i) {
      // some task
    }

    resolve("Data Fetched"); // here we are resolving the promise and sending the value parameter
  });
}

var promiseObj = fetchData(); // this will return a promise object
