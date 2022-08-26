var aa = /** @class */ (function () {
    function aa(n) {
        this.name = "";
        this.age = 0;
        this.name = n;
    }
    aa.prototype.getName = function () {
        console.log(this.name);
    };
    return aa;
}());
var bb = /** @class */ (function () {
    function bb(n, a) {
        this.name = "";
        this.age = 0;
        this.name = n;
        this.age = a;
    }
    bb.prototype.getName = function () {
        console.log(this.name);
    };
    bb.prototype.getAge = function () {
        return this.age;
    };
    return bb;
}());
var aobj = new aa("Khubaib");
aobj.getName();
var bobj = new bb("Nouman", 23);
bobj.getName();
console.log(bobj.getAge());
