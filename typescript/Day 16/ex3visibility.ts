class Person {
    public name: string;
    protected age: number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person {
    constructor(name, age) {
        super(name, age);
    }
    printData() : void {
        // we can access age as it is inheritted
        document.write(`<p>Name: ${this.name}, Age: ${this.age}</p>`);
    }
}
let e = new Employee("Alex", 35);
e.printData();
e.name = "Alexandar"; // name is visible because it is public
// e.age = 30; // gives error because age is protected
e.printData();