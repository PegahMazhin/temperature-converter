const userInput = Number(prompt(`Enter your Fahrenheit temperature`));

const convertToCelsius = (fahrenheitTemp) =>{
const celsiustemp = (fahrenheitTemp - 32) * 5/9
return celsiustemp;
}

const describeTemperature = (fahrenheitTemp) =>{
 if (fahrenheitTemp < 32) {
  return "very cold";
 }
 else if (fahrenheitTemp < 64) {
  return " cold";
 }
 else if (fahrenheitTemp < 86) {
  return "warm";
 }
 else if (fahrenheitTemp < 100) {
  return "hot";
 }
 else if(fahrenheitTemp >= 100) {
  return `very hot`;
 }
}

alert(`${userInput}F is ${convertToCelsius(userInput)}C and it feels ${describeTemperature(userInput)} `)

