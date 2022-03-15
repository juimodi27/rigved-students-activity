// here x & y would by of any type
function sum1(x, ...y) {
    let result = x;
    for(let i of y) {
        result = result + i;
    }
    return result;
}
// here x & y must have numbers
function sum2(x: number, ...y : number[]): number {
    let result = x;
    for(let i of y) {
        result = result + i;
    }
    return result;
}
let r = sum1(10, "20", "30", 40);
document.write(`<p>Result = ${r}</p>`);
r = sum2(10, 40, 20, 30);
document.write(`<p>Result = ${r}</p>`);