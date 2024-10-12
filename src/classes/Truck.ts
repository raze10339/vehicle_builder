// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;
  // TODO: Declare properties of the Truck class
  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[], towingCapacity: number) {
    super();

    if (!wheels.length) {
      const wheel1 = new Wheel();
      const wheel2 = new Wheel();
      const wheel3 = new Wheel();
      const wheel4 = new Wheel();
      wheels.push(wheel1, wheel2, wheel3, wheel4);
    }

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    this.towingCapacity = towingCapacity;
  
  
  }
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)

  // TODO: Create a constructor that accepts the properties of the Truck class
  // TODO: The constructor should call the constructor of the parent class, Vehicle
  // TODO: The constructor should initialize the properties of the Truck class
  // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not

  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // TODO: Get the make an model of the vehicle if it exists
    if (vehicle.make && vehicle.model) {
      if (vehicle.weight <= this.towingCapacity) {
        console.log(`${vehicle.make} ${vehicle.model}'The vehicle is being towed'`);
      } else {
        console.log(`The ${vehicle.make} ${vehicle.make}is too heavy to be towed.` );
      }
    }
  }
  // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
  // TODO: If it is, log that the vehicle is being towed
  // TODO: If it is not, log that the vehicle is too heavy to be towed


// TODO: Override the printDetails method from the Vehicle class
override printDetails(): void {

  super.printDetails();
  console.log(`VIN: ${this.vin}`);
  console.log(` Make: ${this.make}`);
  console.log(`Model: ${this.model}`);
  console.log(`Year: ${this.year}`); 
  console.log(`Weight: ${this.weight}`); 
  console.log(`Top Speed: ${this.topSpeed}`);
  console.log(`Color: ${this.color}`); 
  console.log(`towingCapacity: ${this.towingCapacity}`);
 console.log(`Wheels: ${this.wheels.length}`);
} 
}
// TODO: The method should call the printDetails method of the parent class
// TODO: The method should log the details of the Truck
// TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels


const f150 = new Truck('1FTFW1ET1EKF51234', 'Red', 'Ford', 'F-150', 2021, 4500, 120, [new Wheel(), new Wheel(), new Wheel(), new Wheel()], 13000);
const camry = new Car('4T1BF1FK7GU123456', 'Blue', 'Toyota', 'Camry', 2020, 3300, 115, [new Wheel(), new Wheel(), new Wheel(), new Wheel()]);
f150.tow(camry);

// Export the Truck class as the default export
export default Truck;
