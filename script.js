function createTable() {
  let inputValue = document.getElementById("input").value;
  let tableau = document.getElementById("tableau");
  let reset = document.getElementById("reset");
  let text = document.getElementById("input");

  if (inputValue <= 0 || inputValue > 1000) {
    alert("veuillez saisir un nombre entre 1 et 1000");
  }
}
