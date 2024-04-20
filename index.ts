// This orginial code comes from Christian Clausen of Five Lines of Code

enum RawTrafficLight {
  RED,
  YELLOW,
  GREEN,
}

interface TrafficLight {
  handleMotion(): void;
}

class Red implements TrafficLight {
  handleMotion() {
    car.stop();
  }
}

class Yellow implements TrafficLight {
  handleMotion() {
    car.drive();
  }
}

class Green implements TrafficLight {
  handleMotion() {
    car.drive();
  }
}

const car = {
  drive: () => console.log("Car is driving"),
  stop: () => console.log("Car is stopped"),
};

const CYCLE = [new Red(), new Green(), new Yellow()];

function updateCarForLight(current: TrafficLight) {
  current.handleMotion();
}
