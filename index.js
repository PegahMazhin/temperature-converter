let FahrenheitTemp = prompt("Enter your Fahrenheit temperature to convert to celsius");
FahrenheitTemp = Number(FahrenheitTemp)
const convertToCelsius = (FahrenheitTemp) => {
let celsiusTemp = (5/9) * (FahrenheitTemp-32);
alert(`it is ${celsiusTemp}`);
}
convertToCelsius(FahrenheitTemp);

const describeTemperature = (celsiusTemp) => {
  if (celsiusTemp <32) {
    alert(`very cold`);
  } else if (32<=celsiusTemp<64) {
    alert(`cold`);
  } else if (64<=celsiusTemp<86) {
    alert (`warm`);
  } else if (86<=celsiusTemp<100) {
    alert (`hot`);
  } else if (celsiusTemp>= 100) {
    addEventListenerlert(`very hot`);
  }
}
describeTemperature(celsiusTemp);