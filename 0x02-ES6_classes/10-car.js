export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this.motor = motor;
    this._color = color;
  }

  cloneCar() {
    const Constr = this.constructor;
    return new Constr();
  }
}
