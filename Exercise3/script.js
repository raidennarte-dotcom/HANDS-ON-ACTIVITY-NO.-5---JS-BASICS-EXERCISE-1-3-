let numbersArray = [];

function insertNumber() {
  const inputEl = document.getElementById("numInput");
  const value = parseFloat(inputEl.value);

  if (isNaN(value)) return;

  numbersArray.push(value);
  inputEl.value = ""; // Reset input field
  inputEl.focus(); // Focus back for next input
  updateDisplay();
}

function deleteAll() {
  numbersArray = [];
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("numbersList").innerHTML = numbersArray.join("<br>");

  if (numbersArray.length === 0) {
    document.getElementById("sum").innerText = "";
    document.getElementById("highest").innerText = "";
    document.getElementById("lowest").innerText = "";
    return;
  }

  const sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
  const highest = Math.max(...numbersArray);
  const lowest = Math.min(...numbersArray);

  document.getElementById("sum").innerText = sum;
  document.getElementById("highest").innerText = highest;
  document.getElementById("lowest").innerText = lowest;
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("numInput")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") insertNumber();
    });
});
