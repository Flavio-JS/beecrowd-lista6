var input = require("fs").readFileSync("1115/stdin", "utf8");
var lines = input.split("\n");

let cordenadas = [];
let cordenadaX = 0;
let cordenadaY = 0;
let repetir = true;

while (repetir) {
  cordenadas[0] = lines.shift();
  cordenadaX = parseFloat(cordenadas[0].split(" ").shift());
  cordenadaY = parseFloat(cordenadas[0].split(" ").pop());

  if (cordenadaX == 0 || cordenadaY == 0) {
    repetir = false;
  } else {
    if (cordenadaX > 0 && cordenadaY > 0) {
      console.log("primeiro");
    } else if (cordenadaX > 0 && cordenadaY < 0) {
      console.log("quarto");
    } else if (cordenadaX < 0 && cordenadaY < 0) {
      console.log("terceiro");
    } else {
      console.log("segundo");
    }
  }
}
