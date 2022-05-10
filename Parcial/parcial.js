const input = document.getElementById("input");

function calc() {
  const content = input.value;

  const val = content.split(" ");
  let ver = true;

  (principal = 0), (secondary = 0);
  for (i = 0; i < val.length; i++) {
    for (j = 0; j < val.length; j++) {
      // Condition for principal
      // diagonal
      if (i == j) principal += parseInt(val[i][j]);

      // Condition for secondary
      // diagonal
      if (i + j == val.length - 1) secondary += parseInt(val[i][j]);
    }
  }
  const abs = Math.abs(principal - secondary);

  console.log(principal);
  console.log(secondary);

  alert("El resultado es " + abs);
}
