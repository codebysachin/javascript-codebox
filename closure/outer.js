function outer() {
    const x = 10;
    function inner() {
        console.log(x);
    }
    return inner;
}

export default outer;
