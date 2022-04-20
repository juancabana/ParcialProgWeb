const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (x = 0; x < matriz.length; x++) {
  for (y = 0; y < matriz[x].length; y++) {
    // Acceder al elemento
  }
}

for (x = 0; x < matriz.length; x++) {
  text = "";
  for (y = 0; y < matriz[x].length; y++) {
    text += matriz[x][y] + "\t";
  }
  console.log(text);
}

console.log("-----");


var diag1 = 0;
var diag2 = 0;


for (x = 0; x < matriz.length; x++) {
  text = "";
  for (y = 0; y < matriz[x].length; y++) {
    if (y == x) {
        diag1 = diag1 + matriz[y][x]
    }    
    text += matriz[x][y] + "\t";
  }
  console.log(text);
}


for (x = 0; x < matriz.length; x++) {
  text2 = "";
  for (y = 0; y < matriz[x].length; y++) {
    if (x == y) {
        diag2 = diag2 + matriz[y][x]
    }    
  }
  console.log(text2);
}

console.log(diag1)
console.log(diag2)
