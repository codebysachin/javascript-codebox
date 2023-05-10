let a = 10;
let b = null;

const result = (a, b) => {
    return a / b;
}

let response = result(a, b);

console.log(response, "whose type is", typeof response); // output: NaN