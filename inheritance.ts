class Vehicle {
  public vehiclePrice(price: string) {
    console.log("Price is", price);
  }
  public vehicleModel(model: string) {
    console.log("Model is", model);
  }
  public vehicleCOlor(color: string) {
    console.log("color is", color);
  }
}
class Car extends Vehicle {
  carType(type: string) {
    console.log("Car Type is", type);
  }
}
class sportsCar extends Car {
  maxSpeed(speed) {
    console.log("Max Speed is", speed);
  }
}

let sc: sportsCar = new sportsCar();
sc.carType("Sports Car");
sc.maxSpeed("220/H");
sc.vehicleCOlor("Blue");
sc.vehicleModel("some model");
sc.vehiclePrice("80000000");
