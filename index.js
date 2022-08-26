var human = /** @class */ (function () {
    function human() {
        this.name = "";
        this.age = 0;
    }
    human.prototype.setName = function (n) {
        if (n === void 0) { n = ""; }
        this.name = n;
    };
    human.prototype.setAge = function (a) {
        if (a === void 0) { a = 0; }
        this.age = a;
    };
    human.prototype.getName = function () {
        return this.name;
    };
    human.prototype.getAge = function () {
        return this.age;
    };
    return human;
}());
var ali = new human();
ali.setName("Ali");
ali.setAge(23);
console.log("Name: " + ali.getName() + " Age: " + ali.getAge());
