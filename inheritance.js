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
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.vehiclePrice = function (price) {
        console.log("Price is", price);
    };
    Vehicle.prototype.vehicleModel = function (model) {
        console.log("Model is", model);
    };
    Vehicle.prototype.vehicleCOlor = function (color) {
        console.log("color is", color);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.carType = function (type) {
        console.log("Car Type is", type);
    };
    return Car;
}(Vehicle));
var sportsCar = /** @class */ (function (_super) {
    __extends(sportsCar, _super);
    function sportsCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    sportsCar.prototype.maxSpeed = function (speed) {
        console.log("Max Speed is", speed);
    };
    return sportsCar;
}(Car));
var sc = new sportsCar();
sc.carType("Sports Car");
sc.maxSpeed(220);
sc.vehicleCOlor("Blue");
sc.vehicleModel("some model");
sc.vehiclePrice("80000000");
