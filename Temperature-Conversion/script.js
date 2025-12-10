const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(value) {
  value = textBox.value;

  if (toFahrenheit.checked) {
    temp = value * (9 / 5) + 32;
    result.innerHTML = `${temp.toFixed(1)} °F`;
  } else if (toCelsius.checked) {
    temp = (value - 32) * (5 / 9);
    result.innerHTML = `${temp.toFixed(1)} °C`;
  } else {
    result.innerHTML = "Select a unit";
  }
}
