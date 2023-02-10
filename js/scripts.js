//User Interface Logic
const submitButton = document.querySelector("#submit");
const numberInput = document.querySelector("#number");
const resultDiv = document.querySelector("#result");
 
//Business Logic
submitButton.addEventListener("click", function () {
  const inputNumber = Number(numberInput.value);
  resultDiv.innerHTML = "";
  let resultArray = [];
 
  for (let i = 0; i <= inputNumber; i++) {
    let currentNumber = i.toString();
    if (currentNumber.includes("3")) {
      resultArray.push("Won't you be my neighbor?");
    } else if (currentNumber.includes("2")) {
      resultArray.push("Boop!");
    } else if (currentNumber.includes("1")) {
      resultArray.push("Beep!");
    } else {
      resultArray.push(currentNumber);
    }
  }

  resultArray.forEach(function (item) {
    let resultItem = document.createElement("p");
    resultItem.innerHTML = item;
    resultDiv.appendChild(resultItem);
  });
});