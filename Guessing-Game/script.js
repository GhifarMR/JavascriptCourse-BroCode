const minNum = 1;
const maxNum = 2;
const answer = Math.floor(Math.random() * maxNum) + minNum;

let attempts;
let guess;
let running;

document.getElementById("play").onclick = function () {
  running = true;
  attempts = 0;
  while (running) {
    guess = prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
      alert("Please enter a valid number");
    } else if (guess < minNum || guess > maxNum) {
      alert("Please enter a valid number");
    } else {
      attempts++;
      if (guess < answer) {
        alert("Too LOW! please try again!");
      } else if (guess > answer) {
        alert("Too HIGH! please try again!");
      } else {
        alert(
          `Correct! the answer is ${answer}. It took you ${attempts} attempts`
        );
        running = false;
        document.getElementById("answer").innerHTML = `The answer is ${answer}`;
        document.getElementById(
          "attempts"
        ).innerHTML = `It took you ${attempts} attempts`;
      }
    }
  }
};
