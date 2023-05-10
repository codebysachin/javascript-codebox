let numbers = [1,2,3,4,5];

// create a copy of array where you can provide start and end index
let copyArray = numbers.slice();
console.log(copyArray);
console.log(numbers);

let newArray = copyArray.splice(0,3);
console.log(copyArray);
console.log(newArray);

// Map
console.log(numbers.map((n)=> n * n));

// Reduce
console.log(numbers.reduce((a,n) => a + n + 1, 0));

// Filter
console.log(numbers.filter((n) => n % 2 !== 0));

// Push
console.log(numbers.push(6));
console.log(numbers);

// Pop
console.log(numbers.pop(1));
console.log(numbers);

// flat
// console.log(numbers.flat());

// flatMap

// foreach
numbers.forEach((n) => n + 2);
console.log(numbers);