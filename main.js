
   
class Temperature {
  constructor(temperature, scale) {
    this.temperature = temperature;
    this.scale = scale;
  }

  toCelsius() {
    return (5 / 9) * (this.temperature - 32);
  }

  toFahrenheit() {
    return (this.temperature * 9.0) / 5 + 32;
  }
  toKelvin() {
    return this.temperature + 273.15;
  }
}

const temperatureScale = {
  c: "Celsius",
  f: "Fahrenheit",
  k: "Kelvin",
};

const temp = new Temperature(25, temperatureScale.f);
console.log(temp);
console.log(temp.toKelvin());

//   I)Lib + Package
// val t = new Temperature(5.25, TemperatureScale.Celcius); //1. Constructor

// t.ToF(); //2
// t.ToC(); //3
// t.ToK(); //4
