const myBox = document.getElementById("myBox");
const mybutton = document.querySelector("myButton");

myButton.addEventListener("click", (event) => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "OUCH! 😟"
});

myButton.addEventListener("mouseover", (event) => {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = "Dont do it 😏"
});

myButton.addEventListener("mouseout", (event) => {
  myBox.style.backgroundColor = "lightGreen";
  myBox.textContent = "Click Me 😃"
});