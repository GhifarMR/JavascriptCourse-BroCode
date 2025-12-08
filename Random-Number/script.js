document.getElementById("myButton").onclick = function() {
    const min = 1;
    const max = 6;

    let randomNum1 = Math.floor(Math.random() * max) + min;
    let randomNum2 = Math.floor(Math.random() * max) + min;
    let randomNum3 = Math.floor(Math.random() * max) + min;

    let label1 = document.getElementById("label1");
    let label2 = document.getElementById("label2");
    let label3 = document.getElementById("label3");

    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;

}