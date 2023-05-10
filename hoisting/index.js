function print() {

    console.log("Hoisting implemented as variable defined using var keyword");
    console.log("//////////////////////////////////////////////////////////");
    console.log(x); // output: undefined
    var x = 10;

    console.log();
    console.log("Hoisting cannot be implemented as variable is defined using let/const keyword");
    console.log("///////////////////////////////////////////////////////////////////////");
    console.log(y); // output: error
    let y = 20;
}

print();