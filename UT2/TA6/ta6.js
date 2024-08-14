function convertToCelsius(fahrenheit) {
  const x = (fahrenheit - 32) * 5 / 9;
  return Math.round(x);
}

function convertToFahrenheit(celsius) {
  const x = celsius * 9 / 5 + 32;
  return Math.round(x);
}

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(0));