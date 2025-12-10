const inputNumber = document.getElementById("inputNumber");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

function checkNumber(num) {
    return (num % 2 === 0) ? "Even" : "Odd";
}

submitBtn.onclick = function() {
    num = inputNumber.value;
    result.innerHTML = `${num} is ${checkNumber(num)}`;
}

