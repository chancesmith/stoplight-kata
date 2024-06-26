// This orginial code comes from Christian Clausen of Five Lines of Code

enum TrafficLight {
  RED,
  YELLOW,
  GREEN,
}

const car = {
  drive: () => console.log("Car is driving"),
  stop: () => console.log("Car is stopped"),
};

const CYCLE = [TrafficLight.RED, TrafficLight.GREEN, TrafficLight.YELLOW];

function updateCarForLight(current: TrafficLight) {
  if (current === TrafficLight.RED) car.stop();
  else car.drive();
}
