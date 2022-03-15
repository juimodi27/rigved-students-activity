var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age) {
        return _super.call(this, name, age) || this;
    }
    Employee.prototype.printData = function () {
        // we can access age as it is inheritted
        document.write("<p>Name: ".concat(this.name, ", Age: ").concat(this.age, "</p>"));
    };
    return Employee;
}(Person));
var e = new Employee("Alex", 35);
e.printData();
e.name = "Alexandar"; // name is visible because it is public
// e.age = 30; // gives error because age is protected
e.printData();
