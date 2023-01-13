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
    function Person() {
    }
    Person.prototype.walk = function () {
        return this.name + " walks";
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(c, m) {
        var _this = _super.call(this) || this;
        _this.course = c;
        _this.marks = m;
        return _this;
    }
    Student.prototype.walk = function () {
        // return this.name + " has " + this.marks + " marks and walks!!!!";
        return "";
    };
    return Student;
}(Person));
// var s2 = new Person();
// var s3: Person = new Student("oop", 200);
// console.log(s3.walk());
var p1 = new Person();
p1.name = "Nouman";
console.log(p1);
var s1 = new Student("OOP", 100);
// s1.name = "khubaib";
console.log(typeof s1.walk());
