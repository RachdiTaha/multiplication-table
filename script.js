function createTable() {
  let inputValue = document.getElementById("input").value;
  let tableau = document.getElementById("tableau");
  let reset = document.getElementById("reset");
  let text = document.getElementById("input");

  if (inputValue <= 0 || inputValue > 1000) {
    alert("veuillez saisir un nombre entre 1 et 1000");
  } else {
    tableau.innerText = " ";
    tableau.style.display = "block";
    for (i = 0; i <= 10; i++) {
      let resultat = `${inputValue} * ${i} = ${inputValue * i} <hr>`;
      tableau.innerHTML += resultat;
    }
    text.value = " ";
    reset.style.display = "block";
  }
}
const resetTableau = () => {
  let tableau = document.getElementById("tableau");
  let reset = document.getElementById("reset");
  tableau.style.display = "none";
  reset.style.display = "none";
};
