function generateName() {
  const first = document.getElementById("firstName").value.trim();
  const middle = document.getElementById("middleName").value.trim();
  const last = document.getElementById("lastName").value.trim();

  // Dynamically builds array and drops blank names (e.g. if no middle name)
  const nameArray = [first, middle, last].filter(Boolean);
  document.getElementById("fullName").innerText = nameArray.join(" ");
}

function clearFields() {
  document.getElementById("firstName").value = "";
  document.getElementById("middleName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("fullName").innerText = "";
}
