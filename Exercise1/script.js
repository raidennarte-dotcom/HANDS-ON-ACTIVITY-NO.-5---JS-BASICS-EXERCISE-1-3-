function calculate() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(n1) || isNaN(n2)) return;

  document.getElementById("sum").innerText = n1 + n2;
  document.getElementById("diff").innerText = n1 - n2;
  document.getElementById("prod").innerText = n1 * n2;
  document.getElementById("quot").innerText =
    n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
}

function clearCalc() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("sum").innerText = "";
  document.getElementById("diff").innerText = "";
  document.getElementById("prod").innerText = "";
  document.getElementById("quot").innerText = "";
}
