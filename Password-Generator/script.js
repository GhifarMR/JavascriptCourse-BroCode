function generatePassword(
  passwordLength,
  includeLowerCase,
  includeUpperCase,
  includeNumber,
  includeSymbol
) {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "1234567890";
  const symbol = "!@#$%^&*()_+-=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowerCase ? lowerCase : "";
  allowedChars += includeUpperCase ? upperCase : "";
  allowedChars += includeNumber ? number : "";
  allowedChars += includeSymbol ? symbol : "";

  if (passwordLength <= 0) {
    return "Password length must be at least 1";
  }
  if (allowedChars.length === 0) {
    return "At least 1 set of character needs to be selected";
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

function getPassword() {
  const passwordLength = Number(document.getElementById("inputLength").value);
  const includeLowerCase = document.getElementById("setLower").checked ? true : false;
  const includeUpperCase = document.getElementById("setUpper").checked ? true : false;
  const includeNumber = document.getElementById("setNumber").checked ? true : false;
  const includeSymbol = document.getElementById("setSymbol").checked ? true : false;

  const password = generatePassword(
    passwordLength,
    includeLowerCase,
    includeUpperCase,
    includeNumber,
    includeSymbol
  );

  document.getElementById("result").innerHTML = `${password}`;
}

function copyResult() {
  const result = document.getElementById("result");
  const text = result.textContent;

  navigator.clipboard.writeText(text).then(() => {
    result.style.color = "green";
    result.textContent = "Copied!";

    setTimeout(() => {
      result.style.color = "";
      result.textContent = text;
    }, 800);
  });
}
