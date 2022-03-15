interface A { 
    name : string;
}
interface B { 
    phone: number;
}

// obj1 is of A & B both
let obj1 : A & B;
obj1 = {name : "Alex", phone : 30000}
document.write(`<p>Name = ${obj1.name}, Phone = ${obj1.phone}</p>`)