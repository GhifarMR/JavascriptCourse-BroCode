const myButton = document.getElementById("myButton");
const image = document.getElementById("myImg");

myButton.addEventListener("click", (event) => {
  if (myButton.textContent === "Hide") {
    image.style.visibility = "hidden";
    myButton.textContent = "Show";
  } else if (myButton.textContent === "Show") {
    image.style.visibility = "visible";
    myButton.textContent = "Hide";
  }
});
