var Emp = /** @class */ (function () {
    function Emp(id, name) {
        this.id = id;
        this.name = name;
    }
    // accessible outside the class
    Emp.prototype.display = function () {
        document.write("<p>Id: ".concat(this.id, ", Name: ").concat(this.name, "</p>"));
    };
    Emp.prototype.getId = function () {
        return this.id;
    };
    Emp.prototype.setName = function (name) {
        this.name = name;
    };
    return Emp;
}());
var e1 = new Emp(100, "Rajesh");
var e2 = new Emp(200, "Ravi");
e1.display();
e2.display();
