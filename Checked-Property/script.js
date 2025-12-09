const subscribe = document.getElementById("subCheckbox");
const visa = document.getElementById("visaBtn");
const mastercard = document.getElementById("mastercardBtn");
const paypal = document.getElementById("paypalBtn");
const submitBtn = document.getElementById("submitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submitBtn.onclick = function () {
  if (subscribe.checked) {
    subResult.innerHTML = "You're subscribed";
  } else {
    subResult.innerHTML = "You aren't subscribed";
  }

  if (visa.checked) {
    paymentResult.innerHTML = "You're paying with Visa";
  } else if (mastercard.checked) {
    paymentResult.innerHTML = "You're paying with Mastercard";
  } else if (paypal.checked) {
    paymentResult.innerHTML = "You're paying with PayPal";
  } else {
    paymentResult.innerHTML = "Select a payment method";
  }
};
