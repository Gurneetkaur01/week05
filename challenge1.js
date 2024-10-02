const getCelsius = (fahrenheit) => ((fahrenheit - 32) * 5 / 9);

const fahrenheitInput = prompt("Enter temperature in Fahrenheit:");
const celsius = getCelsius(fahrenheitInput);

console.log(`The temperature is ${celsius} \xB0C`);
