let countNumber = 0;

function decrease() {
    countNumber--;
    document.getElementById("result").innerText = countNumber;
}

function reset() {
    countNumber = 0;
    document.getElementById("result").innerText = countNumber;
}

function increase() {
    countNumber++;
    document.getElementById("result").innerText = countNumber;
}

