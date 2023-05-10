// Synchronous code
console.log("Start - Count till 1B");

function count() {
  let counter = 0;
  for (let index = 0; index < 1000000000; index++) {
    counter++;
  }
  return counter;
}

console.log(count());

console.log("Stop Counting");

// Asynchronous code
console.log("Call API");

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
}

fetchData().then((result) => {
  console.log("Response from API", result);
});

console.log("API Call finished");
