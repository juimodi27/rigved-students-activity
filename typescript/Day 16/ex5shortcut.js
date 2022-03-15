var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.display = function () {
        document.write("<p>Name: ".concat(this.name, ", Age: ").concat(this.age));
    };
    return Student;
}());
var s1 = new Student("Bruce", 30);
s1.display();
